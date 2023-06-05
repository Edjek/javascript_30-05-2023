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

// Déclaration de fonction
function displayHelloWorld() {
    console.log('Hello, world!');
}

// Appelle de la fonction
displayHelloWorld()

// Déclaration de fonction avec parametre
function displayMessage(message) {
    console.log(message);
}

// Appelle la fonction en lui passant un parametre
displayMessage('coucou')
displayMessage('Hello, world!')
const message = 'salut, tout le monde';
displayMessage(message)

function helloUser(lastName, firstName) {
    return `Bonjour, ${lastName} ${firstName}`
}

const res = helloUser('Sabri', 'Z')
console.log(res);

// Créer une fonction qui true si l'utilisateur est majeur sinon false

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


function multiplication(num, end) {
    for (let i = 0; i <= end; i++) {
        let result = i * num
        console.log(`${num} x ${i} = ${result}`);
    }
}

multiplication(10, 100)

// Il est possible de sauvegarder une fonction dans une variable
// On les appelles des fonctions anonymes
const add = function (x, y) {
    return x + y
}
const res4 = add(12, 13)
console.log(res4);

// Il existe une nouvelle syntaxe (les fonctions fléchées)
// Elles permettent d'écrire plus simplement des fonctions anonymes
const divide = (x, y) => {
    return x / y;
}