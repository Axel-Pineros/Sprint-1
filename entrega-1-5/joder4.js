const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
let key = crypto.randomBytes(24);
let iv = crypto.randomBytes(16);

function lalala() {
    const readStream = fs.createReadStream('fitxer-hexadecimal.txt');
    const writeStream = fs.createWriteStream('fitxer-hexadecimal-crypto.enc');

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    readStream.pipe(cipher).pipe(writeStream);
}

function hola() {
    const readStream = fs.createReadStream('fitxer-hexadecimal-crypto.enc');
    const writeStream = fs.createWriteStream('fitxer-hexadecimal-decrypto.txt');

    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    readStream.pipe(decipher).pipe(writeStream);
}

// lalala();
 hola();
