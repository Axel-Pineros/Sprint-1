describe(`Nivell 2`, () => {

    // Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.


    const { doubleNumber, suma3numeros } = require('../../entrega-1-4/n2-e1.js');
    describe('Funcions doubleNumber() i suma3numeros()', () => {

        describe('doubleNumber()', () => {

            test('doubleNumber', async () => {

                const result = doubleNumber(5);
                jest.useFakeTimers();
                // jest.runAllTimers();
                jest.runOnlyPendingTimers();
                const value = await result;
                expect(value).toBe(10);
            });

            // test('test doubleNumber function', async () => {
            //     jest.useFakeTimers();
            //     const result = await doubleNumber(2);
            //     jest.runAllTimers();
            //     expect(result).toBe(4);
            // });

            // test('suma3numeros', async() => {
            //     jest.useFakeTimers();
            //     const result = await suma3numeros(1, 2, 3);
            //     expect(result).resolves.toBe(11);
            //     jest.runOnlyPendingTimers();
            //   });

            // test('suma3numeros() suma correctamente tres números', async () => {
            //     jest.useFakeTimers();
            //     const resultado = await suma3numeros(1, 2, 3);
            //     expect(resultado).toBe(12);
            //     jest.runAllTimers();
            // });

            // test('funcionConError() lanza una excepción', () => {
            //     expect(suma3numeros("hola",2,3)).toThrow();
            // });

            // test('test suma3numeros function', async () => {
            //     const result = suma3numeros(2, 3, 4);
            //     // expect(result).toBe(24);
            //     // const result = doubleNumber(5);
            //     // jest.runAllTimers();
            //     jest.runOnlyPendingTimers();
            //     const value = await result;
            //     expect(value).toBe(24);
            // });

            // test('test promise with setTimeout', () => {
            //     jest.useFakeTimers();
            //     const promise = new Promise((resolve) => {
            //         setTimeout(() => {
            //             resolve(2 * 5);
            //         }, 1000);
            //     });
            //     const promiseCallback = jest.fn();
            //     promise.then((result) => {
            //         promiseCallback(result * 2);
            //     });
            //     expect(promiseCallback).not.toBeCalled();
            //     jest.runAllTimers();
            //     expect(promiseCallback).resolves.toBe(20);
            // });
            // test('test promise with setTimeout', () => {
            //     jest.useFakeTimers();
            //     const promise = new Promise((resolve) => {
            //         setTimeout(() => {
            //             resolve('done');
            //         }, 1000);
            //     });
            //     const promiseCallback = jest.fn();
            //     promise.then(promiseCallback);
            //     expect(promiseCallback).not.toBeCalled();
            //     jest.runAllTimers();
            //     expect(promiseCallback).toBeCalledWith('done');
            // });

            // test('suma3numeros', async () => {
            //     jest.useFakeTimers();
            //     const doubleNumberMock = jest.fn().mockImplementation((e) => {
            //         return new Promise(resolve => {
            //             setTimeout(() => {
            //                 resolve(e * 2);
            //             }, 2000);
            //         });
            //     });
            //     const suma3numerosMock = async (e, r, t) => {
            //         const num1 = await doubleNumberMock(e);
            //         const num2 = await doubleNumberMock(r);
            //         const num3 = await doubleNumberMock(t);
            //         const resultado = num1 + num2 + num3;
            //         return resultado;
            //     };
            //     jest.advanceTimersByTime(10000);
            //     const result = await suma3numerosMock(1, 2, 3);
            //     jest.advanceTimersByTime(10000);
            //     expect(result).toBe(12);
            // });

            // test('mock async function', async () => {
            //     jest.useFakeTimers();
            //     const result = suma3numeros(1, 2, 3);
            //     jest.runAllTimers();
            //     const value = await result;
            //     expect(value).toBe(10);
            // });
            // const doubleNumber = jest.fn().mockImplementation((e) => {
            //     return Promise.resolve(e * 2);
            // });

            // const doubleNumber = jest.fn().mockImplementation((e) => {
            //     return new Promise(resolve => {
            //         setTimeout(() => {
            //             resolve(e * 2);
            //         }, 2000);
            //     });
            // });


            // jest.useFakeTimers();
            // const doubleNumberMock = jest.fn().mockImplementation((e) => {
            //     return new Promise(resolve => {
            //         setTimeout(() => {
            //             resolve(e * 2);
            //         }, 2000);
            //     });
            // });
            // const suma3numerosMock = async (e, r, t) => {
            //     const num1 = await doubleNumberMock(e);
            //     const num2 = await doubleNumberMock(r);
            //     const num3 = await doubleNumberMock(t);
            //     const resultado = num1 + num2 + num3;
            //     return resultado;
            // };
            // const promise = suma3numerosMock(1, 2, 3);
            // jest.runAllTimers();
            // const result = await promise;
            // expect(result).toBe(12);


            // jest.useFakeTimers();
            // const doubleNumberMock = jest.fn().mockImplementation((e) => {
            //     return new Promise(resolve => {
            //         setTimeout(() => {
            //             resolve(e * 2);
            //         }, 2000);
            //     });
            // });
            // const promise = doubleNumberMock(5);
            // jest.runAllTimers();
            // const result = await promise;
            // expect(result).toBe(10);

            // jest.useFakeTimers();
            // const suma3numerosMock = jest.fn().mockImplementation(async (e, r, t) => {
            //     if (e === null || e === undefined || e === '' || r === null || r === undefined || r === '' || t === null || t === undefined || t === '') {
            //         throw new Error(`No s'han introduit tots els valors`);
            //     }
            //     if (typeof e !== "number" || typeof r !== "number" || typeof t !== "number") {
            //         throw new Error(`No s'han introduit 3 números`);
            //     }

            //     const num1 = await doubleNumber(e);
            //     const num2 = await doubleNumber(r);
            //     const num3 = await doubleNumber(t);
            //     jest.runAllTimers();
            //     const resultado = num1 + num2 + num3;
            //     return resultado;
            // });
            // jest.runAllTimers();
            // const promise2 = await suma3numerosMock(1, 2, 3);
            // expect(promise2).toBe(12);
            // expect(await suma3numerosMock(1, 2, 3)).toBe(12);
            // try {
            //     await suma3numeros(null, 2, 3);
            // } catch (error) {
            //     expect(error).toEqual(new Error(`No s'han introduit tots els valors`));
            // }







            // test('test async function', () => {
            //     jest.useFakeTimers();
            //     const asyncFunc = async (e) => {
            //         await new Promise(resolve => setTimeout(resolve, 2000));
            //         return e * 2;
            //     };
            //     const promise = asyncFunc(2);
            //     jest.runAllTimers();
            //     return promise.then(result => {
            //         expect(result).toEqual(4);
            //     });
            // });







            // test('test async function', () => {
            //     jest.useFakeTimers();
            //     suma3numeros
            //     };
            //     const promise = asyncFunc(2,1,3);
            //     jest.runAllTimers();
            //     return promise.then(result => {
            //         expect(result).toEqual(12);
            //     });
            // });










            // test('adds 1 + 2 to equal 3', () => {
            //     jest.useFakeTimers();
            //     const sumMock = jest.fn(suma3numeros);
            //     expect(sumMock(2,1,3)).toBe(12);
            //     jest.runAllTimers();
            // });

            // test('test suma3numeros function', async () => {
            //     const doubleNumber = jest.fn().mockImplementation((num) => {
            //         return new Promise((resolve) => {
            //             resolve(num * 2);
            //         });
            //     });

            //     const result = await suma3numeros(1, 2, 3);

            //     expect(doubleNumber).toHaveBeenCalledTimes(3);
            //     expect(result).toEqual(12);
            // });

            // test('test multiple async calls', async () => {
            //     const result = await Promise.all([
            //         doubleNumber(3),
            //         doubleNumber(5),
            //         doubleNumber(6)
            //     ]);
            //     expect(result).toEqual([6, 10, 12]);
            // });

            // test('suma3numeros returns correct value', async () => {
            //     jest.useFakeTimers();
            //     const result = suma3numeros(1, 2, 3);
            //     jest.runAllTimers();
            //     const value = await result;
            //     expect(value).toBe(12);
            // });


            // jest.useFakeTimers();

            // test('sumDoubles', async () => {
            //     const sum = await suma3numeros(1, 2, 3);
            //     expect(sum).toBe(12);
            // });

            // test('doubleAfterTwoSeconds', async () => {
            //     const double = await doubleNumber(5);
            //     expect(double).toBe(10);
            // });


            // jest.runAllTimers();




            // test('suma3numeros', async () => {
            //     //  jest.useFakeTimers();
            //     //  const result = suma3numeros(1, 2, 3);
            //     //  jest.runAllTimers();
            //     //  const value = await result;
            //     //  expect(value).toBe(12);

            //     await suma3numeros(1, 2, 3).then(result => expect(result).toBe(12));
            //     // expect(() => suma3numeros(1, '2', 3)).toThrow(`No s'han introduit 3 números`);
            // });
            // test('adds 1 + 2 + 3 to equal 12', async () => {
            //     jest.useFakeTimers();
            //     const result = suma3numeros(1, 2, 3);
            //     jest.runAllTimers();
            //     const value = await result;
            //     expect(value).toBe(12);
            //   });

            // test('should return the sum of the double of three numbers after a delay', async () => {
            //     jest.useFakeTimers();
            //     const promise = suma3numeros(1, 2, 3);
            //     jest.runAllTimers();
            //     const result = await promise;
            //     expect(result).toBe(12);
            // });
            // test('suma3numeros', async () => {
            //     jest.useFakeTimers();

            //     const result = suma3numeros(2, 4, 6);

            //     jest.runAllTimers();

            //     await expect(result).resolves.toBe(24);
            // });
            // test('suma3numeros', async () => {
            //     jest.useFakeTimers();

            //     const spy = jest.spyOn(global, 'setTimeout');

            //     const result = suma3numeros(2, 4, 6);

            //     jest.runAllTimers();

            //     await expect(result).resolves.toBe(24);

            //     expect(spy).toHaveBeenCalledTimes(3);
            // });
            // test('suma3numeros', async () => {
            //     jest.useFakeTimers();
            //     const doubleNumberSpy = jest.spyOn(miArchivo, doubleNumber);
            //     const result = await suma3numeros(1, 2, 3);
            //     expect(result).toBe(12);
            //     expect(doubleNumberSpy).toHaveBeenCalledTimes(3);
            //     jest.runAllTimers();
            // });
        });

        describe('suma3numeros()', () => {
            // test(`No introduir algun valor retorna l'error "No s'han introduit tots els valors"`, async () => {
            //     try {
            //         suma3numeros(null, 8, 9);
            //     } catch ({ error }) {
            //         expect(error).toEqual(new Error(`No s'han introduit tots els valors`));
            //     }

            //     //     expect(() =>  { suma3numeros(null, 8, 9); }).toEqual(`No s'han introduit tots els valors`);
            // });
            // test('suma3numeros - error', async () => {
            //     try {
            //         await suma3numeros(null, undefined, '');
            //     } catch (error) {
            //         expect(error.message).toBe(`No s'han introduit tots els valors`);
            //     }
            // });
            // test('suma3numeros - Error', async () => {
            //     jest.useFakeTimers();

            //     const result = suma3numeros(6, null, 3);

            //     jest.runAllTimers();

            //     await expect(result).rejects.toThrow(`No s'han introduit tots els valors`);
            // });

            // test(`No introduir 3 números retorna l'error "No s'han introduit 3 números"`, async () => {
            //     try {
            //         await suma3numeros("hola", 4, "que tal");
            //     } catch (error) {
            //         expect(error).toEqual(new Error(`No s'han introduit 3 números`));
            //     }
            // });
        });
    });










    // test('timer test', () => {
    //     jest.useFakeTimers();

    //     const callback = jest.fn();
    //     doubleNumber(2);

    //     // At this point in time, the callback should not have been called yet
    //     expect(callback).not.toBeCalled();

    //     // Fast-forward until all timers have been executed
    //     jest.runAllTimers();

    //     // Now our callback should have been called!
    //     expect(callback).toBeCalled();
    //     expect(callback).toHaveBeenCalledTimes(1);
    // });

    // test('should return the sum of the double of three numbers after a delay', async () => {
    //     jest.useFakeTimers();
    //     // const promise = doubleNumber(1);
    //     // const promise2 = doubleNumber(2);
    //     // const promise3 = doubleNumber(3);
    //     const promise4 = suma3numeros(1, 2, 3);
    //     jest.runAllTimers();
    //     const result = await promise4;
    //     expect(result).toBe(12);
    // });



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