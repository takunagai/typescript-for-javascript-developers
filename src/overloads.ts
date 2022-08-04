export {};

/**
 * 数値を受け取り2倍にして返す関数
 */
function double(value: number): number {
    return value * 2;
}
console.log(double(100));

/**
 * 文字列を受け取り、2回繰り返す関数
 * (上のと、引数の型、返り値の型が違う)
 */
function double2 (value: string): string {
    return value + value;
}
console.log(double2('Go ')); 

/**
 * 数値か文字列を受け取り、数値なら2倍、文字列なら2回繰り返しにして返す関数 (オーバーロード)
 * シグネチャー(関数の処理の実体は書かずに関数名、引数、戻り値の型のみを宣言したもの。概略。これにより肩制約を実現できる)
 */
// シグネチャー。宣言。DBのスキーマのようなもの。関数の実体の前に書く
// なくても動くが、これがないと number, string 以外も通してしまう。ガードしてくれない(コメントアウトして試してみると、true などが渡せるようになる)
function double3(value: number): number;
function double3(value: string): string;

// 処理の実体 (各シグネチャー用の処理を分岐で実装する)
function double3(value: any): any { // union 型はダメ。全ての型を受け取れるよう any 型にする。型の制約はシグネチャーの役割。以外はエラーとなり弾かれる
    console.log(typeof value);
    if (typeof value === 'number') {
        return value * 2;
    } else { // else if (typeof value === 'string')
        return value + value;
    }
    // シグネチャーで宣言されている number, string 以外は事前にはねられるので不要
    // else {
    //     throw 'number でも strings でもないので、引数の型を確認してください。';
    // }
}

console.log(double3(100));
console.log(double3('Go '));
// console.log(double3(true)); // コンパイルエラー