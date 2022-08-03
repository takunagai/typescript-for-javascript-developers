export {};

/**
 * function キーワード, 関数にセットする型アノテーション
 */
// 例：BMI を求める関数
function bmi(height: number, weight: number): number {
    return weight / (height * height);
}

console.log(bmi(1.78, 86)); // → 27.143037495265748
