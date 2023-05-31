/* --------------------------- BOUCLES --------------------------- */

// Les boucles sont des structurs permettant d'executer plusieurs fois des instructions

/*
    la principale différence entre "for" et "while" est que :
    "for" est généralement utilisé lorsque le nombre d'itérations est connu à l'avance,
    "while" est utilisé lorsque le nombre d'itérations est inconnu à l'avance et dépend d'une condition spécifique.
*/

// Boucle : for(){...} (pour)
for (let i = 0; i < 10; i++) {

    let result = i * number
    console.log(`${number} x ${i} = ${result}`);
}

// Boucle : while(){...} (tant que)
let number = prompt('quelle table de multiplication voulez-vous?')
let i = 0;

while (i < 10) {
    let result = number * i
    console.log(`${number} x ${i} = ${result}`)
    i = i + 1;
    // SUCRE SYNTAXIQUE (version raccourci de i = i + 1)
    // i++;
}

let answer = prompt('Choississez un nombre entre 0 et 10');
const magicNumber = 9;

while (answer != magicNumber) {
    answer = prompt('Essayez encore!')
}
console.log('felicitation');

/*
    La population de la ville Marrakech est de 1, 000, 000 d’habitants et elle augmente de 50, 000 habitants par an.
    Celle de la ville Agadir est de 500, 000 habitants et elle augmente de 8% par an.
    Ecrire un algorithme permettant de déterminer dans combien d’années la population de la ville Agadir dépassera celle de la ville Marrakech.
*/

let marrakech = 1000000;
let agadir = 500000;
let year = 0;

while (marrakech > agadir) {
    marrakech = marrakech + 50000
    agadir = agadir + (agadir * 8 / 100)
    year++;
}
console.log(year);
