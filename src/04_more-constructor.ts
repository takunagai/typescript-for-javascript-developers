export {};

class Person {
    name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const me = new Person('はむさん', 43);
console.log(me);
