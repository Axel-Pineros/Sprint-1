// Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

function sumar(a, b) {
    if (a === null || a === undefined || a === '' || b === null || b === undefined || b === '') {
        throw new Error(`Falta introduir algun valor`)
    }
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error(`Algun valor introduit no és un número`)
    }
    return a + b;
}

function restar(a, b) {
    if (a === null || a === undefined || a === '' || b === null || b === undefined || b === '') {
        throw new Error(`Falta introduir algun valor`)
    }
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error(`Algun valor introduit no és un número`)
    }
    return a - b;
}

function multiplicar(a, b) {
    if (a === null || a === undefined || a === '' || b === null || b === undefined || b === '') {
        throw new Error(`Falta introduir algun valor`)
    }
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error(`Algun valor introduit no és un número`)
    }
    return a * b;
}

function dividir(a, b) {
    if (a === null || a === undefined || a === '' || b === null || b === undefined || b === '') {
        throw new Error(`Falta introduir algun valor`)
    }
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error(`Algun valor introduit no és un número`)
    }
    return a / b;
}

module.exports = { sumar, restar, multiplicar, dividir }