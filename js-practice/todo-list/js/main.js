const submit = document.querySelector('#submit')
const list = document.querySelector('#todo-list')
console.log(list);
submit.addEventListener('click', function () {
    const input = document.querySelector('#todo-text')

    if (input.value != '') {
        const elem = document.createElement('li')
        elem.innerText = input.value
        elem.classList.add('list-item')
        list.append(elem)
    }
})

list.addEventListener('click', function (e) {
    // e.target permet de cibler l'element qui est réellement visé
    e.target.style.textDecoration = 'line-through'
    // e.currentTarget cible l'element courant donc celui où on a mis l'écouteur
    // e.currentTarget;

})

list.addEventListener('dblclick', function (event) {
    event.target.remove()
})
