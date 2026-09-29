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

function isPalindroma(str) {
    // 1. Tolgo spazi e punteggiatura e metto tutto in minuscolo
    let pulita = str.replace(/\W/g, "").toLowerCase();

    // 2. Creo la stringa al contrario
    let invertita = "";
    for (let i = pulita.length - 1; i >= 0; i--) {
        invertita = invertita + pulita[i];
    }

    // 3. Confronto e restituisco true o false
    if (pulita === invertita) {
        return true;
    } else {
        return false;
    }
}

// Esempi di prova
console.log(isPalindroma("i topi non avevano nipoti"));  // true
console.log(isPalindroma("ciao"));                       // false
console.log(isPalindroma("Anna"));                       // true