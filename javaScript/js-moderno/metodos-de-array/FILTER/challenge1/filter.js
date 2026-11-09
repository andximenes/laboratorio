"use strict"

const employees = [
    { id: 1, name: "Sarah", salary: 2500 },
    { id: 2, name: "Carlos", salary: 4500 },
    { id: 3, name: "João", salary: 1800 },
    { id: 4, name: "Fernanda", salary: 7200 },
    { id: 5, name: "Mariana", salary: 3000 }
]

const highSalaryEmployees = employees.filter((employee) => {
    return employee.salary > 3000
})

console.log(highSalaryEmployees)