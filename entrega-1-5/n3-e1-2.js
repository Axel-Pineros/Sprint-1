// Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

fs.readFile('fitxer-hexadecimal.txt', 'hex', (err, data) => {
    const fileContent = data;
    const cryptoHex = Buffer.from(fileContent).toString('hex');
    if (err) {
        console.error(err);
        return;
    }

    fs.appendFile('fitxer-hexadecimal-crypto.txt', encrypt(cryptoHex).encryptedData, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});

fs.readFile('fitxer-base64.txt', 'base64', (err, data) => {
    const fileContent = data;
    const cryptoBase64 = Buffer.from(fileContent).toString('base64');
    if (err) {
        console.error(err);
        return;
    }

    fs.appendFile('fitxer-base64-crypto.txt', encrypt(cryptoBase64).encryptedData, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});

function encrypt(text) {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    // let encryptedData = encrypted.toString('hex');
    // return encryptedData;
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

fs.unlink('fitxer-hexadecimal.txt',(err) => {
    if(err) throw err;
    console.log('fitxer-hexadecimal.txt was deleted');
});

fs.unlink('fitxer-base64.txt',(err) => {
    if(err) throw err;
    console.log('fitxer-base64.txt was deleted');
});