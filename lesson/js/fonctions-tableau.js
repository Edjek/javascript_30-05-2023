/* --------------------------- FONCTIONS TABLEAUX --------------------------- */

// ? Attention la plupart des méthodes modifient le tableau de départ

// Créer un tableau d'animaux ('chat', 'chien', 'tigre', 'lion', 'requin','panda')
const animals = ['chat', 'chien', 'tigre', 'lion', 'requin', 'panda'];

// Ajoute un ou plusieurs éléments à la fin du tableau
// Renvoie la nouvelle longueur du tableau
let res = animals.push('dauphin', 'loup')
// console.log(res);

// Supprime le dernier élément du tableau
// Renvoie l'élément supprimé
res = animals.pop()
// console.log(res);

// Ajoute un ou plusieurs éléments au début du tableau
// Renvoie la nouvelle longueur du tableau
res = animals.unshift('hiboux')
// console.log(res);

// Supprime le premier élément du tableau
// Renvoie l'élément supprimé
res = animals.shift()
// console.log(res);

// Modifier ou Ajouter ou Supprimer un élément dans un tableau
// Ajouter
animals.splice(2, 0, 'raton laveur')
// Modifier
animals.splice(0, 1, 'aigle')
// Supprimer
animals.splice(1, 1)

// Réorganise le tableau de la fin vers le début
animals.reverse()
//  console.log(animals);

const newAnimals2 = animals.join('-')
// console.log(newAnimals2);

// Renvoie une copie d'une partie du tableau
const newAnimals = animals.slice(2, 7)

function slice(array, start, end) {
    let newArray = [];
    for (let i = start; i < end; i++) {
        newArray = array[i];
    }
    return newArray
}

slice(animals, 2, 6)
slice(animals, 1, 5)

// Declarer un tableau contenant (Paris, Berlin, Rome, Moscou, Londres, Madrid)
/*
    Créer une fonction qui :
        Retire Madrid
        Ajoute au debut Vienne
        Rome devient Alger
        Afficher le tableau
*/
const capitalesCities = ['Paris', 'Berlin', 'Rome', 'Moscou', 'Londres', 'Madrid'];

function modifyArray(array) {
    array.pop()
    array.unshift('Vienne')
    array.splice(3, 1, 'Alger')
    return array.length
}

const sizeArray = modifyArray(capitalesCities)
console.log(sizeArray);
console.log(capitalesCities);