export {};

type Mojiretsu = string; // エイリアスの頭文字は大文字

const fooString: string = 'Hello';
const fooSMojiretu: Mojiretsu = 'Hello'; // 型エイリアスで String 型になってる

// オブジェクトを変数にセット。型推論効く (後の typeof でもこの型推論された型を使用)
const example1 = {
    name: 'Ham',
    age: 43
};

// Object 型で型指定
const example2: {
    name: string;
    age: number;
} = {
    name: 'Ham',
    age: 43
};

// 型エイリアスで型指定 ※ 変化したら要手動で編集
type Profile = {
    name: string;
    age: number;
};
const example3: Profile = {
    name: 'Ham',
    age: 43
};

// example1 の型を使う ※変化に追従できるメリット。便利！
type Profile2 = typeof example1;
