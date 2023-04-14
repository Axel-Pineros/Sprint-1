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

// Canvia el valor d'aquesta variable per obtenir el salari corresponent a l'id del nombre de la variable.
const idSearch = 1;

const getSalary = (e) => {
    return new Promise((resolve, reject) => {
        if (e) {
            let employeeId = e.id;
            let objectSalaries = salaries.find(item => item.id === employeeId);
            resolve(objectSalaries.salary);
        } else {
            reject("¡Aquest número no té associat cap employee!");
        }
    });
}

getSalary(employees[idSearch-1])
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error);
    });