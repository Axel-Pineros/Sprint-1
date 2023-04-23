const datos = require('./fitxer.json');

const getEmployee = (e) => {
    return new Promise((resolve, reject) => {
        const employeeObject = datos.employees.find(item => item.id === e);
        employeeObject ? resolve(employeeObject.name) : reject("Aquest id no té associat cap employee!");
    });
}

getEmployee()
    .then((resultado) => {
        return resultado;
    })
    .catch((error) => {
        return error;
    });

const getSalary = (e) => {
    return new Promise((resolve, reject) => {
        if (e) {
            let employeeId = e.id;
            let objectSalaries = datos.salaries.find(item => item.id === employeeId);
            resolve(objectSalaries.salary);
        } else {
            reject("Aquest employee no existeix!");
        }
    });
}

getSalary()
    .then((resultado) => {
        return resultado;
    })
    .catch((error) => {
        return error;
    });

module.exports = { getSalary, getEmployee };