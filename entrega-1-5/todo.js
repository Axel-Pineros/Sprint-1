const fs = require('fs');
const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
let key = crypto.randomBytes(24);
let iv = crypto.randomBytes(16);

function encrypt(text) {
    let cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, "utf-8", "hex");
    encrypted += cipher.final('hex');
    return encrypted;
}

function primeraFuncion() {

    fs.readFile('fitxer.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const encodedHex = Buffer.from(data).toString('hex');
        const encodedBase64 = Buffer.from(data).toString('base64');
        fs.writeFile('fitxer-hexadecimal.txt', encodedHex, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
        fs.writeFile('fitxer-base64.txt', encodedBase64, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    })
}


async function segundaFuncion() {
    // const a = async () => await primeraFuncion();

    await fs.promises.readFile('fitxer-hexadecimal.txt', 'hex', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        fs.writeFile('fitxer-hexadecimal-crypto.txt', encrypt(data), (err) => {
            if (err) {
                console.error(err);
                return;
            }
        })
    });

    await fs.promises.readFile('fitxer-base64.txt', 'base64', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        fs.writeFile('fitxer-base64-crypto.txt', encrypt(data), (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });
}

// a();


primeraFuncion();
segundaFuncion();




// callback();fs



// async function paso1() {
//     return new Promise(resolve => resolve(primeraFuncion())
//     )
// }


// async function paso2() {
//     return new Promise(resolve => resolve(segundaFuncion())
//     )
// }



// function paso3() {
//     fs.readFile('fitxer-hexadecimal-crypto.txt', 'hex', (err, data) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         // const encodedHex = Buffer.from(decrypt(data), "hex").toString('utf-8');

//         fs.appendFile('fitxer-hexadecimal-decrypto.txt', decrypt(data), (err) => {
//             if (err) {
//                 console.error(err);
//                 return;
//             }
//         });
//     });

// fs.readFile('fitxer-base64-crypto.txt', 'base64', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     fs.appendFile('fitxer-base64-decrypto.txt', decrypt(data), (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//     });
// });
// }



// function decrypt(text) {
//     let decipher = crypto.createDecipheriv(algorithm, key, iv);
//     decipher.setAutoPadding(false);
//     let decrypted = decipher.update(text, "hex", "utf-8");
//     decrypted += decipher.final('utf-8');
//     return decrypted;
// }

// paso3();

// async function mainFunction() {
//     await primeraFuncion();
//     await segundaFuncion();
// }

// mainFunction();

// async function leerArchivoYConvertirHexadecimal(archivoEntrada, archivoSalida) {
//     try {
//         // Leer el contenido del archivo de entrada
//         const contenido = await fs.promises.readFile(archivoEntrada);

//         // Convertir el contenido a hexadecimal
//         const contenidoHexadecimal = Buffer.from(contenido).toString('hex');

//         // Escribir el contenido hexadecimal en el archivo de salida
//         await fs.promises.writeFile(archivoSalida, contenidoHexadecimal);

//         console.log(`El archivo ${archivoEntrada} ha sido convertido a hexadecimal y guardado en ${archivoSalida}`);
//     } catch (error) {
//         console.error(`Error al leer o escribir el archivo: ${error.message}`);
//     }
// }

// leerArchivoYConvertirHexadecimal('archivo.txt', 'archivo_hex.txt');

// primeraFuncion().then(
//     segundaFuncion()
// );

// const CryptoJS = require('crypto-js');

// const data = fs.readFileSync('archivo.txt');
// const ciphertext = CryptoJS.AES.encrypt(data, 'clave_secreta').toString();

// fs.writeFileSync('archivo_cifrado.txt', ciphertext);

// const ciphertext2 = fs.readFileSync('archivo_cifrado.txt').toString();
// const bytes = CryptoJS.AES.decrypt(ciphertext2, 'clave_secreta');
// const plaintext = bytes.toString(CryptoJS.enc.Utf8);

// fs.writeFileSync('archivo_descifrado.txt', plaintext);

// async function funcionAsincrona1() {
//     return new Promise(resolve => resolve('Función asíncrona 1'));
// }

// async function funcionAsincrona2() {
//     return new Promise(resolve => resolve(console.log('Función asíncrona 2')));
// }

// //   async function ejecutarDosFunciones() {
// //     const resultado1 = await funcionAsincrona1();
// //     const resultado2 = await funcionAsincrona2();
// //   }

// async function ejecutarFuncionesEnOrden() {
//     await funcionAsincrona1();
//     await funcionAsincrona2();
// }

// ejecutarFuncionesEnOrden();