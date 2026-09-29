// Variables Declaration: var - let - const
// Variables Assignment
// Variable Initialization

// Data Types:
// Primitive: number, string, boolean, symbol, undefined, null
// Structural: object

// Operators: Typeof - Binary - Ternary
// Binary: Comparison - Logical
// Ternary: 

// Condition: if - switch

// Function - DRY Principle

function fizzBuzz(N) {
    for (let i = 1; i <= N; i++) {
        if (i % 15 === 0) {
            console.log("fizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(30);