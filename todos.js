//VERSION 7 --------------------------------------------------------------------------------------------------

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
    },

    toggleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
                                                //IF EVERYTHING IS TRUE, MAKE EVERYTHING FALSE..
        if (completedTodos === totalTodos) {
            
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            } 
            
        } else {                                //OTHERWISE, MAKE EVERYTHING TRUE..  
               
                for (let i = 0; i < totalTodos; i++) {
                   this.todos[i].completed = true;
                }
            }    
        this.displayTodos();
    }

};

let displayTodosButton = document.getElementById('displayTodosButton');

displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
});

let toggleAllButton = document.getElementById('toggleAllButton');

toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll();
});

todoList.addTodo('visit Grandma');
todoList.addTodo('be kind to dear old Grandma');