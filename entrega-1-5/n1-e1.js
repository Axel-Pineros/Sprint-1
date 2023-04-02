// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs');
fs.appendFile('fitxer.txt', 'Hola que tal.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});