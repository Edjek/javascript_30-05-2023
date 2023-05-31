// Demande à l'utilisateur si il veut aller à la piscine

// Si oui
// Demande son age
// Variable le prix de base de l'entrée à la piscine

// Si il a moins de 18 ans 
// Affiche qu'il a le droit a une reduction de 50%
// Affiche tu dois payer XXX euros
// Sinon
// Affiche il doit payer le tarif plein
// Affiche tu dois payer XXX euros

//  Sinon
//  Affiche il n'y a pas d'autre sport disponible

const response = prompt('Voulez-vous aller à la piscine')

if (response == 'oui') {
    let price = 10;
    let priceWithReduce = price / 2
    const ageUser = prompt('Quel est votre age ?')
    if (ageUser < 18) {
        price = price / 2
        console.log('Vous avez le droit à une réduction de 50%');
        console.log(`Vous devez payer ${priceWithReduce} euros`);
    } else {
        console.log('Vous devez payer le plein tarif');
        console.log(`Vous devez payer ${price} euros`);
    }
} else {
    console.log('');
}
