"use strict";
console.log("Hello from the test typescript file");
// Functions 
var add = function (a, b, c) {
    console.log(c);
    return a + b;
};
console.log(add(2, 5, "Ejaz Ahmed"));
var Aliases = function (a, b, c) {
    console.log(c);
    return a + b;
};
// Function Signatures using example of calculator in typescript
var calculator;
calculator = function (number1, number2, operation) {
    if (operation === "addition") {
        return number1 + number2;
    }
    else if (operation === "subtration") {
        return number1 - number2;
    }
    else if (operation === "division") {
        return number1 / number2;
    }
};
console.log(calculator(2, 3, "addition"));
var filter = function (callbackFn, arr) {
    var i;
    var newArray = [];
    for (i = 0; i <= arr.length; i++) {
        var result = callbackFn(arr[i], i);
        if (result)
            newArray.push(arr[i]);
    }
    return newArray;
};
var functionResult = filter(function (item) { return item === "Ali"; }, ["Ali", "Ahmed", "Mehmood", "Hamid"]);
console.log("The output of the filter function is = ", functionResult);
