describe(`Nivell 1`, () => {

    // Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

    const { sumar, restar, multiplicar, dividir } = require('../app/n1.js');

    describe(`Conjunt d'operacions`, () => {
        describe(`Sumar()`, () => {
            test('Comprova que 1+2=3', () => {
                expect(sumar(1, 2)).toBe(3);
            });
            test('No introduir algun valor retorna error', () => {
                expect(() => { sumar(null, 2); }).toThrowError(`Falta introduir algun valor`);
            });
            test('Introduir un valor no numèric retorna error', () => {
                expect(() => { sumar("hola", 2); }).toThrowError(`Algun valor introduit no és un número`);
            });
        })

        describe(`Restar()`, () => {
            test('Comprova que 3+1=2', () => {
                expect(restar(3, 1)).toBe(2);
            });
            test('No introduir algun valor retorna error', () => {
                expect(() => { restar(null, 2); }).toThrowError(`Falta introduir algun valor`);
            });
            test('Introduir un valor no numèric retorna error', () => {
                expect(() => { restar("hola", 2); }).toThrowError(`Algun valor introduit no és un número`);
            });
        })

        describe(`Multiplicar()`, () => {
            test('Comprova que 2·4=8', () => {
                expect(multiplicar(2, 4)).toBe(8);
            });
            test('No introduir algun valor retorna error', () => {
                expect(() => { multiplicar(null, 2); }).toThrowError(`Falta introduir algun valor`);
            });
            test('Introduir un valor no numèric retorna error', () => {
                expect(() => { multiplicar("hola", 2); }).toThrowError(`Algun valor introduit no és un número`);
            });
        })

        describe(`Dividir()`, () => {
            test('Comprova que 10:2=5', () => {
                expect(dividir(10, 2)).toBe(5);
            });
            test('No introduir algun valor retorna error', () => {
                expect(() => { dividir(null, 2); }).toThrowError(`Falta introduir algun valor`);
            });
            test('Introduir un valor no numèric retorna error', () => {
                expect(() => { dividir("hola", 2); }).toThrowError(`Algun valor introduit no és un número`);
            });
        })
    })

    // Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

    const callbackParametre = require('../../entrega-1-3/n1-e2.js');

    describe(`Funció callbackParametre()`, () => {
        test('La callback tornarà "Has dit únicament la paraula màgica" si el paràmetre és "Abracadabra"', () => {
            const mockCallback = jest.fn();
            callbackParametre("Abracadabra", mockCallback);
            expect(mockCallback).toHaveBeenCalledWith("Has dit únicament la paraula màgica");
        });

        test('La callback tornarà "No has dit únicament la paraula màgica" per a qualsevol altre paràmetre', () => {
            const mockCallback = jest.fn();
            callbackParametre("Yoloooooo", mockCallback);
            expect(mockCallback).toHaveBeenCalledWith("No has dit únicament la paraula màgica");
        });
    });

    // Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary())

    const getEmployee = require('../../entrega-1-3/n2-e1.js');
    const { getSalary, employees } = require('../../entrega-1-3/n2-e2.js');

    describe(`Funcions getEmployee() i getSalary()`, () => {
        describe(`Funció getEmployee()`, () => {
            test(`Comprova que getEmployee(1) retorni "Linux Torvalds"`, () => {
                expect(getEmployee(1)).resolves.toBe('Linux Torvalds');
            });

            test(`Un paràmetre id que no sigui 1,2 o 3 retorna l'error "¡Aquest id no té associat cap employee!"`, () => {
                expect(getEmployee(4)).rejects.toMatch("¡Aquest id no té associat cap employee!");
            });
        });

        describe(`Funció getSalary()`, () => {
            test(`Comprova que getSalary(employees[0]) retorni 4000`, () => {
                expect(getSalary(employees[0])).resolves.toBe(4000);
            });

            test(`Un paràmetre que no sigui employees[0], employees[1] o employees[2] retorna l'error "¡Aquest employee no existeix!"`, () => {
                expect(getSalary(employees[4])).rejects.toMatch("¡Aquest employee no existeix!");
            });
        });
    });

    // Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.

    const finalFunction = require('../../entrega-1-4/n1-e2.js');

    describe('finalFunction()', () => {
        test(`Comprova que retorna el número proporcionat més 5 (5+5=10)`, async () => {
            await expect(finalFunction(5)).resolves.toBe(10);
        });
        test(`No introduir cap valor retornarà l'error "No s'ha introduit cap valor"`, async () => {
            try {
                await finalFunction(null);
            } catch (error) {
                expect(error).toEqual(new Error(`No s'ha introduit cap valor`));
            }
        });
        test(`Introduir un valor no numèric retornarà l'error "El valor introduit no és un número`, async () => {
            try {
                await finalFunction("hola");
            } catch (error) {
                expect(error).toEqual(new Error(`El valor introduit no és un número`));
            }
        });
    })
})