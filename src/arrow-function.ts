export {};

/**
 * アロー関数による関数定義 (function.ts, anonymous function と同じ処理を無名関数で)
 */
let bmi: (height: number, weight: number) => number = (height: number, weight: number): number => weight / (height * height);

console.log(bmi(1.78, 86)); // → 27.143037495265748
