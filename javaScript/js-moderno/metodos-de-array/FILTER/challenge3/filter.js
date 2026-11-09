"use strict"

const employees = [
    { 
        id: 1, 
        name: "Sarah", 
        department: "IT", 
        active: true, 
        age: 29 
    },
    { id: 2, name: "Carlos", department: "HR", active: true, age: 35 },
    { id: 3, name: "João", department: "IT", active: false, age: 24 },
    { id: 4, name: "Fernanda", department: "IT", active: true, age: 17 },
    { id: 5, name: "Mariana", department: "IT", active: true, age: 31 },
    { id: 6, name: "Pedro", department: "IT", active: true, age: 18 }
]

const eligibleEmployees = employees.filter((employee) => {
    const {department, active, age} = employee

    return department === "IT" && active === true && age >= 18
})

console.log("Lista Original: ", employees)
console.log("Funcionários selecionados: ", eligibleEmployees)
  