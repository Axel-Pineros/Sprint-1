// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// function encrypt(text) {
//     let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
//     let encrypted = cipher.update(text);
//     encrypted = Buffer.concat([encrypted, cipher.final()]);
//     return {
//         iv: iv.toString('hex'),
//         encryptedData: encrypted.toString('hex')
//     };
// }

// var encrypted = encrypt("Hello World!");

fs.readFile('fitxer-hexadecimal-crypto.txt', 'hex', (err, data) => {
    const fileContent = data;
    const cryptoHex = Buffer.from(fileContent).toString('utf8');
    // const cryptoHex = fileContent;
    if (err) {
        console.error(err);
        return;
    }

    fs.appendFile('fitxer-hexadecimal-desc.txt', decrypt(cryptoHex), (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});

function decrypt(text) {
    let iv = Buffer.from(text, 'utf8');
    let encryptedText = Buffer.from(text, 'utf8');
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString('utf8');
}

// function decrypt(text) {
//     let iv = Buffer.from(text.iv, 'hex');
//     let encryptedText = Buffer.from(text.encryptedData, 'hex');
//     let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
//     let decrypted = decipher.update(encryptedText);
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
//     return decrypted.toString();
//  }