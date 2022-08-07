export {};

(() => {
    /**
     * 受け取った型と同じ型の返り値を返す関数
     * 型が異なるだけで、やってることが同じ関数を共通かしたい → ジェネリクス
     */
    // number 型
    const echo = (arg: number): number => {
        return arg;
    };

    // string 型
    const echo2 = (arg: string): string => {
        return arg;
    }
})();

(() => {
    /**
     * ジェネリクスでリファクタリング
     * <T> がジェネリクスの宣言で「型引数」と呼ばれる。抽象的な型を表す
     * 慣習として T。
     * メリット：関数の実装コストが削減できる
     */
    const echo = <T>(arg: T): T => { // 引数の型と返り値の型は一致している
        return arg;
    }

    console.log(echo<number>(100));
    console.log(echo<string>('はむさん'));
    console.log(echo<boolean>(true));
})();


(() => {
    /**
     * クラスで 1 (before)
     */
    class Mirror {
        constructor(public value: number) {}

        echo(): number {
            return this.value;
        }
    }

    console.log(new Mirror(123).echo());
})();

(() => {
    /**
     * クラスで 2 (ジェネリクスで number 型以外でも、初期化した型の値を返すように変更)
     */
    class Mirror<T> {
        constructor(public value: T) {}

        echo(): T {
            return this.value;
        }
    }

    console.log(new Mirror<number>(123).echo());
    console.log(new Mirror<string>('はむさん').echo());
    console.log(new Mirror<boolean>(true).echo());
})();

