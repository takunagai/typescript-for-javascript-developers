export {};

/**
 * number 型
 */
let year: number = 1976;
// year = false; // エラー
console.log(year);

let age: number = 0x2b; // 16進数 43
// age = false; // エラー
console.log(age);


/**
 * string 型
 */
let name: string = 'ham';
console.log(name);

let name2 = 'taku'; // 型アノテーションなくても、型推論で文字列型に。変数名にカーソルオンで確認できる
console.log(name2);