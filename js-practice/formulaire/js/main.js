const formInscription = document.querySelector('#form-inscription')

formInscription.addEventListener('submit', function (e) {
    e.preventDefault();

    removeMessageError()
    const response = isValidForm()
    if (response == true) {
        formInscription.submit()
    }
})

function getMessageError(message, element) {
    const elem = document.createElement('div')
    elem.innerText = message
    elem.classList.add('message-error')
    element.parentElement.append(elem)
}

const removeMessageError = function () {
    const messages = document.querySelectorAll('.message-error')
    for (let message of messages) {
        message.remove()
    }

    // messages.forEach(function (message) {
    //     message.remove()
    // })

    // for(let i =0; i<messages.length;i++){
    //     messages[i].remove()
    // }

}

const isValidForm = () => {
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const pswd = document.querySelector('#pswd')
    const confirmPassword = document.querySelector('#confirm-pswd')
    let response = false
    if (name.value == '') {
        getMessageError('Veuillez entrez votre nom', name)
    }
    else if (email.value == '') {
        getMessageError('Veuillez entrez votre email', email)
    }
    else if (pswd.value == '') {
        getMessageError('Veuillez entrez votre mot de passe', pswd)
    }
    else if (confirmPassword.value == '') {
        getMessageError('Veuillez entrez votre mot de passe', confirmPassword)
    }
    else if (pswd.value != confirmPassword.value) {
        getMessageError('Veuillez entrez les mêmes mot de passe', confirmPassword)
    } else {
        response =true
    }
    return response
}