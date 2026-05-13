const formTarefa = document.getElementById("formTarefa")
const inputTarefa = document.getElementById("inputTarefa")
const listaTarefas = document.getElementById("listaTarefas")

//cria uma tarefa
function adicionarTarefasNaTela(tarefa) {
    const item = document.createElement("li")
    item.classList.add("tarefa-item")
    item.innerHTML = `
        <div class="tarefa-info">
            <span class="tarefa-titulo">${tarefa.titulo}</span>
            <span class= "tarefa-status">${tarefa.concluida === 1 ? "Concluída" : "Pendente"}</span>
        </div>
        <div class= "tarefa-acoes">
            <button onclick= "incluirTarfefa(${tarefa.id}, this)">Concluir</button>
            <button onclick= "excluirTarefa(${tarefa.id}, this)">Excluir</button>
        </div>
    `
    listaTarefas.appendChild(item) //coloca a li que criamos dentro da ul (pai) para aparecer na tela
}

//lê (mostra) as tarefas criadas
async function carregarTarefas() {
    const resposta = await fetch("/tarefas") //vá até a rota /tarefas e espere a resposta da API. Quando chegar a resposta, armazene na variável resposta.

    const tarefas = await resposta.json() //pegue o JSON que veio da API e transforme em dados JavaScript. Armazene esses dados na variável tarefas. Nossa API retorna um array de tarefas, então a variável tarefas vai conter esse array.

    //para cada item dentro do array tarefas, pegue esse item, chame ele temporariamente de tarefa, e execute a função adicionarTarefasNaTela passando essa tarefa. Assim, cada tarefa do array vai ser adicionada na tela.
    tarefas.forEach((tarefa) => {
        adicionarTarefasNaTela(tarefa)
    })
}

//incluir tarefa
async function incluirTarefa(id, botao) {
    const item = botao.closest("li")
    const titulo = item.querySelector(".tarefa-titulo").textContent

    const resposta = await fetch(`/tarefa/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application.json"
        },
        body: JSON.stringify({
            titulo: titulo,
            concluida: 1
        })
    })
    const tarefaAtualizada = await resposta.json()

    if(!resposta.ok) {
        alert(tarefaAtualizada.mensagem || "Erro ao tentar atualizar a tarefa")
        return
    }
    const status = item.querySelector(".tarefa-status").textContent
    status.textContent = "Concluida"
}

//exclui uma tarefa
async function excluirTarefa(id, botao) {
    //envie uma requisição para a API pedindo para excluir a tarefa com esse id.
    const resposta = await fetch(`/tarefas/${id}`, {
        method: "DELETE"
    })

    //se não ok, ou seja, se for diferente de bem sucedida
    if(!resposta.ok) {
        alert("Erro ao excluir tarefa")
        return
    }
    //a partir desse botão, suba no HTML até encontrar o <li> mais próximo, que é o item da tarefa, e remova ele da tela.
    const item = botao.closest("li")
    item.remove()
}

formTarefa.addEventListener("submit", async (event) => {
    //impede a página de recaregar quando enviamos uma tarefa
    event.preventDefault()

    const titulo = inputTarefa.value

    //“Faça uma requisição para /tarefas e espere a resposta. Quando a resposta chegar, guarde na variável resposta
    const resposta = await fetch("/tarefas", {
        method: "POST", //servidor estou criando algo
        //Use o método POST, porque estou enviando dados para criar uma nova tarefa.
        method: "POST",
        //Estou avisando ao servidor que o conteúdo que estou enviando no body está em formato JSON
        headers: {
            "content-type": "application/json" //estou enviando dados em formato JSON
        },
        //Envie no corpo da requisição um JSON contendo o título da tarefa
        body: JSON.stringify({ 
            titulo: titulo //servidor esses são os dados da nova tarefa
        })
    })

    //abri o conteúdo da resposta e transformei em objeto JavaScript
    const dado = await resposta.json()

    if (!resposta.ok) {
        alert(dado.mensagem || "Erro ao criar tarefa")
        return
    }

    adicionarTarefasNaTela(dado)
    inputTarefa.value = ""

})

//mostra as tarefas criadas na tela quando a página é carregada
carregarTarefas()
