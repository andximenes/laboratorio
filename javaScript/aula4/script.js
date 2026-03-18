//OPERADOR TERNÁRIO

let age = 18

console.log( 
    age >= 18 //condição
    ? "Sim"   //Se verdadeiro
    : "Não"   //Se falso  
)


//ESTRUTURA DE CONDIÇÃO IF
let hour = 6

if(hour >= 6 ){
    console.log(
        "Boa noite"
    )
}

//IF ELSE
let color = "red"

if(color === "red"){
    console.log(color)
}else{
    console.log("you wrong!")
}

//IF, ELSE IF
let amount = 500
let withdrawal = 700

if(withdrawal <= amount){
    amount -= withdrawal
    console.log(`Saque realizado! Saldo atual: R$${amount}`)
}else if(withdrawal > amount){
    console.log(`Saldo insuficiente! saldo atual: R$${amount}`)
}

//SWITCH

let option = 1

switch(option){
    case 1:
        console.log("Consultar pedido")
        break
    case 2:
        console.log("Falar com um atendente")
        break
    case 3:
        console.log("Cancelar pedido")
        break
    default:
        console.log("Opção inválida")
}