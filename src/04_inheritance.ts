export {};

class Animal {
    constructor(public name: string) {}

    run(): string {
        return 'I can run';
    }
}

// 継承
class Lion extends Animal {
    public speed: number; // speed を外に出す (public ごと)
    constructor(name: string, speed: number) { // 双方、public を取る
        super(name); // 継承する子クラスで必要 (super() は、親クラスの同名メソッド。ここではコンストラクタメソッドなので引数に name が必要)

        this.speed = speed; // super で初期化してくれなくなったので、子クラス自身で初期化する
    }

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