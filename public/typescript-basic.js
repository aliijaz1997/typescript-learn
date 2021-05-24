"use strict";
// we can never re assign the different type of value in the variable in
// typescript
var value1 = 25;
// value = true; not working
value1 = 26;
console.log(value1); // so the value comes out to be 26
var personName = "Hifz ur Rehman Ali";
// personName = true ; can never assign
// Arrays also assign there types according to the element in in it.
var names = ["Hifz ur Rehman", "Ejaz Ahmed", " Hassam Saeed"];
// console.log(names.push(25)); we can never push the other than 
// the define type of arrays element
var mixedElementOfArrays = ["Hifz ur Rehman", 1997, true];
mixedElementOfArrays.push("Ejaz Ahmed");
console.log(mixedElementOfArrays);
// likewise when an object is defined we cant add any key value pair
// or element in it
var object1 = {
    name: "Hifz ur rehman",
    age: 23,
    happy: false
};
// object1 = {
//     name : "ioioioioi",
//     age: 090,
//     happy: true,               // this cant be happen as the type is already defined
//     location: "iuiuiu"
// }
// explicit Types 
var IpersonName;
var number1;
var bool;
// can change the values
IpersonName = "Ali";
bool = false;
number1 = 22;
// Arrays in which can also define types explicitly
var numArray;
var nameArray;
// can change or add the same type of elements in the arrays
numArray = [1, 2, 3, 4, 5, 6];
nameArray = ["Ali", "Ahtesham", "Salman"];
// Union Types 
var mixedElements = [];
// we can add numbers of types string and number only
mixedElements.push("Hifz ur Rehman Ali");
mixedElements.push(222);
// object types explicit
var ninjaone;
ninjaone = {
    companyName: "Itfiers"
};
var ninjatwo;
ninjatwo = {
    name: "Hifz",
    age: 23
};
// Dynamic type 
var number = 25;
number = "Hifz ur rehman";
console.log(number);
