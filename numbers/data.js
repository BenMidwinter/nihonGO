const TOPIC = {
  storageKey: "numbers-module-v1",

  rules: [
    {
      title: "1–10 — the building blocks",
      blocks: [
        {
          type: "p",
          text: "Japanese counts with native number words (一, 二, 三…). Learn these first — every larger number is built from them.",
        },
        {
          type: "table",
          headers: ["#", "Kanji", "Reading", "English"],
          jpColumn: 1,
          rows: [
            ["1", "一", "いち", "one"],
            ["2", "二", "に", "two"],
            ["3", "三", "さん", "three"],
            ["4", "四", "よん", "four"],
            ["5", "五", "ご", "five"],
            ["6", "六", "ろく", "six"],
            ["7", "七", "なな", "seven"],
            ["8", "八", "はち", "eight"],
            ["9", "九", "きゅう", "nine"],
            ["10", "十", "じゅう", "ten"],
          ],
        },
        {
          type: "tip",
          text: "<strong>Tip:</strong> In drills and everyday speech, prefer <span class=\"jp\">よん</span>, <span class=\"jp\">なな</span>, and <span class=\"jp\">きゅう</span> — they avoid sounding like unlucky words (死, しち, く).",
        },
      ],
    },
    {
      title: "11–19 — teens (じゅう + ones)",
      blocks: [
        {
          type: "p",
          text: "Teens follow a simple pattern: じゅう (ten) plus the ones digit. No extra particles — just concatenate.",
        },
        {
          type: "ul",
          items: [
            "11 = じゅう<strong>いち</strong> (十一)",
            "15 = じゅう<strong>ご</strong> (十五)",
            "19 = じゅう<strong>きゅう</strong> (十九)",
          ],
        },
        {
          type: "table",
          headers: ["#", "Kanji", "Reading"],
          jpColumn: 1,
          rows: [
            ["11", "十一", "じゅういち"],
            ["12", "十二", "じゅうに"],
            ["14", "十四", "じゅうよん"],
            ["17", "十七", "じゅうなな"],
            ["19", "十九", "じゅうきゅう"],
          ],
        },
      ],
    },
    {
      title: "Tens — 20, 30, 40…",
      blocks: [
        {
          type: "p",
          text: "Multiples of ten reverse the order: <em>ones digit + じゅう</em>. Think “three tens” for 30, not “thirty” as one word.",
        },
        {
          type: "table",
          headers: ["#", "Kanji", "Reading", "Pattern"],
          jpColumn: 1,
          rows: [
            ["20", "二十", "にじゅう", "2 + じゅう"],
            ["30", "三十", "さんじゅう", "3 + じゅう"],
            ["40", "四十", "よんじゅう", "4 + じゅう"],
            ["50", "五十", "ごじゅう", "5 + じゅう"],
            ["90", "九十", "きゅうじゅう", "9 + じゅう"],
          ],
        },
        {
          type: "tip",
          text: "<strong>Tip:</strong> 21–99 combine both rules: tens + ones, e.g. 三十五 = さんじゅうご (3×10 + 5).",
        },
      ],
    },
    {
      title: "Hundreds & thousands",
      blocks: [
        {
          type: "p",
          text: "百 (ひゃく) = 100 and 千 (せん) = 1,000 work like counters: digit + unit, read left to right from the largest place.",
        },
        {
          type: "table",
          headers: ["Value", "Kanji", "Reading", "Note"],
          jpColumn: 1,
          rows: [
            ["100", "百", "ひゃく", "base unit"],
            ["200", "二百", "にひゃく", "2 + 百"],
            ["300", "三百", "さん<strong>びゃく</strong>", "ん → び sound change"],
            ["600", "六百", "ろっ<strong>ぴゃく</strong>", "く → っぴ"],
            ["800", "八百", "はっ<strong>ぴゃく</strong>", "ち → っぴ"],
            ["1,000", "千", "せん", "base unit"],
            ["3,000", "三千", "さん<strong>ぜん</strong>", "ん → ぜ sound change"],
            ["8,000", "八千", "はっ<strong>せん</strong>", "ち → っせ"],
          ],
        },
      ],
    },
    {
      title: "The 万 (まん) system",
      blocks: [
        {
          type: "p",
          text: "Japanese groups digits in fours: 万 = 10,000. After 9,999 you jump to 一万 (10,000), not “ten thousand” as separate words.",
        },
        {
          type: "ul",
          items: [
            "10,000 = 一万 (いちまん)",
            "50,000 = 五万 (ごまん)",
            "100,000 = 十万 (じゅうまん)",
            "1,000,000 = 百万 (ひゃくまん)",
          ],
        },
        {
          type: "p",
          text: "Large amounts read place-by-place: 三万五千 = さんまんごせん (3×10,000 + 5×1,000). Zeros are skipped — no word for “zero” in the middle.",
        },
        {
          type: "tip",
          text: "<strong>Tip:</strong> Prices often use 万: 1.2万円 ≈ ¥12,000. On menus and tags you will see both 三千円 and 3,000円.",
        },
      ],
    },
    {
      title: "Irregular readings for 4, 7 & 9",
      blocks: [
        {
          type: "p",
          text: "四, 七, and 九 each have two common on-readings. Compound numbers almost always use the “safe” set; fixed words (months, minutes) may use the other.",
        },
        {
          type: "table",
          headers: ["Kanji", "Preferred", "Alternate", "When alternate appears"],
          jpColumn: 0,
          rows: [
            ["四", "よん", "し", "四月 (April), 四時, some set phrases"],
            ["七", "なな", "しち", "七時 (7 o'clock), 七つ (7 items)"],
            ["九", "きゅう", "く", "九月 (September), 九つ"],
          ],
        },
        {
          type: "ul",
          items: [
            "400 = よんひゃく (not しひゃく)",
            "700 = ななひゃく (not しちひゃく)",
            "900 = きゅうひゃく (not くひゃく)",
            "4,000 = よんせん · 7,000 = ななせん · 9,000 = きゅうせん",
          ],
        },
      ],
    },
    {
      title: "Combining — read largest to smallest",
      blocks: [
        {
          type: "p",
          text: "Stack units from left to right (largest first). Each chunk is <em>digit + unit</em>; ones digits attach directly with no “and”.",
        },
        {
          type: "ul",
          items: [
            "35 = 三十五 → さんじゅうご",
            "250 = 二百五十 → にひゃくごじゅう",
            "3,508 = 三千五百八 → さんぜんごひゃくはち",
            "12,004 = 一万二千四 → いちまんにせんよん",
          ],
        },
        {
          type: "tip",
          text: "<strong>Tip:</strong> Phone numbers and room numbers are often read digit-by-digit (ゼロ, の, ー) rather than as full compounds — context tells you which style to expect.",
        },
      ],
    },
  ],

  drillModes: [
    {
      value: "number-to-reading",
      label: "Number → reading",
      prompt: "number",
      answer: "reading",
      promptLabel: "How do you read this number?",
      promptStyle: "text",
    },
    {
      value: "reading-to-number",
      label: "Reading → number",
      prompt: "reading",
      answer: "kanji",
      promptLabel: "Which number matches this reading?",
      promptStyle: "text",
      answerStyle: "jp",
      twoCol: true,
    },
    {
      value: "kanji-to-reading",
      label: "Kanji → reading",
      prompt: "kanji",
      answer: "reading",
      promptLabel: "How do you read this?",
    },
    {
      value: "english-to-number",
      label: "English → number",
      prompt: "english",
      answer: "kanji",
      promptLabel: "Which number is this?",
      promptStyle: "text",
      answerStyle: "jp",
      twoCol: true,
    },
    {
      value: "revision",
      label: "Revision — study cards",
      revision: true,
    },
  ],

  flashcards: [
    { id: 1, category: "1–10", fields: { number: "1", kanji: "一", reading: "いち", english: "one" } },
    { id: 2, category: "1–10", fields: { number: "2", kanji: "二", reading: "に", english: "two" } },
    { id: 3, category: "1–10", fields: { number: "3", kanji: "三", reading: "さん", english: "three" } },
    {
      id: 4,
      category: "1–10",
      fields: {
        number: "4",
        kanji: "四",
        reading: "よん",
        english: "four",
        note: "Preferred in compounds; し is used in some fixed words (四月).",
      },
    },
    { id: 5, category: "1–10", fields: { number: "5", kanji: "五", reading: "ご", english: "five" } },
    { id: 6, category: "1–10", fields: { number: "6", kanji: "六", reading: "ろく", english: "six" } },
    {
      id: 7,
      category: "1–10",
      fields: {
        number: "7",
        kanji: "七",
        reading: "なな",
        english: "seven",
        note: "Preferred in compounds; しち is common for time (七時).",
      },
    },
    { id: 8, category: "1–10", fields: { number: "8", kanji: "八", reading: "はち", english: "eight" } },
    {
      id: 9,
      category: "1–10",
      fields: {
        number: "9",
        kanji: "九",
        reading: "きゅう",
        english: "nine",
        note: "Preferred in compounds; く appears in 九月 and 九つ.",
      },
    },
    { id: 10, category: "1–10", fields: { number: "10", kanji: "十", reading: "じゅう", english: "ten" } },

    { id: 11, category: "11–19", fields: { number: "11", kanji: "十一", reading: "じゅういち", english: "eleven" } },
    { id: 12, category: "11–19", fields: { number: "12", kanji: "十二", reading: "じゅうに", english: "twelve" } },
    { id: 13, category: "11–19", fields: { number: "13", kanji: "十三", reading: "じゅうさん", english: "thirteen" } },
    { id: 14, category: "11–19", fields: { number: "14", kanji: "十四", reading: "じゅうよん", english: "fourteen" } },
    { id: 15, category: "11–19", fields: { number: "15", kanji: "十五", reading: "じゅうご", english: "fifteen" } },
    { id: 16, category: "11–19", fields: { number: "16", kanji: "十六", reading: "じゅうろく", english: "sixteen" } },
    { id: 17, category: "11–19", fields: { number: "17", kanji: "十七", reading: "じゅうなな", english: "seventeen" } },
    { id: 18, category: "11–19", fields: { number: "18", kanji: "十八", reading: "じゅうはち", english: "eighteen" } },
    { id: 19, category: "11–19", fields: { number: "19", kanji: "十九", reading: "じゅうきゅう", english: "nineteen" } },

    { id: 20, category: "Tens", fields: { number: "20", kanji: "二十", reading: "にじゅう", english: "twenty" } },
    { id: 21, category: "Tens", fields: { number: "30", kanji: "三十", reading: "さんじゅう", english: "thirty" } },
    { id: 22, category: "Tens", fields: { number: "40", kanji: "四十", reading: "よんじゅう", english: "forty" } },
    { id: 23, category: "Tens", fields: { number: "50", kanji: "五十", reading: "ごじゅう", english: "fifty" } },
    { id: 24, category: "Tens", fields: { number: "60", kanji: "六十", reading: "ろくじゅう", english: "sixty" } },
    { id: 25, category: "Tens", fields: { number: "70", kanji: "七十", reading: "ななじゅう", english: "seventy" } },
    { id: 26, category: "Tens", fields: { number: "80", kanji: "八十", reading: "はちじゅう", english: "eighty" } },
    { id: 27, category: "Tens", fields: { number: "90", kanji: "九十", reading: "きゅうじゅう", english: "ninety" } },

    { id: 28, category: "Hundreds", fields: { number: "100", kanji: "百", reading: "ひゃく", english: "one hundred" } },
    { id: 29, category: "Hundreds", fields: { number: "200", kanji: "二百", reading: "にひゃく", english: "two hundred" } },
    {
      id: 30,
      category: "Hundreds",
      fields: {
        number: "300",
        kanji: "三百",
        reading: "さんびゃく",
        english: "three hundred",
        note: "さん + ひゃく → さんびゃく (ん + h sound change).",
      },
    },
    {
      id: 31,
      category: "Hundreds",
      fields: {
        number: "400",
        kanji: "四百",
        reading: "よんひゃく",
        english: "four hundred",
        note: "Always よん, never しひゃく.",
      },
    },
    {
      id: 32,
      category: "Hundreds",
      fields: {
        number: "600",
        kanji: "六百",
        reading: "ろっぴゃく",
        english: "six hundred",
        note: "ろく → ろっ before ぴゃく.",
      },
    },
    {
      id: 33,
      category: "Hundreds",
      fields: {
        number: "800",
        kanji: "八百",
        reading: "はっぴゃく",
        english: "eight hundred",
        note: "はち → はっ before ぴゃく.",
      },
    },
    {
      id: 34,
      category: "Hundreds",
      fields: {
        number: "900",
        kanji: "九百",
        reading: "きゅうひゃく",
        english: "nine hundred",
        note: "Always きゅう, never くひゃく.",
      },
    },

    { id: 35, category: "Thousands & 万", fields: { number: "1000", kanji: "千", reading: "せん", english: "one thousand" } },
    {
      id: 36,
      category: "Thousands & 万",
      fields: {
        number: "3000",
        kanji: "三千",
        reading: "さんぜん",
        english: "three thousand",
        note: "さん + せん → さんぜん.",
      },
    },
    {
      id: 37,
      category: "Thousands & 万",
      fields: {
        number: "8000",
        kanji: "八千",
        reading: "はっせん",
        english: "eight thousand",
        note: "はち → はっ before せん.",
      },
    },
    { id: 38, category: "Thousands & 万", fields: { number: "10000", kanji: "一万", reading: "いちまん", english: "ten thousand" } },

    { id: 39, category: "Compounds", fields: { number: "35", kanji: "三十五", reading: "さんじゅうご", english: "thirty-five" } },
    { id: 40, category: "Compounds", fields: { number: "42", kanji: "四十二", reading: "よんじゅうに", english: "forty-two" } },
    {
      id: 41,
      category: "Compounds",
      fields: {
        number: "250",
        kanji: "二百五十",
        reading: "にひゃくごじゅう",
        english: "two hundred fifty",
      },
    },
    {
      id: 42,
      category: "Compounds",
      fields: {
        number: "4",
        kanji: "四",
        reading: "し",
        english: "four (alternate)",
        note: "Used in 四月, 四時, and other set phrases — not in compounds like 四十.",
      },
    },
    {
      id: 43,
      category: "Compounds",
      fields: {
        number: "7",
        kanji: "七",
        reading: "しち",
        english: "seven (alternate)",
        note: "Common in time: 七時 (7 o'clock), 七分.",
      },
    },
    {
      id: 44,
      category: "Compounds",
      fields: {
        number: "9",
        kanji: "九",
        reading: "く",
        english: "nine (alternate)",
        note: "Used in 九月, 九つ — prefer きゅう in 九十, 九百, etc.",
      },
    },
    {
      id: 45,
      category: "Compounds",
      fields: {
        number: "3500",
        kanji: "三千五百",
        reading: "さんぜんごひゃく",
        english: "three thousand five hundred",
      },
    },
    {
      id: 46,
      category: "Compounds",
      fields: {
        number: "7000",
        kanji: "七千",
        reading: "ななせん",
        english: "seven thousand",
        note: "Always ななせん, never しちせん.",
      },
    },
  ],

  examples: [
    {
      id: 1,
      category: "Daily life",
      title: "Phone number",
      japanese: "電話番号は 090-1234-5678 です。",
      reading: "でんわばんごうは ゼロきゅうゼロ の いちにさんよん の ごろくななはち です。",
      english: "The phone number is 090-1234-5678.",
      breakdown: [
        { part: "電話番号", note: "phone number" },
        { part: "ゼロきゅうゼロ", note: "0-9-0, read digit by digit" },
        { part: "の", note: "pause between number groups" },
        { part: "いちにさんよん", note: "1-2-3-4" },
        { part: "ごろくななはち", note: "5-6-7-8" },
      ],
      notes: "Mobile numbers are usually read one digit at a time, not as full compounds.",
    },
    {
      id: 2,
      category: "Buildings",
      title: "Floor number",
      japanese: "エレベーターで三階までお願いします。",
      reading: "エレベーターで さんがい まで おねがいします。",
      english: "Please take the elevator to the 3rd floor.",
      breakdown: [
        { part: "三階", note: "3rd floor — number + 階 (floor counter)" },
        { part: "まで", note: "up to / as far as" },
        { part: "お願いします", note: "please (polite request)" },
      ],
      notes: "Floors use kanji numbers + 階. B1 is 地下一階 (basement 1).",
    },
    {
      id: 3,
      category: "People",
      title: "Age",
      japanese: "わたしは二十五歳です。",
      reading: "わたしは にじゅうごさい です。",
      english: "I am 25 years old.",
      breakdown: [
        { part: "二十五", note: "25 — にじゅうご" },
        { part: "歳", note: "years old (counter for age)" },
      ],
      notes: "Age uses 歳 (さい). For young children you may hear 五歳 (ごさい) with rendaku.",
    },
    {
      id: 4,
      category: "Shopping",
      title: "Counting items",
      japanese: "りんごを三つください。",
      reading: "りんごを みっつ ください。",
      english: "Three apples, please.",
      breakdown: [
        { part: "三つ", note: "3 items — native counter (つ) with sound change: みっつ" },
        { part: "ください", note: "please give me" },
      ],
      notes: "General counting uses 一つ, 二つ, 三つ… with irregular readings. Counters like 本, 枚, 人 have their own rules.",
    },
    {
      id: 5,
      category: "Money",
      title: "Price & quantity",
      japanese: "このシャツは三千五百円で、二枚買うと十パーセント引きです。",
      reading: "このシャツは さんぜんごひゃくえん で、にまい かうと じゅっパーセントびき です。",
      english: "This shirt is ¥3,500; buy two and get 10% off.",
      breakdown: [
        { part: "三千五百円", note: "¥3,500 — さんぜんごひゃく + えん" },
        { part: "二枚", note: "2 flat items (枚 counter)" },
        { part: "十パーセント引き", note: "10% discount" },
      ],
      notes: "Shop prices often show Arabic numerals, but staff read them as Japanese compounds.",
    },
    {
      id: 6,
      category: "Hotels",
      title: "Room number",
      japanese: "1204号室を予約しています。",
      reading: "いちにゼロよん ごうしつを よやくしています。",
      english: "I have a reservation for room 1204.",
      breakdown: [
        { part: "1204", note: "read digit-by-digit: いちにゼロよん" },
        { part: "号室", note: "room number suffix" },
        { part: "予約", note: "reservation" },
      ],
      notes: "Room and locker numbers are typically read one digit at a time, like phone numbers.",
    },
  ],

  renderCardDetail(card) {
    const f = card.fields;
    let html = `<strong>${f.kanji}</strong> · ${f.reading} · ${f.english}`;
    if (f.note) {
      html += `<br><span style="opacity:.85">${f.note}</span>`;
    }
    return html;
  },

  renderRevisionCard(card) {
    const f = card.fields;
    let details = `
      <div>
        <dt>Number</dt>
        <dd>${f.number}</dd>
      </div>
      <div>
        <dt>Reading</dt>
        <dd>${f.reading}</dd>
      </div>
      <div>
        <dt>English</dt>
        <dd>${f.english}</dd>
      </div>`;
    if (f.note) {
      details += `
      <div>
        <dt>Note</dt>
        <dd>${f.note}</dd>
      </div>`;
    }
    return `
      <article class="revision-card">
        <p class="revision-category">${card.category}</p>
        <div class="revision-jp">${f.kanji}</div>
        <dl class="revision-details">${details}</dl>
      </article>`;
  },
};
