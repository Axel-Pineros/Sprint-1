describe(`Nivell 2`, () => {

    // Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.

    const { doubleNumber, suma3numeros } = require('../../entrega-1-4/n2-e1.js');
    describe('Funcions doubleNumber() i suma3numeros()', () => {

        describe('doubleNumber()', () => {

            test('doubleNumber(5) retorna 10', async () => {

                const result = doubleNumber(5);
                jest.useFakeTimers();
                jest.runOnlyPendingTimers();
                const value = await result;
                expect(value).toBe(10);
            });
        });
    });

    // Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.

    describe('Classe Persona', () => {

        const Persona = require('../../entrega-1-2/n2-e2.js');

        jest.mock('../../entrega-1-2/n2-e2.js', () => {
            return jest.fn().mockImplementation(() => {
                return {
                    dirNom: (nom) => {
                        this.nom = nom;
                        return this.nom;
                    }
                }
            });
        });

        const mockDirNom = jest.fn();
        Persona.dirNom = mockDirNom;
        mockDirNom();

        test(`La classe Persona s'ha cridat correctament`, () => {
            expect(Persona.dirNom).toHaveBeenCalled();
        });

        test(`El mètode dirNom("param") retorna "param"`, () => {
            expect(new Persona().dirNom('John')).toBe('John');
        });
    });

    // Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.

    const { Animal, createAnimal } = require('../../entrega-1-2/n3-e1.js');

    describe('Classe abstracta "Animal" i instància "dog"', () => {
        test(`Invocar new Animal() donarà l'error "Això és una classe abstracta. No es pot instanciar"`, () => {
            expect(() => { new Animal(); }).toThrowError("Això és una classe abstracta. No es pot instanciar");
        });
        test(`Invocar un objecte createAnimal("param1", "param2") retornarà { "name": "param1", "race": "param2" }`, () => {
            const dog = createAnimal("dog", "bulldog")
            expect(dog).toEqual({ "name": "dog", "race": "bulldog" });
        });
    });
});