const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
const key = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);

//  function encrypt(text) {
//     let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
//     let encrypted = cipher.update(text);
//     encrypted = Buffer.concat([encrypted, cipher.final()]);
//     return {
//         iv: iv.toString('hex'),
//         encryptedData: encrypted.toString('hex')
//     };
// }

// fs.readFile('fitxer.txt', 'utf8');

// var encrypted = encrypt(fs.readFile('fitxer-hexadecimal-crypto.txt', 'hex', (err, data) => {
//     const fileContent = data;
//     const cryptoHex = Buffer.from(fileContent).toString('utf8');
//     // const cryptoHex = fileContent;
//     if (err) {
//         console.error(err);
//         return;
//     }
// }));

// fs.readFile('fitxer-hexadecimal-crypto.txt', 'hex', (err, data) => {
//     const fileContent = data;
//     const cryptoHex = Buffer.from(fileContent).toString('utf8');
//     if (err) {
//         console.error(err);
//         return;
//     }

//     fs.appendFile('fitxer-hexadecimal-descrypto.txt', decrypt(cryptoHex).encryptedData, (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//     });
// });

// function decrypt(text) {
//     let iv = Buffer.from(text.iv, 'hex');
//     let encryptedText = Buffer.from(text.encryptedData, 'hex');
//     let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
//     let decrypted = decipher.update(encryptedText);
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
//     return decrypted.toString();
// }

// const decrypted = decrypt("f09e75e57c98a48c31ed77884588491678f7b9d7b9449fbb5ca9e00ee5df3c61ed005fbddfa57295b92f02f3bf8bb996dc8c6dd7493db30a33488d7f1fab8a889fe518a3b04914ed4dace469421cc85efd4befc9651f872498ebfbd839161c2ba8d462b56edffb5d55ef088d50318a98")
// console.log("Decrypted Text: " + decrypted);



//Encrypting text
function encrypt(text) {
    let cipher = crypto.createCipheriv(encrypt, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

// Decrypting text
function decrypt(text) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

// Text send to encrypt function
var hw = encrypt("Welcome to Tutorials Point...");
console.log(hw);
console.log(decrypt(hw));