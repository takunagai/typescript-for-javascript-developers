export {};

let name = 'Atsushi'; // 型推論で string 型
name = 'Ham'; // 書き換え可能

/**
 * const アサーション
 */
let nickname = 'Ham' as const; // 'Ham' 型
nickname = 'Hamtaro'; // 文字列リテラル型なので、書き換え不可

/**
 * オブジェクトの場合
 */
(() => {
    let profile = {
        name: 'Atsushi',
        height: 178,
    };
    
    profile.name = 'Ham'; // 再代入が可能
    profile.height = 180; // 再代入が可能
})();

(() => {
    // const アサーション
    let profile = { // 変数名にカーソルオンすると、書いてない readonly で型定義されているのが確認できる
        name: 'Atsushi',
        height: 178,
    } as const; // const アサーションで、各プロパティをリテラル型に
    
    profile.name = 'Ham'; // 'Atsushi' 型しか許可しないので再代入が不可
    profile.height = 180; // '178' 型しか許可しないので再代入が不可
})();
