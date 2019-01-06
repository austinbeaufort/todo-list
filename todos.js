// VERSION 2 ------------------------------------------------------------------------

todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
    console.log('My todos:', todos);
}

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}



changeTodo(0, 'changed');
changeTodo(0, 'changed again');
deleteTodo(0);
addTodo('be kind');
addTodo('eat pizza');
deleteTodo(2);