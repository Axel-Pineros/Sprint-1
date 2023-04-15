// Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

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

const getEmployee = (e) => {
    return new Promise((resolve, reject) => {
        const employeeObject = employees.find(item => item.id === e);
        if (employeeObject) {
            resolve(employeeObject.name);
        } else {
            reject("¡Aquest id no té associat cap employee!");
        }
    });
}

getEmployee(2)
    .then((resultado) => {
        return resultado;
    })
    .catch((error) => {
        console.error(error);
    });

module.exports = getEmployee;