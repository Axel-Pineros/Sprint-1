// Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.'

const fs = require("fs");
const crypto = require("crypto");

(function codificar() {

    const fileContent = fs.readFileSync("fitxer.txt");

    const hexEncoded = Buffer.from(fileContent).toString("hex");
    const base64Encoded = Buffer.from(fileContent).toString("base64");

    fs.writeFileSync("fitxer_hex.txt", hexEncoded);
    fs.writeFileSync("fitxer_base64.txt", base64Encoded);

})();

// Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

const algoritme = "aes-192-cbc";
const key = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);

(function encriptar() {

    const cipher1 = crypto.createCipheriv(algoritme, key, iv);
    const cipher2 = crypto.createCipheriv(algoritme, key, iv);

    let encryptedHex = cipher1.update(fs.readFileSync("fitxer_hex.txt"));
    let encryptedBase64 = cipher2.update(fs.readFileSync("fitxer_base64.txt"));

    encryptedHex = Buffer.concat([encryptedHex, cipher1.final()]);
    encryptedBase64 = Buffer.concat([encryptedBase64, cipher2.final()]);

    fs.writeFileSync("fitxer_hex_encrypted.txt", encryptedHex);
    fs.writeFileSync("fitxer_base64_encrypted.txt", encryptedBase64);

    fs.unlinkSync("fitxer_hex.txt");
    fs.unlinkSync("fitxer_base64.txt");

})();

// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

(function desencriptar() {

    const decipher1 = crypto.createDecipheriv(algoritme, key, iv);
    const decipher2 = crypto.createDecipheriv(algoritme, key, iv);

    let decryptedHex = decipher1.update(fs.readFileSync("fitxer_hex_encrypted.txt"));
    let decryptedBase64 = decipher2.update(fs.readFileSync("fitxer_base64_encrypted.txt"));

    decryptedHex = Buffer.concat([decryptedHex, decipher1.final()]);
    decryptedBase64 = Buffer.concat([decryptedBase64, decipher2.final()]);

    const decodedString1 = Buffer.from(decryptedHex, 'hex').toString('utf-8');
    const decodedString2 = Buffer.from(decodedString1, 'hex').toString('utf-8');
    fs.writeFileSync("fitxer_original_1.txt", decodedString2);

    const decodedString3 = Buffer.from(decryptedBase64, 'base64').toString('utf-8');
    const decodedString4 = Buffer.from(decodedString3, 'base64').toString('utf-8');
    fs.writeFileSync("fitxer_original_2.txt", decodedString4);

})();