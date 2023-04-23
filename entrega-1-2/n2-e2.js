// Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Persona {
    dirNom(nom) {
        this.nom = nom;
        console.log(this.nom);
    }
}

new Persona().dirNom("Pepe");

module.exports = Persona;