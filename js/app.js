const EX = [
  { name: "Diafragminis kvėpavimas", en: "Diaphragmatic breathing", why: "Išmoko pilvo raumenis dirbti kartu su kvėpavimu ir atpalaiduoja įsitempusią nugarą. Tai pagrindas visiems kitiems pratimams.",
    steps: ["Atsigulk ant nugaros, kelius sulenk, pėdos ant grindų klubų plotyje.", "Vieną delną padėk ant krūtinės, kitą ant pilvo.", "Įkvėpk pro nosį per 4 sekundes, kad kiltų delnas ant pilvo ir šonai, o krūtinė liktų beveik rami.", "Iškvėpk pro šiek tiek pravertas lūpas per 6 sekundes. Pabaigoje švelniai įtrauk bambą link stuburo."],
    mistakes: ["Kilnoji pečius ir krūtinę vietoj pilvo.", "Išpuši pilvą per jėgą ir išriesti juosmenį.", "Kvėpuoji per greitai."],
    dose: ["8–10 lėtų įkvėpimų", "8–10 lėtų įkvėpimų"], sets: [1,1], secs: [90,90], sides: false, cue: "Įkvėpk 4 s pro nosį, iškvėpk 6 s pro lūpas. Krūtinė rami, kyla pilvas.",
    group: "breath", setup: "Atsigulk ant nugaros, kelius sulenk, vieną delną padėk ant krūtinės, kitą ant pilvo.",
    anim: "breath", video: { id: "9jpchJcKivk", title: "How to do Diaphragmatic Breathing Exercises for Beginners", by: "Michelle Kenway, kineziterapeutė" } },
  { name: "Dubens pakreipimas gulint", en: "Posterior pelvic tilt", why: "Tiesiogiai treniruoja priešingą judesį tavo dubens pasvirimui į priekį (anterior pelvic tilt): išmoksti valdyti dubenį pilvo ir sėdmenų raumenimis.",
    steps: ["Gulėk ant nugaros, keliai sulenkti, pėdos ant grindų.", "Iškvėpdama švelniai įtrauk pilvo apačią ir prispausk juosmenį prie kilimėlio, tarsi „pastumtum“ bambą link stuburo. Dubuo truputį pasisuka link tavęs.", "Išlaikyk 3 sekundes ir kvėpuok.", "Atpalaiduok į neutralią padėtį."],
    mistakes: ["Keli sėdmenis nuo grindų. Tai jau tiltelis, ne šis pratimas.", "Spaudi kojomis ar kaklu vietoj pilvo.", "Sulaikai kvapą."],
    dose: ["2 serijos × 10 kartų, laikyti 3 s", "2 serijos × 12 kartų, laikyti 5 s"], sets: [2,2], secs: [45,70], sides: false, cue: "Iškvėpk ir prispausk juosmenį prie kilimėlio, laikyk 3 s, atleisk.",
    group: "core", setup: "Atsigulk ant nugaros, kelius sulenk, pėdos ant grindų.",
    anim: "tilt", video: { id: "n8DU1desCy8", title: "How to do a Pelvic Tilt Lying Down", by: "Rehab My Patient" } },
  { name: "Katė–karvė", en: "Cat-cow stretch", why: "Švelniai judina visą stuburą slankstelis po slankstelio ir padeda pajausti dubens padėtį.",
    steps: ["Atsistok keturpėsčia: delnai po pečiais, keliai po klubais.", "Iškvėpdama apvalink nugarą į viršų, smakrą prie krūtinės, uodegikaulį pakišk po savimi (katė).", "Įkvėpdama lėtai išlenk nugarą žemyn, žvilgsnis į priekį (karvė).", "Judėk lėtai, kiekvieną padėtį palaikyk 2 sekundes."],
    mistakes: ["Karvės padėtyje per stipriai įlenki juosmenį. Su tavo dubens pasvirimu riesk tik tiek, kiek patogu, daugiau dėmesio katei.", "Judi greitai ir „metiesi“ į padėtis.", "Lenki alkūnes."],
    dose: ["8 lėti kartai", "10 lėtų kartų"], sets: [1,1], secs: [60,75], sides: false, cue: "Iškvėpk ir apvalink nugarą, įkvėpk ir švelniai išlenk. Lėtai.",
    group: "mob", setup: "Atsistok keturpėsčia: delnai po pečiais, keliai po klubais.",
    anim: "catcow", video: { id: "1Y0YjXS9sKI", title: "How to Do a Cat Cow Stretch: A Guide from Physical Therapists", by: "Hinge Health" } },
  { name: "Negyvas vabalas", en: "Dead bug", why: "Vienas geriausių giliųjų pilvo raumenų pratimų: stiprina liemenį, kai juosmuo laikomas stabilus. Labai tinka dubens pasvirimui į priekį.",
    steps: ["Gulėk ant nugaros, rankas ištiesk į lubas, kelius sulenk 90° kampu virš klubų.", "Prispausk juosmenį prie kilimėlio (kaip 2 pratime). Jis turi likti prispaustas visą laiką.", "Iškvėpdama lėtai nuleisk dešinę koją žemyn, kad kulnas beveik paliestų grindis. Pradžioje gali leisti tik pėdą, kelią palikus sulenktą.", "Grįžk ir pakartok kita koja. Kai įvaldysi, kartu su koja nuleisk priešingą ranką už galvos."],
    mistakes: ["Juosmuo atsikelia nuo grindų. Tada leisk koją mažiau žemyn.", "Skubi. Kiekvienas judesys bent 3 s žemyn.", "Įtempi kaklą ir keli galvą."],
    dose: ["2 serijos × 6 kartai kiekviena koja, pakaitomis", "3 serijos × 8 kartai kiekviena koja, su ranka"], sets: [2,3], secs: [50,65], sides: false, cue: "Juosmuo prispaustas. Lėtai nuleisk vieną koją, grįžk, keisk koją.",
    group: "core", setup: "Atsigulk ant nugaros, rankas ištiesk į lubas, kelius sulenk virš klubų.",
    anim: "deadbug", video: { id: "psOZS-sVDww", title: "Dead Bug Exercise Beginner - Strengthen and Stabilize Your Core", by: "Brian Abelson" } },
  { name: "Sėdmenų tiltelis", en: "Glute bridge", why: "Stiprina sėdmenis, kurie esant dubens pasvirimui į priekį dažnai būna silpni ir „išsijungę“. Stiprūs sėdmenys padeda laikyti dubenį tiesiau.",
    steps: ["Gulėk ant nugaros, keliai sulenkti, pėdos klubų plotyje, kulnai apie 20–25 cm nuo sėdmenų.", "Pirmiausia padaryk dubens pakreipimą (prispausk juosmenį), tada spausdama kulnais kelk dubenį.", "Kilk, kol keliai, klubai ir pečiai bus vienoje linijoje. Viršuje stipriai suspausk sėdmenis 2 sekundes.", "Lėtai nusileisk, slankstelis po slankstelio."],
    mistakes: ["Keli per aukštai ir išrieti juosmenį. Viršuje turi jaustis sėdmenys, ne nugara.", "Daugiausia dirba šlaunų užpakalis (traukia mėšlungis). Pastumk pėdas arčiau.", "Keliai krenta į vidų. Laikyk juos klubų plotyje."],
    dose: ["2 serijos × 10 kartų, viršuje 2 s", "3 serijos × 12 kartų, viršuje 3 s"], sets: [2,3], secs: [45,60], sides: false, cue: "Pakreipk dubenį, kelk spausdama kulnais, viršuje suspausk sėdmenis 2 s.",
    group: "glute", setup: "Atsigulk ant nugaros, kelius sulenk, kulnai netoli sėdmenų.",
    anim: "bridge", video: { id: "WtilA9IJX1c", title: "Glute Bridges Exercise for Hips & Butt", by: "Release Physical Therapy" } },
  { name: "Paukštis–šuo", en: "Bird dog", why: "Moko išlaikyti stuburą stabilų, kai juda rankos ir kojos. Stiprina nugaros tiesiamuosius, sėdmenis ir pilvo raumenis simetriškai.",
    steps: ["Keturpėsčia: delnai po pečiais, keliai po klubais, nugara tiesi kaip stalas.", "Švelniai įtempk pilvą. Pradžioje tik slysk viena koja atgal, neatkeldama nuo grindų.", "Kai jauti stabilumą, ištiesk koją atgal klubo aukštyje ir kartu priešingą ranką į priekį.", "Palaikyk 3 sekundes, grįžk ir keisk puses."],
    mistakes: ["Keli koją per aukštai ir įlenki juosmenį.", "Dubuo pasisuka į šoną. Įsivaizduok stiklinę vandens ant juosmens.", "Galva nusvyra arba atsilošia. Žiūrėk į grindis."],
    dose: ["2 serijos × 6 kartai kiekviena pusė, pakaitomis, laikyti 3 s", "3 serijos × 8 kartai, laikyti 5 s"], sets: [2,3], secs: [60,90], sides: false, cue: "Ištiesk koją ir priešingą ranką, laikyk 3 s, keisk pusę. Juosmuo neįlinksta.",
    group: "glute", setup: "Atsistok keturpėsčia, nugara tiesi kaip stalas.",
    anim: "birddog", video: { id: "LaLKNS7mxrk", title: "Bird Dog Exercise for Beginners", by: "Margaret Martin, kineziterapeutė" } },
  { name: "Kriauklė", en: "Clamshell", why: "Stiprina šoninius sėdmenų raumenis, kurie stabilizuoja dubenį. Daroma abiem pusėm vienodai.",
    steps: ["Gulėk ant šono, galvą pasidėk ant ištiestos rankos, kelius sulenk apie 45°, pėdos kartu.", "Klubai vienas virš kito, dubuo statmenas grindims. Viršutinę ranką padėk ant klubo.", "Pėdas laikydama kartu, kelk viršutinį kelį, kiek gali nepasukant dubens atgal.", "Viršuje 1 s pauzė, lėtai nuleisk."],
    mistakes: ["Dubuo rieda atgal kartu su keliu. Kelk mažiau.", "Pėdos atsiskiria.", "Judi greitai ir „mėtai“ kelį."],
    dose: ["2 serijos × 12 kartų kiekviena pusė", "3 serijos × 15 kartų kiekviena pusė"], sets: [2,3], secs: [40,45], sides: true, cue: "Pėdos kartu, kelk kelį nepasukdama dubens, lėtai nuleisk.",
    group: "glute", setup: "Atsigulk ant šono, kelius sulenk, pėdos kartu.",
    anim: "clam", video: { id: "2c5xiz4q7ow", title: "Clam Shell Exercise: Strengthen Your Hip & Knees", by: "Margaret Martin, kineziterapeutė" } },
  { name: "Šoninė lenta ant kelių", en: "Modified side plank", why: "Stiprina šoninius liemens raumenis (įstrižinius ir keturkampį juosmens raumenį), kurie palaiko stuburą iš šonų. Abi pusės vienodu laiku.",
    steps: ["Gulėk ant šono, atsiremk į dilbį: alkūnė tiksliai po petimi. Keliai sulenkti, pėdos už nugaros.", "Kelk klubus, kol nuo galvos iki kelių bus tiesi linija.", "Laikyk, kvėpuok ramiai.", "Nusileisk ir pakartok kita puse tiek pat laiko."],
    mistakes: ["Klubai nusvyra žemyn arba išsikiša atgal.", "Petys „kabo“: stumk grindis dilbiu.", "Vienai pusei duodi daugiau laiko, nes ji lengvesnė. Abi pusės vienodai."],
    dose: ["2 serijos × 15 s kiekviena pusė", "2 serijos × 25 s kiekviena pusė"], sets: [2,2], secs: [15,25], sides: true, cue: "Alkūnė po petimi, klubai aukštyn, tiesi linija nuo galvos iki kelių.",
    group: "core", setup: "Atsigulk ant šono ir atsiremk dilbiu, alkūnė po petimi, keliai sulenkti.",
    anim: "sideplank", video: { id: "lvpPNjRQONQ", title: "How to Do a Modified Side Plank", by: "NASM" } },
  { name: "Klubo lenkiamųjų tempimas klūpant", en: "Half-kneeling hip flexor stretch", why: "Esant dubens pasvirimui į priekį, klubo priekio raumenys dažniausiai sutrumpėję ir tempia dubenį žemyn. Šis tempimas juos ilgina.",
    steps: ["Atsiklaupk ant vieno kelio (po keliu sulankstyk kilimėlį), kita pėda priekyje, kelias 90°.", "Pirmiausia pakreipk dubenį (uodegikaulis po savimi) ir suspausk užpakalinės kojos sėdmenį.", "Tik tada švelniai pasislink kūnu į priekį, kol pajusi tempimą klubo priekyje.", "Liemuo tiesus, kvėpuok ramiai, laikyk."],
    mistakes: ["Pasislenki į priekį įlenkdama juosmenį. Tada tempiasi nugara, ne klubas.", "Priekinis kelias išeina gerokai už pėdos pirštų.", "Spyruokliuoji. Laikyk ramiai."],
    dose: ["2 kartai × 30 s kiekviena pusė", "2 kartai × 45 s kiekviena pusė"], sets: [2,2], secs: [30,45], sides: true, cue: "Uodegikaulis po savimi, suspausk sėdmenį, tik tada pasislink į priekį.",
    group: "stretch", setup: "Atsiklaupk ant vieno kelio, kita pėda priekyje.",
    anim: "hipflex", video: { id: "F55tzqJggAY", title: "Half Kneeling Hip Flexor Stretch", by: "Cara Giusti, PT, DPT (B3 Physical Therapy)" } },
  { name: "Vaiko poza", en: "Child's pose", why: "Atpalaiduoja nugarą ir juosmenį po treniruotės, ramina kvėpavimą.",
    steps: ["Atsiklaupk, kelius šiek tiek praskėsk, sėdmenis nuleisk ant kulnų.", "Ištiesk rankas į priekį ir padėk kaktą ant kilimėlio.", "Kvėpuok į nugarą ir šonus, leisk jai atsipalaiduoti.", "Atsikeldama pirmiausia remkis rankomis."],
    mistakes: ["Prievarta spaudi sėdmenis prie kulnų. Jei nepatogu, pasidėk pagalvėlę.", "Įtempi pečius prie ausų."],
    dose: ["45–60 s", "60 s"], sets: [1,1], secs: [50,60], sides: false, cue: "Sėdmenys link kulnų, kakta ant kilimėlio, ramiai kvėpuok į nugarą.",
    group: "stretch", setup: "Atsiklaupk, sėdmenis nuleisk ant kulnų, rankas ištiesk į priekį.",
    anim: "child", video: { id: "HBdNHrt0A7Y", title: "Child's Pose Stretch for Lower Back Pain Relief", by: "Anand Physical Therapy Academy" } },
  // ---- Pratimai iš kineziterapeuto korekcinės programos (aprašymai savais žodžiais) ----
  { name: "Dubens stūmimas klūpint", en: "Kneeling hip thrust (hip flexor and chest opener)", why: "Atpalaiduoja ir ilgina šlaunų priekį bei klubo lenkiamuosius, atveria krūtinę. Tai priešingas judesys ilgam sėdėjimui.",
    steps: ["Atsiklaupk, sėskis ant kulnų ir rankomis atsiremk į grindis už savęs.", "Pečius atitrauk atgal, žvilgsnis į priekį.", "Stumk dubenį pirmyn ir aukštyn, kol pajusi tempimą šlaunų priekyje ir krūtinėje. Palaikyk 3 sekundes.", "Lėtai grįžk ant kulnų ir kartok."],
    mistakes: ["Galva atkrenta atgal. Kaklas tęsia stuburą.", "Judi staigiai. Kiekvieną kartą lėtai ir su pauze viršuje.", "Kelia skausmą keliuose. Pasidėk po keliais sulankstytą kilimėlį."],
    dose: ["2 serijos × 10 kartų, laikyti 3 s", "2 serijos × 12 kartų, laikyti 3 s"], sets: [2,2], secs: [50,60], sides: false, cue: "Rankos už nugaros, stumk dubenį pirmyn ir aukštyn, palaikyk 3 s.",
    group: "mob", setup: "Atsiklaupk, sėskis ant kulnų ir atsiremk rankomis už savęs.", anim: "kneelpush" },
  { name: "Išsirietimas iš vaiko pozos", en: "Child's pose to cobra", why: "Švelniai judina juosmenį ir krūtinės ląstą į abi puses, ilgina pilvo ir klubo priekio raumenis.",
    steps: ["Atsisėsk ant kulnų, rankas ištiesk į priekį ant grindų, krūtinė arti grindų.", "Delnų nejudindama slink pirmyn: dubuo leidžiasi prie grindų, krūtinė kyla aukštyn.", "Išsirietime pečiai nuleisti, žvilgsnis į priekį.", "Pilna amplitude grįžk atgal ant kulnų."],
    mistakes: ["Pečiai pakyla prie ausų.", "Juosmenyje jauti spaudimą ar skausmą. Kelk krūtinę mažiau.", "Skubi. Judesys sklandus, be trūkčiojimų."],
    dose: ["2 serijos × 6 lėti kartai", "2 serijos × 7 lėti kartai"], sets: [2,2], secs: [66,77], sides: false, cue: "Lėtai iš vaiko pozos slink pirmyn, krūtinė aukštyn, palaikyk ir lėtai grįžk atgal.",
    group: "mob", setup: "Atsisėsk ant kulnų, rankas ištiesk į priekį ant grindų.", anim: "childcobra" },
  { name: "Gilus pritūpimas", en: "Deep squat hold", why: "Didina klubų, kelių ir čiurnų paslankumą, švelniai ištempia dubens sritį.",
    steps: ["Atsistok, pėdos pečių plotyje, pirštai šiek tiek į šonus.", "Pritūpk kuo giliau, kulnai lieka ant grindų.", "Išbūk pritūpime, ramiai kvėpuok.", "Balso ritmu kelk tiesias rankas aukštyn ir nuleisk (kas 4 sekundes)."],
    mistakes: ["Kulnai kyla nuo grindų. Pasidėk po kulnais sulankstytą rankšluostį arba tupk mažiau.", "Nugara stipriai apvalėja. Krūtinė aukštyn.", "Keliai krenta į vidų."],
    dose: ["2 kartai × 32 s, su rankų kėlimu", "2 kartai × 48 s, su rankų kėlimu"], sets: [2,2], secs: [32,48], sides: false, cue: "Pritūpk kuo giliau, kulnai prie grindų. Rankos aukštyn ir žemyn pagal balsą.",
    group: "mob", setup: "Atsistok, pėdos pečių plotyje.", anim: "squat" },
  { name: "Tiltelis su pasisukimu", en: "Crab reach", why: "Atveria krūtinę ir pečius, judina krūtininę stuburo dalį ir kartu įjungia sėdmenis.",
    steps: ["Atsisėsk, kelius sulenk, pėdos ant grindų, rankomis atsiremk už nugaros.", "Lėtai kelk dubenį ir viena ranka siek per viršų kuo toliau už galvos, liemuo šiek tiek pasisuka.", "Palaikyk 3 sekundes ir lėtai grįžk į sėdimą padėtį.", "Atlikusi kartojimus viena ranka, kartok kita."],
    mistakes: ["Dubuo kyla per mažai. Spausk pėdomis ir suspausk sėdmenis.", "Atraminė ranka sulinksta. Laikyk ją tiesią, petys virš delno.", "Judi greitai."],
    dose: ["2 serijos × 6 kartai kiekviena ranka", "2 serijos × 8 kartai kiekviena ranka"], sets: [2,2], secs: [35,45], sides: true, cue: "Kelk dubenį, ranka siek toli už galvos, palaikyk 3 s.",
    group: "mob", setup: "Atsisėsk, kelius sulenk, rankomis atsiremk už nugaros.", anim: "crabreach" },
  { name: "Lenta ant dilbių", en: "Forearm plank", why: "Stiprina visą liemenį ir pečių juostą. Mokaisi išlaikyti dubenį neutralų, kai kūnas apkrautas.",
    steps: ["Atsiremk dilbiais, alkūnės tiesiai po pečiais, kojos ištiestos pečių plotyje.", "Įtempk pilvą ir sėdmenis: kūnas tiesia linija nuo galvos iki kulnų.", "Stumk grindis dilbiais, kad mentės nesusmegtų. Žvilgsnis į grindis tarp delnų.", "Laikyk ir ramiai kvėpuok. Jei per sunku, nuleisk kelius ant grindų."],
    mistakes: ["Dubuo nusvyra ir juosmuo įlinksta. Tai ką tik išmoktą dubens pakreipimą daryk ir čia.", "Sėdmenys per aukštai.", "Galva atlošta. Kaklas tęsia stuburą."],
    dose: ["2 kartai × 20 s", "2 kartai × 35 s"], sets: [2,2], secs: [20,35], sides: false, cue: "Alkūnės po pečiais, kūnas tiesus, stumk grindis dilbiais.",
    group: "core", setup: "Atsigulk ant pilvo ir atsiremk dilbiais, alkūnės po pečiais.", anim: "plank" },
  { name: "Tiltelis viena koja", en: "Single-leg glute bridge", why: "Sunkesnis tiltelio variantas: stiprina kiekvieno šono sėdmenis ir šlaunies užpakalį atskirai, gerina dubens stabilumą.",
    steps: ["Atsigulk ant nugaros, viena pėda ant grindų, kitą koją pakelk sulenktą per kelį.", "Pakreipk dubenį ir spausdama atremtos kojos kulnu kelk dubenį.", "Viršuje palaikyk 3 sekundes, dubuo lygus, nekrypsta į šoną.", "Lėtai nusileisk. Atlikusi kartojimus, keisk koją."],
    mistakes: ["Dubuo pasvyra į pakeltos kojos pusę.", "Viršuje išsirieti juosmenį.", "Sulaikai kvapą. Iškvėpk keldama."],
    dose: ["2 serijos × 8 kartai kiekviena koja", "2 serijos × 12 kartų kiekviena koja"], sets: [2,2], secs: [40,60], sides: true, cue: "Spausk kulnu, kelk dubenį, viršuje palaikyk 3 s. Dubuo lygus.",
    group: "glute", setup: "Atsigulk ant nugaros, viena pėda ant grindų, kitą koją pakelk sulenktą.", anim: "slbridge" },
  { name: "Žingsniavimas kulnais", en: "Bridge walk-outs", why: "Stiprina šlaunies užpakalį ir sėdmenis, kai dubuo laikomas pakeltas.",
    steps: ["Atsigulk ant nugaros, kelius sulenk, rankas pakelk į lubas (lengviau – padėk ant grindų).", "Pakelk dubenį kaip tiltelyje.", "Mažais žingsneliais kulnais eik tolyn, kiek gali išlaikyti dubenį aukštai.", "Tokiais pat žingsneliais grįžk atgal ir nusileisk."],
    mistakes: ["Dubuo krenta. Neik per toli.", "Traukia mėšlungis. Trumpesni žingsniai, rankos ant grindų.", "Juosmuo įlinksta."],
    dose: ["2 serijos × 3 nuėjimai", "2 serijos × 4 nuėjimai"], sets: [2,2], secs: [36,48], sides: false, cue: "Dubuo aukštai, mažais žingsneliais kulnais tolyn ir atgal.",
    group: "glute", setup: "Atsigulk ant nugaros, kelius sulenk, rankas pakelk į lubas.", anim: "heelwalk" },
  { name: "Dubens išlaikymas klūpint", en: "Kneeling hip extension hold", why: "Statinis šlaunų priekio, pilvo ir krūtinės tempimas.",
    steps: ["Atsiklaupk, rankomis atsiremk į grindis už savęs.", "Pakelk dubenį kuo aukščiau ir išplėsk krūtinę.", "Išlaikyk padėtį ir ramiai kvėpuok.", "Lėtai grįžk ant kulnų."],
    mistakes: ["Kaklas atloštas. Žiūrėk į priekį ar į lubas, bet neatmesk galvos.", "Skauda kelius. Pasidėk minkštą pagrindą."],
    dose: ["2 kartai × 20 s", "2 kartai × 30 s"], sets: [2,2], secs: [20,30], sides: false, cue: "Dubuo aukštyn, krūtinė atverta, kvėpuok.",
    group: "stretch", setup: "Atsiklaupk, rankomis atsiremk už savęs.", anim: "camel" },
  { name: "Lankas gulint ant pilvo", en: "Prone quad and front body stretch", why: "Ištempia šlaunų priekį, pilvą ir krūtinę, kurie esant dubens pasvirimui į priekį būna sutrumpėję.",
    steps: ["Atsigulk ant pilvo, šlaunys kartu.", "Sulenk kelius ir rankomis suimk pėdas.", "Pečius atitrauk atgal ir švelniai kilstelk krūtinę. Pėdas trauk prie sėdmenų.", "Laikyk ir kvėpuok. Jei per stipru, laikyk tik pėdas, krūtinės nekelk."],
    mistakes: ["Juosmenyje jauti spaudimą. Nekelk krūtinės, palik tik kelių sulenkimą.", "Sulaikai kvapą.", "Keliai prasiskiria į šonus."],
    dose: ["2 kartai × 30 s", "2 kartai × 45 s"], sets: [2,2], secs: [30,45], sides: false, cue: "Suimk pėdas, pečiai atgal, švelniai kilstelk krūtinę.",
    group: "stretch", setup: "Atsigulk ant pilvo ir sulenk kelius.", anim: "bow" },
  { name: "Krūtinės nuleidimas", en: "Puppy pose", why: "Ištempia krūtinę, pečius ir juosmenį.",
    steps: ["Atsistok keturpėsčia.", "Rankas ištiesk toli pirmyn, dubuo lieka virš kelių.", "Leisk krūtinę žemyn link grindų. Nesėsk ant kulnų.", "Laikyk ir kvėpuok į nugarą."],
    mistakes: ["Sėdi ant kulnų. Tada tai jau vaiko poza.", "Pečiai įsitempę prie ausų.", "Skauda petį. Pakeisk rankų plotį."],
    dose: ["1 kartas × 45 s", "2 kartai × 45 s"], sets: [1,2], secs: [45,45], sides: false, cue: "Rankos toli pirmyn, dubuo virš kelių, krūtinė žemyn.",
    group: "stretch", setup: "Atsistok keturpėsčia.", anim: "puppy" },
  { name: "Šlaunies priekio tempimas klūpint", en: "Half-kneeling quad stretch", why: "Tempia ir klubo lenkiamuosius, ir keturgalvį šlaunies raumenį: abu tempia dubenį į priekį.",
    steps: ["Atsiklaupk ant vieno kelio (po keliu sulankstyk kilimėlį), kita pėda priekyje.", "Ranka suimk užpakalinės kojos pėdą ir švelniai trauk prie sėdmens.", "Suspausk sėdmenį ir stumk dubenį pirmyn, liemuo tiesus.", "Laikyk, tada keisk koją."],
    mistakes: ["Juosmuo įlinksta. Uodegikaulis po savimi.", "Traukia kelį. Trauk pėdą mažiau arba naudok rankšluostį.", "Prarandi pusiausvyrą. Laisva ranka atsiremk į sieną ar kėdę."],
    dose: ["1 kartas × 30 s kiekviena koja", "2 kartai × 45 s kiekviena koja"], sets: [1,2], secs: [30,45], sides: true, cue: "Suimk pėdą, suspausk sėdmenį, dubuo pirmyn.",
    group: "stretch", setup: "Atsiklaupk ant vieno kelio, kita pėda priekyje, ranka suimk užpakalinės kojos pėdą.", anim: "kneelquad" }
];
// Pratimai išrikiuojami pagal grupes: kvėpavimas, paslankumas, pilvas, sėdmenys, tempimas
const GROUPS = { breath: "Kvėpavimas", mob: "Paslankumas", core: "Pilvas ir liemuo", glute: "Sėdmenys ir šlaunies užpakalis", stretch: "Tempimas" };
EX.sort((a, b) => Object.keys(GROUPS).indexOf(a.group) - Object.keys(GROUPS).indexOf(b.group));

// Sekundės: poilsis tarp serijų, pusės keitimas, pirmo pratimo apžiūra, poilsis tarp pratimų,
// pasiruošimas po poilsio, poilsio pratęsimas mygtuku
const REST_SETS = 20, SIDE_SWITCH = 8, PREP = 15, REST_BETWEEN = 30, PREP_NEXT = 10, REST_PLUS = 15;
let level = 0;
try { const s = localStorage.getItem("karolina-level"); if (s === "1") level = 1; } catch (e) {}

// Visi įterpti video rodomi per youtube-nocookie.com (privatumo režimas: slapukai
// nesaugomi, kol video nepaleistas). Nuoroda „atidaryti YouTube“ veda į įprastą youtube.com.
const YT_HOST = "https://www.youtube-nocookie.com";
function ytEmbed(id, params, title) {
  return `<iframe src="${YT_HOST}/embed/${id}?${params}" title="${esc(title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
}
let cardAnims = [];
function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
function renderCards() {
  const box = document.getElementById("cards");
  box.innerHTML = EX.map((e, i) => `
    <article class="ex" id="ex${i}">
      ${i === 0 || EX[i - 1].group !== e.group ? `<p class="ex-group">${GROUPS[e.group]}</p>` : ""}
      <div class="ex-head"><span class="num">${i + 1}.</span><div><h3>${esc(e.name)}</h3><span class="alias">${esc(e.en)}</span></div></div>
      <div class="dose"><span class="chip">${esc(e.dose[level])}</span>${e.sides ? '<span class="chip">pradėk kaire, po to dešine</span>' : ""}</div>
      <p class="why">${esc(e.why)}</p>
      <figure class="anim" data-anim="${e.anim}" aria-label="Animacija: ${esc(e.name)}"></figure>
      <h4>Kaip daryti</h4>
      <ol>${e.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
      <h4>Dažnos klaidos</h4>
      <ul class="mist">${e.mistakes.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
      ${e.video ? `<a class="video" href="#vid${i}" data-play="${i}"><i class="play" aria-hidden="true"></i><span>Žiūrėti video<small>${esc(e.video.by)} · skiltyje „Video“</small></span></a>` : ""}
    </article>`).join("");
  cardAnims.forEach(c => c.destroy());
  cardAnims = [...box.querySelectorAll(".anim")].map(f => ANIM.mount(f, f.dataset.anim, level));
}

// Atskira video skiltis: miniatiūra, paspaudus – įterptas YouTube (nocookie) grotuvas
function renderVideos() {
  $("videolist").innerHTML = EX.map((e, i) => !e.video ? "" : `
    <article class="vcard" id="vid${i}">
      <h3><span class="num">${i + 1}.</span> ${esc(e.name)}</h3>
      <div class="embed" data-id="${e.video.id}" data-title="${esc(e.video.title)}">
        <button class="embed-btn" type="button" aria-label="Paleisti video: ${esc(e.video.title)}">
          <img src="https://i.ytimg.com/vi/${e.video.id}/hqdefault.jpg" alt="" loading="lazy" width="480" height="360">
          <i class="play big" aria-hidden="true"></i>
        </button>
      </div>
      <p class="vmeta">${esc(e.video.title)} · ${esc(e.video.by)} · <a href="https://www.youtube.com/watch?v=${e.video.id}" target="_blank" rel="noopener">atidaryti YouTube</a></p>
    </article>`).join("");
}
function playVideo(box) {
  if (!box || box.querySelector("iframe")) return;
  box.innerHTML = ytEmbed(box.dataset.id, "autoplay=1&rel=0&playsinline=1", box.dataset.title);
}

// Dienų ratas pagal kineziterapeuto programą: kiekviena treniruotė – kvėpavimas → paslankumas →
// stiprinimas → tempimas. Dienos akcentas keičiasi ratu (pilvas → sėdmenys → atsigavimas), o
// Garmin pasiruošimas nusprendžia, ar šiandien stiprinimas, ar atsigavimas (žr. suggestPlan).
// Paslankumo, sėdmenų ir tempimo pratimai parenkami rečiausiai darytieji per 14 dienų, kad per
// savaitę visi būtų atlikti panašiai dažnai. „relax“ – vakarinis atsipalaidavimas.
const WEEKDAYS = ["Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis", "Sekmadienis"];
const WD_SHORT = ["Pr", "An", "Tr", "Kt", "Pn", "Št", "Sk"];
const DAYTYPE = {
  core: { name: "Pilvo ir liemens diena", short: "Pilvas", say: "pilvo ir liemens diena", mark: "P", plan: { mob: 2, core: 4, stretch: 2 } },
  glute: { name: "Sėdmenų diena", short: "Sėdmenys", say: "sėdmenų diena", mark: "S", plan: { mob: 2, glute: 4, stretch: 2 } },
  recovery: { name: "Atsigavimo diena (paslankumas ir tempimai)", short: "Atsigavimas", say: "atsigavimo diena: paslankumas ir tempimai", mark: "A", plan: { mob: 4, stretch: 4 } },
  relax: { name: "Atsipalaidavimas (kvėpavimas ir vaiko poza)", short: "Atsipalaidavimas", mark: "R", fixed: ["breath", "child"] }
};
const STRENGTH = ["core", "glute"];
const byGroup = g => EX.map((e, i) => (e.group === g ? i : -1)).filter(i => i >= 0);
// Kiek kartų kiekvienas pratimas darytas per 14 dienų (žurnalo laukas „ex“ – animacijų pavadinimai)
function usage() {
  const since = dayKey(new Date(Date.now() - 14 * 864e5)), c = {};
  loadLog().filter(x => x.d >= since).forEach(x => (x.ex || []).forEach(a => { c[a] = (c[a] || 0) + 1; }));
  return c;
}
function sessionList(type) {
  const t = DAYTYPE[type];
  if (t.fixed) return t.fixed.map(a => EX.findIndex(e => e.anim === a));
  const u = usage();
  const pick = (g, n) => byGroup(g).map((i, o) => [i, (u[EX[i].anim] || 0) * 100 + o]).sort((x, y) => x[1] - y[1]).slice(0, n).map(x => x[0]).sort((x, y) => x - y);
  return [...byGroup("breath"), ...["mob", "core", "glute", "stretch"].flatMap(g => t.plan[g] ? pick(g, t.plan[g]) : [])];
}
// Šiandienos pasiūlymas: { type, easy, why } – kita rato diena, pakoreguota pagal Garmin
function suggestPlan() {
  const log = loadLog().filter(x => x.t !== "relax").reverse();
  const lastOf = t => (log.find(x => x.t === t) || {}).d || "";
  const strength = lastOf("core") <= lastOf("glute") ? "core" : "glute";
  const r = HEALTH.readiness(), ov = HEALTH.overview();
  if ((r && r.score < 45) || (ov && ov.load === "stress"))
    return { type: "recovery", easy: false, why: "garmin" };
  // Be Garmin duomenų: po dviejų stiprinimo dienų iš eilės (per paskutines 3 d.) – atsigavimas
  const recent = log.filter(x => x.d >= dayKey(new Date(Date.now() - 3 * 864e5)));
  if (!r && recent.length >= 2 && recent.slice(0, 2).every(x => x.t !== "recovery")) return { type: "recovery", easy: false, why: "rotation" };
  if (!r && log.length && log[0].t !== "recovery" && lastOf("recovery") < lastOf("core") && lastOf("recovery") < lastOf("glute") && lastOf("core") && lastOf("glute"))
    return { type: "recovery", easy: false, why: "rotation" };
  return { type: strength, easy: !!r && r.score < 70, why: "" };
}
// Lietuviškas daugiskaitos linksnis: 1 minutė, 2 minutės, 10 minučių, 21 minutė...
function plural(n, one, few, many) {
  const t = n % 100, u = n % 10;
  return n + " " + (u === 0 || (t >= 11 && t <= 19) ? many : u === 1 ? one : few);
}
const weekday = d => (d.getDay() + 6) % 7;
let lastToday = weekday(new Date());
// plan – šiandienos pasiūlymas; override – naudotojos pasirinktas kitas tipas;
// easy – lengvesnė versija: viena serija mažiau, ilgesnis poilsis
let plan = { type: "core", easy: false, why: "" }, override = null, easy = false, easyTouched = null;
const EASY_REST = 10;
const dayType = () => override || plan.type;
function refreshPlan() {
  plan = suggestPlan();
  if (easyTouched !== dayKey(new Date())) easy = plan.easy && STRENGTH.includes(dayType());
}

// Pasiruošimas prieš kiekvieną seriją: balsas pasako pratimą ir kaip atsigulti (laikmatis stovi),
// tada COUNTDOWN s atgalinis laikas, pypsi kas sekundę, ir „Pradedam“
const COUNTDOWN = 5, COUNTDOWN_SILENT = 10;
function prepText(e, set, sets, side) {
  if (side === 1) return `Dešinė pusė. ${VOICE_SWITCH[e.anim] || "Keisk pusę."}`;
  return `${sets > 1 ? `${ORD[set]} serija. ` : ""}${e.name}. ${e.setup}${side === 0 ? " Pradėk kaire puse." : ""}`;
}
function buildSteps(lvl = level, list = sessionList(dayType()), ez = easy) {
  const steps = [], REST = ez ? REST_SETS + EASY_REST : REST_SETS;
  list.forEach((i, pos) => {
    const e = EX[i];
    const sets = ez ? Math.max(1, e.sets[lvl] - 1) : e.sets[lvl], secs = e.secs[lvl];
    // Tarp pratimų – poilsis (jau rodoma kito pratimo animacija)
    if (pos > 0) steps.push({ type: "rest", between: true, ex: i, title: "Poilsis", sub: "", cue: `Atsikvėpk ir atsigerk vandens. Toliau: ${e.name}. ${e.cue}`, secs: REST_BETWEEN });
    const sides = e.sides ? ["kairė pusė", "dešinė pusė"] : [null];
    for (let s = 0; s < sets; s++) {
      sides.forEach((side, k) => {
        const sd = side ? k : -1;
        steps.push({ type: "prep", pos, ex: i, set: s, sets, side: sd, title: "Pasiruošk", sub: "", say: prepText(e, s, sets, sd),
          cue: sd === 1 ? (VOICE_SWITCH[e.anim] || "Keisk pusę.") : e.setup, secs: SAY.active ? COUNTDOWN : COUNTDOWN_SILENT });
        const parts = [];
        if (sets > 1) parts.push(`${s + 1}/${sets} serija`);
        if (side) parts.push(side);
        steps.push({ type: "work", ex: i, set: s, sets, side: sd, title: e.name, sub: parts.join(" · "), cue: e.cue + " " + e.dose[lvl] + ".", secs });
        if (k === sides.length - 1 && s < sets - 1) steps.push({ type: "rest", nextSet: s + 1, ex: i, title: "Poilsis", sub: "", cue: `Toliau: ${e.name}, ${s + 2} serija.`, secs: REST });
      });
    }
  });
  return steps;
}

// Atliktos treniruotės saugomos localStorage žurnale: { d: "2026-10-06", t: "core" | "glute" |
// "recovery" | "relax" (seni: "full", "light"), ex: [animacijos], ... }. Viena įskaita dienai ir tipui.
// Savaitė prasideda pirmadienį. Įskaitoma, jei realiai treniruotasi bent pusę numatyto laiko
// (kad keli „Praleisti žingsnį“ paspaudimai nepažymėtų treniruotės atlikta).
const LOG_KEY = "karolina-log", OLD_KEY = "karolina-done", WEEK_GOAL = 4, KEEP_DAYS = 180;
const TYPE_NAME = t => (DAYTYPE[t] && DAYTYPE[t].name) || (t === "full" ? "Visa treniruotė" : "Lengva diena");
function dayKey(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
function loadLog() {
  try {
    let a = JSON.parse(localStorage.getItem(LOG_KEY) || "null");
    if (!Array.isArray(a)) {
      // senas formatas: tik dienų sąrašas
      const old = JSON.parse(localStorage.getItem(OLD_KEY) || "[]");
      a = Array.isArray(old) ? old.filter(x => typeof x === "string").map(d => ({ d, t: "full" })) : [];
    }
    return a.filter(x => x && typeof x.d === "string");
  } catch (e) { return []; }
}
function saveLog(log) {
  try { localStorage.setItem(LOG_KEY, JSON.stringify(log)); localStorage.removeItem(OLD_KEY); } catch (e) {}
}
function markDone(type, extra = {}, day = dayKey(new Date())) {
  const now = new Date();
  const oldest = dayKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - KEEP_DAYS));
  const log = loadLog().filter(x => x.d >= oldest && !(x.d === day && x.t === type));
  log.push(Object.assign({ d: day, t: type, lvl: level + 1 }, extra));
  // Ranka įrašyta praėjusi diena įterpiama pagal datą (stabilus rūšiavimas išlaiko dienos įrašų tvarką)
  log.sort((a, b) => a.d < b.d ? -1 : a.d > b.d ? 1 : 0);
  saveLog(log);
  return log.findIndex(x => x.d === day && x.t === type);
}
// Paprašoma, kad naršyklė neišvalytų įrašų pati (pvz., Safari po savaitės nenaudojimo)
try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {}); } catch (e) {}
function weekDates() {
  const now = new Date(), mon = new Date(now.getFullYear(), now.getMonth(), now.getDate() - weekday(now));
  return WEEKDAYS.map((w, i) => dayKey(new Date(mon.getFullYear(), mon.getMonth(), mon.getDate() + i)));
}
// Šios savaitės treniruotės: iš viso (be vakarinio atsipalaidavimo) ir pagal tipą
function weekStats() {
  const dates = weekDates(), log = loadLog().filter(x => x.d >= dates[0] && x.t !== "relax");
  const by = { core: 0, glute: 0, recovery: 0 };
  log.forEach(x => { if (x.t in by) by[x.t]++; else if (x.t === "full") by.core++; });
  return { total: new Set(log.map(x => x.d + x.t)).size, by };
}
function renderWeek() {
  const log = loadLog(), dates = weekDates(), today = weekday(new Date()), w = weekStats();
  $("week").textContent = `${w.total}/${WEEK_GOAL}`;
  $("days").innerHTML = WEEKDAYS.map((name, i) => {
    const done = log.filter(x => x.d === dates[i] && x.t !== "relax");
    const marks = done.map(x => (DAYTYPE[x.t] || {}).mark || "✓").join("");
    return `<span class="day${i === today ? " today" : ""}${done.length ? " done" : ""}" title="${name}${done.length ? ": " + done.map(x => TYPE_NAME(x.t)).join(", ") : ""}">
      <b>${WD_SHORT[i]}</b><i aria-hidden="true">${marks || (i < today ? "–" : "")}</i></span>`;
  }).join("");
  $("weekby").textContent = `P – pilvo diena (${w.by.core}) · S – sėdmenų (${w.by.glute}) · A – atsigavimo (${w.by.recovery})`;
}
// Kito tipo pasirinkimas (pasisveikinimo ekrane ir laikmatyje)
function chooseType(t) {
  if (idx >= 0 && idx < steps.length && !confirm("Nutraukti dabartinę treniruotę ir pradėti kitą?")) return;
  override = t === plan.type ? null : t;
  if (easyTouched !== dayKey(new Date())) easy = plan.easy && STRENGTH.includes(dayType());
  reset(); renderWeek(); renderHello();
}

// Vidutinė pilvo dienos trukmė abiem lygiais (puslapio tekstui)
function renderSummary() {
  [0, 1].forEach(l => {
    const min = Math.round(buildSteps(l, sessionList("core"), false).reduce((a, s) => a + s.secs, 0) / 60);
    document.querySelectorAll(`[data-dur="${l}"]`).forEach(el => { el.textContent = min; });
  });
}

let steps = buildSteps(), idx = -1, left = 0, timer = null, running = false, audio = null, wake = null;
// Laikas skaičiuojamas nuo žingsnio pabaigos momento (Date.now()), ne mažinant skaitiklį kas
// sekundę: foniniame skirtuke setInterval lėtėja, bet laikas vis tiek lieka tikslus.
let endAt = 0, remainMs = 0, trainedMs = 0, lastTick = 0;
function countTrained() { const now = Date.now(); if (running) trainedMs += now - lastTick; lastTick = now; }
const $ = id => document.getElementById(id);

function fmt(t) { const m = Math.floor(t / 60), s = t % 60; return m + ":" + String(s).padStart(2, "0"); }
function totalSecs() { return steps.reduce((a, s) => a + s.secs, 0); }
// Garsai generuojami Web Audio API, be garso failų. AudioContext sukuriamas paspaudus
// „Pradėti“, nes kitaip naršyklės (ypač iOS Safari) neleidžia jam groti.
function initAudio() {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === "suspended") audio.resume();
  } catch (e) {}
}
function beep(f, d, at = 0) {
  try {
    if (!audio) return;
    if (audio.state === "suspended") audio.resume();
    const t = audio.currentTime + at, o = audio.createOscillator(), g = audio.createGain();
    o.type = "sine"; o.frequency.value = f; o.connect(g); g.connect(audio.destination);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.25, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.start(t); o.stop(t + d + 0.02);
  } catch (e) {}
}
function buzz(pattern) { try { if (navigator.vibrate) navigator.vibrate(pattern); } catch (e) {} }
// Paskutinės 3 sekundės: trumpas pyptelėjimas kas sekundę
function countBeep() { beep(660, 0.09); buzz(40); }
// Perėjimas: darbui – du aukšti tonai, poilsiui / pasiruošimui – vienas žemesnis
function stepBeep(type) {
  if (type === "work") { beep(880, 0.18); beep(1175, 0.25, 0.2); buzz([180, 80, 180]); }
  else { beep(520, 0.3); buzz(250); }
}
function highlight(ex) {
  document.querySelectorAll(".ex").forEach((el, i) => el.classList.toggle("active", i === ex));
}
let againDay = null;
// Katytė bėga visos treniruotės eigos linija: bėga dirbant, sėdi per poilsį ir pauzę
function catRun(p, done = false) {
  const el = $("catrun"), st = steps[idx];
  el.style.setProperty("--p", Math.max(0, Math.min(1, p)));
  el.classList.toggle("go", running && !holding && !done && !!st && st.type !== "rest");
  el.classList.toggle("done", done);
}
function show() {
  const st = steps[idx];
  if (idx !== spokenIdx) { spokenIdx = idx; announce(st); }
  $("kind").textContent = holding ? (st.type === "intro" ? "Įžanga · klausyk" : "Klausyk ir pasiruošk")
    : st.type === "work" ? "Daryk" + (st.sub ? " · " + st.sub : "") : st.title;
  $("now").textContent = st.type === "intro" ? "Labas, Karolina!" : st.type === "work" ? st.title : st.type === "prep" ? EX[st.ex].name
    : st.between ? `Toliau: ${EX[st.ex].name}` : "Atsikvėpk";
  $("cue").textContent = st.cue;
  $("clock").textContent = holding ? "Klausyk…" : fmt(left);
  $("player").classList.toggle("is-listen", holding);
  $("bar").style.width = holding ? "0" : (100 * (st.secs - left) / st.secs) + "%";
  const remaining = steps.slice(idx + 1).reduce((a, s) => a + s.secs, 0) + left;
  catRun(1 - remaining / totalSecs());
  const list = [...new Set(steps.filter(s => s.type === "work").map(s => s.ex))];
  $("meta").textContent = `Pratimas ${list.indexOf(st.ex) + 1} iš ${list.length} · liko apie ${Math.ceil(remaining / 60)} min.`;
  highlight(steps[idx].ex);
  $("restctl").hidden = st.type !== "rest";
  $("player").classList.toggle("is-rest", st.type === "rest");
  try { showAnim(st.ex); } catch (e) {}
}
// Treniruotės metu rodoma dabartinio pratimo animacija
let pAnim = null, animEx = -1;
function showAnim(ex) {
  const box = $("panim");
  if (ex < 0) { box.hidden = true; animEx = -1; if (pAnim) { pAnim.destroy(); pAnim = null; } return; }
  box.hidden = false;
  if (ex === animEx && pAnim) return;
  if (pAnim) pAnim.destroy();
  animEx = ex; pAnim = ANIM.mount(box, EX[ex].anim, level);
}
// ---- Balsas: pranešimai žingsnio pradžioje ir ritmo nurodymai jo metu ----
const INTRO_SECS = 28;
// Ilga įžanga sakoma, kol bus išklausyta iki galo; vėliau – trumpa. „Atgal“ įžangos metu vėl
// paskaito visą. Išklausymas saugomas localStorage (karolina-heard).
const HEARD_KEY = "karolina-heard";
let heard = new Set(), fullIdx = -1;
try { heard = new Set(JSON.parse(localStorage.getItem(HEARD_KEY) || "[]")); } catch (e) {}
function markHeard(k) {
  if (heard.has(k)) return;
  heard.add(k);
  try { localStorage.setItem(HEARD_KEY, JSON.stringify([...heard])); } catch (e) {}
}
// Įžangoje nėra pratimų skaičiaus ir trukmės (jie priklauso nuo parinktų pratimų), kad visas
// variantas būtų iš anksto įrašytas
function introStep(full = !heard.has("intro"), type = dayType(), ez = easy, why = override ? "" : plan.why) {
  const ex = sessionList(type)[0];
  if (type === "relax")
    return { type: "intro", ex, title: "Įžanga", sub: "", secs: INTRO_SECS,
      cue: "Labas, Karolina. Diena buvo įtempta, todėl dabar – trumpas atsipalaidavimas: kvėpavimas ir vaiko poza. Atsigulk patogiai." };
  const reason = type === "recovery" && why === "garmin" ? "Garmin rodo, kad šiandien kūnui reikia daugiau poilsio, todėl vietoj stiprinimo darysim paslankumą ir tempimus. "
    : ez ? "Šiandien tavo kūnas pavargęs, todėl darysim lengvesnę versiją: mažiau serijų ir ilgesnis poilsis. " : "";
  const text = `Labas, Karolina. Šiandien – ${DAYTYPE[type].say}. ${reason}` + (full
    ? (type === "recovery" ? "Pradėsim nuo kvėpavimo, paskui paslankumas ir tempimai. " : "Pradėsim nuo kvėpavimo ir paslankumo, paskui stiprinimas, pabaigoje tempimai. ") + "Šios mankštos tikslas – sustiprinti giliuosius pilvo ir sėdmenų raumenis ir išmokti valdyti dubens padėtį. " +
      "Judėk lėtai, visą laiką kvėpuok ir niekada nedaryk per aštrų skausmą. Prieš kiekvieną pratimą pasakysiu, kaip atsigulti, ir suskaičiuosiu iki pradžios. "
    : "") + "Patiesk kilimėlį.";
  return { type: "intro", ex, title: "Įžanga", sub: "", cue: text, secs: INTRO_SECS };
}
let spokenIdx = -1, vKey = null, vFlags = {};
// Kol balsas skaito įžangą arba pasiruošimą (pratimas ir kaip atsigulti), laikmatis stovi
// („holding“). Po įžangos pereinama prie pasiruošimo; po pasiruošimo prasideda 5 s atgalinis
// laikas, pypsintis kas sekundę, ir pratimas prasideda žodžiu „Pradedam“. Jei naršyklė
// nepraneša apie kalbos pabaigą, po apskaičiuoto laiko tęsiama vis tiek.
let holding = false, gateId = 0, gateTimer = null;
const isGated = st => SAY.active && (st.type === "intro" || st.type === "prep");
const heardKey = st => (st.type === "intro" ? "intro" : null);
// key – kurį aprašymą pažymėti išklausytu, kai jis pasakomas iki galo (ne praleistas)
function gate(text, key) {
  const id = ++gateId;
  holding = true; clearTimeout(gateTimer);
  const done = () => { if (id === gateId && holding && running && key) markHeard(key); gateEnd(id); };
  SAY.say(text, true, done);
  gateTimer = setTimeout(done, Math.max(5000, text.length * 110 + 4000));
}
function gateEnd(id) {
  if (id !== gateId || !holding || !running) return;
  clearTimeout(gateTimer);
  setTimeout(() => {
    if (id !== gateId || !running || !holding) return;
    holding = false;
    if (steps[idx].type !== "prep") return next();
    // Atgalinis laikas: pirmas pyptelėjimas iškart, kiti – kas sekundę (tick)
    left = steps[idx].secs; endAt = Date.now() + left * 1000;
    countBeep(); show();
  }, 400);
}
function announce(st) {
  vKey = null; vFlags = {};
  const e = EX[st.ex];
  if (isGated(st)) {
    if (st.type === "prep") return gate(st.say, null);
    const full = fullIdx === idx || !heard.has("intro");
    return gate(introStep(full).cue, "intro");
  }
  if (st.type === "rest") {
    if (st.between) return SAY.say(`Poilsis. Atsikvėpk. Toliau – ${e.name}.`);
    return SAY.say(`Poilsis. Paskui ${ORD[st.nextSet] ? ORD[st.nextSet].toLowerCase() : ""} serija.`);
  }
  if (st.type === "work") {
    // Pratimas prasideda „Pradedam“; pirmą ritmo frazę voiceTick pasakys, kai ji baigsis
    const v = VOICE[e.anim](level, st.secs);
    vFlags.pre = "";
    SAY.say("Pradedam.");
    if (v.start) { SAY.say(v.start, false); vKey = "start"; }
  }
}
// Kviečiama kas 250 ms: pagal praėjusį žingsnio laiką pasako einamą ritmo nurodymą
function voiceTick() {
  if (!running || idx < 0 || idx >= steps.length || !SAY.active) return;
  const st = steps[idx], rem = (endAt - Date.now()) / 1000, t = st.secs - rem;
  if (st.type !== "work") return;
  const v = VOICE[EX[st.ex].anim](level, st.secs);
  if (v.beat) {
    const C = v.beat.reduce((a, b) => a + b[1], 0), k = Math.floor(t / C);
    let x = t - k * C, i = 0;
    while (i < v.beat.length - 1 && x >= v.beat[i][1]) { x -= v.beat[i][1]; i++; }
    const key = k + ":" + i;
    // Kol dar skamba ankstesnė frazė, naujos nepradedam (kad nenukirstų sakinio vidury) –
    // ji pasakoma, vos ankstesnė baigiasi, jei dar nepasibaigė jos laikas
    if (key === vKey || rem < 1 || SAY.busy) return;
    vKey = key;
    const b = v.beat[i], text = k > 0 && b[2] ? b[2] : b[0];
    if (vFlags.pre) { SAY.say(vFlags.pre + text); vFlags.pre = ""; } else SAY.say(text);
  } else {
    const n = Math.floor(t / v.every);
    if (n < 1 || rem < 3) return;
    const key = "r" + n;
    if (key === vKey || SAY.busy) return;
    vKey = key; SAY.say(v.remind[(n - 1) % v.remind.length]);
  }
}

function setStep(i) {
  gateId++; holding = false; clearTimeout(gateTimer);
  idx = i;
  left = steps[idx].secs; remainMs = left * 1000; endAt = Date.now() + remainMs;
}
function next() {
  fullIdx = -1;
  if (idx + 1 >= steps.length) { finish(); return; }
  setStep(idx + 1);
  stepBeep(steps[idx].type);
  show();
}
// „Atgal“: jei žingsnis jau eina ilgiau nei 3 s, pradeda jį iš naujo, kitaip grįžta į ankstesnį.
// Veikia ir per pauzę (laikmatis lieka sustabdytas).
function back() {
  if (idx < 0 || idx >= steps.length) return;
  // Klausantis trumpo aprašymo – pirmas „Atgal“ perskaito visą aprašymą
  if (holding && isGated(steps[idx]) && fullIdx !== idx) { fullIdx = idx; setStep(idx); spokenIdx = -1; show(); return; }
  const elapsed = steps[idx].secs * 1000 - (running ? endAt - Date.now() : remainMs);
  setStep(elapsed > 3000 || idx === 0 ? idx : idx - 1);
  spokenIdx = -1;
  show();
}
// Poilsį galima pratęsti arba baigti anksčiau
function extendRest() {
  if (idx < 0 || idx >= steps.length || steps[idx].type !== "rest") return;
  steps[idx] = Object.assign({}, steps[idx], { secs: steps[idx].secs + REST_PLUS });
  if (running) endAt += REST_PLUS * 1000; else remainMs += REST_PLUS * 1000;
  left += REST_PLUS;
  SAY.say("Dar penkiolika sekundžių poilsio.");
  show();
}
function endRest() { if (idx >= 0 && idx < steps.length && steps[idx].type === "rest") next(); }
function tick() {
  countTrained();
  if (holding) { endAt = Date.now() + steps[idx].secs * 1000; return; }
  voiceTick();
  const now = Date.now();
  let moved = false;
  // Jei skirtukas ilgai buvo fone, praleidžiami visi jau pasibaigę žingsniai
  while (endAt <= now) {
    if (idx + 1 >= steps.length) { finish(); return; }
    idx++; endAt += steps[idx].secs * 1000; moved = true;
  }
  const l = Math.ceil((endAt - now) / 1000);
  if (!moved && l === left) return;
  left = l;
  if (moved) stepBeep(steps[idx].type);
  else if (left <= (steps[idx].type === "prep" ? COUNTDOWN : 3) && left > 0) countBeep();
  show();
}
// Ekranas neužgęsta, kol vyksta treniruotė. Naršyklė užraktą atleidžia paslėpus skirtuką,
// todėl grįžus jis paprašomas iš naujo (žr. visibilitychange apačioje).
async function lockScreen() {
  if (!("wakeLock" in navigator) || wake || !running || document.visibilityState !== "visible") return;
  try {
    const w = await navigator.wakeLock.request("screen");
    if (!running) { w.release().catch(() => {}); return; }
    wake = w;
    w.addEventListener("release", () => { if (wake === w) wake = null; });
  } catch (e) { wake = null; }
}
function unlockScreen() {
  const w = wake; wake = null;
  if (w) w.release().catch(() => {});
}
function start() {
  if (running) { pause(); return; }
  running = true; $("start").textContent = "Pauzė";
  MEDIA.start(); initAudio();
  lastTick = Date.now();
  if (idx < 0 || idx >= steps.length) trainedMs = 0;
  lockScreen();
  if (idx < 0 || idx >= steps.length) { idx = -1; spokenIdx = -1; $("home").hidden = true; setMode("workout"); next(); }
  else { endAt = Date.now() + remainMs; if (isGated(steps[idx])) spokenIdx = -1; show(); }
  clearInterval(timer);
  timer = setInterval(tick, 250);
}
function pause() {
  countTrained();
  if (running) remainMs = Math.max(0, endAt - Date.now());
  running = false; clearInterval(timer); $("start").textContent = "Tęsti";
  clearTimeout(gateTimer); SAY.stop(); vKey = null;
  $("catrun").classList.remove("go");
  unlockScreen();
}
// Pabaigus treniruotę atsiveria įsivertinimo forma; treniruotė pažymima atlikta tik ją išsaugojus
let pending = null;
function finish() {
  countTrained();
  const counted = trainedMs >= totalSecs() * 1000 / 2;
  clearInterval(timer); running = false; idx = steps.length; unlockScreen();
  setTimeout(() => MEDIA.stop(), 8000); // leidžiam pabaigti pasakyti pabaigos sakinį
  beep(880, 0.2); beep(1175, 0.2, 0.22); beep(1568, 0.45, 0.44); buzz([200, 100, 200, 100, 400]);
  $("kind").textContent = "Baigta";
  $("now").textContent = dayType() === "relax" ? "Puiku! Gero vakaro." : "Puiku, šiandienos mankšta baigta!";
  $("cue").textContent = "Išgerk vandens ir trumpai įsivertink, kaip sekėsi: taip matysi pažangą, o kineziterapeutui bus ką parodyti.";
  $("clock").textContent = "0:00"; $("bar").style.width = "100%"; catRun(1, true);
  $("restctl").hidden = true; $("player").classList.remove("is-rest");
  $("start").textContent = "Pradėti iš naujo"; highlight(-1); showAnim(-1);
  $("home").hidden = false; $("player").classList.remove("is-listen");
  SAY.say(dayType() === "relax" ? "Puiku, Karolina! Gero vakaro ir ramaus miego." : "Puiku, Karolina! Mankšta baigta. Išgerk vandens ir trumpai įsivertink, kaip sekėsi.");
  if (counted) {
    pending = { type: dayType(), min: Math.round(trainedMs / 60000), easy, ex: [...new Set(steps.filter(s => s.type === "work").map(s => EX[s.ex].anim))] };
    $("meta").textContent = "Užpildyk trumpą įsivertinimą, kad treniruotė būtų pažymėta kaip atlikta.";
    $("rate").hidden = false;
    openRate();
  } else {
    pending = null; $("rate").hidden = true;
    $("meta").textContent = "Daugiau nei pusė treniruotės praleista, todėl ji neįskaityta.";
  }
}
function openRate() {
  if (!pending) return;
  const f = $("rateform");
  f.reset(); $("wherebox").hidden = true;
  $("manualbox").hidden = !pending.manual;
  if (pending.manual) { $("rateday").value = $("rateday").max = dayKey(new Date()); $("ratetype").value = pending.type; }
  $("ratesub").textContent = `${DAYTYPE[pending.type].name}, ${level + 1} lygis${pending.easy ? ", lengvesnė versija" : ""}, apie ${pending.min} min.`;
  const box = $("ratebox");
  if (box.showModal) box.showModal(); else box.setAttribute("open", "");
}
function closeRate() { const box = $("ratebox"); if (box.close) box.close(); else box.removeAttribute("open"); }
function saveRate(ev) {
  ev.preventDefault();
  const f = $("rateform");
  if (!f.reportValidity() || !pending) return;
  const d = new FormData(f), pain = d.get("pain");
  const day = pending.manual && d.get("day") || dayKey(new Date()), isToday = day === dayKey(new Date());
  if (pending.manual && d.get("type") && d.get("type") !== pending.type) {
    pending.type = d.get("type"); pending.ex = sessionList(pending.type).map(i => EX[i].anim);
  }
  const h = isToday ? HEALTH.today() : null, r = isToday ? HEALTH.readiness() : null, before = streaks();
  const at = markDone(pending.type, { min: pending.min, rpe: +d.get("rpe"), feel: d.get("feel"), pain, easy: pending.easy || undefined, ex: pending.ex,
    h: h ? { steps: h.steps, sleep: h.sleep, rhr: h.rhr, bb: h.bb, hrv: h.hrv, ready: r ? r.score : undefined } : undefined,
    where: pain !== "ne" ? String(d.get("where") || "").trim() : "", note: String(d.get("note") || "").trim() }, day);
  // Nauji pasiekimai įrašomi prie šiandienos įrašo (rodomi pasisveikinimo ekrane)
  const got = milestones(before, streaks());
  if (got.length) { const log = loadLog(); log[at].m = got; saveLog(log); }
  pending = null; closeRate();
  $("rate").hidden = true;
  $("meta").textContent = "Treniruotė pažymėta kaip atlikta." + (got.length ? " 🏅 " + got.join(" ") : "");
  if (pain === "taip" || d.get("feel") === "blogiau")
    $("cue").textContent = "Pasižymėjai skausmą ar blogesnę savijautą. Kitą kartą tą pratimą daryk švelniau arba praleisk ir būtinai pasakyk kineziterapeutui. Jei skausmas aštrus ar plinta į koją, mankštą sustabdyk ir kreipkis į gydytoją.";
  renderWeek(); renderHistory(); renderHello();
  if (got.length) buzz([80, 60, 80, 60, 200]);
}
// ---- Serijos ir pasiekimai ----
// Dienų serija: kiek dienų iš eilės kas nors daryta (įskaitant vakarinį atsipalaidavimą); šiandien
// dar nedaryta serijos nenutraukia. Savaičių serija: kiek savaičių iš eilės pasiektas tikslas
// (WEEK_GOAL treniruočių, be atsipalaidavimo) – poilsio dienos jos nenutraukia.
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const monday = d => addDays(d, -weekday(d));
function streaks(log = loadLog()) {
  const days = new Set(log.map(x => x.d)), train = log.filter(x => x.t !== "relax");
  const today = new Date(), doneToday = days.has(dayKey(today));
  let day = 0;
  for (let d = doneToday ? today : addDays(today, -1); days.has(dayKey(d)); d = addDays(d, -1)) day++;
  let dayBest = 0, run = 0, prev = null;
  [...days].sort().forEach(k => { const d = new Date(k + "T12:00"); run = prev && Math.round((d - prev) / 864e5) === 1 ? run + 1 : 1; dayBest = Math.max(dayBest, run); prev = d; });
  // Treniruotės pagal savaitę (pirmadienio data)
  const perWeek = {};
  new Set(train.map(x => x.d + "|" + x.t)).forEach(k => { const w = dayKey(monday(new Date(k.slice(0, 10) + "T12:00"))); perWeek[w] = (perWeek[w] || 0) + 1; });
  const thisMon = monday(today), thisWeek = perWeek[dayKey(thisMon)] || 0;
  let week = 0;
  for (let m = thisWeek >= WEEK_GOAL ? thisMon : addDays(thisMon, -7); (perWeek[dayKey(m)] || 0) >= WEEK_GOAL; m = addDays(m, -7)) week++;
  let weekBest = 0, wrun = 0, wprev = null;
  Object.keys(perWeek).sort().forEach(k => {
    if (perWeek[k] < WEEK_GOAL) { wrun = 0; wprev = null; return; }
    const m = new Date(k + "T12:00");
    wrun = wprev && Math.round((m - wprev) / 864e5) === 7 ? wrun + 1 : 1; weekBest = Math.max(weekBest, wrun); wprev = m;
  });
  return { day, dayBest, week, weekBest, thisWeek, total: new Set(train.map(x => x.d + "|" + x.t)).size, doneToday };
}
// Kas naujai pasiekta, palyginus serijas prieš ir po įrašo
function milestones(a, b) {
  const m = [];
  if (b.total === 1 && a.total === 0) m.push("Pirmoji treniruotė! Puiki pradžia.");
  [5, 10, 25, 50, 100, 200].forEach(n => { if (a.total < n && b.total >= n) m.push(`${n} treniruočių iš viso!`); });
  [3, 7, 14, 30, 60, 100].forEach(n => { if (a.day < n && b.day >= n) m.push(`${n} dienų serija!`); });
  if (a.thisWeek < WEEK_GOAL && b.thisWeek >= WEEK_GOAL) m.push("Savaitės tikslas pasiektas!");
  [2, 4, 8, 12, 26, 52].forEach(n => { if (a.week < n && b.week >= n) m.push(`${n} savaitės iš eilės su tikslu!`); });
  if (b.day > a.day && b.day > a.dayBest && a.dayBest >= 3) m.push("Naujas dienų serijos rekordas!");
  return m;
}
function renderStreak() {
  const s = streaks(), left = Math.max(0, WEEK_GOAL - s.thisWeek), pill = $("streakpill");
  pill.innerHTML = `<span aria-hidden="true">🔥</span> <b>${s.day}</b>`;
  pill.title = `${s.day} d. iš eilės`;
  pill.classList.toggle("hot", s.day > 0);
  const tile = (ico, val, label, sub, extra = "") => `<div class="stat"><span class="stat-ico" aria-hidden="true">${ico}</span><b>${val}</b><span>${label}</span>${sub ? `<small>${sub}</small>` : ""}${extra}</div>`;
  $("statgrid").innerHTML =
    tile("🔥", s.day, "d. iš eilės", `rekordas ${s.dayBest}`) +
    tile("⭐", s.week, "sav. su tikslu iš eilės", `rekordas ${s.weekBest}`) +
    tile("🎯", `${s.thisWeek}/${WEEK_GOAL}`, "šią savaitę", left ? `dar ${left} iki tikslo` : "tikslas pasiektas ✓",
      `<i class="stat-bar"><i style="width:${Math.min(100, 100 * s.thisWeek / WEEK_GOAL)}%"></i></i>`) +
    tile("💪", s.total, "treniruočių iš viso", "");
  return s;
}
// Treniruotė padaryta be laikmačio (arba neužpildytas įsivertinimas) – pažymima ranka
$("markdone").onclick = () => {
  const list = sessionList(dayType());
  pending = { type: dayType(), min: Math.round(buildSteps(level, list).reduce((a, s) => a + s.secs, 0) / 60), easy, ex: list.map(i => EX[i].anim), manual: true };
  openRate();
};

// Įrašų istorija (naujausi viršuje) ir kopijavimas tekstu
const FEEL = { 1: "labai lengva", 2: "lengva", 3: "vidutiniškai", 4: "sunku", 5: "labai sunku" };
function entryText(x) {
  const parts = [`${x.d} · ${TYPE_NAME(x.t).toLowerCase()}${x.lvl ? `, ${x.lvl} lygis` : ""}${x.easy ? ", lengvesnė" : ""}${x.min ? `, ${x.min} min.` : ""}`];
  if (x.rpe) parts.push(`sunkumas ${x.rpe}/5 (${FEEL[x.rpe]})`);
  if (x.feel) parts.push(`savijauta: ${x.feel}`);
  if (x.pain) parts.push(`skausmas: ${x.pain}${x.where ? ` (${x.where})` : ""}`);
  if (x.note) parts.push(`pastabos: ${x.note}`);
  if (x.h) parts.push(`Garmin: ${HEALTH.text(x.h)}${x.h.ready != null ? `, pasiruošimas ${x.h.ready}/100` : ""}`);
  return parts.join(" · ");
}
function renderHistory() {
  const log = loadLog().slice().reverse().slice(0, 30);
  $("histlist").innerHTML = log.length
    ? `<ul>${log.map(x => `<li class="${x.pain && x.pain !== "ne" ? "pain" : ""}">${esc(entryText(x))}</li>`).join("")}</ul>`
    : "<p>Įrašų dar nėra. Jie atsiras pabaigus treniruotę ir užpildžius įsivertinimą.</p>";
  $("histcopy").hidden = !log.length;
}
async function copyHistory() {
  const days = HEALTH.all().slice().reverse().slice(0, 60);
  const text = "Karolinos mankštos įrašai\n" + loadLog().slice().reverse().map(entryText).join("\n") +
    (days.length ? "\n\nGarmin duomenys pagal dienas\n" + days.map(x => `${x.d} · ${HEALTH.text(x)}`).join("\n") : "");
  try { await navigator.clipboard.writeText(text); $("histcopy").textContent = "Nukopijuota ✓"; }
  catch (e) { prompt("Nukopijuok įrašus:", text); }
  setTimeout(() => { $("histcopy").textContent = "Kopijuoti įrašus (kineziterapeutui)"; }, 2000);
}
function reset() {
  pause(); idx = -1; spokenIdx = -1; pending = null; $("rate").hidden = true; steps = buildSteps();
  if (SAY.active) steps.unshift(introStep());
  $("start").textContent = "Pradėti"; $("kind").textContent = "Pasiruošk";
  $("now").textContent = "Patiesk kilimėlį ir paspausk „Pradėti“";
  $("cue").textContent = "Prieš kiekvieną seriją balsas pasako pratimą ir kaip atsigulti, tada 5 s atgalinis laikas ir „Pradedam“. Animacija rodo, kaip daroma. Viskas persijungia automatiškai.";
  $("clock").textContent = fmt(totalSecs()); $("bar").style.width = "0"; catRun(0);
  $("meta").textContent = `Visa treniruotė: apie ${Math.round(totalSecs() / 60)} min.`; highlight(-1); showAnim(-1);
  $("restctl").hidden = true; $("player").classList.remove("is-rest", "is-listen"); $("home").hidden = true;
}
function setLevel(l) {
  level = l;
  try { localStorage.setItem("karolina-level", String(l)); } catch (e) {}
  $("hl1").setAttribute("aria-pressed", l === 0);
  $("hl2").setAttribute("aria-pressed", l === 1);
  renderCards(); reset(); renderWeek();
}
$("videolist").addEventListener("click", ev => {
  const btn = ev.target.closest(".embed-btn");
  if (btn) playVideo(btn.parentElement);
});
// Nuoroda „Žiūrėti video“ kortelėje nuveda į video skiltį ir iškart paleidžia video
$("cards").addEventListener("click", ev => {
  const a = ev.target.closest("[data-play]");
  if (a) playVideo(document.querySelector(`#vid${a.dataset.play} .embed`));
});
document.querySelectorAll("[data-type]").forEach(b => { b.onclick = () => chooseType(b.dataset.type); });
$("rate").onclick = openRate;
$("rateform").addEventListener("submit", saveRate);
$("ratelater").onclick = closeRate;
$("rateform").addEventListener("change", ev => {
  if (ev.target.name === "pain") $("wherebox").hidden = ev.target.value === "ne";
});
$("histcopy").onclick = copyHistory;
// Pasisveikinimas: šiandienos planas ir mygtukas „Pradėkime“ (paleidžia balsą ir treniruotę)
const PRAISE = ["Šaunuolė!", "Puikiai padirbėta!", "Taip ir toliau!", "Nuostabu!", "Dar vienas žingsnis pirmyn!"];
const MONTHS = ["sausio", "vasario", "kovo", "balandžio", "gegužės", "birželio", "liepos", "rugpjūčio", "rugsėjo", "spalio", "lapkričio", "gruodžio"];
function renderHello() {
  // Šiandienos pasiūlymas perskaičiuojamas (pvz., atėjus Garmin duomenims), jei treniruotė nevyksta
  if (!(idx >= 0 && idx < steps.length)) {
    const before = dayType() + easy;
    refreshPlan();
    if (before !== dayType() + easy) reset();
  }
  const now = new Date(), log = loadLog(), type = dayType();
  $("todaydate").textContent = `${WEEKDAYS[weekday(now)]}, ${MONTHS[now.getMonth()]} ${now.getDate()} d.`;
  const s = renderStreak();
  renderWeek();
  // Šiandien jau atlikta – tik pagyrimas
  const doneEntry = log.filter(x => x.d === dayKey(now) && x.t !== "relax").pop();
  const praise = !!doneEntry && againDay !== dayKey(now);
  $("donecard").hidden = !praise; $("todo").hidden = praise;
  if (praise) {
    const left = Math.max(0, WEEK_GOAL - s.thisWeek);
    $("donetitle").textContent = PRAISE[(now.getDate() + now.getMonth()) % PRAISE.length];
    $("donetext").textContent = `${TYPE_NAME(doneEntry.t).replace(/ \(.*\)/, "")} atlikta.` + (s.day > 1 ? ` 🔥 ${s.day} d. iš eilės.` : "") +
      (left ? ` Iki savaitės tikslo liko ${left}.` : " Savaitės tikslas pasiektas!") + " Dabar ilsėkis – rytoj tęsim.";
    const m = log.find(x => x.d === dayKey(now) && x.m && x.m.length);
    $("milestone").textContent = m ? "🏅 " + m.m.join(" ") : "";
    $("milestone").hidden = !m;
  }
  // Šiandienos treniruotės kortelė
  const list = sessionList(type), min = Math.round(buildSteps(level, list).reduce((a, x) => a + x.secs, 0) / 60);
  $("plantitle").textContent = DAYTYPE[type].name.replace(" (paslankumas ir tempimai)", "");
  $("planmeta").textContent = `${plural(list.length, "pratimas", "pratimai", "pratimų")} · apie ${min} min. · ${level + 1} lygis${easy ? " · lengvesnė" : ""}`;
  const why = override ? "" : plan.why === "garmin" ? "Garmin rodo, kad kūnui šiandien reikia daugiau poilsio."
    : plan.why === "rotation" ? "Po stiprinimo dienų – atsigavimas." : "";
  $("planwhy").textContent = why; $("planwhy").hidden = !why;
  $("planexsum").textContent = `Pratimai (${list.length})`;
  $("planlist").innerHTML = list.map(i => `<li><span>${esc(EX[i].name)}</span><small>${GROUPS[EX[i].group]}</small></li>`).join("");
  document.querySelectorAll("[data-type]").forEach(b => b.setAttribute("aria-pressed", b.dataset.type === type));
  renderHealth(type);
  $("voicenote").textContent = !SAY.supported ? "Ši naršyklė nemoka kalbėti, todėl instrukcijos bus rodomos ekrane."
    : voiceRefused ? "Lietuviško balso nėra, instrukcijos bus rodomos ekrane."
    : !SAY.available ? `Puslapis nerado lietuviško balso (naršyklė mato balsų: ${SAY.count}). Paspausk „Išbandyti balsą“.`
    : SAY.on ? "Įsijunk garsą – vesiu balsu per visą treniruotę."
    : "Balsas išjungtas – instrukcijos bus rodomos ekrane.";
  document.body.classList.toggle("voice-on", SAY.active);
  $("vtestbox").hidden = !SAY.supported || SAY.available || voiceRefused;
  $("voice").hidden = !SAY.available;
  $("voice").textContent = SAY.on ? "Balsas: įjungtas" : "Balsas: išjungtas";
  $("voice").setAttribute("aria-pressed", SAY.on);
}
// Garmin duomenys (js/health.js): pasiruošimo kortelė (žiedas su balu, rodiklių plytelės su
// 14 dienų grafiku, pasiūlymas) ir prisitaikanti treniruotė. Būsenos žinutės – #healthnote.
let sparkKey = null;
const C_RING = 2 * Math.PI * 52;
const fmt1 = v => String(Math.round(v * 10) / 10).replace(".", ",");
function renderHealth(type) {
  const t = HEALTH.today(), r = HEALTH.readiness(), p = [], gs = HEALTH.garminState;
  if (gs === "need-key") p.push("Garmin duomenys paruošti. Įvesk raktą, kad galėčiau juos parodyti.");
  if (gs === "bad-key") p.push("Garmin raktas netinka. Įvesk jį iš naujo.");
  if (HEALTH.received && !t) p.push("Nuoroda iš telefono atėjo, bet joje nebuvo skaičių. Patikrink „Shortcut“ nustatymus.");
  if (HEALTH.badSleep != null) p.push(`Miego trukmė atėjo neteisinga (${String(HEALTH.badSleep).replace(".", ",")} val.), todėl jos neišsaugojau.`);
  if (t && !r) p.push(`Iš Garmin: ${HEALTH.text(t)}.`);
  $("healthnote").textContent = p.join(" ");
  $("healthnote").hidden = !p.length;
  $("garminkey").hidden = gs !== "need-key" && gs !== "bad-key";
  renderReady(t, r, type);
  $("letsgo").textContent = easy ? "Pradėti · lengvesnė versija" : "Pradėti";
}
function renderReady(t, r, type) {
  const box = $("ready");
  box.hidden = !r; $("trends").hidden = !r;
  if (!r) return;
  const sc = r.score, fg = $("ringfg");
  $("readyscore").textContent = sc;
  box.dataset.zone = sc >= 70 ? "good" : sc >= 45 ? "mid" : "low";
  // Žiedas užsipildo animuotai (CSS transition)
  fg.style.strokeDasharray = C_RING;
  if (!fg.dataset.drawn) { fg.style.strokeDashoffset = C_RING; fg.getBoundingClientRect(); fg.dataset.drawn = "1"; }
  fg.style.strokeDashoffset = C_RING * (1 - sc / 100);
  $("readytitle").textContent = sc >= 70 ? "Gerai pailsėjusi" : sc >= 45 ? "Vidutiniškai pailsėjusi" : "Kūnas pavargęs";
  const up = HEALTH.garminUpdated ? new Date(HEALTH.garminUpdated * 1000) : null;
  $("readywhen").textContent = up ? `Garmin duomenys ${dayKey(up) === dayKey(new Date()) ? "šiandien" : dayKey(up)} ${String(up.getHours()).padStart(2, "0")}:${String(up.getMinutes()).padStart(2, "0")}` : "";
  // Plytelės: rodiklis, reikšmė ir pokytis nuo įprasto; paspaudus – 14 dienų grafikas
  const tiles = r.parts.map(p => {
    let delta = "", cls = "";
    if (p.base != null && p.cur != null && Math.abs(p.cur - p.base) >= (p.key === "sleep" ? 0.2 : 1)) {
      const diff = p.cur - p.base, good = p.lowerBetter ? diff < 0 : diff > 0;
      cls = good ? "up" : "down";
      delta = `${diff > 0 ? "↑" : "↓"} ${fmt1(Math.abs(diff))}${p.unit}`;
    } else if (p.base != null && p.cur != null) delta = "kaip įprastai";
    return { key: p.key, label: p.label, value: p.value, delta, cls };
  });
  renderOverview();
  if (sparkKey && !tiles.some(x => x.key === sparkKey)) sparkKey = null;
  $("tiles").innerHTML = tiles.map(x => `<button class="tile ${x.cls}" type="button" data-key="${x.key}" aria-pressed="${x.key === sparkKey}">
    <span class="tl">${esc(x.label)}</span><b>${esc(x.value)}</b><span class="td">${esc(x.delta)}</span></button>`).join("");
  renderSpark();
  // Pasiūlymas ir mygtukai
  const tip = [], acts = [];
  const weak = r.parts.filter(p => p.s < 45).map(p => `${{ sleep: "miegas", rhr: "ramybės pulsas" }[p.key] || p.label} ${p.value}`);
  if (sc < 45) tip.push(weak.length ? weak.join(", ") + "." : "Kūnui reikia poilsio.");
  else if (!override && plan.type === "recovery") tip.push("Vakar buvo įtempta diena.");
  else if (sc < 70) tip.push(`Stiprinimas šiandien lengvesnis.${level ? " Geriau 1 lygis." : ""}`);
  else tip.push("Puiki diena treniruotei.");
  if (sc < 70 && level) acts.push(`<button class="btn ghost" type="button" data-act="lvl1">Rinktis 1 lygį</button>`);
  if (sc >= 70 && !level) {
    const good = [1, 2].every(i => { const x = HEALTH.readiness(dayKey(new Date(Date.now() - i * 864e5))); return x && x.score >= 70; });
    if (good) { tip.push("Jau kelias dienas gerai pailsėjusi, gal pabandyk 2 lygį?"); acts.push(`<button class="btn ghost" type="button" data-act="lvl2">Pabandyti 2 lygį</button>`); }
  }
  // Atsipalaidavimas siūlomas vakare; jei vakar buvo įtempta – ir paaiškinama kodėl
  const ov = HEALTH.overview();
  if (new Date().getHours() >= 17 || (ov && ov.load === "stress")) {
    const min = Math.max(1, Math.round(buildSteps(level, sessionList("relax"), false).reduce((a, s) => a + s.secs, 0) / 60));
    acts.push(`<button class="btn ghost" type="button" data-act="relax">Atsipalaidavimas · ${min} min.</button>`);
  }
  acts.push(`<button class="seg" type="button" data-act="easy" aria-pressed="${easy}">Lengvesnė versija</button>`);
  $("readytip").textContent = tip.join(" ");
  $("readyactions").innerHTML = acts.join("");
}
// Praeitos paros apžvalga: Body Battery kreivė (vakar 0:00 – rytas, naktis pažymėta),
// vakar dienos krūvis, naktis ir trumpas apibendrinimas
const hm = ms => { const d = new Date(ms); return `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`; };
const minsTxt = m => m >= 60 ? `${Math.floor(m / 60)} val. ${m % 60} min.` : `${m} min.`;
function renderOverview() {
  const ov = HEALTH.overview(), box = $("dayov");
  box.hidden = !ov;
  if (!ov) return;
  const { y, night: n, curve } = ov;
  const ch = $("bbchart");
  if (curve.length >= 4) {
    const W = 300, H = 110, L = 22, R = 6, T = 8, B = 18;
    const now = new Date(), y0 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1).getTime() / 60000;
    const x1 = Math.max(curve[curve.length - 1][0], y0 + 24 * 60 + 60);
    const X = m => L + (m - y0) * (W - L - R) / (x1 - y0), Y = v => T + (100 - v) * (H - T - B) / 100;
    const pts = curve.filter(p => p[0] >= y0).map(p => `${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`);
    const sleepRect = n.start && n.end ? `<rect class="bb-night" x="${X(n.start / 60000)}" y="${T}" width="${Math.max(0, X(n.end / 60000) - X(n.start / 60000))}" height="${H - T - B}"/>
      <text class="bb-lbl" x="${(X(n.start / 60000) + X(n.end / 60000)) / 2}" y="${T + 11}" text-anchor="middle">miegas</text>` : "";
    const tick = (m, txt, anchor = "middle") => m >= y0 && m <= x1 ? `<text class="bb-lbl" x="${X(m)}" y="${H - 4}" text-anchor="${anchor}">${txt}</text><line class="bb-tick" x1="${X(m)}" x2="${X(m)}" y1="${H - B}" y2="${H - B + 3}"/>` : "";
    const last = curve[curve.length - 1];
    ch.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Body Battery per praeitą parą">
      ${[25, 50, 75].map(v => `<line class="bb-grid" x1="${L}" x2="${W - R}" y1="${Y(v)}" y2="${Y(v)}"/><text class="bb-lbl" x="${L - 4}" y="${Y(v) + 3}" text-anchor="end">${v}</text>`).join("")}
      ${sleepRect}
      <polyline class="bb-line" points="${pts.join(" ")}"/>
      <circle class="sp-now" cx="${X(last[0])}" cy="${Y(last[1])}" r="4.5"/>
      ${tick(y0, "vakar", "start")}${tick(y0 + 12 * 60, "12:00")}${tick(y0 + 24 * 60, "0:00")}
    </svg><p class="bb-cap">Body Battery: dieną senka, naktį kraunasi. Paskutinė reikšmė ${last[1]}.</p>`;
    ch.hidden = false;
  } else ch.hidden = true;
  const li = a => a.filter(Boolean).map(x => `<li>${x}</li>`).join("");
  $("ovday").innerHTML = y ? li([
    y.steps != null && `<b>${HEALTH.fmtNum(y.steps)}</b> žingsnių`,
    y.intensity != null && `<b>${y.intensity}</b> min. aktyvumo`,
    y.stress != null && `stresas vid. <b>${y.stress}</b>${y.stressHighMin ? `, aukštas ${minsTxt(y.stressHighMin)}` : ""}`,
    y.bbLow != null && `Body Battery nukrito iki <b>${y.bbLow}</b>`
  ]) : "<li>Vakar dienos duomenų nėra.</li>";
  $("ovnight").innerHTML = li([
    n.sleep != null && `miegas <b>${fmt1(n.sleep)} val.</b>${n.start && n.end ? ` (${hm(n.start)}–${hm(n.end)})` : ""}`,
    n.score != null && `miego įvertis <b>${n.score}</b>/100`,
    n.charged != null ? `Body Battery <b>${n.charged >= 0 ? "+" : ""}${n.charged}</b> (${n.bbStart} → ${n.bbWake})` : n.bbWake != null && `Body Battery pabudus <b>${n.bbWake}</b>`,
    n.hrv != null && `HRV <b>${n.hrv}</b> ms`
  ]) || "<li>Nakties duomenų nėra.</li>";
  const LOAD = { stress: "įtempta", active: "aktyvi", calm: "rami" }, REST = { good: "geras poilsis", ok: "pakankamas", low: "per mažas" };
  const chip = (id, txt, cls) => { $(id).textContent = txt || ""; $(id).hidden = !txt; $(id).dataset.k = cls || ""; };
  chip("loadchip", LOAD[ov.load], ov.load); chip("restchip", REST[ov.rest], ov.rest);
  const s = [];
  if (ov.load === "stress") s.push(`Vakar buvo įtempta diena${y.stress != null ? ` (vidutinis stresas ${y.stress})` : ""}${y.bbLow != null ? `, Body Battery nusileido iki ${y.bbLow}` : ""}.`);
  else if (ov.load === "active") s.push("Vakar buvo aktyvi diena.");
  else if (ov.load === "calm") s.push("Vakar buvo rami diena.");
  if (ov.rest === "good") s.push(`Naktį gerai pailsėjai${n.charged != null ? ` ir pasikrovei ${n.charged} Body Battery` : ""}.`);
  else if (ov.rest === "ok") s.push(`Naktį pailsėjai pakankamai${n.charged != null ? ` (+${Math.max(0, n.charged)} Body Battery)` : ""}, bet ne iki galo.`);
  else if (ov.rest === "low") s.push(`Naktį organizmas atsigavo per mažai${n.charged != null ? ` (tik ${n.charged >= 0 ? "+" : ""}${n.charged} Body Battery)` : ""}${n.sleep != null ? `, miegojai ${fmt1(n.sleep)} val.` : "."}`);
  $("ovsum").textContent = s.join(" ");
}
// Paskutinių 14 dienų grafikas su įprasta reikšme (punktyrinė linija)
function renderSpark() {
  const box = $("spark");
  box.hidden = !sparkKey;
  if (!sparkKey) return;
  const data = HEALTH.series(sparkKey, 14), vals = data.filter(x => x.v != null).map(x => x.v);
  if (vals.length < 2) { box.innerHTML = "<p>Kol kas per mažai duomenų grafikui.</p>"; return; }
  const W = 280, H = 84, pad = 10, base = sparkKey === "steps" ? null : HEALTH.baseline(undefined, sparkKey);
  let lo = Math.min(...vals, base ?? Infinity), hi = Math.max(...vals, base ?? -Infinity);
  if (hi === lo) { hi += 1; lo -= 1; }
  const X = i => pad + i * (W - 2 * pad) / (data.length - 1), Y = v => H - pad - (v - lo) * (H - 2 * pad) / (hi - lo);
  const pts = data.map((x, i) => x.v == null ? null : [X(i), Y(x.v)]).filter(Boolean);
  const last = data[data.length - 1].v != null ? pts[pts.length - 1] : null;
  const show = v => sparkKey === "steps" ? HEALTH.fmtNum(Math.round(v)) : fmt1(v);
  box.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Paskutinių 14 dienų grafikas">
    ${base != null ? `<line class="sp-base" x1="${pad}" x2="${W - pad}" y1="${Y(base)}" y2="${Y(base)}"/>` : ""}
    <polyline class="sp-line" points="${pts.map(p => p.join(",")).join(" ")}"/>
    ${pts.map(p => `<circle class="sp-dot" cx="${p[0]}" cy="${p[1]}" r="2.5"/>`).join("")}
    ${last ? `<circle class="sp-now" cx="${last[0]}" cy="${last[1]}" r="5"/>` : ""}
  </svg><p class="sp-legend"><span>prieš 2 sav.</span><span>šiandien</span></p>
  <p class="sp-info">${base != null ? `Punktyras – įprastai (${show(base)}). ` : ""}Mažiausia ${show(Math.min(...vals))}, didžiausia ${show(Math.max(...vals))}.</p>`;
}
$("tiles").addEventListener("click", ev => {
  const b = ev.target.closest(".tile");
  if (!b) return;
  sparkKey = sparkKey === b.dataset.key ? null : b.dataset.key;
  $("tiles").querySelectorAll(".tile").forEach(x => x.setAttribute("aria-pressed", x.dataset.key === sparkKey));
  renderSpark();
});
$("readyactions").addEventListener("click", ev => {
  const b = ev.target.closest("[data-act]");
  if (!b) return;
  const act = b.dataset.act;
  if (act === "easy") { easy = !easy; easyTouched = dayKey(new Date()); reset(); renderHello(); }
  else if (act === "lvl1" || act === "lvl2") { setLevel(act === "lvl1" ? 0 : 1); renderHello(); }
  else if (act === "relax") startWorkout("relax");
});
$("garminkey").onclick = () => {
  const k = prompt("Įklijuok Garmin duomenų raktą (DUOMENU_RAKTAS):");
  if (k && k.trim()) HEALTH.setGarminKey(k);
};
HEALTH.onChange(() => renderHello());
let voiceRefused = false;
$("vtest").onclick = () => { SAY.test(); $("vask").hidden = false; };
$("vyes").onclick = () => { SAY.force = true; SAY.on = true; $("vask").hidden = true; renderHello(); if (!(idx >= 0 && idx < steps.length)) reset(); };
$("vno").onclick = () => { voiceRefused = true; $("vask").hidden = true; renderHello(); };
// Ekranai: „today“, „stats“, „ex“ (apatinė juosta) ir „workout“ – treniruotė per visą ekraną
function setMode(m) {
  document.body.dataset.mode = m; window.scrollTo(0, 0);
  document.querySelectorAll("[data-tab]").forEach(b => { if (b.dataset.tab === m) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); });
}
document.querySelectorAll("[data-tab]").forEach(b => { b.onclick = () => setMode(b.dataset.tab); });
$("streakpill").onclick = () => setMode("stats");
// Jau atlikus šiandienos mankštą galima ją pakartoti – vėl parodoma treniruotės kortelė
$("again").onclick = () => { againDay = dayKey(new Date()); renderHello(); };
function goHome() { closeRate(); override = null; reset(); MEDIA.stop(); renderHello(); setMode("today"); }
// type – „relax“ arba null (pagal savaitės planą)
function startWorkout(type = null) {
  if (running) return;
  SAY.recheck();
  if (type) override = type;
  reset(); setMode("workout"); start();
}
$("letsgo").onclick = () => startWorkout(null);
$("quit").onclick = () => {
  if (idx >= 0 && idx < steps.length && !confirm("Nutraukti treniruotę? Ji nebus įskaityta.")) return;
  goHome();
};
$("home").onclick = goHome;
$("hl1").onclick = () => { setLevel(0); renderHello(); };
$("hl2").onclick = () => { setLevel(1); renderHello(); };
$("voice").onclick = () => {
  SAY.on = !SAY.on;
  renderHello();
  if (idx < 0 || idx >= steps.length) reset();
};
SAY.onChange(() => { renderHello(); if (!(idx >= 0 && idx < steps.length)) reset(); });
$("start").onclick = start;
$("back").onclick = back;
$("skip").onclick = () => { if (idx >= 0 && idx < steps.length) next(); };
$("reset").onclick = reset;
$("restplus").onclick = extendRest;
$("restend").onclick = endRest;
// Jei svetainė jau atidaryta, „Shortcut“ nuoroda gali pakeisti tik # dalį – puslapis neperkraunamas
window.addEventListener("hashchange", () => { if (HEALTH.readLink()) renderHello(); });
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  const today = weekday(new Date());
  if (!(idx >= 0 && idx < steps.length) && lastToday !== today) { override = null; refreshPlan(); reset(); renderHello(); }
  lastToday = today;
  renderWeek();
  if (running) { tick(); lockScreen(); }
  else HEALTH.syncGarmin();
});
renderSummary();
renderVideos();
renderWeek();
renderHistory();
renderHello();
setLevel(level);
HEALTH.syncGarmin();
