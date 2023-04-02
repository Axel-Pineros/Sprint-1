// Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

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

// Canvia el valor d'aquesta variable per obtenir el nom de l'employee amb un id igual al número de la variable
const idSearch = 3;

const getEmployee = () => {
    return new Promise((resolve, reject) => {
        const employeeObject = employees.find(item => item.id === idSearch);
        if (employeeObject !== undefined) {
            resolve(`El nom de l'employee és ${employeeObject.name}`);
        } else {
            reject("¡Aquest id no té associat cap nom!");
        }
    });
}

const getSalary = (e) => {
    return new Promise((resolve, reject) => {
        if (e !== undefined) {
            let employeeId = e.id;
            let objectSalaries = salaries.find(item => item.id === employeeId);
            resolve(`${e.name} té un salari de ${objectSalaries.salary}`);
        } else {
            reject("¡Aquest id no té associat cap salari!");
        }
    });
}

getEmployee()
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error);
    });

getSalary(employees[idSearch - 1])
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error);
    });