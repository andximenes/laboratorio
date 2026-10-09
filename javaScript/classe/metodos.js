class User {
    constructor (name, email) {
        this.name = name
        this.email = email
    }

    sendEmail () {
        console.log( `Mensagem enviada com sucesso para ${this.name}, no email ${this.email}`)
    }
}

const user1 = new User ("Jhon", "john@email.com")
user1.sendEmail()

//classe estática
class Watch {
    static mensage() {
        console.log("on 🔥")
    }
}

Watch.mensage()