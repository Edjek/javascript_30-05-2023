/* --------------------------- EVENT --------------------------- */

// Recuperer dans une variables le h2 'Pas facile le javascript'
// Afficher en console la variable
// Modifier son text : 'Je commence à manipuler le DOM'
const subtitle = document.querySelector('#subtitle');
const title = document.querySelector('#title')
const nameForm = document.querySelector('#name')
const connexionForm = document.querySelector('#connexion-form')

title.addEventListener('click', function(){
    // const response = title.classList.contains('title')
    // if(response){
    //     title.classList.remove('title')
    // } else {
    //     title.classList.add('title')
    // }
    title.classList.toggle('title')

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

connexionForm.addEventListener('submit', function(e){
    e.preventDefault()
    

   console.log(nameForm.value);
})

