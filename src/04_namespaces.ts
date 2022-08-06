export{};

// 名前空間
namespace Japanese {
    export namespace Tokyo { // 名前空間のネスト
        export class Person { // 外からも見えるようにするための export 修飾子が必要
            constructor(public name: string) {} // メンバ変数登録の省略形
        }
    }

    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

// 名前空間が違うので、クラス名が重複していても OK
namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) {}
    }
}

const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(meOsaka.name);


const michael = new English.Person('Michael', 'Joseph', 'Jakson');
console.log(michael);
