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

const getEmployee = (e) => {
    return new Promise((resolve, reject) => {
        const employeeObject = employees.find(item => item.id === e);
        employeeObject ? resolve(employeeObject.name) : reject("¡Aquest id no té associat cap employee!");
    });
}

getEmployee(2)
    .then((resultado) => {
        return resultado;
    })
    .catch((error) => {
        return error;
    });

module.exports = getEmployee;