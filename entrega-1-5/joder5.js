const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
let key = crypto.randomBytes(24);
let iv = crypto.randomBytes(16);

function encryptFile(filePath) {
    const fileContent = fs.readFileSync(filePath);
    const cipher = crypto.createCipher('aes-256-cbc', 'password');
    let encryptedContent = cipher.update(fileContent.toString('hex'), 'hex', 'hex');
    encryptedContent += cipher.final('hex');
    fs.writeFileSync(filePath + '.enc', encryptedContent);
}

function decryptFile(filePath) {
    const fileContent = fs.readFileSync(filePath);
    const decipher = crypto.createDecipher('aes-256-cbc', 'password');
    let decryptedContent = decipher.update(fileContent.toString(), 'hex', 'hex');
    decryptedContent += decipher.final('hex');
    fs.writeFileSync(filePath.replace('.enc', ''), Buffer.from(decryptedContent, 'hex'));
}