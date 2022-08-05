export {};

// 要件
// * owner (pubric)
//   - 所有者
//   - 初期化時に設定できる
//   - 途中で変更できない
//   - 参照できる
// * secretNumber (private)
//   - 個人番号
//   - 初期化時に設定できる
//   - 途中で変更可能
//   - 参照できない

class MyNumberCard {
    owner: string;
    secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this.owner = owner;
        this.secretNumber = secretNumber;
    }
}

/**
 * インスタンス
 */
let card = new MyNumberCard('はむさん', 1234567890); //?