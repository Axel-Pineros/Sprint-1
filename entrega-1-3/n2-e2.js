// Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getSalary = (e) => {
    return new Promise((resolve, reject) => {
        if (e) {
            let employeeId = e.id;
            let objectSalaries = salaries.find(item => item.id === employeeId);
            resolve(objectSalaries.salary);
        } else {
            reject("¡Aquest employee no existeix!");
        }
    });
}

getSalary(employees[0])
    .then((resultado) => {
        return resultado;
    })
    .catch((error) => {
        return error;
    });

module.exports = { getSalary, salaries, employees };