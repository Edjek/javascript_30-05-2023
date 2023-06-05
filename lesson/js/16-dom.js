/* --------------------------- Manipulation du DOM --------------------------- */

/*  -------------------------------------------
    Methodes de selecteurs JavaScript
    -------------------------------------------
*/

//  ? La methode `getElementById()`
const title = document.getElementById('title')

/*
    ? La methode `getElementsByTagName()`
    getElementsByClassName renvoi une HTMLCollection 
    sur laquelle on pourra itérer avec la boucle for()
*/
const subtitle = document.getElementsByTagName('h2')

for (let i = 0; i < subtitle.length; i++) {
    console.log(subtitle[i]);
}

/*
    ? La methode `getElementsByClassName()`
    getElementsByClassName renvoi une HTMLCollection
    sur laquelle on pourra itérer avec la boucle for()
*/
const container = document.getElementsByClassName('container')
console.log(container);

//  ? La methode `querySelector`
const paragraphe = document.querySelector('.container p')
console.log(paragraphe);

/*
    ? La methode `querySelectorAll`
    querySelectorAll renvoi une NodeList
    sur laquelle on pourra itérer avec la boucle `for()` ou la méthode `forEach()`
*/
const paragraphes = document.querySelectorAll('.container p')

// paragraphes.forEach(function(el){
//     console.log(el);
// })

// for(let el of paragraphes){
//     console.log(el);
// }

// for(let i =0; i< paragraphes.length; i++){
//     console.log(paragraphes[i]);
// }

console.log(this);
console.log(window.outerWidth);

/*  ---------------------------------------------
    Quelques proprietes liées aux éléments du DOM
    ---------------------------------------------
    En JavaScript, il existe plusieurs propriétés 
    pour accéder et modifier les éléments HTML sélectionnés dans le DOM. 
    Voici quelques-unes des propriétés les plus couramment utilisées :
*/

// La propriété `style` permet de modifier le style
title.style.color = 'red'

// La propriété `innerText` permet de récupérer ou de définir le contenu textuel d'un élément HTML.
title.innerText = 'Je suis <br> un titre modifié en javascript'

// La propriété `innerHTML` permet de récupérer ou de définir le contenu HTML d'un élément HTML (le HTML est interprété).
title.innerHTML = 'Je suis <br> un titre modifié en javascript'

// La méthode `setAttribute()` permet de définir la valeur d'un attribut HTML.
title.setAttribute('title', 'Je suis un titre')

// La méthode `getAttribute()` permet de récupérer la valeur d'un attribut HTML.
console.log(title.getAttribute('title'));

// La méthode `removeAttribute()` permet de supprimer un attribut HTML.
title.removeAttribute('title')

// La méthode `add()` permet d'ajouter une classe à un élément HTML.
title.classList.add('title')

// La méthode `remove()` permet de supprimer une classe d'un élément HTML.
title.classList.remove('title')

// La méthode `contains()` permet de vérifier si un élément HTML possède une classe donnée.
title.classList.contains('title')

// La propriété `src` permet de récupérer ou de définir la valeur de l'attribut `src` d'une balise `img`.
const portrait = document.querySelector('.portrait');
portrait.src = '../img/portrait-2';

// La propriété `href` permet de récupérer ou de définir la valeur de l'attribut `href` d'une balise `a`.
const link = document.querySelector('a');
link.href = 'https://www.google.com';