// Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const prueba = ((some) => {
    console.log(some);
});

function myCalculator(num1, num2, myCallback) {
    const sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, prueba);