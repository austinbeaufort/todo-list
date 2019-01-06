//VERSION 1 ----------------------------------------------------------------------------

let todos = ['item 1', 'item 2', 'item 3'] //A list in JS is called an Array

//add items
todos.push('item 4');
todos.push('item 5');

//change items
todos[0] = 'item 1 updated';

//deleting items
todos.splice(0, 1);
todos.splice(3, 1);





console.log('My todos:', todos);