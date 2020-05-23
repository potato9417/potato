const todoForm = document.querySelector(".js-todo"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");


const TODO_LS = "todo";

let todos = [];

function delTodo(e){
    console.dir(e.teaget);
    console.log(e.target.parentNode);
    const clickedbtn = e.target,
        clickedli = clickedbtn.parentNode;

    todoList.removeChild(clickedli);
    const changeTodo = todos.filter(function(todo){
        return todo.id !== parseInt(clickedli.id);
    })
    todos = changeTodo;
    savetodoLS()
}

function savetodoLS(){
    localStorage.setItem(TODO_LS,JSON.stringify(todos));
}

function showTodo(text){
    console.log(text);
    const li = document.createElement("li"),
        delBtn = document.createElement("button"),
        span = document.createElement("span"),
        todoObj = {text:text,id:todos.length+1};
    
    delBtn.innerText = "X";
    delBtn.addEventListener("click",delTodo);
    span.innerText = text;
    li.append(span);
    li.append(delBtn);
    li.id=todos.length+1;
    todoList.appendChild(li);
    todos.push(todoObj)
}

function submitTodo(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    showTodo(currentValue);
    todoInput.value = "";
    savetodoLS();
}

function loadTodo(){
    const todo = localStorage.getItem(TODO_LS);
    if(todo!==null){
        console.log(todo);
        const parsedTodo = JSON.parse(todo);
        console.log(parsedTodo)
        parsedTodo.forEach(function(todo){
            // console.log(todo.text)
            showTodo(todo.text);
        });
    }
}

function init(){
    loadTodo();
    todoForm.addEventListener("submit", submitTodo);

}

init();