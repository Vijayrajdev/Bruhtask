// Selectors
const taskInput = document.getElementById('tasks')
const addButton = document.querySelector('.addbutton')
const completedButton = document.querySelector('.completedbutton')
const editButton = document.querySelector('.editbutton')
const deleteButton = document.querySelector('.deletebutton')
const taskList = document.querySelector('.list__task')


// Eventlisteners
addButton.addEventListener('click', () => addTodo())

// Functions
const addTodo = () => {
    let element = document.createElement('div')
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
          <ion-icon name="checkmark-done-outline"></ion-icon>
        </button>
      </div>
      <div class="d-flex">
        <button type="button" class="btn btn-outline-success editbutton mr-1">
          <ion-icon name="create-outline"></ion-icon>
        </button>
        <button type="button" class="btn btn-outline-danger deletebutton">
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>`
    element.innerHTML = taskTemplate
    taskList.appendChild(element)
}
