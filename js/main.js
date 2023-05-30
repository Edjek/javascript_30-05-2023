/*
    --00-- COMMENTAIRES
    --01-- AFFICHAGE
    --02-- VARIABLES
    --03-- CONCATENATION
    --04-- TYPES DE DONNEES
    --05-- OPERATEURS ARITHMETIQUES
    --06-- CONDITIONS
    --07-- OPERATEURS
    --08-- SWITCH
    --09-- BOUCLES
    --10-- FONCTIONS
    --11-- PORTÉE DES VARIABLES
    --12-- TABLEAUX
    --13-- FONCTIONS TABLEAUX
    --14-- FONCTIONS PREDEFINIES
    --15-- OBJETS
    --16-- CALLBACK
    --17-- FONCTIONS AVANCEES
    --18-- MANIPULATION DU DOM
    --19-- EVENT
    --20-- WINDOW
*/

/* --------------------------- 00 - COMMENTAIRES --------------------------- */

// Un commentaire sur une ligne en Javascript

/* 
    Un commentaire multiligne
    en Javascript 
*/

/* --------------------------- 01 - AFFICHAGE --------------------------- */

// Afficher des informations dans la console de debbugage du navigateur
console.log('Hello World!');

// Afficher une boite de dialogue avec un champs à remplir
// prompt('Quel age avez-vous ?');

// On peut récupérer ce qui est tapé en affectant prompt() à une variable.
// let message = prompt('Que voulezme dire ?')

// Afficher des informations dans un pop-up
// alert('Hello, World!')

// Inserer du code HTML dans ma page
document.write('<h1>Un h1 en JS</h1>');

/* --------------------------- 02 - VARIABLES --------------------------- */

// ? NB : les noms des variables sont sensibles à la casse
// On fait la différence entre les majuscules et les minuscules

// DECLARATION d'une Variable
let uneVariable;

// Le mot clé const permet de déclarer des constantes
// Vous ne pouvez pas modifier une constante (on dit qu'elle est immuable)
// `const` va garantir que la valeur de la variable troisieme ne soit pas modifié tout au long de l'exécution du script
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

// Affectation d'une variable dans une autre variable
let affectation = helloWorld;

/* --------------------------- 03 - CONCATENATION --------------------------- */

// Concaténation (Afficher du texte et des variables)
let age = 18;
console.log("J'ai " + age + ' ans');
console.log("J'ai " + age + ' ans');
console.log(`J'ai ${age} ans`);

let lastName = 'Rachid';
let firstName = 'EDJEKOUANE';
console.log("Bonjour, je m'appelle " + firstName + ' ' + lastName);
console.log("Bonjour, je m'appelle " + firstName + ' ' + lastName);
console.log(`Bonjour, je m'appelle ${firstName} ${lastName}`);

/* --------------------------- 04 - TYPES DE DONNEES PRIMITIFS --------------------------- */

// String (Chaine de cactères)
let string2 = 'Je suis du texte';

// Number (Tous les types d'ecritures numériques sont possibles : positif, negatif, decimal)
let nombre = 18;    //number
let decimal = 20.3;  //number
let negatif = -10;   //number

// Boolean (Booléens)
// Variable de type booleen n'a que 2 valeurs possibles : TRUE ou FALSE
let booleen = true;   //boolean
let booleen2 = false;  //boolean

let nul = null; //null

let test; //undefined

// La methode `typeof()` renvoie le type de donnée de la variable
console.log(typeof string2);
console.log(typeof nombre);
console.log(typeof decimal);
console.log(typeof booleen);
console.log(typeof booleen2);
console.log(typeof nul);
console.log(typeof test);

/* --------------------------- 05 - OPERATEURS ARITHMETIQUE --------------------------- */

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

/* --------------------------- 06 - INSTRUCTION CONDITIONNELLES --------------------------- */

let condition = 17;

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

// Ecrire un algorithme qui demande à l'utilisateur son age. 
// Il indique ensuite à l'utilisateur quel film il peut aller voir.
// "Action Man" si moins de 13 ans
// "Matrix" si il a entre 13 et 18 ans
// "Evil Dead" si plus de 18 ans
// Sinon il n'ya aucun film pour lui

/* --------------------------- 07 - OPERATEURS DE COMPARAISON --------------------------- */
// 
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