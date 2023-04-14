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

const getEmployee = () => {
    return new Promise((resolve, reject) => {
        // Canvia el valor d'aquesta variable per obtenir el nom de l'employee amb un id igual al número de la variable
        const idSearch = 3;
        const employeeObject = employees.find(item => item.id === idSearch);
        if (employeeObject) {
            resolve(employeeObject.name);
        } else {
            reject("¡Aquest id no té associat cap employee!");
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