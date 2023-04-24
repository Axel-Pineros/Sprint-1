// Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

function doubleNumber(e) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(e * 2);
        }, 2000);
    });
}

//  Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

async function suma3numeros(e, r, t) {
    if (e === null || e === undefined || e === '' || r === null || r === undefined || r === '' || t === null || t === undefined || t === '') {
        throw new Error(`No s'han introduit tots els valors`);
    }
    if (typeof e !== "number" || typeof r !== "number" || typeof t !== "number") {
        throw new Error(`No s'han introduit 3 números`);
    }

    const num1 = await doubleNumber(e);
    const num2 = await doubleNumber(r);
    const num3 = await doubleNumber(t);
    return num1 + num2 + num3;
}

suma3numeros(2, 4, 5);

module.exports = { doubleNumber, suma3numeros };