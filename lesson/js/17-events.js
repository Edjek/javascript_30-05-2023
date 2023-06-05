/* --------------------------- EVENT --------------------------- */

// Recuperer dans une variables le h2 'Pas facile le javascript'
// Afficher en console la variable
// Modifier son text : 'Je commence à manipuler le DOM'
const subtitle = document.querySelector('#subtitle');
const title = document.querySelector('#title')

title.addEventListener('click', function(){
    // Si il a la class title
        // on enleve la class title
    // Sinon 
        // je rajoute la class title
})


subtitle.addEventListener('click', function(){
    const image = document.querySelector('#portrait')
    subtitle.innerText ='text'
    // change l'image donc le src
    image.src = ''
    
})

subtitle.addEventListener('dblclick', function(){
    title.innerText = 'modification'
})

