export {};

(() => {
    /**
     * クラスの基本(JavaScript)
     */
    class Person { // 雛形のようなもの
        // コンストラクタメソッド(自動的に呼び出されるメソッド、初期化処理)
        constructor(name, age) { // 呼び出し時の引数が入る
            this.name: name;
            this.age: age;
        }
    } // セミコロン書かない
    let taro = new Person('Taro', 24); // new で雛形からインスタンス(実体)を生成。引数はコンストラクタメソッドの引数となる
    // let hanako = new Person(); // 何個でもインスタンス作れる
})();


(() => {
    /**
     * TypeScript で型をつける
     */
    class Person {
        // このクラスのプロパティの型をつける
        name: string;
        age: number;
        
        // コンストラクタの引数にも型アノテーション。戻り値の型は書かない(return しないから)
        constructor(name: string, age: number) {
            this.name= name;
            this.age= age;
        }
    } // セミコロン書かない
    let taro = new Person('Taro', 24);
    console.log(taro);
    // let hanako = new Person();
})();


(() => {
    /**
     * メソッドを追加してみる
     */
    class Person {
        name: string;
        age: number;
        
        constructor(name: string, age: number) {
            this.name= name;
            this.age= age;
        }

        // 追加メソッド
        profile(): string {
            return `${this.name}さんは、${this.age}歳です。`;
        }
    }
    let taro = new Person('Taro', 24);
    console.log(taro);
    console.log(taro.profile());
    // let hanako = new Person();
})();
