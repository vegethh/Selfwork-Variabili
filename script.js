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

function contaCifre(numero) {
    if (numero > 9999) {
        console.log("Numero troppo grande");
    } else if (numero >= 1000) {
        console.log("4 cifre");
    } else if (numero >= 100) {
        console.log("3 cifre");
    } else if (numero >= 10) {
        console.log("2 cifre");
    } else {
        console.log("1 cifra");
    }
}

// Esempi di chiamata
contaCifre(9);
contaCifre(99);
contaCifre(12000);
contaCifre(345);