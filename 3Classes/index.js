var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Classes
/*
Method override is possible but method overload in class!
*/
console.log("--> Classes <--");
console.log();
console.log("--> 1. Class Only <--");
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.getName = function () {
        return this.name;
    };
    person.prototype.setName = function (name) {
        this.name = name;
    };
    person.prototype.getAge = function () {
        return this.age;
    };
    person.prototype.setAge = function (age) {
        this.age = age;
    };
    person.prototype.printResult = function () {
        console.log("Name is \"" + this.name + "\" and age is " + this.age + ".");
    };
    return person;
}());
var man = new person("Aye Chan Aung Thwin");
man.setAge(25);
man.printResult();
console.log();
console.log("--> 2. Class with Abstract Class and Interface <--");
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.printAnimalName = function () {
        console.log("Name of the animal is \"" + this.name + ".\"");
    };
    Animal.prototype.run = function () {
        if (this.name === "Cobra") {
            console.log("\"" + this.name + "\" cannot run!");
        }
        else {
            console.log("Running!");
        }
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    return Snake;
}(Animal));
var snake = new Snake("Cobra");
snake.printAnimalName();
snake.run();
console.log();
