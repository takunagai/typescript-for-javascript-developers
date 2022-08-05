export {};

// 要件
// * owner (pubric)
//   - 所有者 ✅
//   - 初期化時に設定できる ✅
//   - 途中で変更できない
//   - 参照できる ✅
// * secretNumber (private)
//   - 個人番号
//   - 初期化時に設定できる
//   - 途中で変更可能
//   - 参照できない

class MyNumberCard {
    private _owner: string; // 参照のみできるように。getter のメソッド名に owner を使いたいので変数名にアンダースコアを付けた
    secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this.secretNumber = secretNumber;
    }

    // 参照するメソッド getter
    get owner(): string {
        return this._owner;
    }
}

/**
 * インスタンス
 */
let card = new MyNumberCard('はむさん', 1234567890); //?
console.log(card.owner);
