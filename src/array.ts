export {};

/**
 * number 型の配列
 */
let numbers = [1, 2, 3]; // 型推論で配列型に。カーソルオンで確認できる
console.log(numbers);

let numbers2: number[] = [11, 12, 13]; // 型アノテーション
console.log(numbers2);

let numbers3: Array<number> = [21, 22, 23]; // 非推奨だが読めるように説明。インターフェースとジェネリスク。カーソルオンで確認すると、上のと同じ型
console.log(numbers3);

/**
 * string 型の配列
 */
let strings: string[] = ['TypeScript', 'JavaScript', 'CofeeScript'];
console.log(strings); 

let strings2: Array<string> = ['Osaka', 'Tokyo', 'Nagoya']; // string 型の配列
console.log(strings2);

/**
 * 二次元配列
 */
let nijigenHairetsu: number[][] = [
    [50, 100],
    [150, 300]
];
console.log(nijigenHairetsu);

// 二次元配列でも型推論は機能する
let nijigenHairetsu2 = [
    [51, 101],
    [151, 301]
];
console.log(nijigenHairetsu2);

/**
 * 要素の型が混在
 */
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan']; // ユニオン型
console.log(hairetsu);

let hairetsu2 = [2, true, 'England']; // カーソルオンで型を確認
console.log(hairetsu2);
