// Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

((name) => {
    const personName = {
        "firstname": name,
    }
    return personName;
})("Pedro");

