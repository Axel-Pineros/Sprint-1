// Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

const functionsArray = [];

(function () {
    for (i = 0; i <= 9; i++) {
        functionsArray.push(function () {
            for (i = 0; i <= 9; i++) {
                console.log(i);
            }
        });
    }
    for (arrayItem of functionsArray) {
        arrayItem();
    }
})();