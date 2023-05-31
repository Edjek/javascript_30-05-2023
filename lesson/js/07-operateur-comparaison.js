/* --------------------------- OPERATEURS DE COMPARAISON --------------------------- */

// Les opérateurs de comparaison (==, ===, !=, !==, >, >=, <, <=)
// === verifie à la fois la valeur et le type des valeurs comparées (opérandes)

/*
    let variable = 3

    Egal(==) renvoie TRUE si les opérandes (les variables que l'on comparent) sont EGALES
        variable == 3 // true
        variable == '3' // true

    Strictement égal (===) renvoie TRUE si les opérandes sont EGALES et de MEME TYPE
        variable == 3 //true
        variable == '3' //false

    Le type booléen correspond à la valeur renvoyée lorsque l'on effectue un test sur des variables
*/

if (condition >= 18) {
    console.log('Tu es majeur, bravo');
} else {
    console.log('Houston, nous avons un problème');
}

// Les opérateurs logique OU (||) et ET (&&)
let permis = true;
if (condition >= 18 || (permis == true && test === 'toto')) {
    console.log('Tu es majeur et tu as le permis');
} else {
    console.log('Houston, nous avons 2 problèmes');
}
