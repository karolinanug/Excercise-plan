# Karolinos mankštos planas

Statinė svetainė su namų mankštos planu: 10 pratimų, laikmatis, kuris pats veda per treniruotę, instrukcijos, dažnos klaidos ir YouTube video.

## Failai

- `index.html` – puslapis
- `css/style.css` – stiliai (šviesi ir tamsi tema, prisitaiko prie telefono)
- `js/app.js` – pratimų sąrašas (`EX` masyvas viršuje) ir laikmatis. Prieš kiekvieną pratimą 30 s (`PREP`) rodomas jo video, po to jis lieka rodomas be garso, kol darai serijas.

Pratimus, kartojimus ar trukmes keisk `js/app.js` faile, `EX` masyve. `secs` yra vienos serijos trukmė sekundėmis `[1 lygis, 2 lygis]`, `sets` – serijų skaičius.

## Paskelbimas per GitHub Pages

1. Įkelk visus šio aplanko failus į repozitorijos šaknį (arba `docs/` aplanką).
2. GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, pasirink `main` ir `/ (root)` (arba `/docs`).
3. Po minutės svetainė bus adresu `https://<vartotojas>.github.io/<repozitorija>/`.

Jokio kompiliavimo nereikia. Lokaliai galima tiesiog atidaryti `index.html` naršyklėje.

> Tai bendros rekomendacijos, ne medicininė konsultacija. Planą verta parodyti kineziterapeutui.
