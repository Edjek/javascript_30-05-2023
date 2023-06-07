// Cibler notre bouton
// Lui mettre un ecouteur => click
    // Cibler le champs du valeur pour recuperer
    // cible ma liste
    // creer un element que je rajoute a la liste

    const submit = document.querySelector('#submit')

    submit.addEventListener('click', function(){
        const input = document.querySelector('#todo-text')
        const list = document.querySelector('#todo-list')
        if(input.value != ''){
            const elem = document.createElement('li')
            elem.innerText = input.value
            elem.classList.add('list-item')
            list.prepend(elem)
        }
    })



























