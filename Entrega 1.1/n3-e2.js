// Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

const userName = (function (e) {
    console.log(e);
})("Tobias");