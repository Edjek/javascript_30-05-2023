/* --------------------------- TABLEAUX --------------------------- */

/*
    Un tableau (array) est un type de donnée qui peut contenir plusieurs éléments
    On peut créer un tableau en utilisant des crochets [] et en y insérant les éléments séparés par des virgules.
*/

const week = [
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
    'dimanche'
];

console.log(week);
console.table(week);

// On peut accéder à un élément du tableau en utilisant son index numérique.
// L'index du premier élément est toujours 0.
console.log(week[0]);

// De même pour modifier la valeur d'un tableau, je précise l'indice
week[1] = "on m'a modifie";
console.log(week);

// Declarer un tableau de fruits banane, pomme, fraise, kiwi, ananas
const fruits = ['banane', 'pomme', 'fraise', 'kiwi', 'ananas']

// Pour connaitre la longueur d'un element nous pouvons utiliser la propriété .length
console.log(fruits.length);

// Pour itérer sur les valeurs d'un tableau nous pouvons utiliser la boucle for
for (let i = 0; i < week.length; i++) {
    console.log(week[i]);
}

// Transformez cette boucle en function displayArray
function displayArray(array) {
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
    }
}
displayArray(week);

// Les tableaux peuvent contenir des tableaux
// Ils peuvent être multidimensionnels
const notes = [
    [12, 19, 10],
    [9, 0, 5],
    [19, 17, 18]
]

// Pour acceder à un valeur bien penser à cibler l'index dans l'index
console.log(notes[0][1]);

// Iterer sur chaque notes en les affichant en console
// Une premiere boucle qui fait le tour du tableau notes
// et dedans une deuxieme boucle qui itère sur chacun des tableaux de notes pour les afficher