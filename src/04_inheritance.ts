export {};

class Animal {
    run(): string {
        return 'I can run';
    }
}

// 継承
class Lion extends Animal {
    run(): string {
        return 'I can run 80km';
    }
}

let animal = new Animal();
console.log(animal.run());

let lion = new Lion();
console.log(lion.run());
