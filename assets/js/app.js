/* ============================================================
   AQUASENSE | Brawijaya Team: site content & behaviour
   Edit the CONTACT and data arrays below to update the site.
   ============================================================ */
const LOGOS={}; // optional partner logos, e.g. {ub:"assets/img/logos/ub.png"}

/* Contact details: fill in any of these and they appear on the Contact page.
   EMAIL also enables the contact form (opens the visitor's mail app). */
const CONTACT={email:"",instagram:"",linkedin:"",whatsapp:""};
const EMAIL=CONTACT.email;

/* Images live in assets/img (full size) and assets/img/thumb (lightweight). */
const im=(n,e="jpg")=>({f:`assets/img/${n}.${e}`,t:`assets/img/thumb/${n}.${e}`});
const IMG={logo:{f:"assets/img/logo.png",t:"assets/img/logo.png"},dash:im("dashboard"),shot:im("render-3d"),proto:im("prototype"),team:im("award-gold"),booth:im("booth-team"),
 display:im("booth-display"),boothTeam:im("booth-group"),boothFlag:im("booth-flag"),selfie:im("booth-selfie"),selfie2:im("booth-selfie-2"),visitors:im("booth-visitors"),visitors2:im("booth-visitors-2"),guest:im("booth-guest"),
 awBooth:im("award-booth"),ceremony:im("award-ceremony"),stage:im("ceremony-stage"),flag:im("award-flag"),cert:im("award-certificate"),medal:im("medal","png"),medalPhoto:im("medal-photo")};
const GLB_URL="assets/models/aquasense.glb";

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
const TL=[["technology-edge-ai","Edge AI"],["technology-computer-vision","Computer vision"],["technology-rag-system","RAG system"],["technology-hardware","Hardware"]];
const NV=[["home","Home"],["technology","Technology"],["achievement","Achievement"],["press","Press"],["gallery","Gallery"],["team","Team"],["contact","Contact"]];
/* Gallery: [image key, category, caption]. The first 6 also appear on the home page. */
const G=[
 ["team","Award ceremony","The team with the WYIE 2026 Gold Award certificate and medals."],
 ["proto","Prototype","The AQUASENSE prototype: a lettuce NFT pipe above the fish tank, dashboard live on the laptop."],
 ["booth","Exhibition","The Brawijaya Team at the AQUASENSE booth, KLCC Kuala Lumpur."],
 ["medal","Medal","Front and back of the WYIE 2026 Gold Medal."],
 ["display","Exhibition","Presenting the AQUASENSE rig and Gold Award at the booth."],
 ["stage","Award ceremony","The WYIE 2026 awards stage as Indonesia is announced."],
 ["dash","Dashboard","The dashboard in a development build: live camera feed, water readings and an AI recommendation."],
 ["shot","Prototype","3D design of the rig: fish tank, filter and sensors below a lettuce NFT pipe."],
 ["ceremony","Award ceremony","With the Universitas Brawijaya flag at the ITEX 2026 awards presentation."],
 ["awBooth","Exhibition","The team in front of the AQUASENSE poster wall."],
 ["selfie","Exhibition","A celebratory selfie with fellow exhibitors at the booth."],
 ["boothTeam","Exhibition","A group photo at the AQUASENSE booth."],
 ["boothFlag","Exhibition","Flying the Universitas Brawijaya flag at the exhibition hall."],
 ["visitors","Exhibition","Welcoming visitors to the AQUASENSE booth."],
 ["guest","Exhibition","With guests visiting the booth."],
 ["visitors2","Exhibition","Meeting visitors at the AQUASENSE booth."],
 ["selfie2","Exhibition","A selfie with visitors in front of the prototype."],
 ["flag","Award ceremony","Outside the venue with the UB flag after the ceremony."],
 ["cert","Award ceremony","Holding the Gold Award certificate."],
 ["medalPhoto","Medal","A close-up of the Gold Medal."]];
const PR=[["27 Oct 2026","Radar Malang","Media","Seven UB students spent five months building AQUASENSE","How the team built the monitor between January and early May 2026, fitting it around classes, and why it aims to show water and plant conditions in one view.","https://radarmalang.jawapos.com/pendidikan/2610270049/tujuh-mahasiswa-ub-kembangkan-alat-pemantau-kualitas-air-dalam-akuaponik"],["27 Jul 2026","Prasetya UB","UB official","UB students win Gold in Malaysia","A UB portal story, told through the FISIP team member, on the Agriculture-category medal and a cross-faculty team formed in late 2025.","https://prasetya.ub.ac.id/mahasiswa-ub-sabet-gold-medal-di-malaysia/"],["Jul 2026","FISIP UB","UB official","Cross-faculty collaboration brings a FISIP student a Gold Medal","The faculty story on Zahra Listia Nurjannah: the team formed through RINOYA EM UB, passed a paper selection and shared the work by expertise.","https://fisip.ub.ac.id/kolaborasi-lintas-fakultas-bawa-mahasiswa-fisip-ub-sabet-gold-medal-di-malaysia/"],["29 May 2026","Kanal24","Media","FTAB student wins Gold with an aquaponics AI","Lists the full team and describes the final: a live demo and a pitch to international judges and investors.","https://kanal24.co.id/mahasiswa-ftab-ub-raih-gold-medal-itex-wyie-2026/"],["May 2026","Memorandum Disway","Media","UB student wins Gold Medal at ITEX-WYIE 2026","A short Malang report naming all seven members and three abilities: leaf disease detection, harvest readiness and automatic recommendations.","https://memorandum.disway.id/metropolitan/read/160334/mahasiswa-universitas-brwaijaya-raih-gold-medal-di-itex-wyie-2026-kuala-lumpur"],["26 May 2026","FILKOM UB","UB official","AQUASENSE edge AI competes among the world’s young inventors","Profiles the three FILKOM students and the offline design, and lists the full team with their study programs.","https://filkom.ub.ac.id/2026/05/26/aquasense-inovasi-edge-ai-mahasiswa-ub-sukses-bersaing-di-ajang-inventor-muda-dunia/"],["May 2026","Malang Posco Media","Media","FTAB student and team win Gold against 1,000+ entries","Reports the win and the size of the field: more than 1,000 innovations from 17 countries.","https://malangposcomedia.id/mahasiswa-ftab-ub-raih-gold-medal-itex-wyie-2026-di-malaysia-kolaborasi-inovasi-aquasense-kalahkan-1-000-peserta-dunia/"],["May 2026","FTAB UB","UB official","FTAB students take the title in Malaysia","The faculty’s own report on the dual-brain design and the live demonstration to judges and investors.","https://tab.ub.ac.id/en/indonesian-mahasiswa-ftab-juara-di-malaysia-kalahkan-1000-peserta-sedunia/"],["May 2026","Fakultas Teknik UB","UB official","Collaboration across UB faculties earns Gold at WYIE 2026","Gives the entry’s official English title, the organisers, and how YOLOv11 supports leaf disease and harvest checks.","https://teknik.ub.ac.id/en/aquasense-antar-kolaborasi-mahasiswa-ub-raih-gold-medal-pada-world-young-inventors-exhibition-2026/"]];
const M=[["Qudwa Abyaz Ghiffara","Teknik Informatika","Fakultas Ilmu Komputer","Team lead"],["Aliya Mutia Nashwa","Teknologi Informasi","Fakultas Ilmu Komputer","Member"],["Dyandra Aurellia Agata Fitri","Teknologi Informasi","Fakultas Ilmu Komputer","Member"],["Farhan Alvin Alatas","Teknik Elektro","Fakultas Teknik","Member"],["Inez Syawalytrie Favourita","Teknik Lingkungan","Fakultas Teknologi Agroindustri dan Biosistem (FTAB)","Member"],["Sri Intan Amelia","Pendidikan Bahasa dan Sastra Indonesia","Fakultas Ilmu Budaya","Member"],["Zahra Listia Nurjannah","Ilmu Politik","Fakultas Ilmu Sosial dan Ilmu Politik","Member"]];
const ND=[["Sensors & camera","pH, TDS, water temperature and turbidity sensors, plus a fixed camera that photographs the lettuce on its own.","technology-hardware"],["ESP32-S3","The microcontroller that acquires the sensor data and passes it to the local backend.","technology-hardware"],["AI processing","Two local brains: Reflex Vision (YOLOv11) for plants and Cognitive Agronomy for water and plant correlation.","technology-edge-ai"],["Decision & advice","Safety-net rules plus RAG over agronomy documents turn the readings into a recommended action.","technology-rag-system"],["Dashboard & alerts","Live view, history, AI chat, harvest certificates in PDF and Telegram alerts for critical events.","technology"]];
const T={"technology-edge-ai":{n:"Edge AI",i:"Two AI “brains” run on local hardware, so AQUASENSE keeps working with no internet connection.",f:["Sensors & camera","Local backend","Reflex Vision","Cognitive Agronomy","Dashboard & alerts"],p:[["Reflex Vision brain","A FastAPI service (Python 3.11) that runs YOLOv11 on camera images to find leaf disease and harvest-ready lettuce."],["Cognitive Agronomy brain","A second FastAPI service that relates water readings to plant health, applies a safety-net override and writes recommendations."],["Coordinating backend","A REST API (FastAPI, Uvicorn, SQLite in WAL mode) takes in telemetry, coordinates both brains and caches the dashboard data."]],s:["FastAPI","Python 3.11","YOLOv11","PyTorch","scikit-learn","SQLite","Ollama"],t:"Model accuracy and benchmark results are not published yet, so none are shown."},
"technology-computer-vision":{n:"Computer vision",i:"A fixed camera watches the canopy and YOLOv11 spots leaf disease and tells when lettuce is ready to harvest.",f:["Fixed camera","Image capture","YOLOv11 detection","Health & harvest result","Dashboard"],p:[["Fixed-position imaging","The camera stays in one place over the lettuce, so images are comparable over time and need no operator."],["Two detection models","One model checks plant health and another checks harvest readiness, both run with Ultralytics and PyTorch."],["Camera options","An ESP32-CAM (OV2640) or a phone streaming over IP (DroidCam) can supply the images."]],s:["YOLOv11","Ultralytics","PyTorch","OpenCV","ESP32-CAM"],t:"Known issue: model checkpoints can fail to load if the Ultralytics version does not match. Training metrics are not published yet."},
"technology-rag-system":{n:"RAG system",i:"The cognitive brain answers with retrieved agronomy knowledge and a local language model, so advice stays offline.",f:["Agronomy documents","Embeddings","Vector search","Local LLM","Recommendation"],p:[["Knowledge store","Agronomy PDFs are split, embedded and stored in ChromaDB through LangChain."],["Local language model","Ollama runs llama3.2 on the same machine and writes the advice from the retrieved passages."],["Fixed-rule fallback","If the LLM service is off, the system falls back to a built-in standard procedure instead of failing."]],s:["LangChain","ChromaDB","Ollama","llama3.2","PyPDF2","TF-IDF"],t:"Known limit: the dashboard’s “add knowledge” form does not yet write to the vector store."},
"technology-hardware":{n:"Hardware",i:"A compact aquaponics rig: a lettuce pipe over a fish tank, with sensors and a camera feeding an ESP32-S3.",f:["Fish tank","Sensors","ESP32-S3","Backend","Dashboard"],p:[["Sensor array","Analog pH, analog TDS, DS18B20 temperature and optical turbidity. The backend also supports dissolved oxygen and ammonia."],["ESP32-S3","A low-cost microcontroller that acquires the data. Firmware source is not published yet."],["Passive oxygenation","Water is oxygenated without extra pumps, which keeps power use and maintenance low."]],s:["ESP32-S3","pH","TDS","DS18B20","Turbidity","NFT pipe"],t:"Hardware performance figures are not published yet."}};
const ic=k=>`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="${{e:"M8 36h8l4-18 6 22 5-14h9",c:"M4 24s8-12 20-12 20 12 20 12-8 12-20 12S4 24 4 24zM24 18a6 6 0 100 12 6 6 0 000-12z",r:"M8 10h32v22H20l-8 8v-8H8zM16 18h16M16 25h10",h:"M14 8h20v32H14zM8 16h6M8 24h6M8 32h6M34 16h6M34 24h6M34 32h6"}[k]}"/></svg>`;
const IM=(k,a,c="")=>`<div class="ir rv ${c}"><img src="${IMG[k].t}" srcset="${IMG[k].t} 720w, ${IMG[k].f} 1400w" sizes="(max-width:820px) 100vw, 50vw" alt="${a}" loading="lazy" decoding="async"></div>`;
const L=(r,t,c="")=>`<a class="${c}" href="#${r}">${t}</a>`;
const BC=(...a)=>`<div class="bc"><a href="#home">Home</a>${a.map(x=>` / ${x[0]?`<a href="#${x[0]}">${x[1]}</a>`:x[1]}`).join("")}</div>`;
const DGM=(go)=>`<div class="dg" role="group" aria-label="System architecture">${ND.map((n,i)=>(i?`<i class="cn" data-c="${i}"></i>`:"")+`<button class="nd${i?"":" on"}" data-n="${i}">${n[0]}</button>`).join("")}</div><div class="inf rv"><p id="ni">${ND[0][1]}</p><a class="btn" id="nk" href="#${ND[0][2]}">Explore details</a></div>`;
const tcards=()=>[["e","technology-edge-ai","Edge AI","Two local AI brains that need no internet."],["c","technology-computer-vision","Computer vision","YOLOv11 for leaf disease and harvest readiness."],["r","technology-rag-system","RAG system","Expert advice from a local language model."],["h","technology-hardware","Hardware","ESP32-S3, sensors and a fixed camera."]].map(c=>`<a class="card tc rv" href="#${c[1]}">${ic(c[0])}<div><h3>${c[2]}</h3><p>${c[3]}</p></div><b>Explore details</b></a>`).join("");
const P={
home:()=>`<section class="hero"><canvas id="cv"></canvas>
<div class="fl" style="width:70px;height:44px;left:46%;top:24%" data-d="30"><svg><use href="#fi"/></svg></div><div class="fl" style="width:40px;height:54px;left:8%;top:70%" data-d="-24"><svg><use href="#lf"/></svg></div><div class="fl" style="width:52px;height:68px;right:6%;top:16%" data-d="20"><svg><use href="#lf"/></svg></div>
<div class="hg"><div><p class="eb">Brawijaya Team · Universitas Brawijaya</p><h1 aria-label="Aquasense"><span>AQUA</span><span><em>SENSE</em></span></h1><p class="tag">Dual-brain edge AI that watches fish, water and lettuce, with no internet needed.</p><p><a class="btn" href="#technology">Explore the technology</a> <a class="btn o" href="#achievement">Discover our achievement</a></p></div>
<div class="fr"><div class="ir"><img src="${IMG.proto.f}" alt="The AQUASENSE prototype with its dashboard" fetchpriority="high"></div><div class="seal"><svg viewBox="0 0 128 128"><defs><path id="ci" d="M64 64m-52 0a52 52 0 1 1 104 0a52 52 0 1 1-104 0"/></defs><text><textPath href="#ci">GOLD MEDAL · WYIE 2026 · GOLD MEDAL · WYIE 2026 ·</textPath></text></svg><b>Gold<br>2026</b></div></div></div>
<div class="wv" style="color:var(--bg)"><svg viewBox="0 0 2400 120" preserveAspectRatio="none" style="color:var(--water)"><use href="#wy" width="1200" height="120"/><use href="#wy" x="1200" width="1200" height="120"/></svg><svg viewBox="0 0 2400 120" preserveAspectRatio="none"><use href="#wy" width="1200" height="120"/><use href="#wy" x="1200" width="1200" height="120"/></svg></div></section>
<section class="w"><div class="sp"><div><p class="eb rv">What is AQUASENSE?</p><h2 class="mk">Aquaponics that looks after itself.</h2><p class="rv">Aquaponics grows fish and plants in one loop. It saves water, but the balance between fish, plants and water chemistry is hard to keep without expert knowledge.</p><p class="rv">AQUASENSE connects sensors and a camera to two local AI brains. They diagnose the plants and the water together, then explain what to do next. It runs offline, so a remote farm or a school rooftop works as well as a lab.</p></div>${IM("booth","The team at the AQUASENSE booth")}</div></section>
<section class="w dk"><p class="eb">Problem and solution</p><h2 class="mk">Three gaps, three answers.</h2><p>Tap a card to see how AQUASENSE responds.</p><div class="gr">${[["Complexity","Keeping fish, plants and water in balance takes expert knowledge.","An AI agronomist that explains problems and next steps in plain language."],["Slow manual checks","Checking by hand is slow, error-prone and late.","Sensors and a camera watch continuously and flag issues early."],["Separate monitoring","Water and plants are usually monitored apart.","One system reads water data and plant images together."]].map(c=>`<button class="card fc rv" data-f><h3>${c[0]}</h3><p class="q">${c[1]}</p><p class="a"><b>AQUASENSE:</b> ${c[2]}</p></button>`).join("")}</div></section>
<section class="w"><p class="eb">System overview</p><h2 class="mk">From water to decision.</h2><p>Select a stage to see what it does.</p>${DGM()}</section>
<section class="w dk"><div class="sp r"><div>${view3d()}</div><div><p class="eb">The rig in 3D</p><h2 class="mk">Turn it around.</h2><p>Drag to rotate and scroll to zoom. A fish tank, filter and sensors sit under a lettuce NFT pipe.</p></div></div></section>
<section class="w"><div class="sp"><div><p class="eb">The dashboard</p><h2 class="mk">The whole system on one screen.</h2><p>A live camera feed with leaf and harvest checks, water readings, and an AI recommendation. Screenshot from a development build.</p>${L("technology-edge-ai","How the AI works","btn")}</div>${IM("dash","The AQUASENSE dashboard")}</div></section>
<section class="w"><p class="eb">Technology</p><h2 class="mk">What’s inside.</h2><div class="gr">${tcards()}</div></section>
<section class="w dk dd2"><div class="sp r"><div>${IM("team","The team with the WYIE Gold Award")}</div><div><p class="eb">Gold Medal</p><p class="aw" style="font-size:clamp(3rem,9vw,7rem)">Gold<br>Award</p><h3 style="margin:20px 0 6px;font-weight:500">World Young Inventors Exhibition 2026</h3><p>AQUASENSE won Gold in the Agriculture category at WYIE 2026 in Kuala Lumpur. In the final the team demonstrated the system live and pitched to international judges and investors.</p><p>${L("achievement","Explore our achievement","btn")} ${L("press","Read the press","btn o")}</p></div></div></section>
<section class="w"><div style="display:flex;justify-content:space-between;align-items:end;flex-wrap:wrap;gap:16px"><h2 class="mk">Moments.</h2>${L("gallery","View all gallery","btn o")}</div><div class="ms">${G.slice(0,6).map((g,i)=>`<figure class="rv" data-lb="${i}">${IM(g[0],g[2])}<figcaption>${g[1]}</figcaption></figure>`).join("")}</div></section>
<section class="w dk"><p class="eb">The team</p><h2 class="mk">Seven students, five faculties.</h2><p>${M.map(m=>m[0]).join(", ")}.</p><p>${L("team","Meet the team","btn")}</p></section>
<section class="w"><p class="eb" style="text-align:center">Universitas Brawijaya, five faculties</p>${part()}</section>
<section class="w dd2" style="text-align:center;padding-block:clamp(90px,14vw,180px)"><h2 class="mk" style="margin:auto;max-width:14ch;color:var(--on)">Let’s grow a smarter future together.</h2><p style="margin:24px auto;color:#c9dcc0">For partners, farmers, researchers and curious minds.</p>${L("contact","Start a conversation","btn")} ${L("technology","Read the technology","btn o")}</section>`,
technology:()=>`<div class="w pg">${BC([0,"Technology"])}<p class="eb">Technology</p><h1 class="mk" style="font-size:clamp(2.6rem,8vw,6rem)">One system, end to end.</h1><p>Select a stage, then open its page for the details.</p>${DGM()}<div class="gr">${tcards()}</div></div>`,
achievement:()=>`<section class="w dk pg"><p class="eb">Achievement</p><p class="aw">Gold Award</p><h2>World Young Inventors Exhibition 2026</h2><div class="sp" style="margin-top:56px">${IM("team","The team with the WYIE Gold Award certificate and medal")}<div><h3>The story</h3><p>A multidisciplinary Universitas Brawijaya team entered AQUASENSE at WYIE 2026, part of ITEX, in Kuala Lumpur in May 2026. Its official title: “Dual-Brain Edge AI for Fully Autonomous and Offline Aquaponics Monitoring.”</p><p>UB reports place the medal in the Agriculture category. In the final the team demonstrated AQUASENSE live and pitched to international judges and industry investors. Reports differ on the scale: FILKOM UB cites 600+ teams from 10 countries and territories, FTAB UB cites 1,000+ entries from 17 countries.</p></div></div></section>
<section class="w"><p class="eb">Interactive 3D Hanging Medal</p><h2 class="mk">Gold Medal · WYIE 2026</h2><p class="rv">Medali emas asli dengan tali lanyard kain tenun. Sentuh dan tarik medali untuk merasakan fisika ayunan pendulum, gravitasi, dan inersia putaran 3D secara nyata.</p>${lanyardMedalHTML()}</section>
<section class="w dk"><p class="eb">Award ceremony</p><h2 class="mk">The moment it was announced.</h2><div class="pg3">${[["stage","The WYIE 2026 awards stage"],["ceremony","With the UB flag at the ITEX 2026 awards presentation"],["cert","Holding the Gold Award certificate"]].map(x=>`<figure data-lb="${G.findIndex(g=>g[0]==x[0])}">${IM(x[0],x[1])}</figure>`).join("")}</div></section>
<section class="w"><h2 class="mk">Seen on the day.</h2><div class="pg3">${[["proto","The prototype demonstration"],["display","Presenting the rig and the Gold Award at the booth"],["booth","The team at the AQUASENSE booth"]].map(x=>`<figure data-lb="${G.findIndex(g=>g[0]==x[0])}">${IM(x[0],x[1])}</figure>`).join("")}</div><p style="margin-top:28px">${L("gallery","View the full gallery","btn o")}</p></section>
<section class="w dk"><h2 class="mk">Latest coverage.</h2><div class="pr">${PR.slice(0,3).map(p=>`<a class="rv" href="${p[5]}" target="_blank" rel="noopener"><span>${p[1]} · ${p[0]}</span><b>${p[3]}</b><span>Read ↗</span></a>`).join("")}</div><p style="margin-top:28px">${L("press","See all coverage","btn")}</p></section>
<section class="w"><h2 class="mk">Timeline.</h2><div class="tl">${[["Late 2025","The team forms through RINOYA EM UB and passes a paper selection."],["Jan – early May 2026","About five months of building AQUASENSE alongside classes."],["17–20 May 2026","WYIE and ITEX at KLCC, Kuala Lumpur. Final demo and pitch. Sources vary: 17–21 or 18–20 May."],["26 and 29 May 2026","FILKOM UB and Kanal24 publish stories on the Gold Medal."],["27 Jul 2026","UB’s Prasetya portal and FISIP UB tell the story."],["27 Oct 2026","Radar Malang publishes the build story."]].map(t=>`<div class="rv"><b>${t[0]}</b>${t[1]}</div>`).join("")}</div></section>`,
gallery:()=>`<section class="w pg"><p class="eb">Gallery</p><h1 class="mk" style="font-size:clamp(2.6rem,8vw,6rem)">Project photography.</h1><div class="fl2">${["All",...new Set(G.map(g=>g[1]))].map((c,i)=>`<button class="${i?"":"on"}" data-cat="${c}">${c}</button>`).join("")}</div><div class="ms">${G.map((g,i)=>`<figure class="rv" data-cat="${g[1]}" data-lb="${i}">${IM(g[0],g[2])}<figcaption>${g[2]}</figcaption></figure>`).join("")}</div></section>`,
press:()=>`<section class="w pg"><article class="np"><div class="stamp">GOLD · WYIE 2026</div><div class="mh"><b>The Brawijaya Gazette</b><span>ALL COVERAGE · UPDATED 1 NOVEMBER 2026</span></div><h1 class="hd">Seven students, five faculties, one Gold Medal</h1>
<div class="cols"><p>A team of seven Universitas Brawijaya students from five faculties won a Gold Medal at the World Young Inventors Exhibition 2026 in Kuala Lumpur, in the Agriculture category, with AQUASENSE: an aquaponics monitor whose AI runs without internet.</p><p>The idea took shape in late 2025 through RINOYA, the research and innovation unit of the UB student executive, and passed a paper selection. The team then spent roughly January to early May 2026 building the system between classes and other commitments.</p><p>In mid-May the team demonstrated the system live and pitched to international judges and investors. Reports differ on the scale: FILKOM UB cites more than 600 teams from 10 countries and territories, while FTAB UB cites more than 1,000 entries from 17 countries.</p><p>Coverage has continued for months. UB faculty sites and regional media reported the win in May, FISIP UB and UB’s Prasetya portal followed in July, and Radar Malang told the build story in late October.</p></div>
<div class="fb"><b>About WYIE.</b> Part of ITEX, organised by the Malaysian Invention and Design Society with the Indonesian Invention and Innovation Promotion Association, at KLCC in Kuala Lumpur. Dates vary by source: 17–20 or 17–21 May, and 18–20 May per FILKOM UB.</div>
<div class="fl2">${["All","UB official","Media"].map((c,j)=>`<button class="${j?"":"on"}" data-pf="${c}">${c}</button>`).join("")}</div>
<div class="cl">${PR.map(p=>`<details data-pt="${p[2]}"><summary>${p[3]}<small>${p[1]} · ${p[0]}</small></summary><p>${p[4]}</p><a href="${p[5]}" target="_blank" rel="noopener">Read the full story ↗</a></details>`).join("")}</div></article></section>`,
team:()=>`<section class="w pg"><p class="eb">Team</p><h1 class="mk" style="font-size:clamp(2.6rem,8vw,6rem)">The Brawijaya Team.</h1><p>Seven students from five faculties of Universitas Brawijaya, working together since late 2025.</p><div class="tm">${M.map(m=>`<div class="card rv"><div class="av">${m[0].split(" ").map(w=>w[0]).slice(0,2).join("")}</div><span class="rl">${m[3]}</span><h3 style="margin-top:10px">${m[0]}</h3><p>${m[1]}<br>${m[2]}</p></div>`).join("")}</div>${IM("team","The Brawijaya Team with the WYIE 2026 Gold Award","wide")}${part()}</section>`,
contact:()=>`<section class="w dk pg" style="min-height:70vh"><p class="eb">Contact</p><h1 class="mk" style="font-size:clamp(2.6rem,8vw,6rem)">Let’s collaborate.</h1><p>Partners, farmers, researchers and judges are welcome.</p>${contactLinks()}${EMAIL?`<form id="fm"><input name="n" placeholder="Your name" required aria-label="Your name"><input name="e" type="email" placeholder="Your email" required aria-label="Your email"><textarea name="m" rows="4" placeholder="Message" required aria-label="Message"></textarea><button class="btn">Send message</button></form>`:""}</section>`
};
function tp(k){const t=T[k],ks=TL.map(x=>x[0]),i=ks.indexOf(k),pv=TL[i-1],nx=TL[i+1];return`<div class="w pg">${BC(["technology","Technology"],[0,t.n])}<p class="eb">Technology</p><h1 class="mk" style="font-size:clamp(2.6rem,8vw,6rem)">${t.n}</h1><p style="font-size:1.2rem">${t.i}</p>${k=="technology-hardware"?view3d():k=="technology-edge-ai"?IM("dash","The AQUASENSE dashboard"):""}<h3 style="margin-top:44px">Workflow</h3><div class="flw rv">${t.f.map(x=>`<span>${x}</span>`).join("<i>→</i>")}</div><h3>Components</h3>${t.p.map((x,j)=>`<details class="ex rv" ${j?"":"open"}><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join("")}<div class="cp">${t.s.map(x=>`<span>${x}</span>`).join("")}</div><div class="pn">${pv?L(pv[0],"← "+pv[1],"btn o"):"<i></i>"}${nx?L(nx[0],nx[1]+" →","btn"):""}</div></div>`}
Object.keys(T).forEach(k=>P[k]=()=>tp(k));
/* Contact links: only the ones filled in CONTACT are shown. */
const contactLinks=()=>{const c=CONTACT,a=[c.email&&["Email",`mailto:${c.email}`,c.email],c.instagram&&["Instagram",`https://instagram.com/${c.instagram.replace(/^@/,"")}`,"@"+c.instagram.replace(/^@/,"")],c.linkedin&&["LinkedIn",c.linkedin,"LinkedIn"],c.whatsapp&&["WhatsApp",`https://wa.me/${c.whatsapp.replace(/\D/g,"")}`,c.whatsapp]].filter(Boolean);return a.length?`<div class="ctl">${a.map(x=>`<a class="card" href="${x[1]}" target="_blank" rel="noopener"><small>${x[0]}</small><b>${x[2]}</b></a>`).join("")}</div>`:`<div class="ctl"><a class="card" href="#press"><small>Press</small><b>Read the coverage</b></a><a class="card" href="https://ub.ac.id" target="_blank" rel="noopener"><small>Institution</small><b>Universitas Brawijaya</b></a><a class="card" href="#team"><small>People</small><b>Meet the team</b></a></div>`};
const LS=u=>new Promise((o,e)=>{const s=document.createElement("script");s.src=u;s.onload=o;s.onerror=e;document.head.appendChild(s)});let T3;
const load3=()=>T3||(T3=LS("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js").then(()=>LS("https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js")).then(()=>LS("https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js")));
const view3d=()=>`<div class="v3 rv"><img class="po" src="${IMG.shot.f}" alt="3D design of the AQUASENSE rig"><canvas aria-label="Interactive 3D model of the AQUASENSE rig. Drag to rotate."></canvas><small>Drag to rotate · scroll to zoom</small></div>`;
function boot3(){const box=$(".v3");if(!box)return;const cv=box.querySelector("canvas");load3().then(()=>{const r=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true});r.setPixelRatio(Math.min(devicePixelRatio,2));r.outputEncoding=THREE.sRGBEncoding;const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(40,1,.01,1000);sc.add(new THREE.HemisphereLight(0xffffff,0x88aa88,1.1));const d=new THREE.DirectionalLight(0xffffff,1.3);d.position.set(3,6,4);sc.add(d);
new THREE.GLTFLoader().load(GLB_URL,g=>{const m=g.scene,bx=new THREE.Box3().setFromObject(m),c=bx.getCenter(new THREE.Vector3()),s=bx.getSize(new THREE.Vector3());m.position.sub(c);const w=new THREE.Group();w.add(m);w.scale.setScalar(2.6/Math.max(s.x,s.y,s.z));sc.add(w);cam.position.set(2.6,1.7,3.2);box.classList.add("ok")},undefined,()=>{});
const oc=new THREE.OrbitControls(cam,cv);oc.enableDamping=true;oc.autoRotate=!rm;oc.autoRotateSpeed=1.2;oc.minDistance=2;oc.maxDistance=9;cam.position.set(2.6,1.7,3.2);let vis=1;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(box);
const rs=()=>{const w=box.clientWidth,h=box.clientHeight;r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()};rs();new ResizeObserver(rs).observe(box);
(function f(){if(!cv.isConnected){r.dispose();return}requestAnimationFrame(f);if(vis){oc.update();r.render(sc,cam)}})()}).catch(()=>{})}
const part=()=>`<div class="lgs">${[["ub","Universitas Brawijaya"],["filkom","FILKOM UB"],["ft","FT UB"],["ftab","FTAB UB"],["fib","FIB UB"],["fisip","FISIP UB"],["wyie","WYIE · ITEX"]].map(p=>`<span>${LOGOS[p[0]]?`<img src="${LOGOS[p[0]]}" alt="">`:""}${p[1]}</span>`).join("")}</div>`;

/* 3D Gold Medal Component */
const medal3d=()=>`
<div class="medal-card">
  <div class="medal-stage" id="mStage">
    <div class="ribbon-wrap" id="mRibbon">
      <svg class="ribbon-svg" viewBox="0 0 150 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mRibL" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00AEEF"/>
            <stop offset="28%" stop-color="#0072BC"/>
            <stop offset="38%" stop-color="#D4AF37"/>
            <stop offset="50%" stop-color="#FFF2A1"/>
            <stop offset="62%" stop-color="#D4AF37"/>
            <stop offset="72%" stop-color="#E5196E"/>
            <stop offset="100%" stop-color="#A0005C"/>
          </linearGradient>
          <linearGradient id="mRibR" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#00AEEF"/>
            <stop offset="28%" stop-color="#0072BC"/>
            <stop offset="38%" stop-color="#D4AF37"/>
            <stop offset="50%" stop-color="#FFF2A1"/>
            <stop offset="62%" stop-color="#D4AF37"/>
            <stop offset="72%" stop-color="#E5196E"/>
            <stop offset="100%" stop-color="#A0005C"/>
          </linearGradient>
          <linearGradient id="clipGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFE79A"/>
            <stop offset="50%" stop-color="#C59B27"/>
            <stop offset="100%" stop-color="#84610E"/>
          </linearGradient>
        </defs>
        <path d="M42 0 L14 148 L64 162 L75 22 Z" fill="url(#mRibL)"/>
        <path d="M108 0 L136 148 L86 162 L75 22 Z" fill="url(#mRibR)"/>
        <path d="M64 162 L75 22 L86 162 Z" fill="rgba(0,0,0,0.18)"/>
        <rect x="62" y="152" width="26" height="15" rx="3.5" fill="url(#clipGold)" stroke="#6B4E0A" stroke-width="1.2"/>
        <circle cx="75" cy="164" r="4.5" fill="none" stroke="url(#clipGold)" stroke-width="2.5"/>
      </svg>
    </div>
    <div class="medal-mount" id="mMount" aria-label="3D Interactive Gold Medal. Drag to rotate.">
      <div class="medal-coin" id="mCoin">
        <div class="coin-edge" style="transform:translateZ(5px)"></div>
        <div class="coin-edge" style="transform:translateZ(3px)"></div>
        <div class="coin-edge" style="transform:translateZ(1px)"></div>
        <div class="coin-edge" style="transform:translateZ(-1px)"></div>
        <div class="coin-edge" style="transform:translateZ(-3px)"></div>
        <div class="coin-edge" style="transform:translateZ(-5px)"></div>
        <div class="coin-face front">
          <div class="coin-sheen" id="mSheenF"></div>
        </div>
        <div class="coin-face back">
          <div class="coin-sheen" id="mSheenB"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="medal-ctrls">
    <button type="button" id="mFlipBtn">⟲ Balik Medali</button>
    <button type="button" id="mSpinBtn" class="active">▶ Putar Otomatis</button>
    <button type="button" id="mRibbonBtn" class="active">🎗 Tali Medali: Aktif</button>
  </div>
  <p class="medal-hint">Sentuh / drag untuk putar 360° · Klik tombol untuk balik sisi medali</p>
</div>`;

function initMedal3d(){
  const mount=$("#mMount"), coin=$("#mCoin"), ribbon=$("#mRibbon");
  if(!mount || !coin) return;
  let rotY = 0, rotX = 0, isDragging = false, startX = 0, startY = 0, autoSpin = true;
  const sheenF = $("#mSheenF"), sheenB = $("#mSheenB");
  const flipBtn = $("#mFlipBtn"), spinBtn = $("#mSpinBtn"), ribBtn = $("#mRibbonBtn");

  const update = () => {
    coin.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    const angle = 100 + (rotY % 180);
    const grad = `linear-gradient(${angle}deg, transparent 35%, rgba(255,255,255,0.5) 50%, transparent 65%)`;
    if(sheenF) sheenF.style.background = grad;
    if(sheenB) sheenB.style.background = grad;
  };

  let last = performance.now();
  const loop = (now) => {
    if(!mount.isConnected) return;
    const dt = (now - last) / 1000;
    last = now;
    if(autoSpin && !isDragging) {
      rotY = (rotY + 36 * dt) % 360;
      update();
    }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  mount.onpointerdown = e => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    coin.classList.remove("flipping");
    mount.setPointerCapture(e.pointerId);
  };

  mount.onpointermove = e => {
    if(!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    startX = e.clientX;
    startY = e.clientY;
    rotY += dx * 0.75;
    rotX = Math.max(-40, Math.min(40, rotX - dy * 0.6));
    update();
  };

  const endDrag = () => { isDragging = false; };
  mount.onpointerup = endDrag;
  mount.onpointercancel = endDrag;

  if(flipBtn) flipBtn.onclick = () => {
    autoSpin = false;
    if(spinBtn) { spinBtn.classList.remove("active"); spinBtn.textContent = "▶ Putar Otomatis"; }
    coin.classList.add("flipping");
    rotY = (Math.round(rotY / 180) + 1) * 180;
    rotX = 0;
    update();
  };

  if(spinBtn) spinBtn.onclick = () => {
    autoSpin = !autoSpin;
    spinBtn.classList.toggle("active", autoSpin);
    spinBtn.textContent = autoSpin ? "▶ Putar Otomatis" : "⏸ Jeda Putar";
  };

  if(ribBtn && ribbon) ribBtn.onclick = () => {
    const isHidden = ribbon.classList.toggle("hide");
    ribBtn.classList.toggle("active", !isHidden);
    ribBtn.textContent = isHidden ? "🎗 Tali Medali: Nonaktif" : "🎗 Tali Medali: Aktif";
  };
}

/* ============================================================
   React Bits Style 3D Hanging Lanyard Gold Medal
   ============================================================ */
const lanyardMedalHTML=()=>`
<div class="lanyard-stage-wrap rv">
  <div class="lanyard-container" id="lanyardStage">
    <div class="lanyard-tip">✦ Tarik & ayunkan medali dengan kursor / sentuhan · Klik tombol untuk membalik sisi ✦</div>
  </div>
  <div class="lanyard-controls">
    <button type="button" id="lanyardFlipBtn">⟲ Balik Sisi Medali (180°)</button>
    <button type="button" id="lanyardSwingBtn">〰 Ayunkan Medali</button>
    <button type="button" id="lanyardResetBtn">↺ Posisi Awal</button>
  </div>
</div>`;

function createStrapCanvasTex() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 2048;
  const ctx = c.getContext("2d");
  
  ctx.fillStyle = "#0a1128";
  ctx.fillRect(0, 0, 512, 2048);
  
  ctx.fillStyle = "rgba(255,255,255,0.025)";
  for (let y = 0; y < 2048; y += 4) ctx.fillRect(0, y, 512, 2);
  for (let x = 0; x < 512; x += 4) ctx.fillRect(x, 0, 2, 2048);
  
  const goldGrad = ctx.createLinearGradient(0, 0, 512, 0);
  goldGrad.addColorStop(0, "#8c6d1f");
  goldGrad.addColorStop(0.04, "#ffd700");
  goldGrad.addColorStop(0.08, "#c59b27");
  goldGrad.addColorStop(0.09, "#0a1128");
  goldGrad.addColorStop(0.91, "#0a1128");
  goldGrad.addColorStop(0.92, "#c59b27");
  goldGrad.addColorStop(0.96, "#ffd700");
  goldGrad.addColorStop(1, "#8c6d1f");
  ctx.fillStyle = goldGrad;
  ctx.fillRect(0, 0, 512, 2048);
  
  ctx.strokeStyle = "#ffd700";
  ctx.lineWidth = 3;
  ctx.setLineDash([12, 8]);
  ctx.beginPath();
  ctx.moveTo(35, 0); ctx.lineTo(35, 2048);
  ctx.moveTo(477, 0); ctx.lineTo(477, 2048);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.save();
  ctx.translate(256, 1024);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  
  const repeatText = "✦  WYIE 2026  ✦  WORLD YOUNG INVENTORS EXHIBITION  ✦  MALAYSIA  ✦  ";
  ctx.font = 'bold 36px "Instrument Sans", Arial, sans-serif';
  
  for (let offset = -2000; offset <= 2000; offset += 900) {
    const tg = ctx.createLinearGradient(offset - 200, 0, offset + 200, 0);
    tg.addColorStop(0, "#ffd700");
    tg.addColorStop(0.5, "#fff6b0");
    tg.addColorStop(1, "#d4af37");
    ctx.fillStyle = tg;
    ctx.shadowColor = "rgba(0,0,0,0.85)";
    ctx.shadowBlur = 6;
    ctx.fillText(repeatText, offset, 0);
  }
  ctx.restore();
  
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function initLanyardMedal(){
  const container = $("#lanyardStage");
  if(!container) return;
  load3().then(() => {
    if(!container.isConnected) return;
    
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 7.2);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);
    
    const tip = document.createElement("div");
    tip.className = "lanyard-tip";
    tip.textContent = "✦ Tarik & ayunkan medali dengan kursor / sentuhan · Klik tombol untuk membalik sisi ✦";
    container.appendChild(tip);
    
    const ambient = new THREE.AmbientLight(0xfff5e6, 1.25);
    scene.add(ambient);
    
    const keyLight = new THREE.DirectionalLight(0xfff8e8, 2.2);
    keyLight.position.set(4, 8, 6);
    keyLight.castShadow = true;
    scene.add(keyLight);
    
    const rimLight = new THREE.DirectionalLight(0xd4eaff, 1.6);
    rimLight.position.set(-6, -2, -5);
    scene.add(rimLight);
    
    const fillLight = new THREE.DirectionalLight(0xffd700, 0.9);
    fillLight.position.set(0, -6, 4);
    scene.add(fillLight);
    
    const texLoader = new THREE.TextureLoader();
    const frontTex = texLoader.load("assets/img/medal-back.png");
    const backTex = texLoader.load("assets/img/medal-front.png");
    frontTex.encoding = THREE.sRGBEncoding;
    backTex.encoding = THREE.sRGBEncoding;
    const strapTex = createStrapCanvasTex();
    
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xdfb738,
      metalness: 0.96,
      roughness: 0.18,
      envMapIntensity: 1.5
    });
    
    const frontMat = new THREE.MeshStandardMaterial({
      map: frontTex,
      metalness: 0.85,
      roughness: 0.25,
      bumpScale: 0.05
    });
    
    const backMat = new THREE.MeshStandardMaterial({
      map: backTex,
      metalness: 0.85,
      roughness: 0.25,
      bumpScale: 0.05
    });
    
    const strapMat = new THREE.MeshStandardMaterial({
      map: strapTex,
      side: THREE.DoubleSide,
      roughness: 0.85,
      metalness: 0.08
    });
    
    const medalGroup = new THREE.Group();
    const medalRadius = 1.35;
    const medalThickness = 0.14;
    
    const frontGeo = new THREE.CircleGeometry(medalRadius, 64);
    const frontMesh = new THREE.Mesh(frontGeo, frontMat);
    frontMesh.position.z = medalThickness / 2 + 0.002;
    medalGroup.add(frontMesh);
    
    const backGeo = new THREE.CircleGeometry(medalRadius, 64);
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.rotation.y = Math.PI;
    backMesh.position.z = -medalThickness / 2 - 0.002;
    medalGroup.add(backMesh);
    
    const rimGeo = new THREE.CylinderGeometry(medalRadius, medalRadius, medalThickness, 64, 1, true);
    const rimMesh = new THREE.Mesh(rimGeo, goldMat);
    rimMesh.rotation.x = Math.PI / 2;
    medalGroup.add(rimMesh);
    
    const ringGeo = new THREE.TorusGeometry(medalRadius - 0.02, 0.038, 16, 64);
    const ringFront = new THREE.Mesh(ringGeo, goldMat);
    ringFront.position.z = medalThickness / 2;
    medalGroup.add(ringFront);
    
    const ringBack = new THREE.Mesh(ringGeo, goldMat);
    ringBack.position.z = -medalThickness / 2;
    medalGroup.add(ringBack);
    
    const eyeletGeo = new THREE.TorusGeometry(0.16, 0.036, 16, 32);
    const eyelet = new THREE.Mesh(eyeletGeo, goldMat);
    eyelet.position.y = medalRadius + 0.12;
    medalGroup.add(eyelet);
    
    const clampGroup = new THREE.Group();
    clampGroup.position.y = medalRadius + 0.38;
    
    const bracketGeo = new THREE.BoxGeometry(0.55, 0.18, 0.12);
    const bracket = new THREE.Mesh(bracketGeo, goldMat);
    clampGroup.add(bracket);
    
    const swivelCyl = new THREE.CylinderGeometry(0.06, 0.06, 0.2, 16);
    const swivel = new THREE.Mesh(swivelCyl, goldMat);
    swivel.position.y = -0.12;
    clampGroup.add(swivel);
    
    const hookRingGeo = new THREE.TorusGeometry(0.14, 0.032, 16, 32);
    const hookRing = new THREE.Mesh(hookRingGeo, goldMat);
    hookRing.rotation.y = Math.PI / 2;
    hookRing.position.y = -0.22;
    clampGroup.add(hookRing);
    
    medalGroup.add(clampGroup);
    scene.add(medalGroup);
    
    const numSegments = 18;
    const restLength = 0.18;
    const anchor = new THREE.Vector3(0, 3.2, 0);
    const points = [];
    const oldPoints = [];
    
    for (let i = 0; i <= numSegments; i++) {
      const p = new THREE.Vector3(0, anchor.y - i * restLength, 0);
      points.push(p);
      oldPoints.push(p.clone());
    }
    
    const strapWidth = 0.44;
    const strapGeo = new THREE.PlaneGeometry(strapWidth, 1, 1, numSegments);
    const strapMesh = new THREE.Mesh(strapGeo, strapMat);
    strapMesh.castShadow = true;
    scene.add(strapMesh);
    
    function updateRibbonMesh() {
      const posAttr = strapGeo.attributes.position;
      for (let i = 0; i <= numSegments; i++) {
        const curr = points[i];
        let tangent = new THREE.Vector3(0, -1, 0);
        if (i < numSegments) tangent.subVectors(points[i + 1], curr).normalize();
        else tangent.subVectors(curr, points[i - 1]).normalize();
        
        const side = new THREE.Vector3().crossVectors(tangent, new THREE.Vector3(0, 0, 1)).normalize();
        if (side.lengthSq() < 0.001) side.set(1, 0, 0);
        
        const widthFactor = (i === numSegments) ? 0.8 : (i === 0 ? 0.9 : 1.0);
        const halfW = (strapWidth * widthFactor) / 2;
        
        const vIdx = i * 2;
        posAttr.setXYZ(vIdx, curr.x - side.x * halfW, curr.y - side.y * halfW, curr.z + 0.01);
        posAttr.setXYZ(vIdx + 1, curr.x + side.x * halfW, curr.y + side.y * halfW, curr.z + 0.01);
      }
      posAttr.needsUpdate = true;
      strapGeo.computeVertexNormals();
    }
    
    function physicsStep(dt) {
      const gravity = new THREE.Vector3(0, -22.0, 0);
      const damping = 0.975;
      
      for (let i = 1; i <= numSegments; i++) {
        if (i === numSegments && isDragging) continue;
        const p = points[i];
        const op = oldPoints[i];
        
        const vx = (p.x - op.x) * damping;
        const vy = (p.y - op.y) * damping;
        const vz = (p.z - op.z) * damping;
        
        op.copy(p);
        p.x += vx + gravity.x * dt * dt;
        p.y += vy + gravity.y * dt * dt;
        p.z += vz + gravity.z * dt * dt;
      }
      
      for (let iter = 0; iter < 12; iter++) {
        points[0].copy(anchor);
        for (let i = 0; i < numSegments; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const delta = new THREE.Vector3().subVectors(p2, p1);
          const dist = delta.length();
          if (dist < 0.0001) continue;
          const diff = (dist - restLength) / dist;
          
          if (i === 0) {
            p2.sub(delta.multiplyScalar(diff));
          } else if (i === numSegments - 1 && isDragging) {
            p1.add(delta.multiplyScalar(diff));
          } else {
            delta.multiplyScalar(diff * 0.5);
            p1.add(delta);
            p2.sub(delta);
          }
        }
      }
    }
    
    let isDragging = false;
    let dragOffset = new THREE.Vector3();
    let rotY = 0;
    let rotVelY = 0;
    let targetFlipY = 0;
    let isFlipping = false;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    
    let lastTime = performance.now();
    function animate(now) {
      if(!container.isConnected) return;
      requestAnimationFrame(animate);
      const dt = Math.min((now - lastTime) / 1000, 0.033);
      lastTime = now;
      
      physicsStep(dt);
      updateRibbonMesh();
      
      const medalPos = points[numSegments];
      const prevPos = points[numSegments - 1];
      const strapDir = new THREE.Vector3().subVectors(medalPos, prevPos).normalize();
      
      medalGroup.position.copy(medalPos);
      
      const tiltZ = -strapDir.x * 0.85;
      const tiltX = strapDir.z * 0.85;
      
      if (isFlipping) {
        rotY += (targetFlipY - rotY) * 0.12;
        if (Math.abs(targetFlipY - rotY) < 0.01) {
          rotY = targetFlipY;
          isFlipping = false;
        }
      } else {
        const idleSway = Math.sin(now * 0.0018) * 0.08;
        rotVelY *= 0.96;
        rotY += rotVelY * dt + idleSway * dt;
      }
      
      medalGroup.rotation.set(tiltX, rotY, tiltZ);
      renderer.render(scene, camera);
    }
    requestAnimationFrame(animate);
    
    let prevMouseX = 0;
    const getEvtCoords = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const clientX = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
      const clientY = e.clientY ?? (e.touches && e.touches[0].clientY) ?? 0;
      return {
        x: ((clientX - rect.left) / rect.width) * 2 - 1,
        y: -((clientY - rect.top) / rect.height) * 2 + 1,
        clientX
      };
    };
    
    const onDown = (e) => {
      const { x, y, clientX } = getEvtCoords(e);
      mouse.set(x, y);
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects([frontMesh, backMesh, rimMesh, bracket], true);
      if (hits.length > 0) {
        isDragging = true;
        prevMouseX = clientX;
        const pt = new THREE.Vector3();
        raycaster.ray.intersectPlane(dragPlane, pt);
        dragOffset.subVectors(points[numSegments], pt);
      }
    };
    
    const onMove = (e) => {
      if (!isDragging) return;
      const { x, y, clientX } = getEvtCoords(e);
      mouse.set(x, y);
      raycaster.setFromCamera(mouse, camera);
      const pt = new THREE.Vector3();
      raycaster.ray.intersectPlane(dragPlane, pt);
      pt.add(dragOffset);
      pt.z = Math.max(-1.6, Math.min(1.6, pt.z));
      points[numSegments].copy(pt);
      
      const dx = clientX - prevMouseX;
      prevMouseX = clientX;
      rotVelY += dx * 0.15;
    };
    
    const onUp = () => { isDragging = false; };
    
    container.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    
    const flipBtn = $("#lanyardFlipBtn");
    const swingBtn = $("#lanyardSwingBtn");
    const resetBtn = $("#lanyardResetBtn");
    
    if (flipBtn) flipBtn.onclick = () => {
      isFlipping = true;
      targetFlipY = (Math.round(rotY / Math.PI) + 1) * Math.PI;
    };
    
    if (swingBtn) swingBtn.onclick = () => {
      points[numSegments].x += (Math.random() - 0.5) * 1.8;
      points[numSegments].z += (Math.random() - 0.5) * 1.2;
      rotVelY += (Math.random() - 0.5) * 8.0;
    };
    
    if (resetBtn) resetBtn.onclick = () => {
      for (let i = 0; i <= numSegments; i++) {
        points[i].set(0, anchor.y - i * restLength, 0);
        oldPoints[i].copy(points[i]);
      }
      rotY = 0;
      rotVelY = 0;
      isFlipping = false;
    };
    
    const onResize = () => {
      if (!container.isConnected) return;
      const w = container.clientWidth || 600;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    window.addEventListener("resize", onResize);
    new ResizeObserver(onResize).observe(container);
  }).catch(() => {});
}


// chrome
const NL=()=>NV.map(n=>n[0]=="technology"?`<div><a href="#technology" data-r="technology">Technology ▾</a><div class="dm">${TL.map(t=>L(t[0],t[1])).join("")}</div></div>`:`<a href="#${n[0]}" data-r="${n[0]}">${n[1]}</a>`).join("");
$("#nl").innerHTML=NL();$("#mm").innerHTML=NV.map(n=>L(n[0],n[1])+(n[0]=="technology"?TL.map(t=>L(t[0],t[1],"s")).join(""):"")).join("");
$("#ft").innerHTML=`<div><img data-logo alt="" style="height:46px;margin-bottom:8px"><b>AQUASENSE</b>Dual-brain edge AI for offline aquaponics. Brawijaya Team, Universitas Brawijaya.<br>© 2026</div><div><b>Explore</b>${NV.map(n=>L(n[0],n[1])).join("")}</div><div><b>Technology</b>${TL.map(t=>L(t[0],t[1])).join("")}</div>`;
try{const t=localStorage.getItem("th");if(t)document.documentElement.dataset.theme=t}catch(e){}
$("#th").onclick=()=>{const d=document.documentElement,dk=d.dataset.theme?d.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches,n=dk?"light":"dark";d.dataset.theme=n;try{localStorage.setItem("th",n)}catch(e){}};
const mm=$("#mm"),bg=$("#bg");const tm=o=>{mm.classList.toggle("on",o);bg.setAttribute("aria-expanded",o);bg.textContent=o?"✕":"☰";mm.setAttribute("aria-hidden",!o)};bg.onclick=()=>tm(!mm.classList.contains("on"));
// router
let cur=null,busy=0;const name=()=>{const h=location.hash.slice(1);return P[h]?h:"home"};
function render(r){$("#app").innerHTML=P[r]();scrollTo(0,0);document.title=(r=="home"?"":(r=="technology"?"Technology":r.replace(/^technology-/,"").replace(/-/g," ")).replace(/^./,c=>c.toUpperCase())+" | ")+"AQUASENSE";
$$("[data-r]").forEach(a=>a.classList.toggle("on",r==a.dataset.r||(a.dataset.r=="technology"&&r.startsWith("technology"))));tm(0);init(r)}
function nav(first){const r=name(),p=$("#pt");if(r===cur&&!first)return;cur=r;busy=1;p.classList.remove("up");p.classList.add("on");setTimeout(()=>{render(r);p.classList.add("up");p.classList.remove("on");setTimeout(()=>{p.classList.remove("up");p.style.transition="none";p.offsetWidth;p.style.transition="";busy=0},520)},rm?0:first?500:420)}
addEventListener("hashchange",()=>nav());
function init(r){$$("[data-logo]").forEach(e=>e.src=IMG.logo.f);boot3();initMedal3d();initLanyardMedal();
 $$(".mk").forEach(e=>{e.innerHTML=e.textContent.split(" ").map(w=>`<span><b>${w}</b></span> `).join("");e.querySelectorAll("b").forEach((b,i)=>b.style.transitionDelay=i*60+"ms")});
 const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target)}}),{threshold:0.01,rootMargin:"250px 0px"});$$(".rv,.mk,.np").forEach(e=>io.observe(e));setTimeout(()=>{$$(".rv:not(.in),.mk:not(.in),.np:not(.in)").forEach(e=>e.classList.add("in"))},2000);
 
 const cv=$("#cv");if(cv&&!rm){const x=cv.getContext("2d"),h=$(".hero");let R=[];const sz=()=>{cv.width=cv.offsetWidth;cv.height=cv.offsetHeight};sz();addEventListener("resize",sz);const dr=(a,b)=>R.push({x:a,y:b,r:2,a:.5});
  h.addEventListener("pointermove",e=>{const b=cv.getBoundingClientRect();if(Math.random()<.2)dr(e.clientX-b.left,e.clientY-b.top);$$(".fl").forEach(f=>f.style.transform=`translate(${(e.clientX/innerWidth-.5)*f.dataset.d}px,${(e.clientY/innerHeight-.5)*f.dataset.d}px)`)});
  const tick=()=>{if(!cv.isConnected)return;x.clearRect(0,0,cv.width,cv.height);R=R.filter(o=>o.a>.01);R.forEach(o=>{o.r+=1.6;o.a*=.975;x.beginPath();x.arc(o.x,o.y,o.r,0,7);x.strokeStyle=`rgba(168,209,63,${o.a})`;x.lineWidth=2;x.stroke()});requestAnimationFrame(tick)};tick();const id=setInterval(()=>{cv.isConnected?dr(Math.random()*cv.width,Math.random()*cv.height):clearInterval(id)},1500)}
 const fm=$("#fm");if(fm)fm.onsubmit=e=>{e.preventDefault();if(!EMAIL)return;const f=new FormData(fm);location.href=`mailto:${EMAIL}?subject=${encodeURIComponent("AQUASENSE: message from "+f.get("n"))}&body=${encodeURIComponent(f.get("m")+"\n\n"+f.get("e"))}`}}
document.addEventListener("click",e=>{const t=e.target,n=t.closest("[data-n]"),f=t.closest("[data-f]"),l=t.closest("[data-lb]"),c=t.closest("[data-cat]");
 if(n){const i=+n.dataset.n;$$(".nd").forEach((b,j)=>b.classList.toggle("on",j==i));$$(".cn").forEach(b=>b.classList.toggle("on",+b.dataset.c<=i));$("#ni").textContent=ND[i][1];$("#nk").href="#"+ND[i][2]}
 if(f)f.classList.toggle("on");
 if(c&&c.tagName=="BUTTON"){$$(".fl2 button").forEach(b=>b.classList.toggle("on",b==c));$$(".ms figure").forEach(g=>g.classList.toggle("h",c.dataset.cat!="All"&&g.dataset.cat!=c.dataset.cat))}
 else if(l)lb(+l.dataset.lb);
 if(t.closest("#lb .x")||t===$("#lb"))$("#lb").classList.remove("on");if(t.closest("#lb .pv"))lb(li-1);if(t.closest("#lb .nx"))lb(li+1)});
document.addEventListener("click",e=>{const f=e.target.closest("[data-pf]");if(!f)return;$$(".fl2 button").forEach(b=>b.classList.toggle("on",b==f));$$(".cl details").forEach(d=>d.classList.toggle("h",f.dataset.pf!="All"&&d.dataset.pt!=f.dataset.pf))});
let li=0;function lb(i){li=(i+G.length)%G.length;const b=$("#lb"),m=b.querySelector("img");m.style.opacity=0;setTimeout(()=>{m.src=IMG[G[li][0]].f;m.alt=G[li][2];$("#lc").textContent=G[li][1]+": "+G[li][2];m.style.opacity=1},rm?0:120);b.classList.add("on")}
addEventListener("keydown",e=>{if(!$("#lb").classList.contains("on")){if(e.key=="Escape")tm(0);return}if(e.key=="Escape")$("#lb").classList.remove("on");if(e.key=="ArrowLeft")lb(li-1);if(e.key=="ArrowRight")lb(li+1)});
nav(1);
