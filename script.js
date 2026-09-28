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

let scelta;

do {
    scelta = prompt("Seleziona una bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra");

    if (scelta === "1") {
        console.log("E’ stata selezionata l’acqua");
    } else if (scelta === "2") {
        console.log("E’ stata selezionata coca cola");
    } else if (scelta === "3") {
        console.log("E’ stata selezionata birra");
    } else {
        console.log("Scelta non valida, riprova...");
    }

} while (scelta !== "1" && scelta !== "2" && scelta !== "3");