export {};

type Profile =  {
    name: string,
    age: number,
};

/**
 * Partial の実体を見ながら、Mapped Types を理解する
 */

type PartialProfile = Partial<Profile>; // 全プロパティをオプショナルに
// action: Partial (他も色々) を右クリック > 定義へ移動 で定義の実体(lib.es5.d.ts)が見てみると…

// // ファイル：lib.es5.d.ts
// type Partial<T> = { // T は Profile
//     [P in keyof T]?: T[P]; // in で union 型(下記に説明)をひとつづつ処理 → P[P] で該当の型を指定
// };

// ↑ の keyof って何？ 試してみる
type PropertyTypes = keyof Profile; // ここでは、union 型 "name" | "age" と同じ
// 改めて Partial の実体を見ると、理解できる


/**
 * 自分で Mapped Types を作ってみる
 */
// 型名を変えて ↑ の Partial と同じ処理を実装
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// 変数にカーソルオンし、全プロパティがオプショナルになった型であることを確認
type OptionalProfile = Optional<Profile>;


/**
 * 作った型を nullable も許容するようにカスタマイズしてみる
 */
type OptionalAndNullable<T> = {
    [P in keyof T]?: T[P] | null; // null を追加
};

// 変数にカーソルオンし、全プロパティが null や undefined も許容する型になっていることを確認
type OptionalNullableProfile = OptionalAndNullable<Profile>;
