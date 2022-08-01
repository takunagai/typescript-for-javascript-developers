export {};

/**
 * : object でアノテーション。制約が甘い
 */
let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1976 };  // エラー発生しない。構造や要素の型チェックなし、制約が甘い

/**
 * : {} でアノテーション
 */
// 空 {} だと : object と同じ
let profile2: {} = { name: 'Ham' };
profile2 = { birthYear: 1976 };  // これもエラー発生しない

// : object と違い、プロパティに型指定ができる！型推論してくれるものをコピペすればOK!
let profile3: {
    name: string;
} = { name: 'Ham' };
// profile3 = { birthYear: 1976 };  // 型エラー
profile3 = { name: 'Takuya' };  // name(string 型)の再代入(プロパティの更新)のみ許可
