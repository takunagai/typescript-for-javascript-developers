export {};

let dayOfTheWeek: string = '日';
dayOfTheWeek = '月'; // OK
dayOfTheWeek = '31'; // OK　だが、想定外の文字列 ←はじきたい

/**
 * 文字列のリテラル型。有限のパターンに絞ることができる
 */
let dayOfTheWeek2: ('日' | '月' | '火' | '水' | '木' | '金' | '土') = '日';
dayOfTheWeek2 = '月'; // 曜日文字列はOK
// dayOfTheWeek2 = '31'; // 想定外の文字列はエラー！

/**
 * 数値のリテラル型
 */
let month: (1|2|3|4|5|6|7|8|9|10|11|12) = 1;
month = 12;
// month = 13; // 1〜12 以外はエラー！

/**
 * 真偽値のリテラル型。boolean 型は、元々 true, false の2種と有限なので使い道はないが
 */
let TRUE: true = true; // true のみ
// TRUE = false; // エラー。false は設定できない
