// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

class Animal {
    constructor() {
        if (new.target === Animal) {
            throw new TypeError("Això és una classe abstracta. No es pot instanciar");
        }
    }
}

const createAnimal = (name, race) => {
    let animal = Object.create(Animal.prototype);
    animal.name = name;
    animal.race = race;
    return animal;
}

createAnimal("cat", "ragdoll");
createAnimal("cat", "persian");

module.exports = { Animal, createAnimal };