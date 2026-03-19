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

/**
 * Authenticates the users
 * 
 * @param {String} email user email.
 * @param {String} password more than 6 characters.
 * @returns {Number} user id.
 */

function singIn(email, password){
    // fluxo de automação do usuário

    return 7
}

console.log(
    singIn("andre1ximenes@gmail.com", "1234567")
)

