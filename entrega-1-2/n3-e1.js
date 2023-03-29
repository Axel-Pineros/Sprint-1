// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.


// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     explain(name, year) {
//         console.log(name, year);
//     }
// }

// (function () {
//     new Car().explain("Audi", "1998");
// })();

Animal = function () { throw "abstract class!" }
Animal.prototype.name = "";
Animal.prototype.sound = "";
Animal.prototype.say = function () {
    console.log(this.name + " says: " + this.sound);
}

Cat = function () {
    this.name = "Cat";
    this.sound = "meow";
}

Dog = function () {
    this.name = "Dog";
    this.sound = "woof";
}

Cat.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

new Cat().say();
new Dog().say();
new Animal().say();