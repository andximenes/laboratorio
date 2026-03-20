//Makimg my first function
/*
function greetings(){
    console.log("Hello World!")
}

greetings()
*/


//------------------------------------------------------------
//Parameter and argument
/*
function name(userName){
    console.log("ola,", userName)
}

 name("André")

 function sum(a, b){
    console.log(`${a} + ${b} = `,a + b)
 }

 sum(37, 9)
*/


//------------------------------------------------------------
//Return values
/*
function sum(a, b){
    let sum = a + b
    return sum
}

let showResult = sum(2, 5)
console.log(showResult)
//ou
console.log(sum(2, 5))
*/


//------------------------------------------------------------
//Function scope

// showMessage("Hello, I'm using the showMessage function ")

// function showMessage(message){
//     console.log(message)
//     endLine()

//     function endLine(){
//         console.log("------")
//     }
// }

// showMessage("I used it!")

//------------------------------------------------------------
//Comentário de documentação

// /**
//  * Authenticates the users
//  * 
//  * @param {String} email user email.
//  * @param {String} password more than 6 characters.
//  * @returns {Number} user id.
//  */

// function singIn(email, password){
//     // fluxo de automação do usuário

//     return 7
// }

// console.log(
//     singIn("andre1ximenes@gmail.com", "1234567")
// )

//------------------------------------------------------------
//Anonymous function

//without param
// let greetings1 = function(){
//     console.log("Hello my friend!")
// }

// console.log(greetings1())

// // with param
// let greetins2 = function(name){
//     console.log(`My name is ${name}`)
// }

// console.log(greetins2("André"))


//------------------------------------------------------------
// Arrow Function


//Exemple 1
let showMessage = () => {
    console.log("I'm a Arrow function")
}

showMessage()

//exemplo 2

let showMessage2 = (userName, email) => {
    console.log(`Hi, ${userName}, this is your email: ${email}`)
}

showMessage2("André", "andre'ximenes92@gmail.com")

