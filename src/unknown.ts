export {};

const kansu = (): number => 43; // 43 を返すだけの関数

let numberAny: any = kansu(); // any 型
let numberUnknown: unknown = kansu(); // unknown 型

let sumAny = numberAny + 10; // 53
// console.log(typeof numberUnknown); // 実行 → number。typeof で、型を判別してくれる
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10;
}
// let sumUnknown = numberUnknown + 10; // 型エラー(数値じゃないかも知れない)。JS なら早期発見できない
