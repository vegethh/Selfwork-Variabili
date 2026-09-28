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

let temperatura = Number(prompt("Inserisci la temperatura:"));

// ========== VERSIONE CON IF / ELSE ==========
if (temperatura < -10) {
    console.log("copriti…ancora ti raffreddi");
} else if (temperatura < 0) {
    console.log("non è tanto il freddo quanto l’umidità’");
} else if (temperatura < 20) {
    console.log("non ci sono più le mezze stagioni");
} else if (temperatura < 30) {
    console.log("mi dia una peroni sudata");
} else {
    console.log("lu mare, lu sole, lu ientu");
}

// ========== VERSIONE CON SWITCH ==========
switch (true) {
    case (temperatura < -10):
        console.log("copriti…ancora ti raffreddi");
        break;
    case (temperatura < 0):
        console.log("non è tanto il freddo quanto l’umidità’");
        break;
    case (temperatura < 20):
        console.log("non ci sono più le mezze stagioni");
        break;
    case (temperatura < 30):
        console.log("mi dia una peroni sudata");
        break;
    default:
        console.log("lu mare, lu sole, lu ientu");
}