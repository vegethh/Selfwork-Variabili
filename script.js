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

let array_1 = [
  ['un', 'per', 'incatenarli.'],
  ['Anello', 'trovarli,'],
  ['ghermirli', 'e'],
  ['gondor', 'mark'],
];

let array_2 = [
  [['trovarli,']],
  ['tu,', 'sciocchi'],
  ['tu,', 'sciocchi', ['padron', 'Sauron']],
  ['nel', ['fuggite', 'gandalf']],
  [['domarli,', 'passare'], 'buio']
];

let frase = "Un " + array_1[1][0] + " " + array_1[0][1] + " " + array_2[4][0][0] + " " + array_1[0][0] + " " + array_1[1][0] + " " + array_1[0][1] + " " + array_1[1][1] + " " + array_1[0][0] + " " + array_1[1][0] + " " + array_1[0][1] + " " + array_1[2][0] + " " + array_1[2][1] + " " + array_2[3][0] + " " + array_2[4][1] + " " + array_1[0][2];

console.log(frase);