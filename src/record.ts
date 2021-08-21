export {};

/**
 * Record
 */
//stringリテラル型を設定
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

type Covid19INfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

// const covid19japan: {
//   Tokyo: { kanji_name: string; confirmed_cases: number };
//   Chiba: { kanji_name: string; confirmed_cases: number };
//   Tottori: { kanji_name: string; confirmed_cases: number };
//   Shiga: { kanji_name: string; confirmed_cases: number };
// } = {
//   Tokyo: { kanji_name: '東京', confirmed_cases: 3455 },
//   Chiba: { kanji_name: '千葉', confirmed_cases: 55 },
//   Tottori: { kanji_name: '鳥取', confirmed_cases: 155 },
//   Shiga: { kanji_name: '滋賀', confirmed_cases: 35 },
// };

//上記の冗長な書き方がrecordを使うことでシンプルに記述できる
const covid19japan: Record<Prefectures, Covid19INfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 3455 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 55 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 155 },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 35 },
};
