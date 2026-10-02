const people = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 18,
    address: {
        street: "Anytown",
        city: "New york",
        number: 12345,
        geo: {
            latitude: 47.8080,
            longitude: 17.000
        }
    },
    message: function () {
        return `Name: ${this.firstName}, Age: ${this.age}, address: ${this.address.city}`
    }

}

console.log(people.message())


//coalescência

const content = null
const content2 = undefined
const content3 = true

console.log(content ?? "standard message")
console.log(content2 ?? "standard message")
console.log(content3 ?? "standard message")

const user = {
    name : "John",
    picture: undefined
}

console.log(user.picture ?? "standard message")