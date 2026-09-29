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

let array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

// ===== ORDINAMENTO DECRESCENTE =====
let arrayDecrescente = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

for (let i = 0; i < arrayDecrescente.length; i++) {
    for (let j = 0; j < arrayDecrescente.length - 1; j++) {
        if (arrayDecrescente[j] < arrayDecrescente[j + 1]) {
            let temp = arrayDecrescente[j];
            arrayDecrescente[j] = arrayDecrescente[j + 1];
            arrayDecrescente[j + 1] = temp;
        }
    }
}

console.log("Ordine decrescente:", arrayDecrescente);

// ===== ORDINAMENTO CRESCENTE =====
let arrayCrescente = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

for (let i = 0; i < arrayCrescente.length; i++) {
    for (let j = 0; j < arrayCrescente.length - 1; j++) {
        if (arrayCrescente[j] > arrayCrescente[j + 1]) {
            let temp = arrayCrescente[j];
            arrayCrescente[j] = arrayCrescente[j + 1];
            arrayCrescente[j + 1] = temp;
        }
    }
}

console.log("Ordine crescente:", arrayCrescente);