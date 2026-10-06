"""Minimal stand-in for piper-tts (PyPI is not reachable here): runs the voice with onnxruntime."""
import json
from dataclasses import dataclass
from types import SimpleNamespace
import numpy as np
import onnxruntime as ort

@dataclass
class SynthesisConfig:
    length_scale: float = 1.0
    noise_scale: float = 0.667
    noise_w_scale: float = 0.8
    normalize_audio: bool = False

class PiperVoice:
    def __init__(self, model, config):
        self.session = ort.InferenceSession(model, providers=["CPUExecutionProvider"])
        cfg = json.load(open(config, encoding="utf-8"))
        self.id_map = cfg["phoneme_id_map"]
        self.config = SimpleNamespace(sample_rate=cfg["audio"]["sample_rate"])
    @classmethod
    def load(cls, model):
        return cls(model, str(model) + ".json")
    def phonemes_to_ids(self, phonemes):
        m = self.id_map
        ids = [*m["^"], *m["_"]]
        for p in phonemes:
            if p in m:
                ids += m[p] + m["_"]
        return ids + m["$"]
    def phoneme_ids_to_audio(self, ids, syn):
        x = np.array([ids], dtype=np.int64)
        audio = self.session.run(None, {
            "input": x, "input_lengths": np.array([x.shape[1]], dtype=np.int64),
            "scales": np.array([syn.noise_scale, syn.length_scale, syn.noise_w_scale], dtype=np.float32)})[0]
        return audio.squeeze()
