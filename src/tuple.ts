export {};

let profile: (string | number)[] = ['Ham', 43]; // 要素の型が混在。型推論もしてくれる。順序性を持たないのが不十分
profile = [43, 'Ham']; // すり替わってもいけてしまう(ダメ)

/**
 * tuple (タプル) 型
 * 順序性を持たせることができる
 */
let profile2: [string, number] = ['Ham', 43]; // 1番目に number 型、2番目に string 型
// profile2 = [43, 'Ham']; // すり替えると型エラー。要素にカーソルオンで各エラーが見れる

