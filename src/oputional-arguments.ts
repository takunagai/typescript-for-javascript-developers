export {};

/**
 * 1. オプショナル 基本(? を付けた引数、存在してもしなくてもいい)
 */
// bmi (身長、体重、console.log で出力するかどうか)
// 3つの変数を取る関数。第3引数はあってもなくてもいい
// bmi(1.78, 86, true);
// bmi(1.78, 86, false);
// bmi(1.78, 86);
let bmi: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean // あっても無くても良い
): number => weight / (height * height);

console.log(bmi(1.78, 86, true)); // → 27.143037495265748, 第3引数あり
console.log(bmi(1.73, 60)); // → 20.04744562130375, 第3引数なし
console.log('\n');

/**
 * 2. オプショナルの有無で分岐
 */
let bmi2: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean
): number => {
    if (printable) {
        console.log('bmi2'); // printable を受け取った場合のみ表示
    }
    return weight / (height * height);
}

console.log(bmi2(1.73, 60)); // → 20.04744562130375
console.log(bmi2(1.78, 86, true)); // → 'bmi2', 27.143037495265748
console.log(bmi2(1.78, 86, false)); // → 27.143037495265748
console.log('\n');

/**
 * 2 をリファクタリング、if 文中でも計算結果を使う
 */
let bmi3: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean
): number => {
    const bmi: number = weight / (height * height); // 計算結果をキャッシュしとく
    if (printable) {
        console.log({ bmi }); // 計算結果を出力
    }
    return bmi;
}

console.log(bmi3(1.73, 60)); // → 20.04744562130375
console.log(bmi3(1.78, 86, true)); // → { bmi: 27.143037495265748 }, 27.143037495265748
console.log(bmi3(1.78, 86, false)); // → 27.143037495265748