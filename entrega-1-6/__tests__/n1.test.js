const { sumar, restar, multiplicar, dividir } = require('../app/n1.js');

test('should provide the sum of two values', () => {
    expect(sumar(1, 2)).toBe(3);
});

test('should provide the difference between two values', () => {
    expect(restar(3, 1)).toBe(2);
});

test('should provide the product of two values', () => {
    expect(multiplicar(2, 4)).toBe(8);
});

test('should provide the division of two values', () => {
    expect(dividir(10, 2)).toBe(5);
});

// test('', () => {
//     expect(textPrinter("text", "function")).toBe("text");
// });



// Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.



// Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary())

const getEmployee = require('../../entrega-1-3/n2-e1.js');

test('', () => {
    return getEmployee(2).then(str => {
        expect(str).toBe('Bill Gates')
    })
});

const getSalary = require('../../entrega-1-3/n2-e2.js');

test('', () => {
    return getSalary(employees[0]).then(num => {
        expect(num).toBe(4000)
    })
});

