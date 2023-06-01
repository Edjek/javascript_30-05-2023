/* --------------------------- FONCTIONS --------------------------- */

/*
    Une fonction en JavaScript est un bloc de code réutilisable
    qui peut être appelé à partir d'autres parties de votre code pour effectuer une tâche spécifique.
    Les fonctions sont un moyen utile de segmenter votre code en tâches plus petites et plus faciles à gérer,
    et elles vous permettent également de réutiliser le même code plusieurs fois sans avoir à le copier et le coller.
*/

// Déclaration de fonction
function multiply(x, y) {
    const result = x * y;
    return result
}

// Une fonction n'est executée que lorsqu'elle est appelée

const result = multiply(100, 700)
console.log(result);

// fonction math 3 parametres
// mulitplie le premier avec le deuxieme et la troisieme divise le tout
// retourne le resultat

// Appellez la fonction avec ces 3 parametres 10, 20, 8
// aAffiche en console le resultat
function math(x, y, z) {
    const result = x * y / z;
}

let resultat = math(10, 20, 30)
console.log(resultat);

// crééz moi une fonction qui s'appelle displayHelloWorld
// affiche en console 'Hello, World!'

// Appelez fonction

function displayHelloWorld() {
    console.log('Hello, world!');
}

displayHelloWorld()
displayHelloWorld()

// Créer une fonction displayMessage
// Prend un parametre
// Affiche en console le parametre

// Appelle la fonction en lui passant un parametre
function displayMessage(message) {
    console.log(message);
}

displayMessage('coucou')
displayMessage('Hello, world!')
const message = 'salut, tout le monde';

displayMessage(message)

// Créer une fonction helloUser
// prend 2 parametre un nom et un prenom
// return une chaine de caractere qui sera 'Bonjour NOM PRENOM'

// Appeler ma fonction
// et je vais afficher en console le message
function helloUser(lastName, firstName) {
    return `Bonjour, ${lastName} ${firstName}`
}

const res = helloUser('Sabri', 'Z')
console.log(res);

function isLegalAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
const isAdult = isLegalAge(19)
console.log(isAdult);

// Créer une fonction qui retourne le carre d'un nombre
function pow(number) {
    return number * number
}

const res3 = pow(18)
console.log(res3);


// Rendre parametrable cette fonction pour pouvoir afficher la table que je veux
function nineTable(num, end) {
    for (let i = 0; i <= end; i++) {
        let result = i * num
        console.log(`${num} x ${i} = ${result}`);
    }
}

nineTable(10, 100)
