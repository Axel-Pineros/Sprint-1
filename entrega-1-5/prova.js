// Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function codificar() {
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
};

codificar();

// Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

function encriptar() {
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
};

function encrypt(text) {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    // let encryptedData = encrypted.toString('hex');
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

encriptar();

// fs.unlink('fitxer-hexadecimal.txt',(err) => {
//     if(err) throw err;
//     console.log('fitxer-hexadecimal.txt was deleted');
// });

// fs.unlink('fitxer-base64.txt',(err) => {
//     if(err) throw err;
//     console.log('fitxer-base64.txt was deleted');
// });

//

// function decrypt(text) {
//     let iv = Buffer.from(text.iv, 'hex');
//     let encryptedText = Buffer.from(text.encryptedData, 'hex');
//     let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
//     let decrypted = decipher.update(encryptedText);
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
//     return decrypted.toString();
// }

// fs.readFile('fitxer-hexadecimal-crypto.txt', 'hex', (err, data) => {
//     const fileContent = data;
//     const cryptoHex = Buffer.from(fileContent).toString('utf8');
//     // const cryptoHex = fileContent;
//     if (err) {
//         console.error(err);
//         return;
//     }

//     fs.appendFile('fitxer-hexadecimal-desc.txt', decrypt(cryptoHex), (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//     });
// });
// fs.readFile('fitxer-hexadecimal.txt', 'hex', (err, data) => {
//     const fileContent = data;
//     const cryptoHex = Buffer.from(fileContent).toString('hex');
//     if (err) {
//         console.error(err);
//         return;
//     }

//     fs.appendFile('fitxer-hexadecimal-crypto.txt', encrypt(cryptoHex), (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//     });
// });