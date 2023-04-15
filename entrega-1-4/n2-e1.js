// Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

async function doubleNumber(e) {
    if (e === null || e === undefined || e === '') {
        throw new Error(`No s'han introduit cap valor`);
    }
    if (e !== 'number') {
        throw new Error(`Cal introduir un número`);
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(e * 2);
        }, 2000, e);
    });
}

doubleNumber(8).then((resultado) => {
    console.log(resultado);
})

//  Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

async function suma3numeros(e, r, t) {
    if (e === null || e === undefined || e === '' || r === null || r === undefined || r === '' || t === null || t === undefined || t === '') {
        throw new Error(`No s'han introduit 3 números`);
    }
    const num1 = await doubleNumber(e);
    const num2 = await doubleNumber(r);
    const num3 = await doubleNumber(t);
    const resultado = num1 + num2 + num3;
    console.log(resultado);
}

suma3numeros(2, 4, 5);