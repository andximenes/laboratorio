const inputTask = document.getElementById("input-task")
const addBtn = document.getElementById("addBtn")
const taskItem = document.getElementById("taskItem")

const tasks = []

function renderTask() {
    taskItem.innerHTML = ""

    for(let i = 0; i < tasks.length; i++) {
        taskItem.innerHTML += `
            <div class="item" >
                <span>${tasks[i]}</span>
                <button class="remove-btn" onclick="removeTask(${i})">Remove</button>
            </div>
        `
    }
}

function removeTask(index) {
    tasks.splice(index, 1)
    renderTask()
}


addBtn.addEventListener("click", () =>{
    //validation
    const item = inputTask.value.trim()
    if(item === ""){
        return alert("Field empty")
    }

    tasks.push(item)

    renderTask()

    inputTask.value = ""
    inputTask.focus()
})