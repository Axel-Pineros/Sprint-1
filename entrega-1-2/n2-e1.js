// Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const completeName = {
    firstName: "Pedro",
    lastName: "Picapiedra",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

((e) => {
    console.log((`Hola, em dic ${e}`));
})(completeName.fullName());