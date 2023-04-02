// Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.

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

async function resultatFinal(e) {
    getEmployee(e).
        then((resultado) => {
            console.log(resultado);
        })
        .catch((error) => {
            console.error(error);
        });
    getSalary(e)
        .then((resultado) => {
            console.log(resultado);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Canvia el valor d'aquesta variable per obtenir el nom de l'employee amb un id igual al número de la variable
const idSearch = 3;

const getEmployee = (e) => {
    return new Promise((resolve, reject) => {
        const employeeObject = employees.find(item => item.id === e);
        if (employeeObject !== undefined) {
            resolve(`El nom de l'employee és ${employeeObject.name}`);
        } else {
            reject("¡Aquest id no té associat cap nom!");
        }
    });
}

const getSalary = (e) => {
    return new Promise((resolve, reject) => {
        const employeeObject = employees.find(item => item.id === e);
        if (employeeObject !== undefined) {
            const objectSalaries = salaries.find(item => item.id === e);
            resolve(`${employeeObject.name} té un salari de ${objectSalaries.salary}`);
        } else {
            reject("¡Aquest id no té associat cap salari!");
        }
    });
}

resultatFinal(idSearch);