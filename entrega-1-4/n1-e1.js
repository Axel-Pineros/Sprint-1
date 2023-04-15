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

const getEmployee = (e) => {
    if (e === null || e === undefined || e === '') {
        throw new Error(`No s'ha cercat res`);
    }
    if (typeof e !== "number") {
        throw new Error(`S'ha de cercar un número`);
    }
    if (e < 1) {
        throw new Error(`Els id comencen en 1`);
    }

    return new Promise((resolve, reject) => {
        const employeeFound = employees.find(item => item.id === e);
        if (employeeFound) {
            resolve(`El nom de l'employee és ${employeeFound.name}`);
        }
        else {
            reject(`Aquest id no té associat cap nom!`);
        }
    });
}

const getSalary = (e) => {
    if (e === null || e === undefined || e === '') {
        throw new Error(`No s'ha cercat res`);
    }
    if (typeof e !== "number") {
        throw new Error(`S'ha de cercar un número`);
    }
    if (e < 1) {
        throw new Error(`Els id comencen en 1`);
    }
    return new Promise((resolve, reject) => {
        const employeeFound = employees.find(item => item.id === e);
        if (employeeFound) {
            const employeeSalary = salaries.find(item => item.id === e);
            resolve(`${employeeFound.name} té un salari de ${employeeSalary.salary}`);
        } else {
            reject("Aquest id no té associat cap salari!");
        }
    });
}

resultatFinal(2);

