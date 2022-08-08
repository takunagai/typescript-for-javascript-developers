export {};

(() => {
    /**
     * コンパイルオプション(tsconfig.json) `strict null checks: true` (デフォルト) だとエラー
     * どんな型の変数にも null を許可してしまう → 良くないので、true のままにするのが普通
     */
    let profile: { name: string, age: number; } = {
        name: 'Ham',
        age: null // コンパイルエラー
    };
})();

(() => {
    /**
     * コンパイルオプションで strict null checks を false にせず、null を設定できるように
     * → union 型を使う
     */
    let profile: { name: string, age: number | null } = {
        name: 'Ham',
        age: null // コンパイルエラー
    };
})();