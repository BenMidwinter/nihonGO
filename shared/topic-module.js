function initTopicModule(topic) {
  const STORAGE_KEY = topic.storageKey;

  const screens = {
    home: document.getElementById("screen-home"),
    play: document.getElementById("screen-play"),
    revision: document.getElementById("screen-revision"),
    results: document.getElementById("screen-results"),
    examples: document.getElementById("screen-examples"),
  };

  const els = {
    tabNav: document.getElementById("tab-nav"),
    rulesMount: document.getElementById("rules-mount"),
    form: document.getElementById("setup-form"),
    categoryList: document.getElementById("category-list"),
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
    revMount: document.getElementById("rev-mount"),
    revPrev: document.getElementById("btn-rev-prev"),
    revNext: document.getElementById("btn-rev-next"),
    resultsTitle: document.getElementById("results-title"),
    resultsScore: document.getElementById("results-score"),
    resultsPct: document.getElementById("results-pct"),
    missedList: document.getElementById("missed-list"),
    missedItems: document.getElementById("missed-items"),
    resultsHistory: document.getElementById("results-history"),
    again: document.getElementById("btn-again"),
    homeBtn: document.getElementById("btn-home"),
    exQuit: document.getElementById("btn-ex-quit"),
    exProgressLabel: document.getElementById("ex-progress-label"),
    exProgressFill: document.getElementById("ex-progress-fill"),
    exMount: document.getElementById("ex-mount"),
    exPrev: document.getElementById("btn-ex-prev"),
    exNext: document.getElementById("btn-ex-next"),
    drillPanel: document.getElementById("drill-panel"),
    examplesHint: document.getElementById("examples-hint"),
  };

  let session = loadSession();
  let round = null;
  let revision = null;
  let examples = null;
  let activeTab = "rules";

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
      if (!el) return;
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

  function getCategories() {
    return [...new Set(topic.flashcards.map((c) => c.category))].sort();
  }

  function buildDeck(categories) {
    if (!categories.length) return [];
    return topic.flashcards.filter((c) => categories.includes(c.category));
  }

  function getMode(value) {
    return topic.drillModes.find((m) => m.value === value);
  }

  function fieldValue(card, key) {
    return card.fields[key] ?? "";
  }

  function pickDistractors(card, deck, modeDef, count = 3) {
    const answer = fieldValue(card, modeDef.answer);
    const pool = uniqueBy(
      shuffle(deck.filter((c) => fieldValue(c, modeDef.answer) !== answer)),
      (c) => fieldValue(c, modeDef.answer)
    );
    return pool.slice(0, count);
  }

  function renderRules() {
    els.rulesMount.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "rules-panel";

    for (const section of topic.rules) {
      const sec = document.createElement("section");
      sec.className = "rule-section";
      sec.innerHTML = `<h2>${section.title}</h2>`;

      for (const block of section.blocks) {
        if (block.type === "p") {
          const p = document.createElement("p");
          p.textContent = block.text;
          sec.appendChild(p);
        } else if (block.type === "ul") {
          const ul = document.createElement("ul");
          for (const item of block.items) {
            const li = document.createElement("li");
            li.innerHTML = item;
            ul.appendChild(li);
          }
          sec.appendChild(ul);
        } else if (block.type === "table") {
          const tw = document.createElement("div");
          tw.className = "rule-table-wrap";
          const table = document.createElement("table");
          table.className = "rule-table";
          const thead = document.createElement("thead");
          const hr = document.createElement("tr");
          for (const h of block.headers) {
            const th = document.createElement("th");
            th.textContent = h;
            hr.appendChild(th);
          }
          thead.appendChild(hr);
          table.appendChild(thead);
          const tbody = document.createElement("tbody");
          for (const row of block.rows) {
            const tr = document.createElement("tr");
            for (const cell of row) {
              const td = document.createElement("td");
              if (block.jpColumn !== undefined && row.indexOf(cell) === block.jpColumn) {
                td.className = "jp";
              }
              td.innerHTML = cell;
              tr.appendChild(td);
            }
            tbody.appendChild(tr);
          }
          table.appendChild(tbody);
          tw.appendChild(table);
          sec.appendChild(tw);
        } else if (block.type === "tip") {
          const tip = document.createElement("div");
          tip.className = "tip-box";
          tip.innerHTML = block.text;
          sec.appendChild(tip);
        }
      }
      wrap.appendChild(sec);
    }
    els.rulesMount.appendChild(wrap);
  }

  function renderCategoryCheckboxes() {
    els.categoryList.innerHTML = "";
    for (const category of getCategories()) {
      const label = document.createElement("label");
      label.className = "check";
      label.innerHTML = `<input type="checkbox" name="category" value="${category}" checked /> ${category}`;
      els.categoryList.appendChild(label);
    }
  }

  function readSettings() {
    const categories = [...els.form.querySelectorAll('input[name="category"]:checked')].map(
      (el) => el.value
    );
    const mode = els.form.querySelector('input[name="mode"]:checked').value;
    const roundSizeRaw = els.form.querySelector('input[name="roundSize"]:checked').value;
    const roundSize = roundSizeRaw === "all" ? "all" : Number(roundSizeRaw);
    return { categories, mode, roundSize };
  }

  function applySettings(settings) {
    if (!settings) return;
    els.form.querySelectorAll('input[name="category"]').forEach((el) => {
      el.checked = settings.categories.includes(el.value);
    });
    const mode = els.form.querySelector(`input[name="mode"][value="${settings.mode}"]`);
    if (mode) mode.checked = true;
    const sizeValue = settings.roundSize === "all" ? "all" : String(settings.roundSize);
    const size = els.form.querySelector(`input[name="roundSize"][value="${sizeValue}"]`);
    if (size) size.checked = true;
    updateSetupForMode(settings.mode);
  }

  function updateSetupForMode(mode) {
    const isRevision = mode === "revision";
    els.startBtn.textContent = isRevision ? "Start revision" : "Start round";
  }

  function modeLabel(value) {
    const m = getMode(value);
    return m ? m.label : value;
  }

  function renderHistory(target) {
    target.innerHTML = "";
    session.rounds.forEach((r, i) => {
      const li = document.createElement("li");
      const pct = Math.round((r.correct / r.total) * 100);
      li.innerHTML = `
        <span>Round ${i + 1} · ${modeLabel(r.mode)} · ${r.total} cards</span>
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
    if (topic.renderCardDetail) return topic.renderCardDetail(card);
    return Object.entries(card.fields)
      .filter(([, v]) => v)
      .map(([k, v]) => `<strong>${k}</strong>: ${v}`)
      .join("<br>");
  }

  function startDrill(settings) {
    const deck = buildDeck(settings.categories);
    if (!deck.length) {
      alert("Choose at least one topic.");
      return;
    }
    if (!settings.categories.length) {
      alert("Pick at least one topic.");
      return;
    }

    session.settings = settings;
    saveSession();

    const size =
      settings.roundSize === "all" ? deck.length : Math.min(settings.roundSize, deck.length);
    const cards = shuffle(deck).slice(0, size);

    if (settings.mode === "revision") {
      revision = { cards, index: 0, settings };
      showScreen("revision");
      renderRevisionCard();
      return;
    }

    if (deck.length < 4) {
      alert("Need at least 4 cards in your selection for multiple choice.");
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
    };

    showScreen("play");
    renderTestCard();
  }

  function renderTestCard() {
    const { cards, index, settings, correct, deck } = round;
    const card = cards[index];
    const modeDef = getMode(settings.mode);

    els.progressLabel.textContent = `${index + 1} / ${cards.length}`;
    els.liveScore.textContent = `${correct} correct`;
    els.progressFill.style.width = `${(index / cards.length) * 100}%`;

    els.feedback.classList.add("hidden");
    els.feedback.classList.remove("is-correct", "is-wrong");
    round.answered = false;

    els.prompt.classList.remove("text-prompt");
    els.promptHint.textContent = card.category;
    els.promptLabel.textContent = modeDef.promptLabel || "What is the answer?";
    els.prompt.textContent = fieldValue(card, modeDef.prompt);

    if (modeDef.promptStyle === "text") {
      els.prompt.classList.add("text-prompt");
    } else if (modeDef.promptStyle === "jp") {
      els.prompt.classList.add("text-prompt");
      els.prompt.style.fontFamily = "var(--font-kana)";
    } else {
      els.prompt.style.fontFamily = "";
    }

    const distractors = pickDistractors(card, deck, modeDef);
    const options = shuffle([card, ...distractors]);

    els.choices.innerHTML = "";
    els.choices.classList.toggle("two-col", modeDef.twoCol);

    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice" + (modeDef.answerStyle === "jp" ? " jp-choice" : "");
      btn.textContent = fieldValue(opt, modeDef.answer);
      btn.dataset.answer = fieldValue(opt, modeDef.answer);
      btn.addEventListener("click", () => onAnswer(btn, opt, modeDef));
      els.choices.appendChild(btn);
    });
  }

  function onAnswer(button, chosen, modeDef) {
    if (!round || round.answered) return;
    round.answered = true;

    const card = round.cards[round.index];
    const correctAnswer = fieldValue(card, modeDef.answer);
    const chosenAnswer = fieldValue(chosen, modeDef.answer);
    const isCorrect = chosenAnswer === correctAnswer;

    [...els.choices.querySelectorAll(".choice")].forEach((btn) => {
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
      round.misses.push({ card, given: chosenAnswer, mode: round.settings.mode });
      els.feedback.classList.add("is-wrong");
      els.feedback.classList.remove("is-correct");
      els.feedbackVerdict.textContent = "Not quite";
      els.feedbackDetail.innerHTML = `You chose <strong>${chosenAnswer}</strong>.<br>${cardDetailHtml(card)}`;
    }

    els.liveScore.textContent = `${round.correct} correct`;
    els.progressFill.style.width = `${((round.index + 1) / round.cards.length) * 100}%`;
    els.next.textContent = round.index >= round.cards.length - 1 ? "See results" : "Next";
    els.next.focus();
  }

  function finishRound({ abandoned = false } = {}) {
    if (!round) return;
    let totalScored = round.cards.length;
    if (abandoned) {
      totalScored = round.index + (round.answered ? 1 : 0);
      if (totalScored === 0) {
        round = null;
        showScreen("home");
        setTab("drill");
        return;
      }
    }

    const record = {
      correct: round.correct,
      total: totalScored,
      mode: round.settings.mode,
      misses: round.misses,
      abandoned,
      at: new Date().toISOString(),
    };

    session.rounds.push(record);
    saveSession();

    els.resultsTitle.textContent = abandoned ? "Round ended early" : "Round complete";
    els.resultsScore.textContent = `${record.correct} / ${record.total}`;
    els.resultsPct.textContent = `${Math.round((record.correct / record.total) * 100)}% · ${modeLabel(record.mode)}`;

    if (record.misses.length) {
      els.missedList.classList.remove("hidden");
      els.missedItems.innerHTML = "";
      const modeDef = getMode(record.mode);
      record.misses.forEach((m) => {
        const li = document.createElement("li");
        const expected = fieldValue(m.card, modeDef.answer);
        const prompt = fieldValue(m.card, modeDef.prompt);
        li.innerHTML = `
          <span><strong>${prompt}</strong></span>
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

  function renderRevisionCard() {
    const { cards, index } = revision;
    const card = cards[index];
    els.revProgressLabel.textContent = `${index + 1} / ${cards.length}`;
    els.revProgressFill.style.width = `${((index + 1) / cards.length) * 100}%`;
    els.revMount.innerHTML = topic.renderRevisionCard
      ? topic.renderRevisionCard(card)
      : `<p class="revision-category">${card.category}</p>${cardDetailHtml(card)}`;
    els.revPrev.disabled = index === 0;
    els.revNext.textContent = index >= cards.length - 1 ? "Finish" : "Next";
  }

  function renderExampleCard() {
    const { items, index } = examples;
    const ex = items[index];
    els.exProgressLabel.textContent = `${index + 1} / ${items.length}`;
    els.exProgressFill.style.width = `${((index + 1) / items.length) * 100}%`;

    let breakdown = "";
    if (ex.breakdown?.length) {
      breakdown = `<ul class="example-breakdown">${ex.breakdown
        .map((b) => `<li><strong>${b.part}</strong> — ${b.note}</li>`)
        .join("")}</ul>`;
    }

    els.exMount.innerHTML = `
      <article class="example-card">
        <p class="example-category">${ex.category}</p>
        <h2 class="example-title">${ex.title}</h2>
        <div class="example-jp">${ex.japanese}</div>
        <dl class="example-body">
          <div><dt>Reading</dt><dd>${ex.reading}</dd></div>
          <div><dt>English</dt><dd>${ex.english}</dd></div>
        </dl>
        ${breakdown}
        ${ex.notes ? `<p class="example-notes">${ex.notes}</p>` : ""}
      </article>
    `;

    els.exPrev.disabled = index === 0;
    els.exNext.textContent = index >= items.length - 1 ? "Back to menu" : "Next";
  }

  function setTab(tab) {
    activeTab = tab;
    els.tabNav.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tab);
    });
    els.rulesMount.classList.toggle("hidden", tab !== "rules");
    els.drillPanel.classList.toggle("hidden", tab !== "drill");
    if (els.examplesHint) els.examplesHint.classList.toggle("hidden", tab !== "examples");
  }

  function startExamples() {
    examples = { items: topic.examples, index: 0 };
    showScreen("examples");
    renderExampleCard();
  }

  els.tabNav.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    const tab = btn.dataset.tab;
    setTab(tab);
    if (tab === "examples") startExamples();
    else showScreen("home");
  });

  els.form.addEventListener("change", (e) => {
    if (e.target.name === "mode") updateSetupForMode(e.target.value);
  });

  els.form.addEventListener("submit", (e) => {
    e.preventDefault();
    startDrill(readSettings());
  });

  els.next.addEventListener("click", () => {
    if (!round) return;
    if (round.index >= round.cards.length - 1) finishRound();
    else {
      round.index += 1;
      renderTestCard();
    }
  });

  els.quit.addEventListener("click", () => finishRound({ abandoned: true }));
  els.revNext.addEventListener("click", () => {
    if (!revision) return;
    if (revision.index >= revision.cards.length - 1) {
      revision = null;
      showScreen("home");
      setTab("drill");
      return;
    }
    revision.index += 1;
    renderRevisionCard();
  });
  els.revPrev.addEventListener("click", () => {
    if (!revision || revision.index === 0) return;
    revision.index -= 1;
    renderRevisionCard();
  });
  els.revQuit.addEventListener("click", () => {
    revision = null;
    showScreen("home");
    setTab("drill");
  });

  els.exNext.addEventListener("click", () => {
    if (!examples) return;
    if (examples.index >= examples.items.length - 1) {
      examples = null;
      showScreen("home");
      setTab("examples");
      return;
    }
    examples.index += 1;
    renderExampleCard();
  });
  els.exPrev.addEventListener("click", () => {
    if (!examples || examples.index === 0) return;
    examples.index -= 1;
    renderExampleCard();
  });
  els.exQuit.addEventListener("click", () => {
    examples = null;
    showScreen("home");
    setTab("examples");
  });

  els.again.addEventListener("click", () => startDrill(session.settings || readSettings()));
  els.homeBtn.addEventListener("click", () => {
    applySettings(session.settings);
    updateSessionUI();
    showScreen("home");
    setTab("drill");
  });
  els.clearSession.addEventListener("click", () => {
    session.rounds = [];
    saveSession();
    updateSessionUI();
  });

  renderRules();
  renderCategoryCheckboxes();
  applySettings(session.settings);
  updateSetupForMode(session.settings?.mode || topic.drillModes[0].value);
  updateSessionUI();
  showScreen("home");
  setTab("rules");
}
