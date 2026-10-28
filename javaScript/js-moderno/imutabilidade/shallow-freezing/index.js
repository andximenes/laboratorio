// "use strict"

//SHALLOW FREEZING
const person = {
    name: "John",
    age: 33
}


Object.freeze(person)

person.name = "Mary"

console.log(person)


const student = {
    name: "Carl",
    age: 12,
    address: {
        state: "Massachusetts",
        city: "Boston"
    }
}

Object.freeze(student)

student.address.city = "Cambridge"

console.log(student.address.city)

//DEEP FREEZING

Object.freeze(student.address)
Object.freeze(student)

student.address.state = "São Paulo"
student.address.city = "São Paulo"

console.log(student)