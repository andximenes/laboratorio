"use strict"

const employees = [
    { name: "Sarah", age: 25 },
    { name: "Carlos", age: 32 },
    { name: "João", age: 17 }
]

const allAdults = employees.every((employee) => {
    return employee.age > 18
})

console.log(allAdults)