const TOPIC = {
  storageKey: "nihongo-money-session",

  rules: [
    {
      title: "The 円 counter (えん)",
      blocks: [
        {
          type: "p",
          text: "Prices in Japan use the counter 円 (えん, yen). After a number, 円 attaches directly — no extra particle is needed.",
        },
        {
          type: "ul",
          items: [
            "<span class=\"jp\">100円</span> — ひゃくえん (100 yen)",
            "<span class=\"jp\">1,000円</span> — せんえん (1,000 yen)",
            "<span class=\"jp\">10,000円</span> — いちまんえん (10,000 yen)",
          ],
        },
        {
          type: "tip",
          text: "<strong>Tip:</strong> In speech, 円 is often dropped after round numbers: これ、千円です (This is 1,000 yen). Written prices almost always include 円.",
        },
      ],
    },
    {
      title: "Reading prices aloud",
      blocks: [
        {
          type: "p",
          text: "Japanese number readings follow the same patterns as counting — watch for sound changes (e.g. 300 = さんびゃく, 600 = ろっぴゃく, 800 = はっぴゃく).",
        },
        {
          type: "table",
          headers: ["Written", "Reading", "Notes"],
          jpColumn: 0,
          rows: [
            ["980円", "きゅうひゃくはちじゅうえん", "Common shelf price"],
            ["1,280円", "せんにひゃくはちじゅうえん", "Tax-included total"],
            ["3,300円", "さんぜんさんびゃくえん", "さんびゃく sound change"],
            ["15,000円", "いちまんごせんえん", "万 (まん) = ten thousand"],
          ],
        },
        {
          type: "p",
          text: "To ask the price, use いくらですか. To state a price, use 〜円です.",
        },
      ],
    },
    {
      title: "Tax included & excluded",
      blocks: [
        {
          type: "p",
          text: "Most shop prices in Japan are shown tax included (内税). Labels help you tell at a glance.",
        },
        {
          type: "table",
          headers: ["Label", "Reading", "Meaning"],
          jpColumn: 0,
          rows: [
            ["税込", "ぜいこみ", "Tax included (price you pay)"],
            ["税抜", "ぜいぬき", "Tax excluded (before 10% consumption tax)"],
            ["（内）", "（うち）", "Tax included — often on menus"],
            ["（外）", "（そと）", "Tax excluded — total rises at checkout"],
          ],
        },
        {
          type: "tip",
          text: "<strong>Quick math:</strong> 税抜 × 1.1 ≈ 税込. A ¥1,000 item becomes ¥1,100 at the register when tax is added separately.",
        },
      ],
    },
    {
      title: "Coins (硬貨)",
      blocks: [
        {
          type: "table",
          headers: ["Coin", "Reading", "Value"],
          jpColumn: 0,
          rows: [
            ["1円玉", "いちえんだま", "¥1"],
            ["5円玉", "ごえんだま", "¥5 — hole in center; lucky charm"],
            ["10円玉", "じゅうえんだま", "¥10"],
            ["50円玉", "ごじゅうえんだま", "¥50 — hole in center"],
            ["100円玉", "ひゃくえんだま", "¥100"],
            ["500円玉", "ごひゃくえんだま", "¥500 — heaviest common coin"],
          ],
        },
      ],
    },
    {
      title: "Bills (紙幣)",
      blocks: [
        {
          type: "table",
          headers: ["Bill", "Reading", "Value"],
          jpColumn: 0,
          rows: [
            ["千円札", "せんえんさつ", "¥1,000 — most common bill in daily life"],
            ["五千円札", "ごせんえんさつ", "¥5,000"],
            ["一万円札", "いちまんえんさつ", "¥10,000 — largest note"],
          ],
        },
        {
          type: "tip",
          text: "<strong>ATM tip:</strong> Many ATMs dispense ¥1,000 notes only. Withdrawals are often in multiples of ¥1,000 (e.g. 1万円 = ten ¥1,000 bills).",
        },
      ],
    },
    {
      title: "Counting money patterns",
      blocks: [
        {
          type: "p",
          text: "When handing over cash or confirming a total, these patterns appear constantly at shops and ATMs.",
        },
        {
          type: "ul",
          items: [
            "<span class=\"jp\">〜円です</span> — It is ~ yen (stating a price)",
            "<span class=\"jp\">〜円ください</span> — ~ yen, please (giving exact change)",
            "<span class=\"jp\">〜円お預かりします</span> — We received ~ yen (clerk)",
            "<span class=\"jp\">お釣りは〜円です</span> — Your change is ~ yen",
            "<span class=\"jp\">合計〜円</span> — Total: ~ yen (receipt / screen)",
            "<span class=\"jp\">〜円引き</span> — ~ yen off (discount)",
          ],
        },
      ],
    },
    {
      title: "ATM & shopping phrases",
      blocks: [
        {
          type: "p",
          text: "Useful phrases for convenience stores, supermarkets, and bank ATMs (ATM / エーティーエム).",
        },
        {
          type: "table",
          headers: ["Phrase", "Reading", "When to use"],
          jpColumn: 0,
          rows: [
            ["いくらですか", "いくらですか", "Asking any price"],
            ["カードで払えますか", "かーどではらえますか", "Can I pay by card?"],
            ["現金のみ", "げんきんのみ", "Cash only sign"],
            ["領収書をお願いします", "りょうしゅうしょをおねがいします", "Request a receipt"],
            ["お引出し", "おびきだし", "Withdrawal (ATM menu)"],
            ["残高照会", "ざんだかしょうかい", "Balance inquiry (ATM)"],
            ["暗証番号", "あんしょうばんごう", "PIN number"],
          ],
        },
      ],
    },
  ],

  flashcards: [
    // Amounts
    {
      category: "Amounts",
      fields: {
        japanese: "100円",
        reading: "ひゃくえん",
        english: "100 yen",
        amount: "100円",
      },
    },
    {
      category: "Amounts",
      fields: {
        japanese: "500円",
        reading: "ごひゃくえん",
        english: "500 yen",
        amount: "500円",
      },
    },
    {
      category: "Amounts",
      fields: {
        japanese: "980円",
        reading: "きゅうひゃくはちじゅうえん",
        english: "980 yen",
        amount: "980円",
        note: "Typical tax-included shelf price ending in 80",
      },
    },
    {
      category: "Amounts",
      fields: {
        japanese: "1,000円",
        reading: "せんえん",
        english: "1,000 yen",
        amount: "1,000円",
      },
    },
    {
      category: "Amounts",
      fields: {
        japanese: "1,280円",
        reading: "せんにひゃくはちじゅうえん",
        english: "1,280 yen",
        amount: "1,280円",
      },
    },
    {
      category: "Amounts",
      fields: {
        japanese: "2,000円",
        reading: "にせんえん",
        english: "2,000 yen",
        amount: "2,000円",
      },
    },
    {
      category: "Amounts",
      fields: {
        japanese: "3,300円",
        reading: "さんぜんさんびゃくえん",
        english: "3,300 yen",
        amount: "3,300円",
        note: "さんびゃく — not さんひゃく",
      },
    },
    {
      category: "Amounts",
      fields: {
        japanese: "5,000円",
        reading: "ごせんえん",
        english: "5,000 yen",
        amount: "5,000円",
      },
    },
    {
      category: "Amounts",
      fields: {
        japanese: "10,000円",
        reading: "いちまんえん",
        english: "10,000 yen",
        amount: "10,000円",
      },
    },
    {
      category: "Amounts",
      fields: {
        japanese: "15,000円",
        reading: "いちまんごせんえん",
        english: "15,000 yen",
        amount: "15,000円",
      },
    },
    {
      category: "Amounts",
      fields: {
        japanese: "50,000円",
        reading: "ごまんえん",
        english: "50,000 yen",
        amount: "50,000円",
      },
    },
    {
      category: "Amounts",
      fields: {
        japanese: "108円",
        reading: "ひゃくはちえん",
        english: "108 yen (with 8% tax example)",
        amount: "108円",
        note: "100円 + 8% tax = classic textbook example",
      },
    },

    // Vocabulary
    {
      category: "Vocabulary",
      fields: {
        japanese: "お金",
        reading: "おかね",
        english: "money",
      },
    },
    {
      category: "Vocabulary",
      fields: {
        japanese: "値段",
        reading: "ねだん",
        english: "price",
      },
    },
    {
      category: "Vocabulary",
      fields: {
        japanese: "税込",
        reading: "ぜいこみ",
        english: "tax included",
        note: "Price shown is what you pay",
      },
    },
    {
      category: "Vocabulary",
      fields: {
        japanese: "税抜",
        reading: "ぜいぬき",
        english: "tax excluded",
        note: "Add 10% consumption tax at checkout",
      },
    },
    {
      category: "Vocabulary",
      fields: {
        japanese: "お釣り",
        reading: "おつり",
        english: "change (money returned)",
      },
    },
    {
      category: "Vocabulary",
      fields: {
        japanese: "レシート",
        reading: "れしーと",
        english: "receipt",
      },
    },
    {
      category: "Vocabulary",
      fields: {
        japanese: "現金",
        reading: "げんきん",
        english: "cash",
      },
    },
    {
      category: "Vocabulary",
      fields: {
        japanese: "クレジットカード",
        reading: "くれじっとかーど",
        english: "credit card",
      },
    },
    {
      category: "Vocabulary",
      fields: {
        japanese: "割引",
        reading: "わりびき",
        english: "discount",
      },
    },
    {
      category: "Vocabulary",
      fields: {
        japanese: "会計",
        reading: "かいけい",
        english: "bill / check / payment",
      },
    },
    {
      category: "Vocabulary",
      fields: {
        japanese: "領収書",
        reading: "りょうしゅうしょ",
        english: "formal receipt (for expenses)",
      },
    },
    {
      category: "Vocabulary",
      fields: {
        japanese: "両替",
        reading: "りょうがえ",
        english: "currency exchange / making change",
      },
    },

    // Coins & bills
    {
      category: "Coins & bills",
      fields: {
        japanese: "1円玉",
        reading: "いちえんだま",
        english: "1-yen coin",
        amount: "1円",
      },
    },
    {
      category: "Coins & bills",
      fields: {
        japanese: "5円玉",
        reading: "ごえんだま",
        english: "5-yen coin",
        amount: "5円",
        note: "Brass coin with a center hole — considered lucky",
      },
    },
    {
      category: "Coins & bills",
      fields: {
        japanese: "10円玉",
        reading: "じゅうえんだま",
        english: "10-yen coin",
        amount: "10円",
      },
    },
    {
      category: "Coins & bills",
      fields: {
        japanese: "50円玉",
        reading: "ごじゅうえんだま",
        english: "50-yen coin",
        amount: "50円",
      },
    },
    {
      category: "Coins & bills",
      fields: {
        japanese: "100円玉",
        reading: "ひゃくえんだま",
        english: "100-yen coin",
        amount: "100円",
      },
    },
    {
      category: "Coins & bills",
      fields: {
        japanese: "500円玉",
        reading: "ごひゃくえんだま",
        english: "500-yen coin",
        amount: "500円",
      },
    },
    {
      category: "Coins & bills",
      fields: {
        japanese: "千円札",
        reading: "せんえんさつ",
        english: "1,000-yen bill",
        amount: "1,000円",
      },
    },
    {
      category: "Coins & bills",
      fields: {
        japanese: "五千円札",
        reading: "ごせんえんさつ",
        english: "5,000-yen bill",
        amount: "5,000円",
      },
    },
    {
      category: "Coins & bills",
      fields: {
        japanese: "一万円札",
        reading: "いちまんえんさつ",
        english: "10,000-yen bill",
        amount: "10,000円",
      },
    },
    {
      category: "Coins & bills",
      fields: {
        japanese: "硬貨",
        reading: "こうか",
        english: "coin (hard currency)",
      },
    },
    {
      category: "Coins & bills",
      fields: {
        japanese: "紙幣",
        reading: "しへい",
        english: "banknote / paper money",
      },
    },

    // Shopping phrases
    {
      category: "Shopping phrases",
      fields: {
        japanese: "いくらですか",
        reading: "いくらですか",
        english: "How much is it?",
      },
    },
    {
      category: "Shopping phrases",
      fields: {
        japanese: "〜円です",
        reading: "〜えんです",
        english: "It costs ~ yen",
        note: "Replace 〜 with the amount",
      },
    },
    {
      category: "Shopping phrases",
      fields: {
        japanese: "お願いします",
        reading: "おねがいします",
        english: "Please (when paying or ordering)",
      },
    },
    {
      category: "Shopping phrases",
      fields: {
        japanese: "カードで払えますか",
        reading: "かーどではらえますか",
        english: "Can I pay by card?",
      },
    },
    {
      category: "Shopping phrases",
      fields: {
        japanese: "現金のみ",
        reading: "げんきんのみ",
        english: "cash only",
      },
    },
    {
      category: "Shopping phrases",
      fields: {
        japanese: "袋は要りますか",
        reading: "ふくろはいりますか",
        english: "Do you need a bag?",
      },
    },
    {
      category: "Shopping phrases",
      fields: {
        japanese: "領収書をお願いします",
        reading: "りょうしゅうしょをおねがいします",
        english: "A receipt, please",
      },
    },
    {
      category: "Shopping phrases",
      fields: {
        japanese: "千円ください",
        reading: "せんえんください",
        english: "One thousand yen, please",
        amount: "1,000円",
      },
    },
    {
      category: "Shopping phrases",
      fields: {
        japanese: "安い",
        reading: "やすい",
        english: "cheap / inexpensive",
      },
    },
    {
      category: "Shopping phrases",
      fields: {
        japanese: "高い",
        reading: "たかい",
        english: "expensive",
      },
    },
    {
      category: "Shopping phrases",
      fields: {
        japanese: "合計",
        reading: "ごうけい",
        english: "total (sum)",
      },
    },
    {
      category: "Shopping phrases",
      fields: {
        japanese: "お釣りは百円です",
        reading: "おつりはひゃくえんです",
        english: "Your change is 100 yen",
        amount: "100円",
      },
    },
  ],

  drillModes: [
    {
      value: "japanese-to-english",
      label: "Japanese → English",
      promptLabel: "What does this mean?",
      prompt: "japanese",
      answer: "english",
      promptStyle: "text",
    },
    {
      value: "english-to-japanese",
      label: "English → Japanese",
      promptLabel: "How do you say this in Japanese?",
      prompt: "english",
      answer: "japanese",
      answerStyle: "jp",
      promptStyle: "text",
    },
    {
      value: "amount-to-reading",
      label: "Amount → Reading",
      promptLabel: "How do you read this price?",
      prompt: "amount",
      answer: "reading",
      promptStyle: "text",
    },
    {
      value: "reading-to-amount",
      label: "Reading → Amount",
      promptLabel: "Which amount matches this reading?",
      prompt: "reading",
      answer: "amount",
      promptStyle: "text",
    },
    {
      value: "revision",
      label: "Revision cards",
    },
  ],

  examples: [
    {
      category: "Shopping",
      title: "Asking the price",
      japanese: "すみません、このTシャツはいくらですか。",
      reading: "すみません、このTシャツはいくらですか。",
      english: "Excuse me, how much is this T-shirt?",
      breakdown: [
        { part: "すみません", note: "Excuse me — polite opener" },
        { part: "いくら", note: "how much" },
        { part: "ですか", note: "polite question ending" },
      ],
      notes: "Staff may answer with 税込 or 税抜 — listen for which total they mean.",
    },
    {
      category: "Receipt",
      title: "Reading the total",
      japanese: "合計 1,280円（税込）",
      reading: "ごうけい せんにひゃくはちじゅうえん（ぜいこみ）",
      english: "Total: 1,280 yen (tax included)",
      breakdown: [
        { part: "合計", note: "total — appears at the bottom of every receipt" },
        { part: "1,280円", note: "amount due" },
        { part: "税込", note: "tax already included in the figure" },
      ],
    },
    {
      category: "Tax",
      title: "Tax-free shopping",
      japanese: "こちらは免税対象です。パスポートを見せてください。",
      reading: "こちらはめんぜいたいしょうです。ぱすぽーとをみせてください。",
      english: "This item qualifies for tax exemption. Please show your passport.",
      breakdown: [
        { part: "免税", note: "tax-free (for tourists on eligible goods)" },
        { part: "対象", note: "eligible / covered" },
        { part: "パスポート", note: "passport — required for duty-free" },
      ],
      notes: "Look for 免税 (menzei) signs at airports and tourist shops. Prices drop by 10% when tax is waived.",
    },
    {
      category: "Register",
      title: "Paying at the register",
      japanese: "2,000円お預かりします。お釣りは720円です。",
      reading: "にせんえんおあずかりします。おつりはななひゃくにじゅうえんです。",
      english: "We received 2,000 yen. Your change is 720 yen.",
      breakdown: [
        { part: "お預かりします", note: "We received (your payment) — clerk phrase" },
        { part: "お釣り", note: "change returned to you" },
      ],
      notes: "Convenience stores often use a tray (お会計トレー) — place cash there instead of handing it directly.",
    },
    {
      category: "ATM",
      title: "ATM withdrawal",
      japanese: "お引出し 10,000円",
      reading: "おびきだし いちまんえん",
      english: "Withdrawal: 10,000 yen",
      breakdown: [
        { part: "お引出し", note: "withdrawal — standard ATM menu label" },
        { part: "10,000円", note: "often dispensed as ten ¥1,000 notes" },
      ],
      notes: "7-Eleven and Japan Post ATMs accept many foreign cards. Select お引出し, enter your PIN (暗証番号), then choose an amount.",
    },
    {
      category: "Discount",
      title: "A sale discount",
      japanese: "本日限定、500円引きです。",
      reading: "ほんじつげんてい、ごひゃくえんびきです。",
      english: "Today only — 500 yen off.",
      breakdown: [
        { part: "本日限定", note: "today only / limited to today" },
        { part: "500円引き", note: "500 yen discount subtracted from the price" },
      ],
    },
    {
      category: "Shopping",
      title: "Card or cash?",
      japanese: "カードで払えますか。現金しか使えませんか。",
      reading: "かーどではらえますか。げんきんしかつかえませんか。",
      english: "Can I pay by card? Is it cash only?",
      breakdown: [
        { part: "カードで払えますか", note: "Can I pay by card?" },
        { part: "現金しか", note: "only cash (nothing else accepted)" },
      ],
      notes: "Small restaurants and rural shops may display 現金のみ. Convenience stores and chains almost always take cards.",
    },
  ],

  renderCardDetail(card) {
    const f = card.fields;
    const amountRow = f.amount
      ? `<div><strong>Amount</strong>: ${f.amount}</div>`
      : "";
    const noteRow = f.note ? `<div><strong>Note</strong>: ${f.note}</div>` : "";
    return `
      <div class="card-detail">
        <div><strong>Japanese</strong>: <span class="jp">${f.japanese}</span></div>
        <div><strong>Reading</strong>: ${f.reading}</div>
        <div><strong>English</strong>: ${f.english}</div>
        ${amountRow}
        ${noteRow}
      </div>
    `;
  },

  renderRevisionCard(card) {
    const f = card.fields;
    const amountBlock = f.amount
      ? `<div><dt>Amount</dt><dd>${f.amount}</dd></div>`
      : "";
    const noteBlock = f.note
      ? `<p class="example-notes">${f.note}</p>`
      : "";
    return `
      <p class="revision-category">${card.category}</p>
      <div class="revision-jp">${f.japanese}</div>
      <dl class="revision-details">
        <div><dt>Reading</dt><dd>${f.reading}</dd></div>
        <div><dt>English</dt><dd>${f.english}</dd></div>
        ${amountBlock}
      </dl>
      ${noteBlock}
    `;
  },
};
