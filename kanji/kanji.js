const KANJI = [
  {
    "id": 1,
    "kanji": "出",
    "reading": "で / しゅつ",
    "meaning": "Exit / Depart",
    "category": "Transit",
    "example": "出口 (Exit)"
  },
  {
    "id": 2,
    "kanji": "入",
    "reading": "いり / にゅう",
    "meaning": "Enter",
    "category": "Transit",
    "example": "入口 (Entrance)"
  },
  {
    "id": 3,
    "kanji": "東",
    "reading": "ひがし / とう",
    "meaning": "East",
    "category": "Transit",
    "example": "東口 (East Exit)"
  },
  {
    "id": 4,
    "kanji": "西",
    "reading": "にし / せい",
    "meaning": "West",
    "category": "Transit",
    "example": "西口 (West Exit)"
  },
  {
    "id": 5,
    "kanji": "南",
    "reading": "みなみ / なん",
    "meaning": "South",
    "category": "Transit",
    "example": "南口 (South Exit)"
  },
  {
    "id": 6,
    "kanji": "北",
    "reading": "きた / ほく",
    "meaning": "North",
    "category": "Transit",
    "example": "北口 (North Exit)"
  },
  {
    "id": 7,
    "kanji": "口",
    "reading": "くち / ぐち",
    "meaning": "Exit / Opening",
    "category": "Transit",
    "example": "改札口 (Ticket Gate)"
  },
  {
    "id": 8,
    "kanji": "駅",
    "reading": "えき",
    "meaning": "Station",
    "category": "Transit",
    "example": "東京駅 (Tokyo Station)"
  },
  {
    "id": 9,
    "kanji": "線",
    "reading": "せん",
    "meaning": "Train Line",
    "category": "Transit",
    "example": "山手線 (Yamanote Line)"
  },
  {
    "id": 10,
    "kanji": "車",
    "reading": "くるま / しゃ",
    "meaning": "Vehicle / Train",
    "category": "Transit",
    "example": "電車 (Train)"
  },
  {
    "id": 11,
    "kanji": "乗",
    "reading": "のり / じょう",
    "meaning": "Board / Ride",
    "category": "Transit",
    "example": "乗り場 (Boarding Point)"
  },
  {
    "id": 12,
    "kanji": "降",
    "reading": "おり / こう",
    "meaning": "Alight / Get Off",
    "category": "Transit",
    "example": "降車 (Alighting)"
  },
  {
    "id": 13,
    "kanji": "切",
    "reading": "きっ / せつ",
    "meaning": "Cut / Ticket",
    "category": "Transit",
    "example": "切符 (Ticket)"
  },
  {
    "id": 14,
    "kanji": "札",
    "reading": "さつ / ふだ",
    "meaning": "Ticket / Gate",
    "category": "Transit",
    "example": "改札 (Ticket Gate)"
  },
  {
    "id": 15,
    "kanji": "発",
    "reading": "はつ",
    "meaning": "Departure",
    "category": "Transit",
    "example": "発車 (Departure)"
  },
  {
    "id": 16,
    "kanji": "着",
    "reading": "ちゃく",
    "meaning": "Arrival",
    "category": "Transit",
    "example": "到着 (Arrival)"
  },
  {
    "id": 17,
    "kanji": "席",
    "reading": "せき",
    "meaning": "Seat",
    "category": "Transit",
    "example": "指定席 (Reserved Seat)"
  },
  {
    "id": 18,
    "kanji": "指",
    "reading": "し",
    "meaning": "Point / Reserve",
    "category": "Transit",
    "example": "指定席 (Reserved Seat)"
  },
  {
    "id": 19,
    "kanji": "自",
    "reading": "じ",
    "meaning": "Self / Non-reserved",
    "category": "Transit",
    "example": "自由席 (Non-reserved)"
  },
  {
    "id": 20,
    "kanji": "特",
    "reading": "とく",
    "meaning": "Special / Express",
    "category": "Transit",
    "example": "特急 (Limited Express)"
  },
  {
    "id": 21,
    "kanji": "男",
    "reading": "おとこ / だん",
    "meaning": "Man / Male",
    "category": "Facilities",
    "example": "男子 (Men's Restroom)"
  },
  {
    "id": 22,
    "kanji": "女",
    "reading": "おんな / じょ",
    "meaning": "Woman / Female",
    "category": "Facilities",
    "example": "女子 (Women's Restroom)"
  },
  {
    "id": 23,
    "kanji": "便",
    "reading": "べん",
    "meaning": "Convenience / Toilet",
    "category": "Facilities",
    "example": "便所 (Restroom)"
  },
  {
    "id": 24,
    "kanji": "手",
    "reading": "て",
    "meaning": "Hand",
    "category": "Facilities",
    "example": "お手洗い (Restroom)"
  },
  {
    "id": 25,
    "kanji": "洗",
    "reading": "せん / あら",
    "meaning": "Wash",
    "category": "Facilities",
    "example": "洗面所 (Washroom)"
  },
  {
    "id": 26,
    "kanji": "案",
    "reading": "あん",
    "meaning": "Guide / Plan",
    "category": "Facilities",
    "example": "案内 (Information)"
  },
  {
    "id": 27,
    "kanji": "内",
    "reading": "ない / うち",
    "meaning": "Inside",
    "category": "Facilities",
    "example": "案内所 (Info Desk)"
  },
  {
    "id": 28,
    "kanji": "受",
    "reading": "うけ / じゅ",
    "meaning": "Receive / Desk",
    "category": "Facilities",
    "example": "受付 (Reception)"
  },
  {
    "id": 29,
    "kanji": "付",
    "reading": "つけ / ふ",
    "meaning": "Attach / Desk",
    "category": "Facilities",
    "example": "受付 (Reception desk)"
  },
  {
    "id": 30,
    "kanji": "営",
    "reading": "えい",
    "meaning": "Operate / Business",
    "category": "Facilities",
    "example": "営業中 (Open for business)"
  },
  {
    "id": 31,
    "kanji": "業",
    "reading": "ぎょう",
    "meaning": "Work / Business",
    "category": "Facilities",
    "example": "営業時間 (Business hours)"
  },
  {
    "id": 32,
    "kanji": "休",
    "reading": "きゅう / やす",
    "meaning": "Rest / Closed",
    "category": "Facilities",
    "example": "定休日 (Regular Holiday)"
  },
  {
    "id": 33,
    "kanji": "備",
    "reading": "び",
    "meaning": "Prepare",
    "category": "Facilities",
    "example": "準備中 (Preparing / Closed)"
  },
  {
    "id": 34,
    "kanji": "煙",
    "reading": "えん / けむり",
    "meaning": "Smoke",
    "category": "Facilities",
    "example": "禁煙 (No Smoking)"
  },
  {
    "id": 35,
    "kanji": "禁",
    "reading": "きん",
    "meaning": "Prohibit",
    "category": "Facilities",
    "example": "禁止 (Forbidden)"
  },
  {
    "id": 36,
    "kanji": "精",
    "reading": "せい",
    "meaning": "Refine / Fare Adjust",
    "category": "Facilities",
    "example": "精算機 (Fare adjustment)"
  },
  {
    "id": 37,
    "kanji": "水",
    "reading": "みず / すい",
    "meaning": "Water",
    "category": "Dining",
    "example": "お水 (Water)"
  },
  {
    "id": 38,
    "kanji": "湯",
    "reading": "ゆ",
    "meaning": "Hot Water / Bath",
    "category": "Dining",
    "example": "お湯 (Hot water)"
  },
  {
    "id": 39,
    "kanji": "酒",
    "reading": "さけ / しゅ",
    "meaning": "Alcohol / Sake",
    "category": "Dining",
    "example": "居酒屋 (Izakaya pub)"
  },
  {
    "id": 40,
    "kanji": "肉",
    "reading": "にく",
    "meaning": "Meat",
    "category": "Dining",
    "example": "牛肉 (Beef)"
  },
  {
    "id": 41,
    "kanji": "牛",
    "reading": "ぎゅう / うし",
    "meaning": "Beef / Cow",
    "category": "Dining",
    "example": "牛肉 (Beef)"
  },
  {
    "id": 42,
    "kanji": "豚",
    "reading": "ぶた / とん",
    "meaning": "Pork / Pig",
    "category": "Dining",
    "example": "豚肉 (Pork)"
  },
  {
    "id": 43,
    "kanji": "鶏",
    "reading": "とり / けい",
    "meaning": "Chicken / Fowl",
    "category": "Dining",
    "example": "鶏肉 (Chicken)"
  },
  {
    "id": 44,
    "kanji": "魚",
    "reading": "さかな / ぎょ",
    "meaning": "Fish",
    "category": "Dining",
    "example": "鮮魚 (Fresh Fish)"
  },
  {
    "id": 45,
    "kanji": "菜",
    "reading": "さい / な",
    "meaning": "Vegetable",
    "category": "Dining",
    "example": "野菜 (Vegetable)"
  },
  {
    "id": 46,
    "kanji": "飯",
    "reading": "はん / めし",
    "meaning": "Meal / Rice",
    "category": "Dining",
    "example": "ご飯 (Rice/Meal)"
  },
  {
    "id": 47,
    "kanji": "食",
    "reading": "しょく / たべ",
    "meaning": "Eat / Food",
    "category": "Dining",
    "example": "定食 (Set Meal)"
  },
  {
    "id": 48,
    "kanji": "飲",
    "reading": "の / いん",
    "meaning": "Drink",
    "category": "Dining",
    "example": "飲み放題 (All-you-can-drink)"
  },
  {
    "id": 49,
    "kanji": "味",
    "reading": "あじ / み",
    "meaning": "Taste / Flavor",
    "category": "Dining",
    "example": "味噌 (Miso)"
  },
  {
    "id": 50,
    "kanji": "大",
    "reading": "おお / だい",
    "meaning": "Large",
    "category": "Dining",
    "example": "大盛り (Large portion)"
  },
  {
    "id": 51,
    "kanji": "中",
    "reading": "なか / ちゅう",
    "meaning": "Medium / Inside",
    "category": "Dining",
    "example": "中盛り (Medium portion)"
  },
  {
    "id": 52,
    "kanji": "小",
    "reading": "ちい / しょう",
    "meaning": "Small",
    "category": "Dining",
    "example": "小盛り (Small portion)"
  },
  {
    "id": 53,
    "kanji": "注",
    "reading": "ちゅう",
    "meaning": "Order / Pour",
    "category": "Dining",
    "example": "注文 (Order)"
  },
  {
    "id": 54,
    "kanji": "文",
    "reading": "もん / ぶん",
    "meaning": "Order / Writing",
    "category": "Dining",
    "example": "注文 (Order)"
  },
  {
    "id": 55,
    "kanji": "払",
    "reading": "はら",
    "meaning": "Pay",
    "category": "Dining",
    "example": "支払い (Payment)"
  },
  {
    "id": 56,
    "kanji": "会",
    "reading": "かい",
    "meaning": "Bill / Account",
    "category": "Dining",
    "example": "会計 (Check / Bill)"
  },
  {
    "id": 57,
    "kanji": "買",
    "reading": "か / ばい",
    "meaning": "Buy",
    "category": "Shopping",
    "example": "買い物 (Shopping)"
  },
  {
    "id": 58,
    "kanji": "売",
    "reading": "う / ばい",
    "meaning": "Sell",
    "category": "Shopping",
    "example": "売り場 (Sales area)"
  },
  {
    "id": 59,
    "kanji": "完",
    "reading": "かん",
    "meaning": "Complete / Sold out",
    "category": "Shopping",
    "example": "完売 (Sold out)"
  },
  {
    "id": 60,
    "kanji": "税",
    "reading": "ぜい",
    "meaning": "Tax",
    "category": "Shopping",
    "example": "免税 (Tax Free)"
  },
  {
    "id": 61,
    "kanji": "込",
    "reading": "こみ",
    "meaning": "Included",
    "category": "Shopping",
    "example": "税込 (Tax included)"
  },
  {
    "id": 62,
    "kanji": "抜",
    "reading": "ぬき",
    "meaning": "Excluded",
    "category": "Shopping",
    "example": "税抜 (Tax excluded)"
  },
  {
    "id": 63,
    "kanji": "免",
    "reading": "めん",
    "meaning": "Exempt / Free",
    "category": "Shopping",
    "example": "免税 (Tax Free)"
  },
  {
    "id": 64,
    "kanji": "割",
    "reading": "わり / かつ",
    "meaning": "Discount / Portion",
    "category": "Shopping",
    "example": "割引 (Discount)"
  },
  {
    "id": 65,
    "kanji": "引",
    "reading": "ひき / いん",
    "meaning": "Pull / Off",
    "category": "Shopping",
    "example": "10%引き (10% Off)"
  },
  {
    "id": 66,
    "kanji": "現",
    "reading": "げん",
    "meaning": "Cash / Present",
    "category": "Shopping",
    "example": "現金 (Cash)"
  },
  {
    "id": 67,
    "kanji": "金",
    "reading": "きん / かね",
    "meaning": "Money / Gold",
    "category": "Shopping",
    "example": "料金 (Fee / Price)"
  },
  {
    "id": 68,
    "kanji": "料",
    "reading": "りょう",
    "meaning": "Fee / Material",
    "category": "Shopping",
    "example": "無料 (Free of charge)"
  },
  {
    "id": 69,
    "kanji": "無",
    "reading": "む / な",
    "meaning": "Free / Without",
    "category": "Shopping",
    "example": "無料 (Free)"
  },
  {
    "id": 70,
    "kanji": "有",
    "reading": "ゆう / ある",
    "meaning": "Paid / Have",
    "category": "Shopping",
    "example": "有料 (Fee charged)"
  },
  {
    "id": 71,
    "kanji": "詰",
    "reading": "つめ",
    "meaning": "Refill / Pack",
    "category": "Shopping",
    "example": "詰め替え (Refill)"
  },
  {
    "id": 72,
    "kanji": "円",
    "reading": "えん",
    "meaning": "Yen / Circle",
    "category": "Shopping",
    "example": "100円 (100 Yen)"
  },
  {
    "id": 73,
    "kanji": "一",
    "reading": "いち",
    "meaning": "One",
    "category": "Numbers & Time",
    "example": "一人 (1 Person)"
  },
  {
    "id": 74,
    "kanji": "二",
    "reading": "に",
    "meaning": "Two",
    "category": "Numbers & Time",
    "example": "二人 (2 People)"
  },
  {
    "id": 75,
    "kanji": "三",
    "reading": "さん",
    "meaning": "Three",
    "category": "Numbers & Time",
    "example": "三番 (No. 3)"
  },
  {
    "id": 76,
    "kanji": "四",
    "reading": "よん / し",
    "meaning": "Four",
    "category": "Numbers & Time",
    "example": "四階 (4th Floor)"
  },
  {
    "id": 77,
    "kanji": "五",
    "reading": "ご",
    "meaning": "Five",
    "category": "Numbers & Time",
    "example": "五分 (5 Minutes)"
  },
  {
    "id": 78,
    "kanji": "六",
    "reading": "ろく",
    "meaning": "Six",
    "category": "Numbers & Time",
    "example": "六月 (June)"
  },
  {
    "id": 79,
    "kanji": "七",
    "reading": "なな / しち",
    "meaning": "Seven",
    "category": "Numbers & Time",
    "example": "七時 (7 o'clock)"
  },
  {
    "id": 80,
    "kanji": "八",
    "reading": "はち",
    "meaning": "Eight",
    "category": "Numbers & Time",
    "example": "八日 (8th day)"
  },
  {
    "id": 81,
    "kanji": "九",
    "reading": "きゅう / く",
    "meaning": "Nine",
    "category": "Numbers & Time",
    "example": "九分 (9 Minutes)"
  },
  {
    "id": 82,
    "kanji": "十",
    "reading": "じゅう",
    "meaning": "Ten",
    "category": "Numbers & Time",
    "example": "十分 (10 Minutes)"
  },
  {
    "id": 83,
    "kanji": "百",
    "reading": "ひゃく",
    "meaning": "Hundred",
    "category": "Numbers & Time",
    "example": "百円 (100 Yen)"
  },
  {
    "id": 84,
    "kanji": "千",
    "reading": "せん",
    "meaning": "Thousand",
    "category": "Numbers & Time",
    "example": "千円 (1,000 Yen)"
  },
  {
    "id": 85,
    "kanji": "万",
    "reading": "まん",
    "meaning": "Ten Thousand",
    "category": "Numbers & Time",
    "example": "一万円 (10,000 Yen)"
  },
  {
    "id": 86,
    "kanji": "日",
    "reading": "にち / ひ",
    "meaning": "Day / Sun",
    "category": "Numbers & Time",
    "example": "本日 (Today)"
  },
  {
    "id": 87,
    "kanji": "月",
    "reading": "げつ / つき",
    "meaning": "Month / Moon",
    "category": "Numbers & Time",
    "example": "今月 (This month)"
  },
  {
    "id": 88,
    "kanji": "時",
    "reading": "じ / とき",
    "meaning": "Time / Hour",
    "category": "Numbers & Time",
    "example": "10時 (10 o'clock)"
  },
  {
    "id": 89,
    "kanji": "危",
    "reading": "あぶ / き",
    "meaning": "Dangerous",
    "category": "Safety & Signs",
    "example": "危険 (Danger)"
  },
  {
    "id": 90,
    "kanji": "険",
    "reading": "けん",
    "meaning": "Peril / Danger",
    "category": "Safety & Signs",
    "example": "危険 (Danger)"
  },
  {
    "id": 91,
    "kanji": "意",
    "reading": "い",
    "meaning": "Caution / Mind",
    "category": "Safety & Signs",
    "example": "注意 (Caution)"
  },
  {
    "id": 92,
    "kanji": "空",
    "reading": "あき / くう",
    "meaning": "Empty / Vacant",
    "category": "Safety & Signs",
    "example": "空室 (Vacant Room)"
  },
  {
    "id": 93,
    "kanji": "満",
    "reading": "まん",
    "meaning": "Full / Occupied",
    "category": "Safety & Signs",
    "example": "満室 (Fully booked)"
  },
  {
    "id": 94,
    "kanji": "押",
    "reading": "お",
    "meaning": "Push",
    "category": "Safety & Signs",
    "example": "押す (Push door)"
  },
  {
    "id": 95,
    "kanji": "応",
    "reading": "おう",
    "meaning": "Emergency / Respond",
    "category": "Safety & Signs",
    "example": "応急 (First Aid)"
  },
  {
    "id": 96,
    "kanji": "急",
    "reading": "きゅう",
    "meaning": "Urgent / Express",
    "category": "Safety & Signs",
    "example": "救急 (Emergency)"
  },
  {
    "id": 97,
    "kanji": "本",
    "reading": "ほん",
    "meaning": "Main / Today / Book",
    "category": "Safety & Signs",
    "example": "本日 (Today)"
  },
  {
    "id": 98,
    "kanji": "当",
    "reading": "とう / あたり",
    "meaning": "This / Present",
    "category": "Safety & Signs",
    "example": "当日 (On the day)"
  },
  {
    "id": 99,
    "kanji": "止",
    "reading": "と / し",
    "meaning": "Stop",
    "category": "Safety & Signs",
    "example": "止まれ (Stop)"
  },
  {
    "id": 100,
    "kanji": "重",
    "reading": "じゅう / おも",
    "meaning": "Heavy / Important",
    "category": "Safety & Signs",
    "example": "貴重品 (Valuables)"
  }
];

const KANJI_CATEGORIES = ["Dining", "Facilities", "Numbers & Time", "Safety & Signs", "Shopping", "Transit"];

function buildKanjiDeck({ categories }) {
  if (!categories || !categories.length) return [...KANJI];
  return KANJI.filter((item) => categories.includes(item.category));
}

