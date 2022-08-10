export {};

// Record<K, T>

type Prefectures = 'Tokyio' | 'Chiba' | 'Tottori' | 'Shiga';

type Covid19InfectionInfo = {
    kanji_name: string;
    confirmed_cases: number;
};

/**
 * 愚直に書く場合
 */
// const covid19Japan: {
//     Tokyo: Covid19InfectionInfo, // 繰り返して書きたくない → Record ユーティリティ型
//     Chiba: Covid19InfectionInfo,
//     Tottori: Covid19InfectionInfo,
//     Shiga: Covid19InfectionInfo,
// } = {
//     Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
//     Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
//     Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
//     Shiga: { kanji_name: '鳥取', confirmed_cases: true }, // エラー
// };

/**
 * Record 型でスッキリ、メンテナンス性高く書ける
 */
const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
    Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
    Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
    Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
    Shiga: { kanji_name: '鳥取', confirmed_cases: true }, // エラー
};
