export {};

class Me {
    static isProgrammer: boolean = true; // static なメンバ
    static firstName: string = 'Atsushi';
    static lastName: string = 'Ishida';

    static work() {
        // return `Hey, guys! This is ${Me.firstName}!`; // ${firstName} だとエラー
        return `Hey, guys! This is ${this.firstName}!`; // 依存無くし流用性高く
    }
}

// let me = new Me();
// console.log(me.isProgrammer); // インスタンスを介してのアクセスできない

// new() でインスタンスを作らずにアクセスできる
console.log(Me.isProgrammer);
console.log(Me.work());
