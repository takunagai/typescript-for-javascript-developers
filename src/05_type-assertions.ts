export {};

(() => {
    /**
     * 手動で型を制限 △
     */
    let name: any = 'Ham';
    let length: number = name.length; // 数値が望ましいので、手動で型を制限
    length = 'foo'; // 数値型以外はエラー OK
})();

/**
 * 型アサーションで型を制限 1 ◯
 * より早い段階で型を付ける
 */
(() => {
    let name: any = 'Ham';
    let length = name.length as number; // 型アサーション
    length = 'foo';
})();

/**
 * 型アサーションで型を制限 2A ◎
 * さらに早い段階で型を付ける
 */
(() => {
    let name: any = 'Ham';
    let length = (name as string).length; // 型アサーション
    length = 'foo';
})();

/**
 * 型アサーションで型を制限 2B ×
 * 2A と等価 ※ JSX の記法と似ていて混乱するため、推奨されていない
 */
(() => {
    let name: any = 'Ham';
    let length = (<string>name).length; // 型アサーション
    length = 'foo';
})();