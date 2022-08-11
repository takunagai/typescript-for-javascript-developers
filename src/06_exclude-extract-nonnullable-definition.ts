export {};

/**
 * Exclude の定義の解説
 * (前回の 06_exclude-extract-nunnnullable.ts がベース ※以下同)
 */
type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>; // Exclude を右クリックでで定義に移動

// type Exclude<T, U> = T extends U ? never : T; // 型の実体 lib.se5.d.ts。Conditional Types (三項演算子) で分岐処理
type MyExclude<T, U> = T extends U ? never : T; // コピペして自前実装に (前のサンプルコードと全く同じ処理)
type MyFunctionType = MyExclude<SomeTypes, string | number>;

// 書き換え、上と等価
type MyExclude2<T> = T extends string | number ? never : T;
type MyFunctionType2 = MyExclude2<SomeTypes>; // SomeTypes → T は string | number | DebugType

// 書き換え、上と等価。Distributive Conditional Types と次のサンプルを見て理解
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
type MyExclude3<T> =
(T extends string | number ? never : T)
| (T extends string | number ? never : T)
| (T extends string | number ? never : T);
type MyFunctionType3 = MyExclude3<SomeTypes>; // SomeTypes → T は string | number | DebugType

// 書き換え、上と等価。直書きで型引数や T を無くす
type MyExclude4 =
(string extends string | number ? never : string) // never: 理由は、string が string | number と互換性があるか評価。真なら never、偽 なら string
| (number extends string | number ? never : number) // 真なので never
| (DebugType extends string | number ? never : DebugType); // 偽なので DebugType
// → `never | never | DebugType` DebugType のみ返る → `DebugType` が設定される
type MyFunctionType4 = MyExclude4; // SomeTypes → T は string | number | DebugType


/**
 * Extract
 * ★★やってみよう
 */
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;


/**
 * NonNullable
 * ★★やってみよう
 */
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;