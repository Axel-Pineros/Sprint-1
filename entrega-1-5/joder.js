const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
let key = crypto.randomBytes(24);
let iv = crypto.randomBytes(16);

async function leerArchivoHexYCrearArchivoEncriptado(archivoEntrada, archivoSalida, key) {
    try {
        // Leer el contenido del archivo de entrada
        const contenidoHexadecimal = await fs.promises.readFile(archivoEntrada, 'utf8');

        // // Convertir el contenido hexadecimal a binario
        // const contenidoBinario = Buffer.from(contenidoHexadecimal, 'hex');

        // Encriptar el contenido utilizando la clave proporcionada
        const cifrador = crypto.createCipheriv(algorithm, key, iv);
        const contenidoEncriptado = Buffer.concat([iv, cifrador.update(contenidoHexadecimal), cifrador.final()]);

        // Escribir el contenido encriptado en el archivo de salida
        await fs.promises.writeFile(archivoSalida, contenidoEncriptado);

        console.log(`El archivo ${archivoEntrada} ha sido leído y encriptado en ${archivoSalida}`);
    } catch (error) {
        console.error(`Error al leer o escribir el archivo: ${error.message}`);
    }
}

leerArchivoHexYCrearArchivoEncriptado('fitxer-hexadecimal.txt', 'fitxer-hexadecimal-crypto.txt', key);

// async function crearArchivoEncriptado(archivoEntrada, archivoSalida, key) {
//     try {
//         // Crear el archivo de entrada con el contenido deseado
//         await fs.promises.writeFile(archivoEntrada, 'Este es el contenido del archivo');

//         // Leer el contenido del archivo de entrada
//         const contenido = await fs.promises.readFile(archivoEntrada);

//         // Encriptar el contenido utilizando la clave proporcionada
//         const cifrador = crypto.createCipheriv(algorithm, key, iv);
//         const contenidoEncriptado = Buffer.concat([iv, cifrador.update(contenido), cifrador.final()]);

//         // Escribir el contenido encriptado en el archivo de salida
//         await fs.promises.writeFile(archivoSalida, contenidoEncriptado);

//         console.log(`El archivo ${archivoEntrada} ha sido encriptado y guardado en ${archivoSalida}`);
//     } catch (error) {
//         console.error(`Error al leer o escribir el archivo: ${error.message}`);
//     }
// }

// crearArchivoEncriptado('fitxer-hexadecimal.txt', 'fitxer-hexadecimal-crypto.txt', key);