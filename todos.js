//VERSION 5 --------------------------------------------------------------------------------------------------

let todoList = {
    todos: [], 

    displayTodos: function() {
        
        if (this.todos.length === 0) {  

            console.log('Your todo list is empty!');
            
        } else {
            console.log('My Todos:');

            for (let i = 0; i < this.todos.length; i++) {

                if (this.todos[i].completed === false) {

                    console.log('( )', this.todos[i].todoText);

                } else {

                    console.log('(x)', this.todos[i].todoText);

                }
            }
        }
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

todoList.displayTodos();
todoList.addTodo('visit Grandma');
todoList.addTodo('Mow the Lawn');
todoList.addTodo('Wash the Dishes');
todoList.changeTodo(2, 'Break the Dishes');
todoList.toggleCompleted(1);
todoList.toggleCompleted(0);