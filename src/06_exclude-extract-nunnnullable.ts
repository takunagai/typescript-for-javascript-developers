export {};

/**
 * Exclude ユニオン型から指定の型を除外する
 */

type DebugType = () => void; // 関数型
type SomeTypes = string | number | DebugType;

// ユニオン型から、ある型のみを除外する
type FunctionType = Exclude<SomeTypes, string | number>; // string, nunber 型を除外

// DebugType 型を除外する 1 (変数名にカーソルオンで型を確認)
type NunFunctionType = Exclude<SomeTypes, DebugType>; // 全体, 外す型

// DebugType 型を除外する 2
type TypeExcludingFunction = Exclude<SomeTypes, Function>; // 関数型の総称


/**
 * Extract ユニオン型から指定の型を抽出する
 */
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>; // DebugType のみ取り出せた
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>; // string と number のみ取り出せた
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>; // Function のみ取り出せた


/**
 * NonNullable ユニオン型から null, undefined 型を排除
 */
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>; // string, number 型のみ残る