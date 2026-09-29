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

let a = [3, 5, 10, 2, 8];

// Calcolo della somma e della media
let somma = 0;
for (let i = 0; i < a.length; i++) {
    somma = somma + a[i];
}
let media = somma / a.length;

// I valori minori della media
let minori = [];
let conteggioMinori = 0;
let conteggioMaggiori = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] < media) {
        minori.push(a[i]);
        conteggioMinori = conteggioMinori + 1;
    } else if (a[i] > media) {
        conteggioMaggiori = conteggioMaggiori + 1;
    }
}

console.log("media = " + media);
console.log("valori minori = " + minori);
console.log("Numero di valori minori della media: " + conteggioMinori);
console.log("Numero di valori maggiori della media: " + conteggioMaggiori);