// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

const fs = require('fs');

fs.readFile('fitxer.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});