// Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

async function finalFunction(e) {
    if (e === null || e === undefined || e === '') {
        throw new Error(`No s'ha introduit cap valor`);
    }
    if (typeof e !== "number") {
        throw new Error(`El valor introduit no és un número`);
    }
    const number = await numberPlus5(e);
    return number;
}

function numberPlus5(e) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(e + 5);
        }, 2000);
    });
}

finalFunction(2);

module.exports = finalFunction;