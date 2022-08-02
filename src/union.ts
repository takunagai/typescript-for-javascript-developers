export {};

/**
 * number, string 型いずれかを格納したい
 */

let value = 1; // 型推論で number 型
// value = 'foo'; // エラー

// union 型でできる！和集合
let value2: (number | string) = 1; // 型推論で number 型
value2 = 'foo'; // string 型いける！
value2 = 100; // number 型もいける！