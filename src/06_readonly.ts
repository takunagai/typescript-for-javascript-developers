export {};

type Profile = {
    name: string,
    age: number,
};

const me: Profile = {
    name: 'Ham',
    age: 43,
};

me.age++; //?
console.log(me);


/**
 * 全プロパティを読み取り専用にした型を作成
 */
type PersonalDataType = Readonly<Profile>; // 変数にカーソルオンで、全て readonly になっていることを確認
// Readonly を右クリック > 定義へ移動 で、実体を見てみる

const friend: PersonalDataType = {
    name: 'Shigeru',
    age: 40,
};

// friend.age++; // 代入できないためエラーが発生


/**
 * readonly と等価の型定義を定義してみる
 */
type YomitoriSenyo<T> = {
    readonly [P in keyof T]: T[P]; // in keyof で全プロパティをループ処理
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
