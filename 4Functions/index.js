//Functions
/*
Functions whose declared type is neither
void nor any must return a value.
*/
console.log("--> Functions <--");
console.log();
console.log("--> 1. Function with return type <--");
function add(value1, value2) {
    return value1 + value2;
}
console.log("Addition is " + add(1, 2) + ".");
console.log();
console.log("--> 2. Function without return type <--");
function printText1(sentence) {
    console.log("Output is \"" + sentence + ".\"");
}
printText1("Hello");
console.log();
console.log("--> 3. Function with undefined <--");
function printText2(sentence) {
    console.log("Output is \"" + sentence + ".\"");
    return;
}
printText2("World");
console.log();
console.log("--> 4. Function type variable (Without TypeSafety) <--");
var combineNumbers = add; //
console.log("Addition is " + combineNumbers(4, 4) + ".");
console.log();
console.log("--> 5. Function type variable (With TypeSafety) <--");
var addNumbers;
addNumbers = add;
console.log("Addition is " + addNumbers(4, 5) + ".");
console.log();
console.log("--> 6. Function with Callback <--");
function addAndHandle(a, b, cb) {
    var result = a + b;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log("Addition is " + result + ".");
});
console.log();
console.log("--> 7. Function overloading <--");
function addThis(a, b) {
    return a + b;
}
var output1 = addThis(1, 2);
console.log("Number addition is " + output1 + ".");
var output2 = addThis("abc", "def");
console.log("String addition is \"" + output2 + ".\"");
console.log();
