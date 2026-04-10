console.log("I'm live 🔥" )

//calcula média
function calcMedia (m1, m2, m3) {
    const soma = m1 + m2 + m3
    const media = soma / 3

    return media
}

//Verifica a situação do aluno
function verificaSituacao(finalMedia) {
    if(finalMedia >= 7) {
        return "Aprovado 🚀"
    } else if (finalMedia >= 5) {
        return "Recuperação 🥶"
    } else {
        return "Reprovado 😭❌"
    }
}

const finalMedia = calcMedia(4, 6.2, 9).toFixed(1)
console.log(verificaSituacao(finalMedia))