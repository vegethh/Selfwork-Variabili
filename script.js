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

let sommaDispari = 0;
let conteggioDispari = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        // Stampo solo i numeri pari
        console.log(i);
    } else {
        // Accumulo i dispari per calcolare la media
        sommaDispari += i;
        conteggioDispari++;
    }
}

let mediaDispari = sommaDispari / conteggioDispari;
console.log("La media dei numeri dispari è: " + mediaDispari);