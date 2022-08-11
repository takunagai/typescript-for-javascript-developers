export {};

// クラスの基本形
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) { // ここの型を拾いたい
        this.name = name;
        this.age = age;
    };
}

let taro = new Person('Taro', 30);
console.log(taro);


/**
 * ConstructorParameters - コンストラクタ関数の引数の型を抽出
 */
type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>; // Profile は [name: string, age: number] (タプル型、コンストラクタ関数の引数)
const profile: Profile = ['Ham', 43];
const ham = new Person(...profile); // インスタンスを作成してみる
console.log(ham);


/**
 * ConstructorParameters の型定義を見てみる
 */
// ConstructorParameters を右クリック > 定義へ移動 実体を確認
// type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

// コピペし独自関数として編集していく
type MyConstructorParameters<T extends abstract new (...args: any) => any> // 型引数：クラスの型に制約
 = T extends abstract new (...args: infer P) => any ? P : never; // 型のみを infer で抽出し P (引数の型)として扱う。必ず真になり P が返る