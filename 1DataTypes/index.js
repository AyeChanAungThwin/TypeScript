/*
const = declaring final variable with assigned values and that cannot be reassigned later
let = declaring variable that can be assigned later
*/
/*
number - 1, 1.2, -10
string - 'Hi', "Hi", `Hi`
boolean - true, false
Array - Array<T>
object - {name:"Aye Chan"}
tuple - [T, T, T]
any - *
unknown - any let you pass any data types, let's say without compile time checking,
but unknown is used when the data type should be checked.
*/
//1. Number
var num = 1;
console.log("--> 1. Number <--");
console.log("Number is " + num + ".");
console.log();
//2. String
var word = "Hello";
console.log("--> 2. String <--");
console.log("String is outputing " + word + ".");
console.log();
//3. Boolean
var isRunning = true;
console.log("--> 3. Boolean <--");
console.log("Boolean is currently " + isRunning + ".");
console.log();
//4. Array<T>
var animals = ["Cat", "Dog", "Bird"];
console.log("--> 4. Array<T> <--");
console.log("Array<string> index of 0 has \"" + animals[0] + ".\"");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("Enhanced For-Loop & UpperCase -> " + animal.toUpperCase() + ".");
}
console.log();
//5. Object
var person = {
    name: "Aye Chan Aung Thwin",
    age: 30
};
console.log("--> 5. Object <--");
console.log("Name is \"" + person.name + "\"\" and age is " + person.age + ".");
console.log();
//6. Tuple
console.log("--> 6. Tuple <--");
var role = [1, "Aye Chan Aung Thwin"];
console.log("Tuple data [0] -> " + role[0] + ".");
console.log("Tuple data [1] -> \"" + role[1] + ".\"");
console.log();
//7. Enum
console.log("--> 7. Enum (Human Readable Form) <--");
//Enum Creation
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MEMBER"] = 1] = "MEMBER";
})(Role || (Role = {}));
;
//User Object
var user = {
    status: Role.ADMIN
};
user.status = Role.ADMIN; //Assign values
if (user.status === Role.ADMIN) {
    console.log("Enum Role is " + Role.ADMIN + " which is ADMIN.");
}
else if (user.status === Role.MEMBER) {
    console.log("Enum Role is " + Role.MEMBER + " which is MEMBER.");
}
else {
    console.log("Enum Role is UNKNOWN.");
}
console.log();
//8. Any
console.log("--> 8. Any <--");
var data;
data = 1;
console.log("Data Type is " + typeof (data) + " and value is " + data + ".");
data = 1.3;
console.log("Data Type is " + typeof (data) + " and value is " + data + ".");
data = "Aye Chan Aung Thwin";
console.log("Data Type is " + typeof (data) + " and value is \"" + data + ".\"");
data = true;
console.log("Data Type is " + typeof (data) + " and value is " + data + ".");
data = [1, 2];
console.log("Data Type is " + typeof (data) + " and value is " + data + ".");
console.log();
//9. Enum (Another Approach)
console.log("--> 9. Enum (Another Approach) <--");
var ADMIN = 0;
var MEMBER = 1;
var human = ADMIN;
if (human === ADMIN) {
    console.log("Enum is " + ADMIN + " which is ADMIN.");
}
else if (human === MEMBER) {
    console.log("Enum is " + MEMBER + " which is MEMBER.");
}
else {
    console.log("Enum is UNKNOWN.");
}
console.log();
/*10. Tuple Array - It looks like MultiDimentional Array in Java
but difference is that it is data type containing 2 fixed data types with fixed tuple length
*/
console.log("--> 10. Tuple with Array <--");
var roles = [[1, "HaHa"], [2, "HeHe"], [3, "HoHo"]];
for (var i = 0; i < roles.length; i++) {
    for (var j = 0; j < roles[i].length; j++) { //Length of Turple is fixed. j<2
        if (typeof (roles[i][j]) === 'string') {
            console.log("Simple For Loop & Tuple Array [" + i + "][" + j + "] -> \"" + roles[i][j] + ".\"");
        }
        else {
            console.log("Simple For Loop & Tuple Array [" + i + "][" + j + "] -> " + roles[i][j] + ".");
        }
    }
}
console.log();
//11. Union Types
console.log("--> 11. Union Types <--");
function add(value1, value2) {
    if (typeof (value1) === 'number' && typeof (value2) === 'number') {
        var result = value1 + value2;
        console.log("Number addition of " + value1 + " and " + value2 + " is " + result + ".");
    }
    else if (typeof (value1) === 'string' && typeof (value2) === 'string') {
        var result = value1 + value2;
        console.log("String addition of \"" + value1 + "\" and \"" + value2 + "\" is '" + result + ".\"");
    }
    else {
        console.log("Both parameter types must be the same!");
    }
}
add(1, 2);
add("1", "2");
add(1, "2");
add("1", 2);
console.log();
//12. User Defined Types
console.log("--> 12. User Defined Types <--");
function addNumberAs(a, b, c) {
    if (c === 'as-text') {
        var result = "" + a + b;
        console.log("Added Numbers " + a + " and " + b + " as 'text' is \"" + result + ".\"");
    }
    else {
        var result = a + b;
        console.log("Added Numbers " + a + " and " + b + " as 'number' is " + result + ".");
    }
}
addNumberAs(1, 2, "as-text");
addNumberAs(1, 2, "as-number");
console.log();
//13. Unknown Type
console.log("--> 13. Unknown Type <--");
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof (userInput) === 'string') {
    userName = userInput;
    console.log("Data type is 'string' and userName is \"" + userName + ".\"");
}
