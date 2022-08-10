export {};

(() => {
    /**
     * Partial 型
     *   型エイリアス、全てのプロパティをオプショナル(あるなしどっちでも)にしたい場合
     */

    // オリジナルのオブジェクト
    type Profile = {
        name: string, // 必須プロパティ
        age: number,
        zipCode: number,
        // これ以外も色々プロパティがあると想定
    };

    // 1. 型を複製し、各プロパティをオプショナルに。プロパティの変更が面倒なので良くない。。
    type Profile2 = {
        name?: string, // ? を付けてオプショナルに
        age?: number,
        gender?: string, // プロパティの追加、削除、変更時にも編集が必要
    };

    // 2. Partial を使うと便利！元の型エイリアスにプロパティ(オプショナルなし)を追加すると
    //    自動で全プロパティがオプショナルとして追加される
    type PartialType = Partial<Profile>; // 変数にカーソルオンで型確認
    // ↓ PartialType の型、自動でこうしてくれてる！
    // type PartialType = {
    //     name?: string | undefined; // 全てがオプショナルになってる！
    //     age?: number | undefined;
    //     zipCode?: number | undefined;
    // }
})();


/**
 * Required 型
 *   必須・オプショナルな型のプロパティが混在した型エイリアス、
 *   全てのプロパティを必須にしたい場合
 */
(() => {
    // オリジナルのオブジェクト
    type Profile = {
        name: string, // 必須プロパティ
        age?: number, // オプショナル(あってもなくても良い)
        zipCode: number,
        // これ以外も色々プロパティがあると想定
    };

    // Profile のプロパティを全て必須に
    type RequiredType = Required<Profile>; // 変数にカーソルオンで型確認
    // ↓ RequiredType の型、自動でこうしてくれてる！
    // type RequiredType = {
    //     name: string;
    //     age: number; // オプショナルなくなり必須になってる！
    //     zipCode: number;
    // }
})();