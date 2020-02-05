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
})