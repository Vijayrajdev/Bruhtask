// Selectors
const taskInput = document.getElementById('tasks')
const addButton = document.querySelector('.addbutton')
const taskList = document.querySelector('#list__task')
const completedTaskList = document.querySelector('#list__completed')
const countSpace = document.querySelector('.Count-space')

// Eventlisteners
addButton.addEventListener('click', addTodo)
taskList.addEventListener('click', deleteTask)


// Functions

// Adding Task
function addTodo() {

  // For tasks
  let element1 = document.createElement('div')
  element1.classList.add('.task-list')

  // Tasks Adder template
  let taskTemplate = `<div
      class="task__lists d-flex align-items-center justify-content-around mb-3"
    >
      <div
        class="d-flex align-items-center justify-content-between w-75 mr-2"
        style="background-color: #fff"
      >
        <p class="list-group-item form-check">${taskInput.value}</p>
        <button type="button" class="btn completedbutton">
          <ion-icon name="checkmark-done-outline" class="complete-button"></ion-icon>
        </button>
      </div>
      <div class="d-flex">
        <button type="button" class="btn btn-outline-success editbutton mr-1">
          <ion-icon name="create-outline" class="edit-button"></ion-icon>
        </button>
        <button type="button" class="btn btn-outline-danger deletebutton">
        <ion-icon name="trash-outline" class="delete-button"></ion-icon>
        </button>
      </div>
    </div>`

  // For tasks
  if (!taskInput.value) { console.log("error"); }
  else {
    element1.innerHTML = taskTemplate
    taskList.appendChild(element1)
  }
  // Clearing input
  taskInput.value = ""

}

// Deleting Task
function deleteTask(e) {
  const item = e.target
  if (item.classList[0] === "delete-button") {
    const todo = item.parentElement.parentElement.parentElement.parentElement
    todo.remove()
  } else if (item.classList[2] === 'deletebutton') {
    const todo = item.parentElement.parentElement.parentElement
    todo.remove()
  }

  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement.parentElement
    todo.classList.toggle('completed')
  }

  if (item.classList[0] === 'edit-button') {
    const todo = item.parentElement.parentElement.parentElement.parentElement
    todo.setAttribute('contenteditable', "true")
  }

  if (item.classList[2] === 'addbutton') {
    const todo = item.parentElement.parentElement.parentElement.parentElement
    todo.setAttribute('contenteditable', "false")
  }
}
