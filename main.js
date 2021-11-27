const todos = [
    {
        text: "Take out the trash",
        isCompleted: false,
    },
];

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
});
var text = document.getElementById("error-text")


function addTodo(e) {
    const input = document.getElementById("task");
    if (input.value == "") {
        setError(task)
    }
    else {
        text.innerHTML = ""
        task.style.borderColor =  ""
        todos.push({
            text: input.value,
            isCompleted: false
        })
    }
    input.value = "" // clear input field value
    displayTodos()
}


function setError(){
    text.innerHTML = "Todo can't be empty"
    text.style.color = "#ff0000"
    task.style.borderColor =  "#ff0000"
}

function toggleTodo(todoIndex) {
    todos[todoIndex].isCompleted = !todos[todoIndex].isCompleted
    displayTodos()
}

function deleteTodo(todoIndex) {
    todos.splice(todoIndex, 1)
    displayTodos()
}

function displayTodos() {
    const list = document.getElementById("todo-items-list")
    list.innerHTML = "" // clear todo list before appending todos again

    todos.forEach((todo, todoIndex) => {
        const listItem = document.createElement("li")
        listItem.className = "list-items"

        const checkbox = createCheckbox(todo, todoIndex)
        const text = createTodoText(todo, todoIndex)
        const deleteButton = createDeleteButton(todo, todoIndex)

        listItem.append(checkbox)
        listItem.append(text)
        listItem.append(deleteButton)

        list.append(listItem)
    })
}

function createCheckbox(todo, todoIndex) {
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = todo.isCompleted
    checkbox.addEventListener("change", e => {
        e.preventDefault()
        toggleTodo(todoIndex)
    })
    return checkbox
}

function createTodoText(todo, todoIndex) {
    const text = document.createElement("p")
    text.innerText = todo.text
    if (todo.isCompleted) {
        text.classList += "checked"
    }
    return text
}

function createDeleteButton(todo, todoIndex) {
    const deleteButton = document.createElement("i")
    deleteButton.className = "fas fa-trash-alt"
    deleteButton.addEventListener("click", e => {
        e.preventDefault()
        deleteTodo(todoIndex)
    })
    return deleteButton
}

displayTodos()