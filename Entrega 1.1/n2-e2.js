// Invoca una funció que retorni un valor des de dins d'una template literal.

const word = "especial";
const text = `Aquí hi ha una paraula ${getOverHere()}`;

function getOverHere() {
    return word;
}

console.log(text);