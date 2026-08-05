(() => {
  const STORAGE_KEY = "kanji-drill-session-v1";

  const MODE_LABELS = {
    "kanji-to-reading": "Kanji → reading",
    "kanji-to-meaning": "Kanji → meaning",
    "reading-to-kanji": "Reading → kanji",
    "meaning-to-kanji": "Meaning → kanji",
    revision: "Revision",
  };

  const screens = {
    setup: document.getElementById("screen-setup"),
    play: document.getElementById("screen-play"),
    revision: document.getElementById("screen-revision"),
    results: document.getElementById("screen-results"),
  };

  const els = {
    form: document.getElementById("setup-form"),
    categoryList: document.getElementById("category-list"),
    roundSizeField: document.getElementById("round-size-field"),
    roundSizeLegend: document.getElementById("round-size-legend"),
    startBtn: document.getElementById("btn-start"),
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
    promptHint: document.getElementById("prompt-hint"),
    choices: document.getElementById("choices"),
    feedback: document.getElementById("feedback"),
    feedbackVerdict: document.getElementById("feedback-verdict"),
    feedbackDetail: document.getElementById("feedback-detail"),
    next: document.getElementById("btn-next"),
    revQuit: document.getElementById("btn-rev-quit"),
    revProgressLabel: document.getElementById("rev-progress-label"),
    revProgressFill: document.getElementById("rev-progress-fill"),
    revCategory: document.getElementById("rev-category"),
    revKanji: document.getElementById("rev-kanji"),
    revReading: document.getElementById("rev-reading"),
    revMeaning: document.getElementById("rev-meaning"),
    revExample: document.getElementById("rev-example"),
    revPrev: document.getElementById("btn-rev-prev"),
    revNext: document.getElementById("btn-rev-next"),
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

  /** @type {{ cards: object[], index: number, settings: object }|null} */
  let revision = null;

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

  function answerKey(card, mode) {
    if (mode === "kanji-to-reading" || mode === "reading-to-kanji") return card.reading;
    if (mode === "kanji-to-meaning" || mode === "meaning-to-kanji") return card.meaning;
    return card.kanji;
  }

  function displayValue(card, mode) {
    if (mode === "kanji-to-reading" || mode === "reading-to-kanji") return card.reading;
    if (mode === "kanji-to-meaning" || mode === "meaning-to-kanji") return card.meaning;
    return card.kanji;
  }

  function pickDistractors(correct, deck, mode, count = 3) {
    const key = answerKey(correct, mode);
    const pool = uniqueBy(
      shuffle(deck.filter((item) => answerKey(item, mode) !== key)),
      (item) => answerKey(item, mode)
    );
    return pool.slice(0, count);
  }

  function renderCategoryCheckboxes() {
    els.categoryList.innerHTML = "";
    for (const category of KANJI_CATEGORIES) {
      const label = document.createElement("label");
      label.className = "check";
      label.innerHTML = `<input type="checkbox" name="category" value="${category}" checked /> ${category}`;
      els.categoryList.appendChild(label);
    }
  }

  function readSettingsFromForm() {
    const categories = [...els.form.querySelectorAll('input[name="category"]:checked')].map(
      (el) => el.value
    );
    const mode = els.form.querySelector('input[name="mode"]:checked').value;
    const roundSizeRaw = els.form.querySelector('input[name="roundSize"]:checked').value;
    const roundSize = roundSizeRaw === "all" ? "all" : Number(roundSizeRaw);
    return { categories, mode, roundSize };
  }

  function applySettingsToForm(settings) {
    if (!settings) return;
    els.form.querySelectorAll('input[name="category"]').forEach((el) => {
      el.checked = settings.categories.includes(el.value);
    });
    const mode = els.form.querySelector(`input[name="mode"][value="${settings.mode}"]`);
    if (mode) mode.checked = true;
    const sizeValue =
      settings.roundSize === "all" ? "all" : String(settings.roundSize);
    const size = els.form.querySelector(`input[name="roundSize"][value="${sizeValue}"]`);
    if (size) size.checked = true;
    updateSetupForMode(settings.mode);
  }

  function updateSetupForMode(mode) {
    const isRevision = mode === "revision";
    els.roundSizeLegend.textContent = isRevision ? "Cards to review" : "Cards per round";
    els.startBtn.textContent = isRevision ? "Start revision" : "Start round";
    els.liveScore.parentElement.classList.toggle("hidden", isRevision);
  }

  function formatRoundMeta(r) {
    return `${MODE_LABELS[r.mode] || r.mode} · ${r.total} cards`;
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

  function cardDetailHtml(card) {
    return `<strong>${card.kanji}</strong> · ${card.reading} · ${card.meaning}<br><span style="opacity:.85">${card.example}</span>`;
  }

  function startSession(settings) {
    const deck = buildKanjiDeck({ categories: settings.categories });
    if (!deck.length) {
      alert("Choose at least one topic with kanji in it.");
      return;
    }
    if (!settings.categories.length) {
      alert("Pick at least one topic.");
      return;
    }

    session.settings = settings;
    saveSession();

    const size =
      settings.roundSize === "all"
        ? deck.length
        : Math.min(settings.roundSize, deck.length);
    const cards = shuffle(deck).slice(0, size);

    if (settings.mode === "revision") {
      revision = { cards, index: 0, settings };
      showScreen("revision");
      renderRevisionCard();
      return;
    }

    if (deck.length < 4) {
      alert("Need at least 4 kanji in your selection for multiple choice.");
      return;
    }

    round = {
      settings,
      deck,
      cards,
      index: 0,
      correct: 0,
      answered: false,
      misses: [],
      startedAt: Date.now(),
    };

    showScreen("play");
    renderTestCard();
  }

  function renderTestCard() {
    const { cards, index, settings, correct } = round;
    const card = cards[index];
    const mode = settings.mode;

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

    els.prompt.classList.remove("text-prompt");
    els.promptHint.textContent = card.category;

    if (mode === "kanji-to-reading" || mode === "kanji-to-meaning") {
      els.promptLabel.textContent =
        mode === "kanji-to-reading" ? "What is the reading?" : "What is the meaning?";
      els.prompt.textContent = card.kanji;
    } else if (mode === "reading-to-kanji") {
      els.promptLabel.textContent = "Which kanji matches this reading?";
      els.prompt.textContent = card.reading;
      els.prompt.classList.add("text-prompt");
    } else {
      els.promptLabel.textContent = "Which kanji matches this meaning?";
      els.prompt.textContent = card.meaning;
      els.prompt.classList.add("text-prompt");
    }

    const answerMode =
      mode === "kanji-to-reading"
        ? "kanji-to-reading"
        : mode === "kanji-to-meaning"
          ? "kanji-to-meaning"
          : mode === "reading-to-kanji"
            ? "reading-to-kanji"
            : "meaning-to-kanji";

    const distractors = pickDistractors(card, round.deck, answerMode);
    const options = shuffle([card, ...distractors]);

    els.choices.innerHTML = "";
    els.choices.classList.toggle(
      "two-col",
      mode === "reading-to-kanji" || mode === "meaning-to-kanji"
    );

    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      const isKanjiChoice = mode === "reading-to-kanji" || mode === "meaning-to-kanji";
      btn.className = "choice" + (isKanjiChoice ? " kanji-choice" : "");
      btn.textContent = isKanjiChoice ? opt.kanji : displayValue(opt, answerMode);
      btn.dataset.kanji = opt.kanji;
      btn.dataset.answer = answerKey(opt, answerMode);
      btn.addEventListener("click", () => onAnswer(btn, opt, answerMode));
      els.choices.appendChild(btn);
    });
  }

  function onAnswer(button, chosen, answerMode) {
    if (!round || round.answered) return;
    round.answered = true;

    const card = round.cards[round.index];
    const correctAnswer = answerKey(card, answerMode);
    const chosenAnswer = answerKey(chosen, answerMode);
    const isCorrect = chosenAnswer === correctAnswer;

    const buttons = [...els.choices.querySelectorAll(".choice")];
    buttons.forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.answer === correctAnswer) btn.classList.add("correct");
      else if (btn === button && !isCorrect) btn.classList.add("wrong");
      else btn.classList.add("dim");
    });

    els.feedback.classList.remove("hidden");
    if (isCorrect) {
      round.correct += 1;
      els.feedback.classList.add("is-correct");
      els.feedback.classList.remove("is-wrong");
      els.feedbackVerdict.textContent = "Correct";
      els.feedbackDetail.innerHTML = cardDetailHtml(card);
    } else {
      round.misses.push({
        card,
        given: chosenAnswer,
        mode: round.settings.mode,
      });
      els.feedback.classList.add("is-wrong");
      els.feedback.classList.remove("is-correct");
      els.feedbackVerdict.textContent = "Not quite";
      els.feedbackDetail.innerHTML = `You chose <strong>${chosenAnswer}</strong>.<br>${cardDetailHtml(card)}`;
    }

    els.liveScore.textContent = `${round.correct} correct`;
    els.progressFill.style.width = `${((round.index + 1) / round.cards.length) * 100}%`;

    const isLast = round.index >= round.cards.length - 1;
    els.next.textContent = isLast ? "See results" : "Next";
    els.next.focus();
  }

  function renderRevisionCard() {
    const { cards, index } = revision;
    const card = cards[index];

    els.revProgressLabel.textContent = `${index + 1} / ${cards.length}`;
    els.revProgressFill.style.width = `${((index + 1) / cards.length) * 100}%`;
    els.revCategory.textContent = card.category;
    els.revKanji.textContent = card.kanji;
    els.revReading.textContent = card.reading;
    els.revMeaning.textContent = card.meaning;
    els.revExample.textContent = card.example;

    els.revPrev.disabled = index === 0;
    els.revNext.textContent = index >= cards.length - 1 ? "Finish" : "Next";

    const article = document.querySelector(".revision-card");
    article.style.animation = "none";
    void article.offsetWidth;
    article.style.animation = "";
  }

  function finishRound({ abandoned = false } = {}) {
    if (!round) return;

    let correct = round.correct;
    let totalScored = round.cards.length;
    if (abandoned) {
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
      mode: round.settings.mode,
      categories: round.settings.categories,
      misses: round.misses,
      abandoned,
      at: new Date().toISOString(),
    };

    session.rounds.push(record);
    saveSession();

    els.resultsTitle.textContent = abandoned ? "Round ended early" : "Round complete";
    els.resultsScore.textContent = `${record.correct} / ${record.total}`;
    const pct = Math.round((record.correct / record.total) * 100);
    els.resultsPct.textContent = `${pct}% · ${MODE_LABELS[record.mode]}`;

    if (record.misses.length) {
      els.missedList.classList.remove("hidden");
      els.missedItems.innerHTML = "";
      record.misses.forEach((m) => {
        const li = document.createElement("li");
        const expected =
          m.mode === "kanji-to-reading"
            ? m.card.reading
            : m.mode === "kanji-to-meaning"
              ? m.card.meaning
              : m.card.kanji;
        li.innerHTML = `
          <span class="kana">${m.card.kanji}</span>
          <span class="meta">${m.card.category}</span>
          <span><span class="wrong">${m.given}</span> <span class="right">${expected}</span></span>
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

  function nextTestCard() {
    if (!round) return;
    if (round.index >= round.cards.length - 1) {
      finishRound();
      return;
    }
    round.index += 1;
    renderTestCard();
  }

  function nextRevisionCard() {
    if (!revision) return;
    if (revision.index >= revision.cards.length - 1) {
      revision = null;
      showScreen("setup");
      return;
    }
    revision.index += 1;
    renderRevisionCard();
  }

  function prevRevisionCard() {
    if (!revision || revision.index === 0) return;
    revision.index -= 1;
    renderRevisionCard();
  }

  els.form.addEventListener("change", (e) => {
    if (e.target.name === "mode") updateSetupForMode(e.target.value);
  });

  els.form.addEventListener("submit", (e) => {
    e.preventDefault();
    startSession(readSettingsFromForm());
  });

  els.next.addEventListener("click", nextTestCard);
  els.quit.addEventListener("click", () => finishRound({ abandoned: true }));
  els.revNext.addEventListener("click", nextRevisionCard);
  els.revPrev.addEventListener("click", prevRevisionCard);
  els.revQuit.addEventListener("click", () => {
    revision = null;
    showScreen("setup");
  });

  els.again.addEventListener("click", () => {
    const settings = session.settings || readSettingsFromForm();
    startSession(settings);
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

  renderCategoryCheckboxes();
  applySettingsToForm(session.settings);
  updateSetupForMode(session.settings?.mode || "kanji-to-reading");
  updateSessionUI();
  showScreen("setup");
})();
