export {};

/**
 * 前回の ReturnType のコード
 */
function add(a: number, b: number) {
    return a + b;
}
console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>; //  Return Type

/**
 * Infer 推論した結果を型とする
 */
// ReturnType を右クリック > 定義へ移動し、その実体を確認
// `type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;`

// その実体をコピペし、コメントを付け加えたもの
type MyReturnType<T extends (...args: any) => any> = T extends ( // 型引数で (...args: any) => any 関数の型であるということを制約。どんな型かわからないので any で抽象化している
    ...args: any
) => infer R // 条件を記載する箇所に書ける特殊なキーワード。infer は、条件の一部としてジェネリクス型(山括弧、通常は型名の直後にしか書けない)を宣言できるようになるという役割。T を再利用
 ? R 
 : any;

// 条件式の中で型を拾い上げたい場合がある。infer で、返り値の型をピックアップできる
// `<T extends (...args: any) => any>` と、`T extends (...args: any) => infer R` は全く同じ
// 関数となるので必ず真になる。条件分岐で100% 真 (ここでは R) が採用される
// → 型として推論した結果を R に代入すると解釈すれば良い