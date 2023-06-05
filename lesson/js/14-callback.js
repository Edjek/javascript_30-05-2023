/* --------------------------- CALLBACK --------------------------- */

// Un  callback (fonction de rappel) est une fonction qui est passée en tant qu'argument dans une autre fonction.
function mathematique(x, y, callback) {
    return callback(x, y);
}

function add(x, y) {
    return x + y;
}

function divide(x, y) {
    return x / y;
}

function multiply(x, y) {
    return x * y;
}

console.log(mathematique(12, 13, add));
console.log(mathematique(12, 13, multiply));

// Nous pouvons donc passer directement en argument une fonction anonyme ou une fonction flechée
const res = mathematique(12, 13, function (a, b) {
    return a * b * (a + b);
});

console.log(res);

mathematique(12, 13, multiply);
