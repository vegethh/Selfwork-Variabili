// Variables Declaration: var - let - const
// Variables Assignment
// Variable Initialization

// Data Types:
// Primitive: number, string, boolean, symbol, undefined, null
// Structural: object

// Operators: Typeof - Binary - Ternary
// Binary: Comparison - Logical
// Ternary: 

 // 1. Dichiaro le due variabili
let totaleGatti = 44;
let gattiInFila = 6;

// 2. Calcolo il numero di file
let file = Math.floor(totaleGatti / gattiInFila);

// 3. Calcolo quanti gatti rimangono fuori
let avanzo = totaleGatti % gattiInFila;

// 4. Calcolo quanti gatti mancano per una nuova fila
let mancanti = (gattiInFila - avanzo) % gattiInFila;

// 5. Stampo la frase
console.log("Ci sono " + file + " file di gatti e ne mancano " + mancanti + " per una nuova fila, con un avanzo di " + avanzo);