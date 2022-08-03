export {};

// 引数の数が予測できない場合 "レストパラメーター(...)" を使うと良い
// const sum = (...values: number[]): number => { // 数値の配列の型
const sum: (...values: number[]) => number = (...values: number[]): number => { // 変数 sum の型、型推論からコピーした
    console.log(values + '\n');
    return 100;
}

sum(1, 2, 3, 4, 5); // 引数の数が予測できない → (5) [1, 2, 3, 4, 5]


/**
 * reduce 基本
 */
// reduce で合計を求める関数(reducer)を変数にセット
const reducer = (accumulator: number, currentValue: number): number => {
    console.log({ accumulator, currentValue });
    return accumulator + currentValue; // 次の accumulator にセットされる
}

// reducer で計算
[1, 2, 3, 4].reduce(reducer);
//    ↓ 順にセットされ、計算結果が次の処理で使用されていることが確認できる
// { accumulator: 1, currentValue: 2 }
// { accumulator: 3, currentValue: 3 }
// { accumulator: 6, currentValue: 4 }


console.log('\n');
/**
 * reduce 基本
 */

// reducer
const reducer2 = (accumulator: number, currentValue: number): number => {
    console.log({ accumulator, currentValue });
    return accumulator + currentValue; // 最終的な合計を返す
}

const sum2: (...values: number[]) => number = (...values: number[]): number => {
    return values.reduce(reducer2);
}

console.log(sum2(1, 2, 3, 4, 5));
//    ↓
// { accumulator: 1, currentValue: 2 }
// { accumulator: 3, currentValue: 3 }
// { accumulator: 6, currentValue: 4 }
// { accumulator: 10, currentValue: 5 }
// 15

