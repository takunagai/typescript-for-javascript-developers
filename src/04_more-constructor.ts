export {};

class Person {
    // 削除
    // name: string;
    // protected age: number;

    // constructor(name: string, age: number) {
    constructor(public name: string, protected age: number) { // アクセス修飾子をコンストラクタメソッドの引数に付けると、自動で初期化してくれる(メンバー変数を登録してくれる)
        // 削除
        // this.name = name;
        // this.age = age;
    }
}

const me = new Person('はむさん', 43);
console.log(me);
