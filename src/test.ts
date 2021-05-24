console.log("Hello from the test typescript file");

// Functions 

const add = (a : number,b: number, c?: string | number): number => {
    console.log(c);
    
    return a+b
}

console.log(add(2,5, "Ejaz Ahmed"));

// type aliases
type c11 = string | number;
const Aliases = (a : number,b: number, c?: c11): number => {
    console.log(c);
    
    return a+b
}

// Function Signatures using example of calculator in typescript

let calculator : (firstNumber: number, secondNumber: number, operation: string ) => number | undefined;

calculator = (number1: number, number2: number, operation: string) => {

    if (operation === "addition") {
        return number1 + number2
    } else if (operation === "subtration") {
        return number1 - number2
    } else if (operation === "division") {
        return number1/number2
    }
}

console.log(calculator(2,3,"addition"));
