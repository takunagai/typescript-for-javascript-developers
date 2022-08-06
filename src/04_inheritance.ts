export {};

class Animal {
    constructor(public name: string) {}

    run(): string {
        return 'I can run';
    }
}

// 継承
class Lion extends Animal {
    constructor(public name: string, public speed: number) {
        super(name); // 継承する子クラスで必要 (super() は、親クラスの同名メソッド。ここではコンストラクタメソッドなので引数に name が必要)
    } // ★★TODO: 親・子クラス両方でメンバ変数 name を宣言。。子で上書きされるので問題ないが、気持ち悪い

    run(): string {
        return 'I can run 80km';
    }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run()); // 子クラスの使用で2つの引数が必要