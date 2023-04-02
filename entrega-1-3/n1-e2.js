// Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const output = ((some) => {
    console.log(some);
});

function textPrinter(text, myCallback) {
    myCallback(text);
}

textPrinter("Yolo", output);