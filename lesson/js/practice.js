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
