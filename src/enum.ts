export {};

/**
 * 数値の列挙型 (文字列型と違い、各要素に代入しない)
 */

// 数値の列挙型。英単語に対して数字をふる
// 各要素にカーソルオンすると、連番が振られているのが確認できる
// JSなら、January: 0, のように、連番の値を与えてあげる必要がある
enum Months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Months.January);  // → 0, (enum member) Months.January = 0
console.log(Months.February); // → 1, (enum member) Months.February = 1

// 1月を 1 としたい場合、先頭の要素に数値を代入すると、その数値からスタートする連番にしてくれる！
enum Months2 {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Months2.January);  // → 1
console.log(Months2.February); // → 2