const taskForm = document.getElementById("taskForm")
const taskInput = document.getElementById("taskInput")
const taskList  = document.getElementById("taskList")

function hasResponseError(response, data) {
    if (!response.ok) {
        alert(data.message)
        return true
    }

    return false
}

taskForm.addEventListener("submit", async (event) => {
    event.preventDefault()

    const title = taskInput.value.trim()

    if (title === "") {
        alert("Digite uma tarefa")
        return
    }

    try {
        const response = await fetch("/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                isCompleted: 0
            })
        })

        const data = await response.json()

        if (hasResponseError(response, data)) {
            return
        }

        console.log("Tarefa criada com sucesso!", data)

        taskInput.value = ""

        loadTasks()

    } catch (error) {
        console.log("Erro ao tentar criar tarefa.", error)
        alert("Erro ao tentar criar tarefa.")
    }
})

async function loadTasks() {
    try {
        const response = await fetch("/tasks")
        const data = await response.json()

        if (hasResponseError(response, data)) {
            return
        }

        taskList.innerHTML = ""

        data.tasks.forEach((task) => {
            const li = document.createElement("li")
            const span = document.createElement("span")
            const status = document.createElement("small")
            const editButton = document.createElement("button")
            const toggleButton = document.createElement("button")
            const deleteButton = document.createElement("button")

            span.textContent = task.title

            if (task.isCompleted === 1) {
                status.textContent = "Concluída"
                toggleButton.textContent = "Reabrir"
            } else {
                status.textContent = "Pendente"
                toggleButton.textContent = "Concluir"
            }

            editButton.textContent = "Editar"
            editButton.addEventListener("click", async () => {
                await editTask(task)
            })

            toggleButton.addEventListener("click", async () => {
                await toggleTaskStatus(task)
            })

            deleteButton.textContent = "Excluir"
            deleteButton.addEventListener("click", async () => {
                await deleteTask(task.id)
            })

            li.appendChild(span)
            li.appendChild(status)
            li.appendChild(editButton)
            li.appendChild(toggleButton)
            li.appendChild(deleteButton)

            taskList.appendChild(li)
        })

    } catch (error) {
        console.log(`Erro ao carregar as tarefas: ${error.message}`)
        alert("Erro ao carregar as tarefas")
    }
}

async function deleteTask(id) {
    try {
        const response = await fetch(`/tasks/${id}`, {
            method: "DELETE"
        })

        const data = await response.json()

        if (hasResponseError(response, data)) {
            return
        }

        console.log("Tarefa excluída com sucesso")

        loadTasks()

    } catch (error) {
        console.log(`Erro ao deletar tarefa: ${error.message}`)
        alert("Erro ao deletar tarefa")
    }
}

async function editTask(task) {
    const newTitle = prompt("Digite o novo título da tarefa:", task.title)

    if (newTitle === null) {
        return
    }

    const formattedTitle = newTitle.trim()

    if (formattedTitle === "") {
        alert("O título da tarefa não pode ser vazio")
        return
    }

    try {
        const response = await fetch(`/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: formattedTitle,
                isCompleted: task.isCompleted
            })
        })

        const data = await response.json()

        if (hasResponseError(response, data)) {
            return
        }

        console.log("Tarefa atualizada com sucesso")

        loadTasks()

    } catch (error) {
        console.log(`Erro ao editar tarefa: ${error.message}`)
        alert("Erro ao editar tarefa")
    }
}

async function toggleTaskStatus(task) {
    try {
        const newStatus = task.isCompleted === 1 ? 0 : 1

        const response = await fetch(`/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: task.title,
                isCompleted: newStatus
            })
        })

        const data = await response.json()

        if (hasResponseError(response, data)) {
            return
        }

        console.log("Status da tarefa modificado com sucesso")

        loadTasks()

    } catch (error) {
        console.log(`Erro ao atualizar tarefa: ${error.message}`)
        alert("Erro ao atualizar tarefa")
    }
}

loadTasks()