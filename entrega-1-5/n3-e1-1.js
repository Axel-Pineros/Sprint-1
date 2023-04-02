// Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

const fs = require('fs');

fs.readFile('fitxer.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const fileContent = data;
    const encodedHex = Buffer.from(fileContent).toString('hex');
    const encodedBase64 = Buffer.from(fileContent).toString('base64');
    fs.appendFile('fitxer-hexadecimal.txt', encodedHex, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    fs.appendFile('fitxer-base64.txt', encodedBase64, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});