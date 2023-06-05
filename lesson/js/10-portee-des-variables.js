/* --------------------------- PORTEE DES VARIABLES --------------------------- */

// La portée (scope) d'un objet est la portion de code dans laquelle une variable est accessible.

/*
    PORTEE GLOBAL
    Une variable déclarée en dehors de toute fonction ou bloc de code a une portée globale.
    Cela signifie qu'elle peut être utilisée et modifiée dans n'importe quelle partie de votre code,
    y compris à l'intérieur de fonctions ou de blocs de code.
*/
const globale = 'je suis une variable globale';

/*
    PORTEE LOCALE
    La portée d'une variable déclarée à l'intérieur d'une fonction est limitée à cette fonction.
    Cela signifie que la variable ne sera pas accessible en dehors de cette fonction.
*/
function scope() {
    let x = 10;
    console.log(x); // affiche 10
}
// console.log(x);
// génère une erreur : x n'est pas défini dans le scope global

/*
    PORTEE DE BLOCK
    La portée d'une variable déclarée à l'intérieur d'un bloc est limitée à ce bloc.
    Cela signifie que la variable ne sera pas accessible en dehors de ce bloc.
*/
if (true) {
    let x = 10;
    console.log(x); // affiche 10
}
// console.log(x);
// génère une erreur : x n'est pas défini dans le scope global
