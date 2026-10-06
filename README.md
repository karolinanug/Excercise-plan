# Karolinos mankštos planas

Statinė svetainė su namų mankštos planu: 10 pratimų, laikmatis, kuris pats veda per treniruotę, instrukcijos, dažnos klaidos ir YouTube video.

## Failai

- `index.html` – puslapis
- `css/style.css` – stiliai (šviesi ir tamsi tema, prisitaiko prie telefono)
- `js/app.js` – pratimų sąrašas (`EX` masyvas viršuje) ir laikmatis. Prieš kiekvieną pratimą 30 s (`PREP`) rodoma jo animacija (arba YouTube video, jei pasirinkta), ji lieka rodoma, kol darai serijas.
- `js/voice.js` – lietuviškas balsas (naršyklės kalbos sintezė) ir kiekvieno pratimo ritmo nurodymai (`VOICE`): ką ir po kiek sekundžių pasakyti. Trukmės automatiškai pritaikomos prie serijos ilgio.
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

Paspaudus „Pradėkime“ lietuviškas balsas pasisveikina, papasakoja apie mankštą ir veda per visus pratimus: pasako, kokį pratimą daryti ir kaip atsigulti, kada įkvėpti, kelti, laikyti, grįžti ar keisti pusę. Balsas veikia tik jei įrenginyje yra lietuviškas kalbos sintezės balsas (pvz., Android su Google teksto į kalbą lietuvių kalba, Microsoft Edge). Jei jo nėra, instrukcijos rodomos ekrane.
