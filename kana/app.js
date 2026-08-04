const SESSION_KEY = "nihongo-kana-session";

const els = {
  setup: document.getElementById("screen-setup"),
  play: document.getElementById("screen-play"),
  results: document.getElementById("screen-results"),
  form: document.getElementById("setup-form"),
  sessionPanel: document.getElementById("session-panel"),
  roundHistory: document.getElementById("round-history"),
  sessionSummary: document.getElementById("session-summary"),
  clearSession: document.getElementById("btn-clear-session"),
  quit: document.getElementById("btn-quit"),
  progressLabel: document.getElementById("progress-label"),
  liveScore: document.getElementById("live-score"),
  progressFill: document.getElementById("progress-fill"),
  promptLabel: document.getElementById("prompt-label"),
  prompt: document.getElementById("prompt"),
  scriptHint: document.getElementById("script-hint"),
  choices: document.getElementById("choices"),
  feedback: document.getElementById("feedback"),
  feedbackVerdict: document.getElementById("feedback-verdict"),
  feedbackDetail: document.getElementById("feedback-detail"),
  next: document.getElementById("btn-next"),
  resultsTitle: document.getElementById("results-title"),
  resultsScore: document.getElementById("results-score"),
  resultsPct: document.getElementById("results-pct"),
  missedList: document.getElementById("missed-list"),
  missedItems: document.getElementById("missed-items"),
  resultsHistory: document.getElementById("results-history"),
  again: document.getElementById("btn-again"),
  home: document.getElementById("btn-home"),
};

let state = {
  settings: null,
  deck: [],
  index: 0,
  correct: 0,
  misses: [],
  answered: false,
};

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : { rounds: [] };
  } catch {
    return { rounds: [] };
  }
}

function saveSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function showScreen(name) {
  for (const key of ["setup", "play", "results"]) {
    const el = els[key];
    const active = key === name;
    el.classList.toggle("active", active);
    el.hidden = !active;
  }
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function uniqueBy(arr, keyFn) {
  const seen = new Set();
  return arr.filter((item) => {
    const k = keyFn(item);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function renderSessionHistory() {
  const session = loadSession();
  const rounds = session.rounds || [];
  const hasRounds = rounds.length > 0;

  els.sessionPanel.classList.toggle("hidden", !hasRounds);
  els.roundHistory.innerHTML = "";
  els.resultsHistory.innerHTML = "";

  rounds
    .slice()
    .reverse()
    .forEach((r, i) => {
      const label = `Round ${rounds.length - i}`;
      const detail = `${r.correct}/${r.total} · ${r.mode === "kana-to-romaji" ? "kana→romaji" : "romaji→kana"}`;
      const li = document.createElement("li");
      li.innerHTML = `<span>${label}<br><small style="opacity:.7">${detail}</small></span><span class="score">${Math.round((r.correct / r.total) * 100)}%</span>`;
      els.roundHistory.appendChild(li.cloneNode(true));
      els.resultsHistory.appendChild(li);
    });

  if (hasRounds) {
    const totalCorrect = rounds.reduce((s, r) => s + r.correct, 0);
    const totalCards = rounds.reduce((s, r) => s + r.total, 0);
    els.sessionSummary.textContent = `${rounds.length} round${rounds.length === 1 ? "" : "s"} · ${totalCorrect}/${totalCards} cards correct (${Math.round((totalCorrect / totalCards) * 100)}%)`;
  } else {
    els.sessionSummary.textContent = "";
  }
}

function readSettings() {
  const form = els.form;
  const scripts = [...form.querySelectorAll('input[name="script"]:checked')].map((el) => el.value);
  const scope = form.querySelector('input[name="scope"]:checked').value;
  const mode = form.querySelector('input[name="mode"]:checked').value;
  const roundSize = Number(form.querySelector('input[name="roundSize"]:checked').value);
  return { scripts, scope, mode, roundSize };
}

function startRound(settings) {
  if (!settings.scripts.length) {
    alert("Pick at least one script (hiragana or katakana).");
    return;
  }

  const pool = buildDeck(settings);
  if (!pool.length) {
    alert("No cards match that range — try a wider scope.");
    return;
  }

  const deck = shuffle(pool).slice(0, Math.min(settings.roundSize, pool.length));
  state = {
    settings,
    deck,
    index: 0,
    correct: 0,
    misses: [],
    answered: false,
  };

  showScreen("play");
  renderCard();
}

function currentCard() {
  return state.deck[state.index];
}

function distractors(card, mode) {
  const pool = buildDeck(state.settings).filter((k) => {
    if (mode === "kana-to-romaji") return k.romaji !== card.romaji;
    return k.char !== card.char;
  });

  const sameScript = pool.filter((k) => k.script === card.script);
  const source = sameScript.length >= 3 ? sameScript : pool;
  const keyed =
    mode === "kana-to-romaji"
      ? uniqueBy(shuffle(source), (k) => k.romaji)
      : uniqueBy(shuffle(source), (k) => k.char);

  return keyed.slice(0, 3);
}

function renderCard() {
  const card = currentCard();
  const mode = state.settings.mode;
  const n = state.deck.length;
  const i = state.index;

  state.answered = false;
  els.feedback.classList.add("hidden");
  els.feedback.classList.remove("is-correct", "is-wrong");
  els.choices.innerHTML = "";

  els.progressLabel.textContent = `${i + 1} / ${n}`;
  els.liveScore.textContent = `${state.correct} correct`;
  els.progressFill.style.width = `${(i / n) * 100}%`;

  if (mode === "kana-to-romaji") {
    els.promptLabel.textContent = "Read this kana";
    els.prompt.textContent = card.char;
    els.prompt.classList.remove("romaji-prompt");
    els.scriptHint.textContent = card.script;
  } else {
    els.promptLabel.textContent = "Pick the kana";
    els.prompt.textContent = card.romaji;
    els.prompt.classList.add("romaji-prompt");
    els.scriptHint.textContent = card.script;
  }

  const options = shuffle([card, ...distractors(card, mode)]);
  for (const opt of options) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice" + (mode === "romaji-to-kana" ? " kana-choice" : "");
    btn.textContent = mode === "kana-to-romaji" ? opt.romaji : opt.char;
    btn.addEventListener("click", () => onAnswer(btn, opt, card));
    els.choices.appendChild(btn);
  }
}

function onAnswer(btn, chosen, card) {
  if (state.answered) return;
  state.answered = true;

  const mode = state.settings.mode;
  const isCorrect =
    mode === "kana-to-romaji" ? chosen.romaji === card.romaji : chosen.char === card.char;

  if (isCorrect) state.correct += 1;
  else {
    state.misses.push({
      char: card.char,
      romaji: card.romaji,
      script: card.script,
      picked: mode === "kana-to-romaji" ? chosen.romaji : chosen.char,
    });
  }

  els.liveScore.textContent = `${state.correct} correct`;
  els.progressFill.style.width = `${((state.index + 1) / state.deck.length) * 100}%`;

  for (const choice of els.choices.querySelectorAll(".choice")) {
    choice.disabled = true;
    const value = choice.textContent;
    const isRight =
      mode === "kana-to-romaji" ? value === card.romaji : value === card.char;
    if (isRight) choice.classList.add("correct");
    else if (choice === btn && !isCorrect) choice.classList.add("wrong");
    else choice.classList.add("dim");
  }

  els.feedback.classList.remove("hidden", "is-correct", "is-wrong");
  els.feedback.classList.add(isCorrect ? "is-correct" : "is-wrong");
  els.feedbackVerdict.textContent = isCorrect ? "Correct" : "Not quite";
  els.feedbackDetail.innerHTML = isCorrect
    ? `<strong>${card.char}</strong> = ${card.romaji}`
    : `Answer: <strong>${card.char}</strong> = ${card.romaji}`;

  els.next.textContent = state.index + 1 >= state.deck.length ? "See results" : "Next";
}

function finishRound() {
  const total = state.deck.length;
  const { correct, misses, settings } = state;
  const session = loadSession();
  session.rounds.push({
    correct,
    total,
    mode: settings.mode,
    scripts: settings.scripts,
    scope: settings.scope,
    at: Date.now(),
  });
  saveSession(session);

  const pct = total ? Math.round((correct / total) * 100) : 0;
  els.resultsTitle.textContent = pct === 100 ? "Perfect round!" : "Round complete";
  els.resultsScore.textContent = `${correct} / ${total}`;
  els.resultsPct.textContent = `${pct}% correct`;

  if (misses.length) {
    els.missedList.classList.remove("hidden");
    els.missedItems.innerHTML = "";
    for (const m of misses) {
      const li = document.createElement("li");
      li.innerHTML = `<span class="kana">${m.char}</span><span><span class="wrong">${m.picked}</span><span class="right">${m.romaji}</span></span>`;
      els.missedItems.appendChild(li);
    }
  } else {
    els.missedList.classList.add("hidden");
    els.missedItems.innerHTML = "";
  }

  renderSessionHistory();
  showScreen("results");
}

els.form.addEventListener("submit", (e) => {
  e.preventDefault();
  startRound(readSettings());
});

els.quit.addEventListener("click", () => {
  const answeredCount = state.answered ? state.index + 1 : state.index;
  if (answeredCount === 0) {
    showScreen("setup");
    return;
  }
  if (confirm("End this round early? Progress so far will be saved.")) {
    state.deck = state.deck.slice(0, answeredCount);
    finishRound();
  }
});

els.next.addEventListener("click", () => {
  if (state.index + 1 >= state.deck.length) finishRound();
  else {
    state.index += 1;
    renderCard();
  }
});

els.again.addEventListener("click", () => startRound(state.settings || readSettings()));
els.home.addEventListener("click", () => {
  renderSessionHistory();
  showScreen("setup");
});

els.clearSession.addEventListener("click", () => {
  if (confirm("Clear all session rounds?")) {
    saveSession({ rounds: [] });
    renderSessionHistory();
  }
});

renderSessionHistory();
showScreen("setup");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
