//VERSION 4 --------------------------------------------------------------------------------------------------

let todoList = {
    todos: [], 

    displayTodos: function() {
        console.log('My Todos:', this.todos);
    }, 

    addTodo: function(todoText) {
       
        this.todos.push({
            todoText: todoText,
            completed: false
        });

        this.displayTodos();
    },

    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    }, 

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

todoList.addTodo('visit Grandma');
todoList.addTodo('Mow the Lawn');
todoList.addTodo('Wash the Dishes');
todoList.changeTodo(2, 'Break the Dishes');
todoList.toggleCompleted(1);
todoList.toggleCompleted(0);