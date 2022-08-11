export {};

const debugProfile = (name: string, age: number) => {
    console.log({ name, age });
};

debugProfile('Ham', 43);

/**
 * Parameters
 * 他人が作った関数やライブラリからインポートした型など、変更できない型から、引数のみの型を取り出したい時に便利
 */
type Profile = Parameters<typeof debugProfile>; // 変数にカーソルオンで型が [name: string, age: number] であることを確認

const profile: Profile = ['Gloria', 76]; //?
debugProfile(...profile); // → { name: 'Gloria', age: 76 } コンソールで確認

/**
 * 定義の実体をコピペし、分解して仕組みを知る
 *   上の Parameters にカーソルオン > 実体に移動 でコピーし編集
 */
type MyParameters<T extends (...args: any) => any> = T extends (
    ...args: infer P // 引数の型が P となる
) => any
 ? P // 必ず真になり、これとなる。引数の型が返る
 : never;
