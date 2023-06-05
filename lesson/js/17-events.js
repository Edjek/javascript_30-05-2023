/* --------------------------- EVENT --------------------------- */

// Recuperer dans une variables le h2 'Pas facile le javascript'
// Afficher en console la variable
// Modifier son text : 'Je commence à manipuler le DOM'
const subtitle = document.querySelector('#subtitle');
const title = document.querySelector('#title')

subtitle.addEventListener('click', function () {
    subtitle.innerText = 'text'

})

subtitle.addEventListener('dblclick', function () {
    // changer le titre du h1

})

