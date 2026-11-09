"use strict"

const employees = [
    { id: 1, name: "Sarah", salary: 2500 },
    { id: 2, name: "Carlos", salary: 4500 },
    { id: 3, name: "Fernanda", salary: 7200 },
    { id: 4, name: "João", salary: 1800 }
]

const result = employees.find((employee) => {
    return employee.id === 2

})


if(result === undefined) {
    console.log("Employee not found")
} else {
    console.log("Employe: ", result.name)
}