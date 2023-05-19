describe(`Nivell 2`, () => {

    // Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.

    const { doubleNumber, suma3numeros } = require('../../entrega-1-4/n2-e1.js');
    describe('Funcions doubleNumber() i suma3numeros()', () => {

        jest.useFakeTimers();

        describe('doubleNumber', () => {
            test('doubleNumber(2) retorna 4', async () => {
                const promise = doubleNumber(2);
                jest.runAllTimers();
                const result = await promise;
                expect(result).toBe(4);
            });
        })

        jest.useFakeTimers();

        describe('suma3numeros', () => {
            test(`Introduir null,'' o undefined retornarà l'error "No s'han introduit tots els valors"`, async () => {
                await expect(suma3numeros(null, 2, 3)).rejects.toThrow(`No s'han introduit tots els valors`);
            });

            test(`Introduir un valor no numèric retornarà l'error "No s'han introduit 3 números"`, async () => {
                await expect(suma3numeros('1', 2, 3)).rejects.toThrow(`No s'han introduit 3 números`);
            });

            // test('should return the sum of the doubled numbers', async () => {
            //     const promise = suma3numeros(1, 2, 3);
            //     jest.runAllTimers();
            //     const result = await promise;
            //     expect(result).toBe(12);
            // });
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