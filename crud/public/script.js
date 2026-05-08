const formTarefa = document.getElementById("formTarefa")
const inputTarefa = document.getElementById("inputTarefa")
const listaTarefas = document.getElementById("listaTarefas")


formTarefa.addEventListener("submit", (event) => {
    //impede a página de recaregar quando enviamos uma tarefa
    event.preventDefault()

    const titulo = inputTarefa.value
    console.log(`Titulo digitado: ${titulo}`)
})
