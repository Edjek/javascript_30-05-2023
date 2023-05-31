/* --------------------------- VARIABLES --------------------------- */

// ? NB : les noms des variables sont sensibles à la casse
// On fait la différence entre les majuscules et les minuscules

// DECLARATION d'une Variable
let uneVariable;

// Le mot clé const permet de déclarer des constantes
// Vous ne pouvez pas modifier une constante (on dit qu'elle est immuable)
// `const` va garantir que la valeur de la variable ne soit pas modifié tout au long de l'exécution du script
const constante = 'Je suis une constante, je ne peux pas être modifié!';

// Le mot clé var permet de déclarer des variables
// C'est une pratique désuète (c'était la seule façon avant 2015)
var past = 'je suis dépassé';

// AFFECTATION d'une variable (donne une valeur à une variable)
uneVariable = 'Je suis une variable!';

// Les 2 se font généralement en même temps
// Les variables sont sensibles à la casse (majuscules/minuscules)
let helloWorld = 'Hello world!';

// Affichage d'une variable dans la console
console.log(uneVariable);

// On peut changer la valeur d'une variable
helloWorld = 'Coucou';

// Affectation de la valeur d'une variable dans une autre variable
let affectation = helloWorld;
