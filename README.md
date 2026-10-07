# Karolinos mankštos planas

Statinė svetainė su namų mankštos planu: 10 pratimų, laikmatis, kuris pats veda per treniruotę, instrukcijos, dažnos klaidos ir YouTube video.

## Failai

- `index.html` – puslapis
- `css/style.css` – stiliai (šviesi ir tamsi tema, prisitaiko prie telefono)
- `js/app.js` – pratimų sąrašas (`EX` masyvas viršuje) ir laikmatis. Prieš kiekvieną pratimą 30 s (`PREP`) rodoma jo animacija (arba YouTube video, jei pasirinkta), ji lieka rodoma, kol darai serijas.
- `js/voice.js` – lietuviškas balsas (įrašytos frazės iš `audio/`, atsarginis – naršyklės kalbos sintezė) ir kiekvieno pratimo ritmo nurodymai (`VOICE`): ką ir po kiek sekundžių pasakyti. Trukmės automatiškai pritaikomos prie serijos ilgio.
- `js/anim.js` – schematinės pratimų animacijos (SVG). Kiekvienas pratimas `EX` masyve nurodo savo animaciją lauku `anim`, o pozos aprašytos `DEF` objekte sąnarių taškais: `[poza, perėjimo ms, laikymo ms, užuomina, įtampa 0–1]`. `FOCUS` nurodo, kuri kūno vieta paryškinama (dirbantys raumenys) ir kaip ji pavadinta po animacija; spalvos – CSS kintamieji `--fig-*`.

Pabaigus treniruotę atsiveria trumpas įsivertinimas (sunkumas, savijauta, skausmas, pastabos); treniruotė pažymima atlikta tik jį išsaugojus. Įrašus galima peržiūrėti laikmačio skiltyje „Mano įrašai“ ir nukopijuoti tekstu kineziterapeutui.

Savaitės planas – `WEEK` masyvas `js/app.js` faile (kurią dieną visa treniruotė, kurią lengva diena). Pasirinktas lygis, balso nustatymas ir atliktų treniruočių žurnalas saugomi naršyklės `localStorage` (raktai `karolina-level`, `karolina-voice`, `karolina-log`), todėl skaitliukas „Šią savaitę: X/4“ veikia tik tame pačiame įrenginyje ir naršyklėje.

Pratimus, kartojimus ar trukmes keisk `js/app.js` faile, `EX` masyve. `secs` yra vienos serijos trukmė sekundėmis `[1 lygis, 2 lygis]`, `sets` – serijų skaičius, `rest: true` – pratimas siūlomas poilsio dienoms. Bendra trukmė (~24/~36 min.) ir poilsio dienų sąrašas puslapyje sugeneruojami iš `EX` automatiškai.

## Paskelbimas per GitHub Pages

1. Įkelk visus šio aplanko failus į repozitorijos šaknį (arba `docs/` aplanką).
2. GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, pasirink `main` ir `/ (root)` (arba `/docs`).
3. Po minutės svetainė bus adresu `https://<vartotojas>.github.io/<repozitorija>/`.

Jokio kompiliavimo nereikia. Lokaliai galima tiesiog atidaryti `index.html` naršyklėje.

> Tai bendros rekomendacijos, ne medicininė konsultacija. Planą verta parodyti kineziterapeutui.

## Balsas

Paspaudus „Pradėkime“ lietuviškas balsas pasisveikina, papasakoja apie mankštą ir veda per visus pratimus: pasako, kokį pratimą daryti ir kaip atsigulti, kada įkvėpti, kelti, laikyti, grįžti ar keisti pusę.

Ilgi aprašymai (įžanga apie mankštos tikslą ir kiekvieno pratimo žingsniai) sakomi tik tol, kol bus išklausyti iki galo. Vėliau balsas pasako tik pratimo pavadinimą ir pagrindinį nurodymą. Norint vėl išgirsti visą aprašymą, kol balsas jį trumpai sako, reikia paspausti „Atgal“. Išklausyti aprašymai įsimenami naršyklėje (`localStorage` raktas `karolina-heard`); jį ištrynus, aprašymai vėl bus sakomi pilnai.

Visos frazės iš anksto įrašytos į `audio/*.mp3` (~12 MB; iš anksto parsiunčiamos tik trumpos, ~3 MB), todėl balsas skamba vienodai visuose įrenginiuose, ir iPhone, kuriame lietuviško balso nėra. Failo pavadinimas – frazės teksto maiša, sąrašas – `audio/frazes.js`. Jei kurios nors frazės įrašo nėra, ji sakoma naršyklės kalbos sinteze (jei įrenginyje yra lietuviškas balsas).

Balsas – [„Reginutė“ (lt_LT-reginute1-medium)](https://huggingface.co/RobertasTa/lt_LT-reginute1-medium), Piper/VITS modelis, apmokytas Vilniaus universiteto LIEPA korpusu, licencija CC BY 4.0. Meta MMS lietuvių kalbos sintezės modelio neturi (yra tik latvių), todėl naudojamas šis.

### Įrašų atnaujinimas

Pakeitus pratimus ar balso tekstus (`EX`, `VOICE`, įžangą), įrašus reikia sugeneruoti iš naujo:

```
python3 tools/garsas.py
```

Skriptas per `tools/frazes.js` (paleidžia tikrus `js/*.js` su netikru DOM) surenka visas frazes, kurias svetainė gali pasakyti, sugeneruoja trūkstamas, ištrina nebereikalingas ir atnaujina `audio/frazes.js`. `--visi` perrašo visas. Reikia `python3` su `numpy` ir `onnxruntime`, `espeak-ng`, `ffmpeg` ir `node`; modelis (~70 MB) parsiunčiamas į `tools/modelis/` pirmą kartą paleidus. Netaisyklingai perskaitomi skaičiai ir ženklai (laipsniai, intervalai) taisomi `TARIMAS` sąraše `tools/garsas.py` faile.

## Garmin duomenys

Garmin oficialaus API asmeniniam naudojimui neduoda, todėl naudojama neoficiali, aktyviai prižiūrima biblioteka [python-garminconnect](https://github.com/cyberjunky/python-garminconnect). GitHub Actions (`.github/workflows/garmin.yml`) tris kartus per dieną paleidžia `tools/garmin_sync.py`: šis prisijungia prie Garmin Connect ir parsiunčia miegą (trukmę ir įvertį), ramybės pulsą, Body Battery, HRV, stresą ir žingsnius. Pirmą kartą parsiunčiama 30 dienų, vėliau – paskutinės 4.

Repozitorija vieša, todėl duomenys (`garmin/duomenys.enc`) ir prisijungimo žetonas (`garmin/zetonas.enc`) saugomi tik užšifruoti (PBKDF2-SHA256 + AES-256-GCM), o į Actions žurnalą nerašomi jokie skaičiai. Svetainė (`js/health.js`) duomenis iššifruoja tik telefone raktu, kurį įvedi vieną kartą.

### Įjungimas

1. Mac'e atidaryk „Terminal“ ir sugeneruok raktą: `openssl rand -base64 24`.
2. GitHub repozitorijoje: **Settings → Secrets and variables → Actions → New repository secret**. Sukurk tris:
   - `GARMIN_EMAIL` – Garmin Connect el. paštas;
   - `GARMIN_PASSWORD` – Garmin Connect slaptažodis;
   - `DUOMENU_RAKTAS` – 1 žingsnyje sugeneruotas raktas.
3. **Actions → Garmin duomenys → Run workflow**. Po minutės kitos repozitorijoje atsiras `garmin/duomenys.enc`.
4. Telefone atidaryk svetainę, paspausk „Įvesti Garmin raktą“ ir įklijuok tą patį raktą.

Kad duomenys atsinaujintų kiekvieną kartą atidarius svetainę, telefone svetainėje paspausk „Atnaujinti kaskart atidarius“ ir įklijuok GitHub fine-grained raktą (tik šiai repozitorijai; leidimai: Actions – Read and write, Contents – Read-only). Tada svetainė atidarius paleidžia parsisiuntimą (tik šiandien ir vakar) ir po ~1–2 min. parodo naujus duomenis; dažniau nei kas 10 min. nepaleidžia.

Jei Garmin prisijungiant paprašo kodo iš el. pašto, parsisiuntimas parašo komentarą GitHub issue „Garmin kodas“ (gausi pranešimą) ir iki 10 min. laukia: atsakyk komentaru, kuriame būtų tik tas kodas. Kodas panaudojamas, komentaras ištrinamas, o vėliau jungiamasi išsaugotu žetonu, todėl kodo nebereikia, kol Garmin jo vėl nepaprašys.

### Ką svetainė su jais daro

- **Pasiruošimo kortelė** pasisveikinimo ekrane: animuotas žiedas su balu 0–100 (miegas 30 %, Body Battery 30 %, HRV 20 %, ramybės pulsas 20 %, lyginant su ankstesnių 14 dienų mediana), plytelės su pokyčiu nuo įprasto; paspaudus plytelę – 14 dienų grafikas.
- **Prisitaikanti treniruotė:** kai balas žemesnis nei 45, automatiškai įjungiama lengvesnė versija (viena serija mažiau, poilsis tarp serijų +10 s), balsas įžangoje pasako kodėl. Perjungti galima ranka mygtuku „Lengvesnė versija“.
- Kai balas 45–69, siūloma 1 lygis; kai bent 3 dienas iš eilės ≥ 70 ir pasirinktas 1 lygis – pasiūlymas pabandyti 2 lygį.
- Vakare (nuo 17 val.), jei Garmin vidutinis stresas ≥ 40, siūlomas trumpas atsipalaidavimas (diafragminis kvėpavimas ir vaiko poza).
- Lengvą dieną pasivaikščiojimas laikomas atliktu, kai žingsnių yra bent 7 000.
- Išsaugant įsivertinimą prie įrašo prideda tos dienos Garmin duomenis ir pasiruošimo balą, o „Kopijuoti įrašus“ prideda ir visų dienų Garmin duomenis kineziterapeutui.

Ribas galima keisti `js/health.js` viršuje (`SLEEP_LOW`, `BB_LOW`, `RHR_UP`, `WALK_STEPS`).

Atsarginis kelias be GitHub Actions – iPhone „Shortcuts“, atidarantis svetainę su nuoroda `…/#zingsniai=8400&miegas=7.2&pulsas=58` (duomenys iš Apple Health). Abu šaltiniai sujungiami, Garmin duomenys svarbesni.
