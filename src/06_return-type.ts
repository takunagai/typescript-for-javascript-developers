export {};

function add(a: number, b: number) {
    return a + b;
}
console.log(add(1, 2));

/**
 * Return Type 戻り値の型を取得したい
 */
type ReturnTypeFromAdd = ReturnType<typeof add>; // → number。typeof で調べた型を引数に
