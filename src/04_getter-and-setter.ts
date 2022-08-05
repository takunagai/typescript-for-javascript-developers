export {};

// 要件
// * owner (pubric)
//   - 所有者 ✅
//   - 初期化時に設定できる ✅
//   - 途中で変更できない ✅
//   - 参照できる ✅
// * secretNumber (private)
//   - 個人番号 ✅
//   - 初期化時に設定できる ✅
//   - 途中で変更可能 ✅
//   - 参照できない ✅

class MyNumberCard {
    private _owner: string; // 参照のみできるように。getter のメソッド名に owner を使いたいので変数名にアンダースコアを付けた
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    // 参照するメソッド getter
    get owner(): string {
        return this._owner;
    }

    // 変更するメソッド setter
    set secretNumber(secretNumber: number) {
        this._secretNumber = secretNumber;
    }

    // デバッグ用のメソッド (setter の動作確認用)
    debugPrint() {
        return `secretNumber: ${this._secretNumber};`
    }
}

/**
 * インスタンス
 */
let card = new MyNumberCard('はむさん', 1234567890); //?

// getter の確認
// card.owner = 'Ham'; // 内容を変更するコード (許可していないのでエラーで OK)
console.log(card.owner); // getter でデータ内容にアクセス(関数の()は不要)

// setter の確認
// card._secretNumber; // エラーになり、プライベートな変数に直接アクセスできない OK
console.log(card.secretNumber); // undefined になり、プライベートな変数に直接アクセスできない OK
console.log(card.debugPrint()); // デバッグ関数で変更前を確認
card.secretNumber = 999999999; // setter でデータ内容の変更(関数の()は不要)
console.log(card.debugPrint()); // デバッグ関数で変更後を確認。変更できてる！
