export {};

/**
 * 単一しか継承できない(多重継承できない) ことを確認
 */
class Mahotsukai {}
class Souryo {}

// class Taro extends Mahotsukai, Souryo {} // エラー
class Taro extends Mahotsukai {} // 単一しか継承できない


/**
 * Interface による多重継承
 */

// シグネチャー 1
interface Kenja {
    ionazun(): void; // 処理の実態がわからないもので OK
}

// シグネチャー 2
interface Senshi {
    kougeki(): void;
}

 // 子クラス。Kenjya, Senshi を実装(実質、継承のようなもの)
class Jiro implements Kenja, Senshi {
    ionazun(): void {
        console.log('ionazun');
    }

    kougeki(): void {
        console.log('kougeki');
    }
}

// インスタンスを生成し実行
const jiro = new Jiro();
jiro.ionazun(); // → ionazun
jiro.kougeki(); // → kougeki
