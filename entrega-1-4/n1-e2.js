// Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

async function numberPlus5(e) {
    if (e === null || e === undefined || e === '') {
        throw new Error(`No s'ha introduit cap valor`);
    }
    if (e !== 'number') {
        throw new Error(`El valor introduit no és un número`);
    }
    const number = await sayHello(e);
    console.log(number);
}

function sayHello(e) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(e+5);
        }, 2000);
    });
}

numberPlus5(2);