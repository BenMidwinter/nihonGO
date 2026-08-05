const TOPIC = {
  storageKey: "nihongo-time-session",

  rules: [
    {
      title: "Days of the week",
      blocks: [
        {
          type: "p",
          text: "Japanese days end in 曜日 (yōbi). In quick speech and on signs you often drop 曜: 月曜 for Monday, 金曜 for Friday.",
        },
        {
          type: "table",
          headers: ["Kanji", "Reading", "Meaning"],
          jpColumn: 0,
          rows: [
            ["月曜日", "げつようび", "Monday"],
            ["火曜日", "かようび", "Tuesday"],
            ["水曜日", "すいようび", "Wednesday"],
            ["木曜日", "もくようび", "Thursday"],
            ["金曜日", "きんようび", "Friday"],
            ["土曜日", "どようび", "Saturday"],
            ["日曜日", "にちようび", "Sunday"],
          ],
        },
        {
          type: "tip",
          text: "<strong>Memory hook:</strong> Each day uses an element/planet kanji (月 moon, 火 fire, 水 water, 木 wood, 金 metal, 土 earth, 日 sun) plus 曜日.",
        },
      ],
    },
    {
      title: "Months",
      blocks: [
        {
          type: "p",
          text: "Months are written with a number + 月 (gatsu). Readings are irregular for April (しがつ), July (しちがつ), and September (くがつ).",
        },
        {
          type: "table",
          headers: ["Japanese", "Reading", "Month"],
          jpColumn: 0,
          rows: [
            ["一月", "いちがつ", "January"],
            ["二月", "にがつ", "February"],
            ["三月", "さんがつ", "March"],
            ["四月", "しがつ", "April"],
            ["五月", "ごがつ", "May"],
            ["六月", "ろくがつ", "June"],
            ["七月", "しちがつ", "July"],
            ["八月", "はちがつ", "August"],
            ["九月", "くがつ", "September"],
            ["十月", "じゅうがつ", "October"],
            ["十一月", "じゅういちがつ", "November"],
            ["十二月", "じゅうにがつ", "December"],
          ],
        },
      ],
    },
    {
      title: "Telling time",
      blocks: [
        {
          type: "p",
          text: "Clock time uses 時 (ji) for hours and 分 (fun/pun) for minutes. 半 (han) means “half past” the hour.",
        },
        {
          type: "ul",
          items: [
            "<strong>3:00</strong> → 三時 (さんじ)",
            "<strong>3:15</strong> → 三時十五分 (さんじじゅうごふん) — a “quarter past”",
            "<strong>3:30</strong> → 三時半 (さんじはん)",
            "<strong>3:45</strong> → 三時四十五分 (さんじよんじゅうごふん) — a “quarter to” four",
            "<strong>What time?</strong> → 何時 (なんじ) · <strong>What minute?</strong> → 何分 (なんぷん/なんふん)",
          ],
        },
        {
          type: "tip",
          text: "Minutes ending in 1, 3, 4, 6, 8, or 10 often use <strong>pun</strong> (e.g. 十分 pun, 三十分 pun). Other minutes often use <strong>fun</strong> (五分 fun, 七分 fun). Both are correct in drills here.",
        },
      ],
    },
    {
      title: "午前 / 午後 (AM & PM)",
      blocks: [
        {
          type: "p",
          text: "Japanese often uses a 12-hour clock with 午前 (gozen, AM) and 午後 (gogo, PM) before the time.",
        },
        {
          type: "ul",
          items: [
            "<strong>9:00 AM</strong> → 午前九時 (ごぜんくじ)",
            "<strong>3:30 PM</strong> → 午後三時半 (ごごさんじはん)",
            "<strong>Midnight</strong> → 午前零時 (ごぜんれいじ) / 0時",
            "<strong>Noon</strong> → 正午 (しょうご) / 午後十二時",
          ],
        },
      ],
    },
    {
      title: "Relative days",
      blocks: [
        {
          type: "table",
          headers: ["Japanese", "Reading", "Meaning"],
          jpColumn: 0,
          rows: [
            ["今日", "きょう", "today"],
            ["明日", "あした / あす", "tomorrow"],
            ["昨日", "きのう", "yesterday"],
            ["明後日", "あさって", "day after tomorrow"],
            ["一昨日", "おととい", "day before yesterday"],
            ["毎日", "まいにち", "every day"],
            ["来週", "らいしゅう", "next week"],
            ["先週", "せんしゅう", "last week"],
          ],
        },
      ],
    },
    {
      title: "Dates (月・日・年)",
      blocks: [
        {
          type: "p",
          text: "Full dates follow month + day + optional year. Use 月 for month, 日 for day, 年 for year.",
        },
        {
          type: "ul",
          items: [
            "<strong>August 5</strong> → 八月五日 (はちがついつか)",
            "<strong>March 3</strong> → 三月三日 (さんがつみっか) — note irregular day readings (一日 tsuitachi, 二日 futsuka, …)",
            "<strong>2026</strong> → 二千二十六年 (にせんにじゅうろくねん)",
            "<strong>What date?</strong> → 何月何日 (なんがつなんにち)",
          ],
        },
        {
          type: "tip",
          text: "Day-of-month readings (1–31) have many exceptions. Learn common ones (五日 itsuka, 十日 tōka, 二十日 hatsuka) as you see them in examples.",
        },
      ],
    },
    {
      title: "Common patterns",
      blocks: [
        {
          type: "ul",
          items: [
            "<strong>～から～まで</strong> — from … until … (hours, dates, weeks)",
            "<strong>～に</strong> — at / on (specific time or date: 三時に, 五月二十日に)",
            "<strong>～ごろ</strong> — around (about) a time: 九時ごろ",
            "<strong>何曜日</strong> — what day of the week?",
            "<strong>何時</strong> — what time?",
            "<strong>最終</strong> — last / final (最終電車 = last train, 最終バス = last bus)",
          ],
        },
      ],
    },
  ],

  flashcards: [
    {
      category: "Days",
      fields: {
        japanese: "月曜日",
        reading: "げつようび",
        english: "Monday",
        note: "月 = moon",
      },
    },
    {
      category: "Days",
      fields: {
        japanese: "火曜日",
        reading: "かようび",
        english: "Tuesday",
        note: "火 = fire",
      },
    },
    {
      category: "Days",
      fields: {
        japanese: "水曜日",
        reading: "すいようび",
        english: "Wednesday",
        note: "水 = water",
      },
    },
    {
      category: "Days",
      fields: {
        japanese: "木曜日",
        reading: "もくようび",
        english: "Thursday",
        note: "木 = wood",
      },
    },
    {
      category: "Days",
      fields: {
        japanese: "金曜日",
        reading: "きんようび",
        english: "Friday",
        note: "金 = metal / gold",
      },
    },
    {
      category: "Days",
      fields: {
        japanese: "土曜日",
        reading: "どようび",
        english: "Saturday",
        note: "土 = earth",
      },
    },
    {
      category: "Days",
      fields: {
        japanese: "日曜日",
        reading: "にちようび",
        english: "Sunday",
        note: "日 = sun",
      },
    },
    {
      category: "Days",
      fields: {
        japanese: "平日",
        reading: "へいじつ",
        english: "weekday",
        note: "Mon–Fri (work/school days)",
      },
    },
    {
      category: "Days",
      fields: {
        japanese: "週末",
        reading: "しゅうまつ",
        english: "weekend",
      },
    },
    {
      category: "Months",
      fields: { japanese: "一月", reading: "いちがつ", english: "January" },
    },
    {
      category: "Months",
      fields: { japanese: "二月", reading: "にがつ", english: "February" },
    },
    {
      category: "Months",
      fields: { japanese: "三月", reading: "さんがつ", english: "March" },
    },
    {
      category: "Months",
      fields: {
        japanese: "四月",
        reading: "しがつ",
        english: "April",
        note: "Irregular reading (not よんがつ)",
      },
    },
    {
      category: "Months",
      fields: { japanese: "五月", reading: "ごがつ", english: "May" },
    },
    {
      category: "Months",
      fields: { japanese: "六月", reading: "ろくがつ", english: "June" },
    },
    {
      category: "Months",
      fields: {
        japanese: "七月",
        reading: "しちがつ",
        english: "July",
        note: "Also heard as なながつ",
      },
    },
    {
      category: "Months",
      fields: { japanese: "八月", reading: "はちがつ", english: "August" },
    },
    {
      category: "Months",
      fields: {
        japanese: "九月",
        reading: "くがつ",
        english: "September",
        note: "Irregular reading (not きゅうがつ)",
      },
    },
    {
      category: "Months",
      fields: { japanese: "十月", reading: "じゅうがつ", english: "October" },
    },
    {
      category: "Months",
      fields: { japanese: "十一月", reading: "じゅういちがつ", english: "November" },
    },
    {
      category: "Months",
      fields: { japanese: "十二月", reading: "じゅうにがつ", english: "December" },
    },
    {
      category: "Clock",
      fields: {
        japanese: "時",
        reading: "じ",
        english: "o'clock (hour counter)",
        note: "Used after the hour number: 三時",
      },
    },
    {
      category: "Clock",
      fields: {
        japanese: "分",
        reading: "ふん / ぷん",
        english: "minute(s)",
        note: "Reading varies with the number",
      },
    },
    {
      category: "Clock",
      fields: {
        japanese: "半",
        reading: "はん",
        english: "half (past the hour)",
        note: "三時半 = 3:30",
      },
    },
    {
      category: "Clock",
      fields: {
        japanese: "十五分",
        reading: "じゅうごふん",
        english: "fifteen minutes (a quarter hour)",
      },
    },
    {
      category: "Clock",
      fields: {
        japanese: "四十五分",
        reading: "よんじゅうごふん",
        english: "forty-five minutes (quarter to the next hour)",
      },
    },
    {
      category: "Clock",
      fields: { japanese: "午前", reading: "ごぜん", english: "AM / morning" },
    },
    {
      category: "Clock",
      fields: { japanese: "午後", reading: "ごご", english: "PM / afternoon" },
    },
    {
      category: "Clock",
      fields: {
        japanese: "何時",
        reading: "なんじ",
        english: "what time?",
      },
    },
    {
      category: "Clock",
      fields: {
        japanese: "何分",
        reading: "なんぷん / なんふん",
        english: "what minute? / how many minutes?",
      },
    },
    {
      category: "Clock",
      fields: {
        japanese: "今",
        reading: "いま",
        english: "now",
      },
    },
    {
      category: "Relative time",
      fields: { japanese: "今日", reading: "きょう", english: "today" },
    },
    {
      category: "Relative time",
      fields: {
        japanese: "明日",
        reading: "あした",
        english: "tomorrow",
        note: "Formal: あす",
      },
    },
    {
      category: "Relative time",
      fields: { japanese: "昨日", reading: "きのう", english: "yesterday" },
    },
    {
      category: "Relative time",
      fields: { japanese: "明後日", reading: "あさって", english: "day after tomorrow" },
    },
    {
      category: "Relative time",
      fields: { japanese: "一昨日", reading: "おととい", english: "day before yesterday" },
    },
    {
      category: "Relative time",
      fields: { japanese: "毎日", reading: "まいにち", english: "every day" },
    },
    {
      category: "Relative time",
      fields: { japanese: "来週", reading: "らいしゅう", english: "next week" },
    },
    {
      category: "Relative time",
      fields: { japanese: "先週", reading: "せんしゅう", english: "last week" },
    },
    {
      category: "Calendar words",
      fields: {
        japanese: "日",
        reading: "ひ / にち / か",
        english: "day / date",
        note: "日 counter for days of the month",
      },
    },
    {
      category: "Calendar words",
      fields: {
        japanese: "月",
        reading: "つき / がつ",
        english: "month",
        note: "がつ when counting months",
      },
    },
    {
      category: "Calendar words",
      fields: {
        japanese: "年",
        reading: "ねん / とし",
        english: "year",
      },
    },
    {
      category: "Calendar words",
      fields: {
        japanese: "曜日",
        reading: "ようび",
        english: "day of the week",
      },
    },
    {
      category: "Calendar words",
      fields: {
        japanese: "日付",
        reading: "ひづけ",
        english: "date (calendar date)",
      },
    },
    {
      category: "Calendar words",
      fields: {
        japanese: "何曜日",
        reading: "なんようび",
        english: "what day of the week?",
      },
    },
    {
      category: "Calendar words",
      fields: {
        japanese: "何月何日",
        reading: "なんがつなんにち",
        english: "what month and day?",
      },
    },
    {
      category: "Calendar words",
      fields: {
        japanese: "祝日",
        reading: "しゅくじつ",
        english: "public holiday",
      },
    },
    {
      category: "Calendar words",
      fields: {
        japanese: "～ごろ",
        reading: "～ごろ",
        english: "around (a time)",
        note: "九時ごろ = around 9 o'clock",
      },
    },
    {
      category: "Calendar words",
      fields: {
        japanese: "最終",
        reading: "さいしゅう",
        english: "last / final",
        note: "最終電車 = last train",
      },
    },
  ],

  drillModes: [
    {
      value: "japanese-to-english",
      label: "Japanese → English",
      prompt: "japanese",
      answer: "english",
      promptLabel: "What does this mean?",
      promptStyle: "text",
    },
    {
      value: "english-to-japanese",
      label: "English → Japanese",
      prompt: "english",
      answer: "japanese",
      promptLabel: "How do you say this in Japanese?",
      answerStyle: "jp",
      twoCol: true,
    },
    {
      value: "reading-to-meaning",
      label: "Reading → Meaning",
      prompt: "reading",
      answer: "english",
      promptLabel: "What does this reading mean?",
      promptStyle: "text",
    },
    {
      value: "meaning-to-reading",
      label: "Meaning → Reading",
      prompt: "english",
      answer: "reading",
      promptLabel: "What is the reading?",
    },
    {
      value: "revision",
      label: "Revision",
    },
  ],

  examples: [
    {
      category: "Transit",
      title: "Train departure",
      japanese: "次の電車は午後三時十五分に発車します。",
      reading: "Tsugi no densha wa gogo san-ji jūgo-fun ni hassha shimasu.",
      english: "The next train departs at 3:15 PM.",
      breakdown: [
        { part: "次の電車", note: "next train" },
        { part: "午後三時十五分", note: "3:15 PM (quarter past three)" },
        { part: "に", note: "at (specific time)" },
        { part: "発車します", note: "departs (polite)" },
      ],
      notes: "Station boards often show 発 (departure) and 着 (arrival) with times in 24-hour style on digital displays, but announcements may still use 午前/午後.",
    },
    {
      category: "Daily life",
      title: "Store hours",
      japanese: "営業時間は午前十時から午後八時までです。",
      reading: "Eigyō-jikan wa gozen jū-ji kara gogo hachi-ji made desu.",
      english: "Opening hours are from 10 AM to 8 PM.",
      breakdown: [
        { part: "営業時間", note: "business / opening hours" },
        { part: "～から～まで", note: "from … until …" },
        { part: "午前十時", note: "10 AM" },
        { part: "午後八時", note: "8 PM" },
      ],
    },
    {
      category: "Appointments",
      title: "Doctor appointment",
      japanese: "予約は五月二十日の午後二時半です。",
      reading: "Yoyaku wa gogatsu hatsuka no gogo ni-ji han desu.",
      english: "The appointment is on May 20th at 2:30 PM.",
      breakdown: [
        { part: "予約", note: "reservation / appointment" },
        { part: "五月二十日", note: "May 20 (day reading: hatsuka)" },
        { part: "の", note: "links date to time" },
        { part: "午後二時半", note: "2:30 PM" },
      ],
      notes: "Dates use 月 + 日. The day 二十日 is read hatsuka, not nijūnichi.",
    },
    {
      category: "Personal",
      title: "Birthday date",
      japanese: "私の誕生日は八月五日です。",
      reading: "Watashi no tanjōbi wa hachigatsu itsuka desu.",
      english: "My birthday is August 5th.",
      breakdown: [
        { part: "誕生日", note: "birthday" },
        { part: "八月", note: "August" },
        { part: "五日", note: "5th day (itsuka)" },
      ],
    },
    {
      category: "Conversation",
      title: "What day is it?",
      japanese: "今日は何曜日ですか。—— 今日は水曜日です。",
      reading: "Kyō wa nan-yōbi desu ka. — Kyō wa suiyōbi desu.",
      english: "What day is it today? — Today is Wednesday.",
      breakdown: [
        { part: "今日", note: "today" },
        { part: "何曜日", note: "what day of the week?" },
        { part: "水曜日", note: "Wednesday" },
      ],
      notes: "Answer with [day] + 曜日. In casual speech you may hear just 水曜.",
    },
    {
      category: "Transit",
      title: "Last train",
      japanese: "最終電車は午後十一時四十五分です。",
      reading: "Saishū densha wa gogo jūichi-ji yonjūgo-fun desu.",
      english: "The last train is at 11:45 PM.",
      breakdown: [
        { part: "最終電車", note: "last train" },
        { part: "午後十一時", note: "11 PM" },
        { part: "四十五分", note: "45 minutes (quarter to midnight)" },
      ],
      notes: "Look for 最終 on platform signs. Missing it means an overnight stay or a taxi!",
    },
    {
      category: "Work",
      title: "Meeting tomorrow morning",
      japanese: "明日の会議は午前九時からです。",
      reading: "Ashita no kaigi wa gozen ku-ji kara desu.",
      english: "Tomorrow's meeting starts at 9 AM.",
      breakdown: [
        { part: "明日", note: "tomorrow" },
        { part: "会議", note: "meeting" },
        { part: "午前九時から", note: "from 9 AM" },
      ],
    },
  ],

  renderCardDetail(card) {
    const f = card.fields;
    let html = `<strong>${f.japanese}</strong>`;
    if (f.reading) html += ` · ${f.reading}`;
    html += `<br><strong>English:</strong> ${f.english}`;
    if (f.note) html += `<br><strong>Note:</strong> ${f.note}`;
    return html;
  },

  renderRevisionCard(card) {
    const f = card.fields;
    const noteBlock = f.note
      ? `<div><dt>Note</dt><dd>${f.note}</dd></div>`
      : "";
    return `
      <p class="revision-category">${card.category}</p>
      <div class="revision-jp">${f.japanese}</div>
      <dl class="revision-details">
        <div><dt>Reading</dt><dd>${f.reading}</dd></div>
        <div><dt>English</dt><dd>${f.english}</dd></div>
        ${noteBlock}
      </dl>
    `;
  },
};
