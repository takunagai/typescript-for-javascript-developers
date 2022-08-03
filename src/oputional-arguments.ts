export {};

/**
 * 元：オプショナル(引数として存在していても無くてもいい)
 */
let bmi = (height: number, weight: number): number => weight / (height * height);

// bmi(1.78); // 2つの引数がないのでエラー
console.log(bmi(1.78, 86)); // → 27.143037495265748

/**
 * オプショナル(? を付けた引数、存在してもしなくてもいい)
 */
// bmi (身長、体重、console.log で出力するかどうか)
// 3つの変数を取る関数。第3引数はあってもなくてもいい
// bmi(1.78, 86, true);
// bmi(1.78, 86, false);
// bmi(1.78, 86);
let bmi2: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean // あっても無くても良い
): number => weight / (height * height);

console.log(bmi2(1.78, 86, true)); // → 27.143037495265748, 第3引数あり
console.log(bmi2(1.73, 60)); // → 20.04744562130375, 第3引数なし