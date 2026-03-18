//OPERADOR TERNÁRIO

age = 18

console.log( 
    age >= 18 //condição
    ? "Sim"   //Se verdadeiro
    : "Não"   //Se falso  
)


//ESTRUTURA DE CONDIÇÃO IF
hour = 6

if(hour >= 6 ){
    console.log(
        "Boa noite"
    )
}

//IF ELSE
color = "red"

if(color === "red"){
    console.log(color)
}else{
    console.log("you wrong!")
}

//IF, ELSE IF
amount = 500
withdrawal = 700

if(withdrawal <= amount){
    amount -= withdrawal
    console.log(`Saque realizado! Saldo atual: R$${amount}`)
}else if(withdrawal > amount){
    console.log(`Saldo insuficiente! saldo atual: R$${amount}`)
}