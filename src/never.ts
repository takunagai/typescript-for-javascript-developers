export {};

// 必ず例外を投げる(エラーを起こす)テスト関数
function error(message: string): never {
	throw new Error(message);
}

// エラーハンドリング
try {
	let result = error('test'); // このブロック、実行されない(返り値は戻って来ない)が一応書いとく
	console.log({ result });
} catch (error) {
	console.log({ error }); // エラーオブジェクトの dump 出力
}

let foo: void = undefined; // void 型は undefined 型を含むので代入可能
// let bar: never = undefined; // 値という概念がないのでエラー
// let baz: never = null; // これも値という概念がないのでエラー 

let qux = error('only me!');