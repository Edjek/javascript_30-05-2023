/* --------------------------- OPERATEURS ARITHMETIQUE --------------------------- */

// +, -, *, /, %, **

let operation = 10 + 5; //Addition
console.log(`le resultat est ${operation}`); //15

operation = 10 - 5; //Soustraction
console.log(`le resultat est ${operation}`); //5

operation = 10 * 5; //Multiplication
console.log(`le resultat est ${operation}`); //50

operation = 10 / 5; //Division
console.log(`le resultat est ${operation}`); //2

operation = 10 % 3; //Modulo (=reste division)
//10 billes à répartir entre 3 personnes => Reste 1
console.log(`le resultat est ${operation}`); //1

operation = 10 ** 3; //Puissance
console.log(`le resultat est ${operation}`); //100

let number = prompt('Donnez-moi un nombre ?');
let number2 = prompt('Donnez-moi un deuxieme nombre ?');
let result = number * number2;
console.log(`le resultat de la multiplication est ${result}`);
