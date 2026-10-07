# Karolinos mankštos planas

Statinė svetainė su namų mankštos planu: 21 pratimas (paslankumas, pilvas, sėdmenys, tempimas), laikmatis, kuris pats veda per treniruotę, instrukcijos, dažnos klaidos ir YouTube video.

## Ekranai

Svetainė veikia kaip programėlė su apatine juosta:

- **Šiandien** – pasiruošimo kortelė (Garmin balas, „Praeita para“ išskleidžiama), šiandienos treniruotė su mygtuku „Pradėti“; pratimų sąrašas ir „Keisti treniruotę“ (tipas, lygis, lengvesnė versija, atsipalaidavimas) paslėpti po išskleidžiamais skyreliais. Atlikus treniruotę rodomas tik pagyrimas.
- **Pažanga** – serijos ir rekordai, ši savaitė, Garmin tendencijos (14 dienų grafikai), įrašai ir jų kopijavimas kineziterapeutui.
- **Pratimai** – visi pratimai su animacijomis, kaip veikia programa, saugumas, video.

Treniruotė rodoma per visą ekraną, be apatinės juostos.

## Failai

- `index.html` – puslapis
- `css/style.css` – stiliai (šviesi ir tamsi tema, prisitaiko prie telefono)
- `js/app.js` – pratimų sąrašas (`EX` masyvas viršuje), dienų ratas ir laikmatis. Pasiruošimo ir darbo metu rodoma pratimo animacija.
- `js/voice.js` – lietuviškas balsas (įrašytos frazės iš `audio/`, atsarginis – naršyklės kalbos sintezė) ir kiekvieno pratimo ritmo nurodymai (`VOICE`): ką ir po kiek sekundžių pasakyti. Trukmės automatiškai pritaikomos prie serijos ilgio.
- `js/anim.js` – schematinės pratimų animacijos (SVG). Kiekvienas pratimas `EX` masyve nurodo savo animaciją lauku `anim`, o pozos aprašytos `DEF` objekte sąnarių taškais: `[poza, perėjimo ms, laikymo ms, užuomina, įtampa 0–1]`. `FOCUS` nurodo, kuri kūno vieta paryškinama (dirbantys raumenys) ir kaip ji pavadinta po animacija; spalvos – CSS kintamieji `--fig-*`.

Pabaigus treniruotę atsiveria trumpas įsivertinimas (sunkumas, savijauta, skausmas, pastabos); treniruotė pažymima atlikta tik jį išsaugojus. Įrašus galima peržiūrėti laikmačio skiltyje „Mano įrašai“ ir nukopijuoti tekstu kineziterapeutui.

Pratimai paimti iš dviejų šaltinių: pradinio plano ir kineziterapeuto korekcinės programos pasvirusiam į priekį dubeniui (kineziterapija24.lt). Programos tekstai ir video į svetainę nekopijuoti (jie saugomi autorių teisių) – pratimai aprašyti savais žodžiais, animacijos nupieštos pačių.

**Dienų ratas.** Kiekviena treniruotė eina programos tvarka: kvėpavimas → paslankumas → stiprinimas → tempimas. Dienos akcentas keičiasi ratu: pilvo ir liemens diena (2 paslankumo, 4 pilvo, 2 tempimo pratimai), sėdmenų diena (2 + 4 sėdmenų + 2) ir atsigavimo diena (4 paslankumo + 4 tempimo). Paslankumo, sėdmenų ir tempimo pratimai parenkami rečiausiai darytieji per 14 dienų (žurnale saugoma, kurie pratimai daryti), kad per savaitę visi būtų atlikti panašiai dažnai. Kita stiprinimo diena – ta, kuri daryta seniau. Pagal Garmin: pasiruošimas žemiau 45 arba vakar įtempta diena – atsigavimo diena; 45–69 – stiprinimas lengvesnis (serija mažiau, poilsis +10 s). Be Garmin duomenų po dviejų stiprinimo dienų siūlomas atsigavimas. Dienos tipą galima pasirinkti ir pačiai (`DAYTYPE`, `sessionList`, `suggestPlan` faile `js/app.js`). Tikslas – 4 treniruotės per savaitę.

**Serijos.** Pasisveikinimo ekrane rodoma dienų serija (kiek dienų iš eilės kas nors daryta, įskaitant vakarinį atsipalaidavimą; šiandien dar nedaryta serijos nenutraukia), savaičių serija (kiek savaičių iš eilės pasiektas 4 treniruočių tikslas – poilsio dienos jos nenutraukia), kiek liko iki šios savaitės tikslo ir rekordai. Išsaugojus įsivertinimą, nauji pasiekimai (pirmoji treniruotė, 5/10/25… treniruočių, 3/7/14… dienų serija, savaitės tikslas, 2/4/8… savaitės iš eilės) parodomi ir įrašomi prie dienos. Mygtukas „Šiandien jau mankštinausi – pažymėti“ leidžia įrašyti treniruotę, padarytą be laikmačio (`streaks`, `milestones` faile `js/app.js`).

Pasirinktas lygis, balso nustatymas ir atliktų treniruočių žurnalas saugomi naršyklės `localStorage` (raktai `karolina-level`, `karolina-voice`, `karolina-log`), todėl skaitliukas „Šią savaitę: X/4“ veikia tik tame pačiame įrenginyje ir naršyklėje.

Pratimus, kartojimus ar trukmes keisk `js/app.js` faile, `EX` masyve. `secs` yra vienos serijos trukmė sekundėmis `[1 lygis, 2 lygis]`, `sets` – serijų skaičius, `group` – grupė (`breath`, `mob`, `core`, `glute`, `stretch`), `setup` – ką balsas pasako prieš seriją (kaip atsigulti), `video` neprivalomas. Pakeitus tekstus, įrašus reikia sugeneruoti iš naujo (`python3 tools/garsas.py`).

## Paskelbimas per GitHub Pages

1. Įkelk visus šio aplanko failus į repozitorijos šaknį (arba `docs/` aplanką).
2. GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, pasirink `main` ir `/ (root)` (arba `/docs`).
3. Po minutės svetainė bus adresu `https://<vartotojas>.github.io/<repozitorija>/`.

Jokio kompiliavimo nereikia. Lokaliai galima tiesiog atidaryti `index.html` naršyklėje.

> Tai bendros rekomendacijos, ne medicininė konsultacija. Planą verta parodyti kineziterapeutui.

## Balsas

Paspaudus „Pradėkime“ lietuviškas balsas pasisveikina, papasakoja apie mankštą ir veda per visus pratimus: pasako, kokį pratimą daryti ir kaip atsigulti, kada įkvėpti, kelti, laikyti, grįžti ar keisti pusę.

Prieš kiekvieną seriją (ir po kiekvieno poilsio) balsas pasako pratimo pavadinimą ir kaip atsigulti (laikmatis tuo metu stovi), tada 5 s atgalinis laikas pypsi kas sekundę ir balsas sako „Pradedam“; toliau veda ritmo nurodymais (įkvėpk, kelk, laikyk, grįžk…). Poilsio metu pasako, kas bus toliau („Poilsis. Atsikvėpk. Toliau – …“). Antrai pusei – „Dešinė pusė. Keisk koją.“ ir vėl 5 s. Ilga įžanga apie mankštos tikslą sakoma, kol bus išklausyta iki galo, vėliau – trumpa (`localStorage` raktas `karolina-heard`).

Visos frazės iš anksto įrašytos į `audio/*.mp3` (~6 MB; iš anksto parsiunčiamos tik trumpos), todėl balsas skamba vienodai visuose įrenginiuose, ir iPhone, kuriame lietuviško balso nėra. Failo pavadinimas – frazės teksto maiša, sąrašas – `audio/frazes.js`. Jei kurios nors frazės įrašo nėra, ji sakoma naršyklės kalbos sinteze (jei įrenginyje yra lietuviškas balsas).

Balsas – [„Reginutė“ (lt_LT-reginute1-medium)](https://huggingface.co/RobertasTa/lt_LT-reginute1-medium), Piper/VITS modelis, apmokytas Vilniaus universiteto LIEPA korpusu, licencija CC BY 4.0. Meta MMS lietuvių kalbos sintezės modelio neturi (yra tik latvių), todėl naudojamas šis.

### Įrašų atnaujinimas

Pakeitus pratimus ar balso tekstus (`EX`, `VOICE`, įžangą), įrašus reikia sugeneruoti iš naujo:

```
python3 tools/garsas.py
```

Skriptas per `tools/frazes.js` (paleidžia tikrus `js/*.js` su netikru DOM) surenka visas frazes, kurias svetainė gali pasakyti, sugeneruoja trūkstamas, ištrina nebereikalingas ir atnaujina `audio/frazes.js`. `--visi` perrašo visas. Reikia `python3` su `numpy` ir `onnxruntime`, `espeak-ng`, `ffmpeg` ir `node`; modelis (~70 MB) parsiunčiamas į `tools/modelis/` pirmą kartą paleidus. Netaisyklingai perskaitomi skaičiai ir ženklai (laipsniai, intervalai) taisomi `TARIMAS` sąraše `tools/garsas.py` faile.

## Garmin duomenys

Garmin oficialaus API asmeniniam naudojimui neduoda, todėl naudojama neoficiali, aktyviai prižiūrima biblioteka [python-garminconnect](https://github.com/cyberjunky/python-garminconnect). GitHub Actions (`.github/workflows/garmin.yml`) kartą per dieną ryte (vasarą 8:17, žiemą 7:17) paleidžia `tools/garmin_sync.py`: šis prisijungia prie Garmin Connect ir parsiunčia miegą (trukmę, įvertį, pradžią ir pabaigą), ramybės pulsą, Body Battery (ir praeitos paros kreivę kas 15 min.), HRV, stresą, aktyvumo minutes ir žingsnius. Rankiniu būdu: Actions → Garmin duomenys → Run workflow. Pirmą kartą parsiunčiama 30 dienų, vėliau – paskutinės 4.

Repozitorija vieša, todėl duomenys (`garmin/duomenys.enc`) ir prisijungimo žetonas (`garmin/zetonas.enc`) saugomi tik užšifruoti (PBKDF2-SHA256 + AES-256-GCM), o į Actions žurnalą nerašomi jokie skaičiai. Svetainė (`js/health.js`) duomenis iššifruoja tik telefone raktu, kurį įvedi vieną kartą.

### Įjungimas

1. Mac'e atidaryk „Terminal“ ir sugeneruok raktą: `openssl rand -base64 24`.
2. GitHub repozitorijoje: **Settings → Secrets and variables → Actions → New repository secret**. Sukurk tris:
   - `GARMIN_EMAIL` – Garmin Connect el. paštas;
   - `GARMIN_PASSWORD` – Garmin Connect slaptažodis;
   - `DUOMENU_RAKTAS` – 1 žingsnyje sugeneruotas raktas.
3. **Actions → Garmin duomenys → Run workflow**. Po minutės kitos repozitorijoje atsiras `garmin/duomenys.enc`.
4. Telefone atidaryk svetainę, paspausk „Įvesti Garmin raktą“ ir įklijuok tą patį raktą.

Jei Garmin prisijungiant paprašo kodo iš el. pašto, jis pasiimamas automatiškai iš atskiros Gmail dėžutės, skirtos tik Garmin kodams (Secrets `KODU_EMAIL` ir `KODU_SLAPTAZODIS` – Google programos slaptažodis). Į ją pagrindinis paštas Gmail filtru persiunčia laiškus nuo `alerts@account.garmin.com` su tema „Security Passcode“. Panaudotas laiškas ištrinamas. Jei dėžutė nenustatyta arba per 3 min. laiško nėra, parsisiuntimas parašo komentarą GitHub issue „Garmin kodas“ ir laukia, kol į jį atsakysi kodu. Vėliau jungiamasi išsaugotu žetonu, todėl kodo reikia retai.

### Ką svetainė su jais daro

- **Praeitos paros apžvalga:** Body Battery kreivė nuo vakar 0:00 iki ryto (miegas pažymėtas), vakar diena (žingsniai, aktyvumas, stresas, kiek nusilpo Body Battery; įvertinimas rami / aktyvi / įtempta) ir naktis (miegas, įvertis, kiek pasikrovė Body Battery, HRV; poilsis geras / pakankamas / per mažas) bei trumpas apibendrinimas.
- **Pasiruošimo kortelė** pasisveikinimo ekrane: animuotas žiedas su balu 0–100 (miegas 30 %, Body Battery 30 %, HRV 20 %, ramybės pulsas 20 %, lyginant su ankstesnių 14 dienų mediana), plytelės su pokyčiu nuo įprasto; paspaudus plytelę – 14 dienų grafikas.
- **Prisitaikanti treniruotė:** kai balas žemesnis nei 45, automatiškai įjungiama lengvesnė versija (viena serija mažiau, poilsis tarp serijų +10 s), balsas įžangoje pasako kodėl. Perjungti galima ranka mygtuku „Lengvesnė versija“.
- Kai balas 45–69, siūloma 1 lygis; kai bent 3 dienas iš eilės ≥ 70 ir pasirinktas 1 lygis – pasiūlymas pabandyti 2 lygį.
- Vakare (nuo 17 val.) siūlomas trumpas atsipalaidavimas (diafragminis kvėpavimas ir vaiko poza); jei vakar buvo įtempta diena, jis siūlomas visą dieną.
- Išsaugant įsivertinimą prie įrašo prideda tos dienos Garmin duomenis ir pasiruošimo balą, o „Kopijuoti įrašus“ prideda ir visų dienų Garmin duomenis kineziterapeutui.

Ribas galima keisti `js/health.js` viršuje (`SLEEP_LOW`, `BB_LOW`, `RHR_UP`, `WALK_STEPS`).

Atsarginis kelias be GitHub Actions – iPhone „Shortcuts“, atidarantis svetainę su nuoroda `…/#zingsniai=8400&miegas=7.2&pulsas=58` (duomenys iš Apple Health). Abu šaltiniai sujungiami, Garmin duomenys svarbesni.
