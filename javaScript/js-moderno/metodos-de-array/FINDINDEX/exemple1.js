"use strict"

const employees = [
    { id: 101, name: "Ana" },
    { id: 102, name: "Carlos" },
    { id: 103, name: "Sarah" },
    { id: 104, name: "João" }
]

const employeeIndex = employees.findIndex((employee) => {
    return employee.id === 103
})

if(employeeIndex === -1) {
    console.log("Employee cannot be found")
} else {
    console.log("Employee found inthe index: ", employeeIndex)
}

