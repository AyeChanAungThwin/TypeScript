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
console.log("--> 8. Arrow function <-- ");
var multiply = function (a, b) { return a * b; };
console.log("Multiplying two values is " + multiply(2, 3) + ".");
console.log();
console.log("--> 9. Disadvantage of using function <--");
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.name = "Aye Chan Aung Thwin";
    }
    Greeter.prototype.sayHello = function () {
        setTimeout(function () {
            console.log("Hello, " + this.name + "!"); //name points to window object!!
        }, 500);
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.sayHello();
console.log();
console.log("--> 10. Advanage of using arrow function <--");
var Greeter2 = /** @class */ (function () {
    function Greeter2() {
        this.name = "Aye Chan Aung Thwin";
    }
    Greeter2.prototype.sayHello = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hello, " + _this.name + "!"); //name points to window object!!
        }, 500);
    };
    return Greeter2;
}());
var greeter2 = new Greeter2();
greeter2.sayHello();
console.log();
