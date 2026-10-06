# Darbų sąrašas

## Animacijos vietoj YouTube video

Vietoj YouTube video rodyti trumpas, ciklu besikartojančias animacijas, kaip daromas kiekvienas pratimas. Jos užsikrautų greičiau, veiktų be YouTube ir būtų rodomos laikmačio skydelyje bei kortelėse.

Ką apgalvoti prieš darant:

- **Šaltinis ir licencija.** Internete rastų GIF'ų negalima tiesiog įsidėti, reikia leidimo arba atviros licencijos (pvz., CC BY). Kiti variantai: nusifilmuoti pačiai arba nupiešti paprastas schemines animacijas (SVG/CSS).
- **Formatas.** Vietoj GIF geriau trumpi `.mp4`/`.webm` ciklai (`<video autoplay muted loop playsinline>`): tokios pat kokybės failas būna 5–10 kartų mažesnis ir telefone nestringa.
- **Vieta.** Failus dėti į `media/`, o `EX` masyve kiekvienam pratimui pridėti lauką (pvz., `anim: "media/dead-bug.mp4"`). Jei animacijos nėra, rodyti YouTube video kaip dabar.
- **Turinys.** Animacija turi atitikti 1 ir 2 lygio variantą (pvz., „negyvas vabalas“ 2 lygyje daromas su ranka).
- **Prieinamumas.** Gerbti `prefers-reduced-motion`: tokiu atveju rodyti nejudantį kadrą su mygtuku paleisti.
