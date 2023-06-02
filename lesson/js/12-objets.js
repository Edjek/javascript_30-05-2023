/* --------------------------- Objets --------------------------- */

// Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble.

const person = {
    firstname: 'rachid',
    lastname: 'EDJEKOUANE',
    length : 8,
    notes: [10, 16, 19],
    job : {
        name:'Informaticien',
        hour: 35
    },
    getIdentity : function(){
        return `Je suis ${this.firstname} ${this.lastname}`;
    }
}

// Pour acceder à la une propriété d'un objet
console.log(person.job.name);
const messsage = person.getIdentity();
console.log(messsage);

const sangoku = {
    firstname : 'san',
    lastname: 'goku',
    children : ['gohen', 'goten'],
    age: 39,
    presentation: function(){
        return `Je m'appelle ${this.firstname} ${this.lastname}, j'ai ${this.age} ans et j'ai ${this.children.length}, ils s'appellent ${this.children[0]} et ${this.children[1]}`
    }
}
const presentation = sangoku.presentation();
console.log(presentation);
