// Selectors
const taskInput = document.getElementById('tasks')
const addButton = document.querySelector('.addbutton')
const taskList = document.querySelector('#list__task')
const completedTaskList = document.querySelector('#list__completed')
const countSpace = document.querySelector('.Count-space')
const saveContainer = document.querySelector('.save-container')

// Eventlisteners
addButton.addEventListener('click', addTodo)
taskList.addEventListener('click', deleteTask)
taskList.addEventListener('click', editTask)
taskList.addEventListener('click', saveEdits)

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
      <div class="d-flex buttoncontainer">
        <button type="button" class="btn btn-outline-success editbutton mr-1">
          <ion-icon name="create-outline" class="edit-button"></ion-icon>
        </button>
        <button type="button" class="btn btn-outline-danger deletebutton mr-1">
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

// Deleting & Checking Task
function deleteTask(e) {
  const item = e.target

  // delete task
  if (item.classList[0] === "delete-button") {
    const todo = item.parentElement.parentElement.parentElement.parentElement
    todo.remove()
  } else if (item.classList[2] === 'deletebutton') {
    const todo = item.parentElement.parentElement.parentElement
    todo.remove()
  }

  // Check task
  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement.parentElement.childNodes[1]
    todo.classList.toggle('completed')
  } else if (item.classList[1] === "completedbutton") {
    const todo = item.parentElement.childNodes[1]
    todo.classList.toggle('completed')
  }
}

// Editing task

function editTask(e) {
  const item = e.target
  const buttonContainer = document.querySelector(".buttoncontainer")
  // Edit task
  if (item.classList[0] === 'edit-button') {
    let ele = document.createElement('button')
    ele.classList.add('savebutton')
    ele.classList.add("btn,btn-outline-success")
    ele.innerHTML = `<button type="button" class="btn btn-outline-success mr-1">
          <ion-icon name="checkmark-done-outline" class="save-button"></ion-icon>
        </button>`
    buttonContainer.appendChild(ele)
    const todo = item.parentElement.parentElement.parentElement.childNodes[1].childNodes[1]
    console.log(todo);
    todo.setAttribute('contenteditable', "true")
  }
}

// Save Editing
function saveEdits(e) {
  const item = e.target
  const buttonContainer = document.querySelector(".savebutton")
  //save edit
  if (item.classList[0] === "save-button") {
    const todo = item.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[1]
    todo.setAttribute('contenteditable', "false")
    buttonContainer.remove()
  }
}