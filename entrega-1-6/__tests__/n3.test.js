describe('Nivell 3', () => {

    // Refès els exercicis Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()) de manera que accedeixin a les dades d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.

    describe('Mock de fitxer json', () => {
        const { getEmployee, getSalary } = require('../app/n3.js');
        const datos = require('../app/fitxer.json');

        jest.mock('../app/fitxer.json', () => (
            {
                "employees": [
                    {
                        "id": 1,
                        "name": "Linux Torvalds"
                    },
                    {
                        "id": 2,
                        "name": "Bill Gates"
                    },
                    {
                        "id": 3,
                        "name": "Jeff Bezos"
                    }
                ],
                "salaries": [
                    {
                        "id": 1,
                        "salary": 4000
                    },
                    {
                        "id": 2,
                        "salary": 1000
                    },
                    {
                        "id": 3,
                        "salary": 2000
                    }
                ]
            }
        ));

        test(`La funció getEmployee(1) retorna "Linux Torvalds"`, () => {
            expect(getEmployee(1)).resolves.toBe('Linux Torvalds');
        });

        test(`La funció getEmployee(4) retorna l'error "¡Aquest id no té associat cap employee!"`, () => {
            expect(getEmployee(4)).rejects.toEqual('Aquest id no té associat cap employee!');
        });

        test(`La funció getSalary(datos.employees[0]) retorna 4000`, () => {
            expect(getSalary(datos.employees[0])).resolves.toBe(4000);
        });

        test(`La funció getSalary(datos.employees[5]) retorna l'error "Aquest employee no existeix!"`, () => {
            expect(getSalary(datos.employees[5])).rejects.toEqual(`Aquest employee no existeix!`);
        });
    });

    // Utilitzant com a base l'exercici Async / Await, crea tests que forcin errors de funcionament i verifiqui que els errors llançats són els esperats.

    // Aquí hi ha només el testing del primer exercici Async/Await, el segon està testeigat en el l'arxiu n1.test.js i el tercer en l'arxiu n2.test.js.

    describe(`Funcions getEmployee() i getSalary()`, () => {
        const { getEmployee, getSalary } = require('../../entrega-1-4/n1-e1.js');

        describe(`getEmployee()`, () => {
            test(`La funció getEmployee(1) retorna "Linux Torvalds"`, () => {
                expect(getEmployee(1)).resolves.toBe("El nom de l'employee és Linux Torvalds");
            });
            test(`La funció getEmployee(4) retorna "Aquest id no té associat cap nom!"`, () => {
                expect(getEmployee(4)).rejects.toEqual('Aquest id no té associat cap nom!');
            });

            test(`No introduir cap valor retornarà l'error "No s'ha cercat res"`, () => {
                expect(() => { getEmployee(null); }).toThrowError(`No s'ha cercat res`);
            });

            test(`Introduir un valor no numèric retornarà l'error "S'ha de cercar un número"`, () => {
                expect(() => { getEmployee("hola"); }).toThrowError(`S'ha de cercar un número`);
            });

            test(`Introduir un valor inferior a 1 retornarà l'error "Els id comencen en 1"`, () => {
                expect(() => { getEmployee(0); }).toThrowError(`Els id comencen en 1`);
            });
        });

        describe(`getSalary()`, () => {
            test(`La funció getSalary(1) retorna "Linux Torvalds té un salari de 4000"`, () => {
                expect(getSalary(1)).resolves.toBe(`Linux Torvalds té un salari de 4000`);
            });

            test(`La funció getSalary(5) retorna "Aquest id no té associat cap salari!"`, () => {
                expect(getSalary(5)).rejects.toEqual(`Aquest id no té associat cap salari!`);
            });

            test(`No introduir cap valor retornarà l'error "No s'ha cercat res"`, () => {
                expect(() => { getSalary(null); }).toThrowError(`No s'ha cercat res`);
            });

            test(`Introduir un valor no numèric retornarà l'error "S'ha de cercar un número"`, () => {
                expect(() => { getSalary("hola"); }).toThrowError(`S'ha de cercar un número`);
            });

            test(`Introduir un valor inferior a 1 retornarà l'error "Els id comencen en 1"`, () => {
                expect(() => { getSalary(0); }).toThrowError(`Els id comencen en 1`);
            });
        });
    });
});

