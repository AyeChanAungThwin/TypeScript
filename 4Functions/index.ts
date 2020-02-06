//Functions
/*
Functions whose declared type is neither
void nor any must return a value.
*/
console.log("--> Functions <--");
console.log();

console.log("--> 1. Function with return type <--");
function add(value1: number, value2: number): number {
    return value1+value2;
}
console.log(`Addition is ${add(1, 2)}.`);
console.log();

console.log("--> 2. Function without return type <--");
function printText1(sentence: string): void{
    console.log(`Output is \"${sentence}.\"`);
}
printText1("Hello");
console.log();

console.log("--> 3. Function with undefined <--");
function printText2(sentence: string): undefined {
    console.log(`Output is \"${sentence}.\"`);
    return;
}
printText2("World");
console.log();

console.log("--> 4. Function type variable (Without TypeSafety) <--");
const combineNumbers: Function = add; //
console.log(`Addition is ${combineNumbers(4, 4)}.`);
console.log();

console.log("--> 5. Function type variable (With TypeSafety) <--");
let addNumbers: (a: number, b: number) => number;
addNumbers = add;
console.log(`Addition is ${addNumbers(4, 5)}.`);
console.log();

console.log("--> 6. Function with Callback <--");
function addAndHandle(a: number, b: number, cb: (num: number) => void): void {
    const result: number = a+b;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(`Addition is ${result}.`);
});
console.log();

console.log("--> 7. Function overloading <--");
function addThis(a: string, b: string): string;
function addThis(a: number, b: number): number;
function addThis(a: any, b: any): any {
    return a+b;
}
const output1 = addThis(1, 2);
console.log(`Number addition is ${output1}.`);
const output2 = addThis("abc", "def");
console.log(`String addition is \"${output2}.\"`);
console.log();

console.log("--> 8. Arrow function <-- ");
const multiply = (a: number, b: number): number => a*b;
console.log(`Multiplying two values is ${multiply(2, 3)}.`);
console.log();

console.log("--> 9. Disadvantage of using function <--");
class Greeter{
    private name = "Aye Chan Aung Thwin";

    sayHello() {
        setTimeout(function(){
            console.log(`Hello, ${this.name}!`); //name points to window object!!
        }, 500);
    }
}
const greeter = new Greeter();
greeter.sayHello();
console.log();

console.log("--> 10. Advanage of using arrow function <--");
class Greeter2{
    private name = "Aye Chan Aung Thwin";

    sayHello() {
        setTimeout(()=>{
            console.log(`Hello, ${this.name}!`); //name points to window object!!
        }, 500);
    }
}
const greeter2 = new Greeter2();
greeter2.sayHello();
console.log();