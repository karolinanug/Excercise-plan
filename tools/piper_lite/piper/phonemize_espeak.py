"""espeak-ng through its command line (the voice's training data was phonemized with the CLI too)."""
import subprocess, threading
ESPEAK_DATA_DIR = None
ESPEAK_LOCK = threading.Lock()
class EspeakPhonemizer:
    def __init__(self, data_dir=None):
        pass
    def phonemize(self, voice, text):
        out = subprocess.run(["espeak-ng", "-q", "--ipa", "-v", voice, text], capture_output=True, text=True, check=True).stdout
        return [list(line.strip()) for line in out.splitlines() if line.strip()]
