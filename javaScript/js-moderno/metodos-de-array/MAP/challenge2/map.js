// a empresa aprovou aumentos salariais diferentes conforme o cargo.
// - Desenvolvedores recebem 20% de aumento.
// - Analistas recebem 10%.
// - Estagiários não recebem aumento.

"use strict"

const employees = [
    { id: 1, name: "Sarah", role: "Developer", salary: 5000 },
    { id: 2, name: "Carlos", role: "Analyst", salary: 3500 },
    { id: 3, name: "João", role: "Intern", salary: 1500 },
    { id: 4, name: "Fernanda", role: "Developer", salary: 6500 }
]

const updatedEmployees = employees.map((employee) => {
    let salary = employee.salary

    if(employee.role === "Developer") {
        salary = salary + (salary * 0.20)
    } else if (employee.role === "Analyst") {
        salary = salary + (salary * 0.10)
    }

    return {
        ...employee,
        salary
    }
})

console.log("Original: ", employees)
console.log("Copy: ", updatedEmployees)