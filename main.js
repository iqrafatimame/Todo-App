var todoIndex = 0
var errorText = document.getElementById("error-text")
var todoText = document.getElementById("task")

const form = document.getElementById('form')
form.addEventListener('submit', e => {
    e.preventDefault()
})

function setError(){
    errorText.innerHTML = "Todo can't be empty"
    errorText.style.color = "#ff0000"
    todoText.style.borderColor =  "#ff0000"
}

function addTodo(){
    //const task = document.getElementById('task')
    if(todoText.value == ""){
        setError()
    }
    else{
    const todoItem = 
    `<li id=task${todoIndex}>
        <div class="list-items">
            <input type="checkbox" onchange="completedTodo('task${todoIndex}')" />
            <p class="todo-text">${todoText.value}</p>
        </div>
        <i class="fas fa-trash-alt" onclick="deleteTodo('task${todoIndex}')"></i>
    </li>`
    document.getElementById('todo-items-list').innerHTML += todoItem    
    todoIndex++

    todoText.value = ""
    }
}

function deleteTodo(todoIndex){
    const todo = document.getElementById(todoIndex)
    todo.remove()
}

function completedTodo(todoIndex){
    const todoItem = document.getElementById(todoIndex)
    
    if(todoItem.children[0].children[0].checked){
        todoItem.children[0].children[1].style.textDecoration = "line-through"
    } else{
        todoItem.children[0].children[1].style.textDecoration = "none"
    }
}