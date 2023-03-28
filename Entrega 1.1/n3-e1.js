// Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

// Array inicial buit per a les 10 funcions.
const functionsArray = [];

// Funció anònima autoinvocable.
(function () {
// Aquest bucle crea les 10 funcions i les col·loca dins la matriu.
    for (i = 0; i <= 9; i++) {
        functionsArray.push(function () {
            // Aquest bucle imprimeix en la consola els números del 0 al 9.
            for (i = 0; i <= 9; i++) {
                console.log(i);
            }
        });
    }
    // Aquest bucle recorre totes les funcions de la matriu, executant-les.
    for (arrayItem of functionsArray) {
        arrayItem();
    }
})();