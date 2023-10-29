const form = document.querySelector('#new-todo-form')
const todoInput = document.querySelector('#todo-input')
const list = document.querySelector('#list')
const template = document.querySelector('#list-item-template')

const LOCAL_STORAGE_PREFIX = 'ADVANCE_TODA_LIST'
const TODO_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`

let todos =  loadTodos()//[] 
todos.forEach(renderTodo);

list.addEventListener('change',e=>{

    if(!e.target.matches('[data-list-item-checkbox]')) return 
    // console.log(e.target.checked,e.target);

    const parant = e.target.closest('.list-item')
    const todoId = parant.dataset.todoId
    const todo = todos.find(element => element.id === todoId)

    todo.complete = e.target.checked
    saveTodo()

})

list.addEventListener('click',e=>{
    if(!e.target.matches('[data-button-delete]')) return
    const parant = e.target.closest('.list-item')
    const todoId = parant.dataset.todoId

    //remove the todo from the screen
    parant.remove()
    //remove the todo from the list 
    todos = todos.filter(todo => todo.id !== todoId)

    //save new todo 
    saveTodo()

})
// Add Todos
// User will type Todos and click add todos button . 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoName = todoInput.value

    if (todoName === '') return
    const newTodo = {
        id: new Date().valueOf().toString(),
        name: todoName,
        complete: false
    }

    todos.push(newTodo)
    renderTodo(newTodo)

    // const li = document.createElement('li')
    // li.innerHTML = todoInput.value
    // list.appendChild(li)
    saveTodo()
    todoInput.value = ''

})
//This should then add the Todos list to the list above 

function renderTodo(todo) {
    const templeteClone = template.content.cloneNode(true)
    const listItem = templeteClone.querySelector('.list-item')
    listItem.dataset.todoId = todo.id
    // console.log(templeteClone);
    const textElement = templeteClone.querySelector('[data-list-item-text]')
    textElement.innerHTML = todo.name
    const checkbox  = templeteClone.querySelector('[data-list-item-checkbox]')
    checkbox.checked = todo.complete
    list.appendChild(templeteClone)

}

// Save Todos 
function saveTodo() {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos))

}

// Delete Todos

// Complete Todos
// function completeTodo(){

// }

// Load Todos

function loadTodos() {
    const todosString = JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || []
    return todosString 
}
