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
const num: number = 1;

console.log("--> 1. Number <--");
console.log(`Number is ${num}.`);
console.log();

//2. String
const word: string = "Hello";

console.log("--> 2. String <--");
console.log(`String is outputing ${word}.`);
console.log();

//3. Boolean
const isRunning: boolean = true;

console.log("--> 3. Boolean <--");
console.log(`Boolean is currently ${isRunning}.`);
console.log();

//4. Array<T>
const animals: Array<string> = ["Cat","Dog","Bird"];

console.log("--> 4. Array<T> <--");
console.log(`Array<string> index of 0 has \"${animals[0]}.\"`);
for (const animal of animals) {
    console.log(`Enhanced For-Loop & UpperCase -> ${animal.toUpperCase()}.`);
}
console.log();

//5. Object
const person: {
    name: string,
    age: number
} = {
    name: "Aye Chan Aung Thwin",
    age: 30
};
console.log("--> 5. Object <--");
console.log(`Name is \"${person.name}"\" and age is ${person.age}.`);
console.log();

//6. Tuple
console.log("--> 6. Tuple <--");
const role: [number, string] = [1, "Aye Chan Aung Thwin"];
console.log(`Tuple data [0] -> ${role[0]}.`);
console.log(`Tuple data [1] -> \"${role[1]}.\"`);
console.log();

//7. Enum
console.log("--> 7. Enum (Human Readable Form) <--");
//Enum Creation
enum Role {
    ADMIN,
    MEMBER
};

//User Object
let user: {
    status: Role
} = {
    status: Role.ADMIN
}

user.status = Role.ADMIN; //Assign values

if (user.status === Role.ADMIN) {
    console.log(`Enum Role is ${Role.ADMIN} which is ADMIN.`);
}
else if (user.status === Role.MEMBER) {
    console.log(`Enum Role is ${Role.MEMBER} which is MEMBER.`);
}
else {
    console.log("Enum Role is UNKNOWN.");
}
console.log();

//8. Any
console.log("--> 8. Any <--");
let data: any;
data = 1;
console.log(`Data Type is ${typeof(data)} and value is ${data}.`);
data = 1.3;
console.log(`Data Type is ${typeof(data)} and value is ${data}.`);
data = `Aye Chan Aung Thwin`;
console.log(`Data Type is ${typeof(data)} and value is \"${data}.\"`);
data = true;
console.log(`Data Type is ${typeof(data)} and value is ${data}.`);
data = [1 ,2];
console.log(`Data Type is ${typeof(data)} and value is ${data}.`);
console.log();

//9. Enum (Another Approach)
console.log("--> 9. Enum (Another Approach) <--")
const ADMIN = 0;
const MEMBER = 1;

const human = ADMIN;
if (human === ADMIN) {
    console.log(`Enum is ${ADMIN} which is ADMIN.`);
}
else if (human === MEMBER) {
    console.log(`Enum is ${MEMBER} which is MEMBER.`);
}
else {
    console.log("Enum is UNKNOWN.");
}
console.log();

/*10. Tuple Array - It looks like MultiDimentional Array in Java 
but difference is that it is data type containing 2 fixed data types with fixed tuple length
*/
console.log("--> 10. Tuple with Array <--");
const roles: [number, string][] = [[1, "HaHa"],[2, "HeHe"],[3, "HoHo"]];
for (let i=0; i<roles.length; i++) {
    for (let j=0; j<roles[i].length; j++) { //Length of Turple is fixed. j<2
        if (typeof(roles[i][j]) === 'string') {
            console.log(`Simple For Loop & Tuple Array [${i}][${j}] -> \"${roles[i][j]}.\"`);
        }
        else {
            console.log(`Simple For Loop & Tuple Array [${i}][${j}] -> ${roles[i][j]}.`);
        }
    }
}
console.log();

//11. Union Types
console.log("--> 11. Union Types <--");
type Combinable = number | string;

function add(value1: Combinable, value2: Combinable): void {
    if (typeof(value1) === 'number' && typeof(value2) === 'number') {
        const result: number = value1+value2;
        console.log(`Number addition of ${value1} and ${value2} is ${result}.`);
    }
    else if (typeof(value1) === 'string' && typeof(value2) === 'string') {
        const result: string = value1+value2;
        console.log(`String addition of \"${value1}\" and \"${value2}\" is \'${result}.\"`);
    }
    else {
        console.log(`Both parameter types must be the same!`);
    }
}

add(1, 2);
add("1", "2");
add(1, "2");
add("1", 2);
console.log();

//12. User Defined Types
console.log("--> 12. User Defined Types <--");
type ConversionDescriptor = "as-text"|"as-number";
function addNumberAs(a: number, b: number, c: ConversionDescriptor) {
    if (c === 'as-text') {
        const result = ""+a+b;
        console.log(`Added Numbers ${a} and ${b} as 'text' is \"${result}.\"`);
    }
    else {
        const result = a+b;
        console.log(`Added Numbers ${a} and ${b} as 'number' is ${result}.`);
    }
}
addNumberAs(1, 2, "as-text");
addNumberAs(1, 2, "as-number");
console.log();

//13. Unknown Type
console.log("--> 13. Unknown Type <--")
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max'
if (typeof(userInput) === 'string') {
    userName = userInput;
    console.log(`Data type is 'string' and userName is \"${userName}.\"`);
}