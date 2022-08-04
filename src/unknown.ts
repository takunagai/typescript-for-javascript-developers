export {};

// 43 を返すだけの関数。返り値は number 型
const kansu = (): number => 43;

// any 型。素通りする
let numberAny: any = kansu(); // any 型
let sumAny = numberAny + 10; // 53

// unknown 型
let numberUnknown: unknown = kansu(); // unknown 型

// let sumUnknown = numberUnknown + 10; // 型エラー(数値じゃないかも知れない)出る。JS なら早期発見できないやつ

console.log(typeof numberUnknown); // → number。typeof で、型を判別できる

// number 型であることが保証されているこのコードなら、エラーが出ない！(narrowing)
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10;
}
