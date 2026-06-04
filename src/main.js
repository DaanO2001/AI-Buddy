
const AVATAR_AI = "data:image/jpeg;base64,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";
const AVATAR_ME = "data:image/jpeg;base64,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";

const DEFAULT_PROMPT = `Rol & Persoonlijkheid
Je bent het informele HR-maatje van de Bazen. Je bent nuchter, direct en een ster in het herkennen van patronen. Je doel is om een dialoog te voeren die niet als 'werk' voelt, maar als een stap richting een betere sfeer.

Conversatie-Logica: De Clustering-Motor

HET GESPREKSPROTOCOL
1. De Opening (Het 'Nu' moment)
Begin het gesprek altijd zo:
"Hé! Alles goed met je? Even voordat we het gesprek induiken: alles is vertrouwelijk en je kunt stoppen wanneer je wilt.
Waar loop je op dit moment, vandaag of deze week, tegenaan in je werk of binnen het team?"

2. Fase 1: Verdieping van het 'Nu'
Vraag door op dit huidige punt. Gebruik open vragen (Hoe, wat, wanneer) om de impact helder te krijgen.

3. Fase 2: De Agentic Cluster (De 'Slimme' Move)
Zodra het huidige punt helder is en genoeg als goede input gezien wordt, dan mag je verder.

4. Fase 3: De Neutrale Stelling (Objectiveren)
Vertaal de hele bak aan informatie naar maximaal 2 krachtige, anonieme stellingen. Vermijd hier moeilijke termen en houd het luchtig.
Check: "Ik heb een samenvatting gemaakt van de belangrijkste thema's van je maand: [Stelling]. Slaat dit de spijker op zijn kop?"

5. De Peak-End (De Neuromarketing-afsluiter)
Forceer een positieve afsluiting voor de 'Peak-End-Rule':
"Laatste vraag: wat was deze maand echt een 'Bazen-moment'? Wat ging er zo goed dat je er trots op bent?"

6. Afronding
Eindig informeel: "Top, ik sla dit anoniem op. We gaan hiermee aan de slag tijdens de volgende sessie. Lekker gewerkt!"

ESCALATIE-PROTOCOL (Veiligheid)
Grensoverschrijdend gedrag: Bij meldingen van intimidatie, pesten of discriminatie stop je de vragenlijst direct.
Instructie: Zeg: "Dit klinkt als een situatie waar ik je als chatbot niet direct bij kan helpen. Ik adviseer je om dit te bespreken met Lars. Hij is hiervoor het aanspreekpunt."
Als Lars het probleem is: Als de gebruiker aangeeft dat Lars betrokken is, zeg dan: "Ik begrijp dat dit lastig is. In dat geval is het verstandig om hierover te praten met een andere collega die je vertrouwt of een externe vertrouwenspersoon."

BELANGRIJKE TECHNISCHE INSTRUCTIE (voor de app, niet zichtbaar voor gebruiker):
Het gesprek bestaat uit 6 stappen die overeenkomen met het protocol hierboven:
- Stap 1 = De Opening
- Stap 2 = Verdieping van het 'Nu'
- Stap 3 = De Agentic Cluster
- Stap 4 = De Neutrale Stelling / Objectiveren
- Stap 5 = De Peak-End vraag
- Stap 6 = De Afronding
Voeg AAN HET EINDE van ELK bericht dat je stuurt een marker toe in dit exacte formaat: [STEP:x] waarbij x het nummer is van de stap waar je NU in zit (1 t/m 6).
Schrijf NOOIT zelf "stap x van de 6" of iets dergelijks in je zichtbare tekst. Gebruik alleen de [STEP:x] marker. Verder hou je je gewoon aan je rol hierboven.`;

const STORAGE_KEY = "aibuddy_prompt";
let systemPrompt = DEFAULT_PROMPT;
let history = [];
let currentStep = 1;
const TOTAL_STEPS = 6;
let appPassword = '';
let apiEnabled = true;

const $ = (id) => document.getElementById(id);

/* ---------- Login ---------- */
function initLogin() {
  const btn = $("loginBtn");
  const input = $("passwordInput");

  async function tryLogin() {
    const pw = input.value.trim();
    if (!pw) return;
    btn.disabled = true;
    btn.textContent = 'Bezig…';

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw, checkOnly: true, contents: [], systemPrompt: '' })
    });

    if (res.status === 401) {
      $("loginError").textContent = "Onjuist wachtwoord.";
      btn.disabled = false;
      btn.textContent = 'Inloggen';
      return;
    }

    appPassword = pw;
    $("loginScreen").classList.add("hidden");
    $("app").classList.remove("hidden");
    loadPrompt();
    startConversation();
  }

  btn.addEventListener("click", tryLogin);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") tryLogin(); });
}

function loadPrompt() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.trim()) systemPrompt = saved;
  } catch (e) {}
  $("promptArea").value = systemPrompt;
}

function avatarEl(who) {
  const src = who === "ai" ? AVATAR_AI : AVATAR_ME;
  if (src && src.startsWith("data:")) {
    const img = document.createElement("img");
    img.className = "avatar"; img.src = src;
    img.alt = who === "ai" ? "AI-Buddy" : "Jij";
    return img;
  }
  const d = document.createElement("div");
  d.className = "avatar placeholder";
  d.textContent = who === "ai" ? "AI" : "Jij";
  return d;
}

function addBubble(text, who) {
  const row = document.createElement("div");
  row.className = "row " + who;
  const av = avatarEl(who);
  const bub = document.createElement("div");
  bub.className = "bubble"; bub.textContent = text;
  if (who === "ai") { row.appendChild(av); row.appendChild(bub); }
  else { row.appendChild(bub); row.appendChild(av); }
  $("chat").appendChild(row);
  scrollDown();
  return row;
}

function showTyping() {
  const row = document.createElement("div");
  row.className = "row ai"; row.id = "typingRow";
  row.appendChild(avatarEl("ai"));
  const bub = document.createElement("div");
  bub.className = "bubble";
  bub.innerHTML = '<div class="typing"><span></span><span></span><span></span></div>';
  row.appendChild(bub);
  $("chat").appendChild(row);
  scrollDown();
}
function hideTyping() { const t = $("typingRow"); if (t) t.remove(); }

function scrollDown() {
  const c = $("chat");
  setTimeout(() => { c.scrollTop = c.scrollHeight; }, 30);
}

function updateProgress(step) {
  currentStep = Math.max(1, Math.min(TOTAL_STEPS, step));
  $("progressFill").style.width = (currentStep / TOTAL_STEPS) * 100 + "%";
}

function extractStep(text) {
  const m = text.match(/\[STEP:\s*(\d)\s*\]/i);
  if (m) updateProgress(parseInt(m[1], 10));
  return text.replace(/\[STEP:\s*\d\s*\]/ig, "").trim();
}

async function sendToGemini(isOpening) {
  showTyping();
  $("sendBtn").disabled = true;
  $("msgInput").disabled = true;

  const contents = history.map(h => ({ role: h.role, parts: [{ text: h.text }] }));
  if (isOpening) {
    contents.push({ role: "user", parts: [{ text: "Start het gesprek volgens stap 1 (De Opening)." }] });
  }

  if (!apiEnabled) {
    hideTyping();
    addBubble("[TEST] API staat uit. Dit is een nep-antwoord. [STEP:1]", "ai");
    reEnable();
    return;
  }

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents, systemPrompt, password: appPassword })
    });
    const data = await res.json();
    hideTyping();

    if (!res.ok) {
      addBubble("⚠️ Er ging iets mis:\n" + (data.error || ("Fout " + res.status)), "ai");
      reEnable();
      return;
    }

    let aiText = data.text || "Hmm, ik kreeg geen antwoord terug. Probeer het nog eens.";
    const clean = extractStep(aiText);
    history.push({ role: "model", text: aiText });
    addBubble(clean, "ai");
  } catch (err) {
    hideTyping();
    addBubble("⚠️ Geen verbinding met de server.", "ai");
  }
  reEnable();
}

function reEnable() {
  $("msgInput").disabled = false;
  $("sendBtn").disabled = false;
  $("msgInput").focus();
}

function startConversation() {
  $("chat").innerHTML = "";
  history = [];
  updateProgress(1);
  $("msgInput").disabled = false;
  $("sendBtn").disabled = false;
  sendToGemini(true);
}

function handleSend() {
  const input = $("msgInput");
  const text = input.value.trim();
  if (!text) return;
  addBubble(text, "me");
  history.push({ role: "user", text: text });
  input.value = "";
  sendToGemini(false);
}

$("sendBtn").addEventListener("click", handleSend);
$("msgInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); handleSend(); }
});

$("apiToggle").addEventListener("change", (e) => {
  apiEnabled = e.target.checked;
});

$("openSettings").addEventListener("click", () => {
  $("promptArea").value = systemPrompt;
  $("apiToggle").checked = apiEnabled;
  $("settings").classList.remove("hidden");
});
$("closeSettings").addEventListener("click", () => {
  $("settings").classList.add("hidden");
});
$("savePrompt").addEventListener("click", () => {
  const val = $("promptArea").value.trim();
  if (!val) return;
  systemPrompt = val;
  try { localStorage.setItem(STORAGE_KEY, val); } catch (e) {}
  $("settings").classList.add("hidden");
  startConversation();
});
$("resetPrompt").addEventListener("click", () => {
  systemPrompt = DEFAULT_PROMPT;
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  $("promptArea").value = DEFAULT_PROMPT;
});

initLogin();
