// Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const callbackParametre = (param, callback) => {
    param === "Abracadabra" ? callback("Has dit únicament la paraula màgica") : callback("No has dit únicament la paraula màgica");
}

callbackParametre("Abracadabra", () => {
    return;
});
callbackParametre("Qualsevol altra cosa", () => {
    return;
});

module.exports = callbackParametre;