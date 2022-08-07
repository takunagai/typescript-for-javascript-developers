export {};

// 親クラス
abstract class Animal { // 抽象クラス
    abstract cry(): string; // 抽象メソッド
}

// 子クラス 1
class Lion extends Animal {
    cry() { // 抽象クラスを実装していないとエラーとなり、実装すべき抽象メソッドを提示してくれる (実装し忘れを防ぐ)
        return 'Roar!';
    }
}

// 子クラス 2
class Tiger extends Animal { // 抽象クラスを実装していないのでエラー
    // cry() {
    //     return 'Grrr!';
    // }
}
