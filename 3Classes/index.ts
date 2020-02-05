//Classes
/*
Method override is possible but method overload in class!
*/
console.log("--> Classes <--");
console.log();

console.log("--> 1. Class Only <--");
class person {
    private name: string;
    private age: number;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number): void {
        this.age = age;
    }

    printResult(): void {
        console.log(`Name is \"${this.name}\" and age is ${this.age}.`);
    }

}

let man = new person("Aye Chan Aung Thwin");
man.setAge(25);
man.printResult();
console.log();

console.log("--> 2. Class with Abstract Class and Interface <--");
interface Creature {
    printAnimalName(): void;
    run(): void;
}

abstract class Animal implements Creature {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public printAnimalName(): void {
        console.log(`Name of the animal is \"${this.name}.\"`);
    }

    public run(): void {
        if (this.name === "Cobra") {
            console.log(`\"${this.name}\" cannot run!`)
        }
        else {
            console.log("Running!");
        }
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    /*
    public run(): void {
        console.log("Method Overriding from Snake.class!!");
    }
    */
}

let snake = new Snake("Cobra");
snake.printAnimalName();
snake.run();
console.log();