(() => {
  const STORAGE_KEY = "kana-drill-session-v1";

  /** Common Hepburn / kunrei aliases → our deck spellings */
  const ROMAJI_ALIASES = {
    si: "shi",
    ti: "chi",
    tu: "tsu",
    hu: "fu",
    zi: "ji",
    sya: "sha",
    syu: "shu",
    syo: "sho",
    tya: "cha",
    tyu: "chu",
    tyo: "cho",
    zya: "ja",
    zyu: "ju",
    zyo: "jo",
  };

  const screens = {
    setup: document.getElementById("screen-setup"),
    play: document.getElementById("screen-play"),
    results: document.getElementById("screen-results"),
  };

  const els = {
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
    typeForm: document.getElementById("type-form"),
    typeInput: document.getElementById("type-input"),
    check: document.getElementById("btn-check"),
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

  /** @type {{ rounds: Array<object>, settings: object|null }} */
  let session = loadSession();

  /** @type {object|null} */
  let round = null;

  function loadSession() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return { rounds: [], settings: null };
      const parsed = JSON.parse(raw);
      return {
        rounds: Array.isArray(parsed.rounds) ? parsed.rounds : [],
        settings: parsed.settings || null,
      };
    } catch {
      return { rounds: [], settings: null };
    }
  }

  function saveSession() {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([key, el]) => {
      const active = key === name;
      el.classList.toggle("active", active);
      el.hidden = !active;
    });
    window.scrollTo(0, 0);
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

  function pickDistractors(correct, deck, mode, count = 3) {
    const key = mode === "kana-to-romaji" ? "romaji" : "char";
    const correctVal = correct[key];
    const pool = uniqueBy(
      shuffle(deck.filter((k) => k[key] !== correctVal)),
      (k) => k[key]
    );
    return pool.slice(0, count);
  }

  function normalizeRomaji(value) {
    const raw = String(value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "");
    return ROMAJI_ALIASES[raw] || raw;
  }

  function normalizeKana(value) {
    return String(value || "").trim().normalize("NFC");
  }

  function answersMatch(given, card, mode) {
    if (mode === "kana-to-romaji") {
      return normalizeRomaji(given) === normalizeRomaji(card.romaji);
    }
    return normalizeKana(given) === normalizeKana(card.char);
  }

  function readSettingsFromForm() {
    const scripts = [...els.form.querySelectorAll('input[name="script"]:checked')].map(
      (el) => el.value
    );
    const scope = els.form.querySelector('input[name="scope"]:checked').value;
    const mode = els.form.querySelector('input[name="mode"]:checked').value;
    const difficulty = els.form.querySelector('input[name="difficulty"]:checked').value;
    const roundSize = Number(els.form.querySelector('input[name="roundSize"]:checked').value);
    return { scripts, scope, mode, difficulty, roundSize };
  }

  function applySettingsToForm(settings) {
    if (!settings) return;
    els.form.querySelectorAll('input[name="script"]').forEach((el) => {
      el.checked = settings.scripts.includes(el.value);
    });
    const scope = els.form.querySelector(`input[name="scope"][value="${settings.scope}"]`);
    if (scope) scope.checked = true;
    const mode = els.form.querySelector(`input[name="mode"][value="${settings.mode}"]`);
    if (mode) mode.checked = true;
    const difficulty = els.form.querySelector(
      `input[name="difficulty"][value="${settings.difficulty || "choice"}"]`
    );
    if (difficulty) difficulty.checked = true;
    const size = els.form.querySelector(`input[name="roundSize"][value="${settings.roundSize}"]`);
    if (size) size.checked = true;
  }

  function formatScripts(scripts) {
    return scripts
      .map((s) => (s === "hiragana" ? "ひらがな" : "カタカナ"))
      .join(" · ");
  }

  function formatRoundMeta(r) {
    const hard = r.difficulty === "hard" ? " · hard" : "";
    return `${formatScripts(r.scripts)} · ${r.total} cards${hard}`;
  }

  function renderHistory(target) {
    target.innerHTML = "";
    if (!session.rounds.length) return;

    session.rounds.forEach((r, i) => {
      const li = document.createElement("li");
      const pct = Math.round((r.correct / r.total) * 100);
      li.innerHTML = `
        <span>Round ${i + 1} · ${formatRoundMeta(r)}</span>
        <span class="score">${r.correct}/${r.total} (${pct}%)</span>
      `;
      target.appendChild(li);
    });
  }

  function updateSessionUI() {
    const hasRounds = session.rounds.length > 0;
    els.sessionPanel.classList.toggle("hidden", !hasRounds);
    renderHistory(els.roundHistory);
    renderHistory(els.resultsHistory);

    if (hasRounds) {
      const totalCorrect = session.rounds.reduce((s, r) => s + r.correct, 0);
      const totalCards = session.rounds.reduce((s, r) => s + r.total, 0);
      const best = Math.max(...session.rounds.map((r) => r.correct / r.total));
      els.sessionSummary.textContent = `${session.rounds.length} round${
        session.rounds.length === 1 ? "" : "s"
      } · ${totalCorrect}/${totalCards} overall · best ${Math.round(best * 100)}%`;
    } else {
      els.sessionSummary.textContent = "";
    }
  }

  function startRound(settings) {
    const deck = buildDeck(settings);
    const minCards = settings.difficulty === "hard" ? 1 : 4;
    if (deck.length < minCards) {
      alert("Not enough kana for that selection. Pick at least one script.");
      return;
    }
    if (!settings.scripts.length) {
      alert("Choose hiragana, katakana, or both.");
      return;
    }

    session.settings = settings;
    saveSession();

    const size = Math.min(settings.roundSize, deck.length);
    const cards = shuffle(deck).slice(0, size);

    round = {
      settings,
      cards,
      index: 0,
      correct: 0,
      answered: false,
      misses: [],
      startedAt: Date.now(),
    };

    showScreen("play");
    renderCard();
  }

  function renderCard() {
    const { cards, index, settings, correct } = round;
    const card = cards[index];
    const mode = settings.mode;
    const hard = settings.difficulty === "hard";

    els.progressLabel.textContent = `${index + 1} / ${cards.length}`;
    els.liveScore.textContent = `${correct} correct`;
    els.progressFill.style.width = `${(index / cards.length) * 100}%`;

    els.feedback.classList.add("hidden");
    els.feedback.classList.remove("is-correct", "is-wrong");
    round.answered = false;

    const stage = document.querySelector(".card-stage");
    stage.style.animation = "none";
    void stage.offsetWidth;
    stage.style.animation = "";

    if (mode === "kana-to-romaji") {
      els.promptLabel.textContent = hard ? "Type the romaji" : "Read this kana";
      els.prompt.textContent = card.char;
      els.prompt.classList.remove("romaji-prompt");
      els.scriptHint.textContent = card.script;
    } else {
      els.promptLabel.textContent = hard ? "Type the kana" : "Which kana is this?";
      els.prompt.textContent = card.romaji;
      els.prompt.classList.add("romaji-prompt");
      els.scriptHint.textContent = card.script;
    }

    els.choices.innerHTML = "";
    els.typeInput.value = "";
    els.typeInput.disabled = false;
    els.check.disabled = false;

    if (hard) {
      els.choices.classList.add("hidden");
      els.typeForm.classList.remove("hidden");
      els.typeInput.classList.toggle("kana-input", mode === "romaji-to-kana");
      els.typeInput.lang = mode === "romaji-to-kana" ? "ja" : "en";
      els.typeInput.inputMode = mode === "romaji-to-kana" ? "text" : "latin";
      els.typeInput.placeholder = mode === "romaji-to-kana" ? "かな" : "romaji";
      els.typeInput.setAttribute(
        "aria-label",
        mode === "romaji-to-kana" ? "Type the kana" : "Type the romaji"
      );
      requestAnimationFrame(() => els.typeInput.focus());
      return;
    }

    els.typeForm.classList.add("hidden");
    els.choices.classList.remove("hidden");

    const distractors = pickDistractors(
      card,
      round.cards.length >= 4 ? buildDeck(settings) : round.cards,
      mode
    );
    const options = shuffle([card, ...distractors]);

    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice" + (mode === "romaji-to-kana" ? " kana-choice" : "");
      btn.textContent = mode === "kana-to-romaji" ? opt.romaji : opt.char;
      btn.dataset.romaji = opt.romaji;
      btn.dataset.char = opt.char;
      btn.addEventListener("click", () => onChoiceAnswer(btn, opt));
      els.choices.appendChild(btn);
    });
  }

  function showVerdict({ isCorrect, card, mode, yourAnswer }) {
    els.feedback.classList.remove("hidden");
    if (isCorrect) {
      round.correct += 1;
      els.feedback.classList.add("is-correct");
      els.feedback.classList.remove("is-wrong");
      els.feedbackVerdict.textContent = "Correct";
      els.feedbackDetail.innerHTML =
        mode === "kana-to-romaji"
          ? `<strong>${card.char}</strong> is <strong>${card.romaji}</strong>`
          : `<strong>${card.romaji}</strong> is <strong>${card.char}</strong>`;
    } else {
      round.misses.push({
        char: card.char,
        romaji: card.romaji,
        script: card.script,
        given: yourAnswer || "—",
      });
      els.feedback.classList.add("is-wrong");
      els.feedback.classList.remove("is-correct");
      els.feedbackVerdict.textContent = "Not quite";
      const givenHtml = yourAnswer
        ? `You answered <strong>${yourAnswer}</strong>. `
        : "";
      els.feedbackDetail.innerHTML =
        mode === "kana-to-romaji"
          ? `${givenHtml}<strong>${card.char}</strong> is <strong>${card.romaji}</strong>.`
          : `${givenHtml}<strong>${card.romaji}</strong> is <strong>${card.char}</strong>.`;
    }

    els.liveScore.textContent = `${round.correct} correct`;
    els.progressFill.style.width = `${((round.index + 1) / round.cards.length) * 100}%`;

    const isLast = round.index >= round.cards.length - 1;
    els.next.textContent = isLast ? "See results" : "Next";
    els.next.focus();
  }

  function onChoiceAnswer(button, chosen) {
    if (!round || round.answered) return;
    round.answered = true;

    const card = round.cards[round.index];
    const mode = round.settings.mode;
    const isCorrect =
      mode === "kana-to-romaji"
        ? chosen.romaji === card.romaji
        : chosen.char === card.char;

    const buttons = [...els.choices.querySelectorAll(".choice")];
    buttons.forEach((btn) => {
      btn.disabled = true;
      const match =
        mode === "kana-to-romaji"
          ? btn.dataset.romaji === card.romaji
          : btn.dataset.char === card.char;
      if (match) btn.classList.add("correct");
      else if (btn === button && !isCorrect) btn.classList.add("wrong");
      else btn.classList.add("dim");
    });

    const yourAnswer = mode === "kana-to-romaji" ? chosen.romaji : chosen.char;
    showVerdict({ isCorrect, card, mode, yourAnswer });
  }

  function onTypedAnswer(raw) {
    if (!round || round.answered) return;
    const given = String(raw || "").trim();
    if (!given) {
      els.typeInput.focus();
      return;
    }

    round.answered = true;
    const card = round.cards[round.index];
    const mode = round.settings.mode;
    const isCorrect = answersMatch(given, card, mode);

    els.typeInput.disabled = true;
    els.check.disabled = true;
    showVerdict({ isCorrect, card, mode, yourAnswer: given });
  }

  function finishRound({ abandoned = false } = {}) {
    if (!round) return;

    let correct = round.correct;
    let totalScored = round.cards.length;
    if (abandoned) {
      // Only count cards the player actually answered
      totalScored = round.index + (round.answered ? 1 : 0);
      if (totalScored === 0) {
        round = null;
        showScreen("setup");
        updateSessionUI();
        return;
      }
    }

    const record = {
      correct,
      total: totalScored,
      scripts: round.settings.scripts,
      scope: round.settings.scope,
      mode: round.settings.mode,
      difficulty: round.settings.difficulty || "choice",
      misses: round.misses,
      abandoned,
      at: new Date().toISOString(),
    };

    session.rounds.push(record);
    saveSession();

    els.resultsTitle.textContent = abandoned ? "Round ended early" : "Round complete";
    els.resultsScore.textContent = `${record.correct} / ${record.total}`;
    const pct = Math.round((record.correct / record.total) * 100);
    const hardLabel = record.difficulty === "hard" ? " · hard" : "";
    els.resultsPct.textContent = `${pct}% · ${formatScripts(record.scripts)}${hardLabel}`;

    if (record.misses.length) {
      els.missedList.classList.remove("hidden");
      els.missedItems.innerHTML = "";
      record.misses.forEach((m) => {
        const li = document.createElement("li");
        const right = record.mode === "romaji-to-kana" ? m.char : m.romaji;
        li.innerHTML = `
          <span class="kana">${m.char}</span>
          <span><span class="wrong">${m.given}</span><span class="right">${right}</span></span>
        `;
        els.missedItems.appendChild(li);
      });
    } else {
      els.missedList.classList.add("hidden");
      els.missedItems.innerHTML = "";
    }

    updateSessionUI();
    round = null;
    showScreen("results");
  }

  function nextCard() {
    if (!round) return;
    if (round.index >= round.cards.length - 1) {
      finishRound();
      return;
    }
    round.index += 1;
    renderCard();
  }

  // Events
  els.form.addEventListener("submit", (e) => {
    e.preventDefault();
    const settings = readSettingsFromForm();
    startRound(settings);
  });

  els.typeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    onTypedAnswer(els.typeInput.value);
  });

  els.next.addEventListener("click", nextCard);
  els.quit.addEventListener("click", () => finishRound({ abandoned: true }));

  els.again.addEventListener("click", () => {
    const settings = session.settings || readSettingsFromForm();
    startRound(settings);
  });

  els.home.addEventListener("click", () => {
    applySettingsToForm(session.settings);
    updateSessionUI();
    showScreen("setup");
  });

  els.clearSession.addEventListener("click", () => {
    session.rounds = [];
    saveSession();
    updateSessionUI();
  });

  // Restore settings from last session
  applySettingsToForm(session.settings);
  updateSessionUI();
  showScreen("setup");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
})();
