//Pega os elementos do html
const inputTask = document.getElementById("task")
const btnAddTask = document.getElementById("btnAddTask")
const tasklist = document.getElementById("tasksList")

//lista de tarefas
const list = []

//clique no botão de adicionar
btnAddTask.addEventListener("click", () => {
  const taskText = inputTask.value.trim()

  if (taskText === "") {
    return alert("Por favor, digite uma tarefa")
  }

  tasklist.classList.remove("hide")

  //adiciona (empurra) uma nova tarefa no array. Ela começa como não conluída
  list.push({
    text: taskText,
    done: false 
  })

  renderTasks()

  inputTask.value = ""
  inputTask.focus()

})

function renderTasks() {
  tasklist.innerHTML = ""

  for (let i = 0; i < list.length; i++) {
    tasklist.innerHTML += `
      <div class="task-item ${list[i].done ? "completed" : ""}">
        <div class="task-left">
          <input type="checkbox" class="task-radio" ${list[i].done ? "checked" : ""} onchange="toggleTask(${i})">
          <span>${list[i].text}</span>
        </div>

        ${list[i].done ? `
          <button class="delete-btn" onclick="removeTask(${i})">
            <i class="fa-solid fa-trash"></i>
          </button>
        ` : ""}
      </div>
    `
  }
}

function toggleTask(index) {
  list[index].done = !list[index].done
  renderTasks()
}

function removeTask(index) {
  list.splice(index, 1)
  renderTasks()

  if (list.length === 0) {
    tasklist.classList.add("hide")
  }
}


