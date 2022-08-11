export {};

type DetailedProfile = {
    name: string,
    height: number,
    weight: number,
};

/**
 * Pick - 必要な型をピックアップうして使う
 */

//  (今回は、height と weight 型だけが必要)
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>; // 使い方型を union 型で渡す。エディタで '' で補完が効き、ないものはエラーに
// Pick を右クリック > 定義へ移動 で見てみると…

// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P]; // extends keyof で、T のキー(ユニオン型)と互換性のあるもののみ
// };


/**
 * Omit - 不要なものを指定し除外する
 */
type SmallProfile = Omit<DetailedProfile, 'height'>; // 第二引数に除外したいものを指定
// Omit を右クリック > 定義へ移動 で見てみると…
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Omit を自前で解剖し理解する
 */
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type MySmallProfile = MyOmit<DetailedProfile, 'height'>;

// 加工1 - 'height' を埋め込む
type MyOmit2<T> = Pick<T, Exclude<keyof T, 'height'>>;
type MySmallProfile2 = MyOmit2<DetailedProfile>;

// 加工2
type MyOmit3 = Pick<DetailedProfile, Exclude<'name' | 'height' | 'weight', 'height'>>; // Pick 引数の T, keyof T を直書き、型引数 <T> 不要に
type MySmallProfile3 = MyOmit3; // 型引数 <DetailedProfile> 不要に

// 加工3
type MyOmit4 = Pick<DetailedProfile, 'name' | 'weight'>; // Exclude で残る２つのみを直書きに → 冒頭の Pick 型のサンプルコードと全く同じ！同じ型
type MySmallProfile4 = MyOmit4;
