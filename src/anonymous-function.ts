export {};

/**
 * 無名関数による関数定義 (function.ts と同じ処理を無名関数で)
 */

// 変数 bmi にカーソル ON で型推論見れる → "let bmi: (height: number, weight: number) => number"
// → 問題なければ、返り値を受け取る変数 bmi にその型アノテーションをコピペしてつけてあげると良い(無くてもいける)
let bmi: (height: number, weight: number) => number = function(
    height: number,
    weight: number
): number {
    return weight / (height * height);
};

console.log(bmi(1.78, 86)); // → 27.143037495265748
