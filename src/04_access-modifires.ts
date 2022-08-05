export {};

(() => {
    /**
     * アクセス修飾子
     */
    class Person {
        // メンバー変数。ここにアクセス修飾子を書くことができる
        // public name: string; // アクセス可能
        name: string; // public は省略可能
        private age: number; // インスタンスからアクセス不可に(このクラス内部ならできる)
        protected nationality: string; // protected はサブクラスで
        
        constructor(name: string, age: number, nationality: string) {
            this.name= name;
            this.age= age;
            this.nationality = nationality;
        }

        // 追加メソッド
        profile(): string {
            return `${this.name}さんは、${this.age}歳です。`; // private でもこのクラス内では age にアクセスできる
        }
    }

    /**
     * Person クラスを継承したサブクラス
     */
    class Android extends Person {
        constructor(name: string, age: number, nationality: string) {
            super(name, age, nationality) // 親クラスの同名メソッドを呼べるように
        }

        profile(): string {
            // 親クラスで private な age にコンパイルエラー、protected の nationality にはアクセスできる
            return `${this.name}さんは、${this.nationality}です。`; // ${this.age}歳 はエラー
        }
    }

    let taro = new Person('Taro', 24, 'Japan');
    console.log(taro.name);
    // console.log(taro.age); // private アクセスできない(コンパイルエラー)
    console.log(taro.profile());
})();
