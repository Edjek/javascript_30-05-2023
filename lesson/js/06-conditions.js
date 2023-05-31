/* --------------------------- INSTRUCTION CONDITIONNELLES --------------------------- */

// Les opérateurs de comparaison (==, ===, !==, !=, >, >=, <, <=)

const condition = 17;

// Si la condition est vraie, le bloc d'instructions est exécuté
// Sinon il est ignoré
// Si (if)
if (condition == 18) {
    console.log('tout est ok');
}

// Si la condition est vraie, le premier bloc d'instructions est exécuté
// Sinon c'est le 2ième bloc qui est exécuté
// Si, Sinon (if, else)
if (condition == 17) {
    console.log('tout est ok');
} else {
    console.log('Houston, nous avons un problème');
}

// Si, Sinon Si, Sinon (if, else if, else)
if (condition == 17) {
    console.log('tout est ok');
} else if (condition == 19) {
    console.log('là ça va');
} else if (condition == 20) {
    console.log('là ça va encore');
} else {
    console.log('Houston, nous avons un problème');
}
