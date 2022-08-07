export {};

/**
 * 型の互換性がある (string → any 型に代入)
 */
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible); // undefined
fooCompatible = barCompatible; // エラー出ない(互換性ある)
console.log(typeof fooCompatible); // 代入で any → string 型に遷移している


/**
 * 型の互換性がない (number → string 型に代入)
 */
let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible; // エラー(互換性ない)


/**
 * 包括する型には代入できる 1 (文字列リテラル型 → string 型に代入)
 */
let fooString: string;
let barString: string = 'string';
fooString = barString; // 同じ型なのでもちろん代入できる

// 文字列リテラル型、代入できる？
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral'; // 文字列リテラル型('fooStringLiteral'しか許容しない型)
fooString = fooStringLiteral; // 代入できる(= 文字リテラル型は strign 型の一部なので、strign 型と互換性がある)


/**
 * 包括する型には代入できる 1 (数値リテラル型 → number 型に代入)
 */
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976; // 1976 だけ許容する数値リテラル型

fooNumber = fooNumberLiteral; // 代入できる(= number型は数値全てを許容するため、数値リテラル型と互換性がある)


/**
 * オブジェクト → オブジェクト型に代入
 * (オブジェクトを代入できるかの判定は、そのオブジェクトの型は関係ない)
 *   - オブジェクト間の代入の場合も、型の互換性が評価される
 *   - オブジェクト間の型の代入の評価では、各々の型が一致しているかどうかは気にされない
 *   - 代入されるオブジェクトの内部でもつメンバーが、代入するオブジェクトの方でも存在するか？そのメンバーの型に互換性があるか評価が評価される
 *   - 継承やインターフェースを実装しているかは、いっさい気にされない(=構造的部分型)
 */
interface Animal {
    age: number; // これがなくてもエラー出ない
    name: string;
}

// Animal (上のインターフェース Animal となんら関係のないクラス)
class Person {
    constructor(public age: number, public name: string) {} //  public name: string がないと、me への代入時に型エラー(A)
}

// A の解決方法 (このサンプルコードでは、2 で対応している)
//  1. インターフェースの Animal のメンバーを削除
//  2. Person のメンバーに name を追加する

let me: Animal; // age: number を持つ(interface で型指定)
me = new Person(43, 'HamSan'); // インスタンス生成
