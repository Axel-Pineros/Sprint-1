// Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

function doubleNumber(e) {
    return setTimeout(() => {e*2}, 2000, e);
}

doubleNumber(5);

//  Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

function sum(e, r, t) {
    return doubleNumber(e) + doubleNumber(r) + doubleNumber(t);
}

sum(1, 2, 3);