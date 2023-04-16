const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
let key = crypto.randomBytes(24);
let iv = crypto.randomBytes(16);

async function encriptarArchivoHexYDesencriptarArchivo(archivoEntrada, archivoEncriptado, archivoDesencriptado, key) {
    try {
        // Leer el contenido del archivo de entrada
        const contenidoHexadecimal = await fs.promises.readFile(archivoEntrada, 'utf8');

        // Encriptar el contenido utilizando la clave proporcionada
        const cifrador = crypto.createCipheriv(algorithm, key, iv);
        const contenidoEncriptado = Buffer.concat([iv, cifrador.update(Buffer.from(contenidoHexadecimal, 'hex')), cifrador.final()]);

        // Escribir el contenido encriptado en el archivo de salida
        await fs.promises.writeFile(archivoEncriptado, contenidoEncriptado);

        console.log(`El archivo ${archivoEntrada} ha sido leído y encriptado en ${archivoEncriptado}`);

        // Desencriptar el contenido utilizando la clave proporcionada
        const contenidoEncriptadoLeido = await fs.promises.readFile(archivoEncriptado);
        const ivLeido = contenidoEncriptadoLeido.slice(0, 16);
        const contenidoEncriptadoSinIvLeido = contenidoEncriptadoLeido.slice(16);
        const descifrador = crypto.createDecipheriv(algorithm, key, ivLeido);
        const contenidoDesencriptado = Buffer.concat([descifrador.update(contenidoEncriptadoSinIvLeido), descifrador.final()]);

        // Escribir el contenido desencriptado en el archivo de salida
        await fs.promises.writeFile(archivoDesencriptado, contenidoDesencriptado);

        console.log(`El archivo ${archivoEncriptado} ha sido desencriptado en ${archivoDesencriptado}`);
    } catch (error) {
        console.error(`Error al leer o escribir el archivo: ${error.message}`);
    }
}

encriptarArchivoHexYDesencriptarArchivo('fitxer-hexadecimal.txt', 'fitxer-hexadecimal-crypto.txt', 'fitxer-hexadecimal-decrypto.txt', key);