// Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

function myDisplayer(some) {
    console.log(some);
}

const myPromise = new Promise(function (resolve, reject) {
    const x = 1;

    if (x == 0) {
        resolve("Ok");
    } else {
        reject("Error");
    }
});

myPromise
    .then(
        function (value) { myDisplayer(value); }
    )
    .catch(
        function (error) { myDisplayer(error); }
    );

function promiseResult(e) {
    console.log(e);
}