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

const messsage = person.getIdentity();
console.log(messsage);

// Créer un objet sangoku
// prenom 'san'
// nom 'goku'
// enfant (tableau : 'gohan' et 'goten')
// age 39
// method presentation qui retourne le message 'Je m'apelle san goku et j'ai 2 enfants et ils s'apellent gohan et goten

// affiche le message
