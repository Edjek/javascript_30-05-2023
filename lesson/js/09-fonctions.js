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