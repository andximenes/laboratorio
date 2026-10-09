class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }

    introduce () {
        return `My name is ${this.name}`
    }
}

class Employee extends Person {
    constructor (name, age, job){
        super(name, age)
        this.job = job
    }

    showJob () {
        return `I work as ${this.job}`
    }
}

const employee1 = new Employee("John", 22, "Programmer")
console.log(employee1.name)