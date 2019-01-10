// ****** UNDERSTANDING 'THIS' ******


// *** CASE 1 ***

// 'THIS' POINTS TO 'WINDOW' IN A REGULAR FUNCTION

// function logThis() {
//     console.log(this);
// }

// logThis(); // window



// *** CASE 2 ***

// WHEN A FUNCTION IS CALLED AS A METHOD, 'THIS' POINTS TO THE OBJECT
// THAT IS ON THE LEFT SIDE OF THE DOT.

// let myObject = {
//     myMethod: function() {
//         console.log(this);
//     }
// };

// myObject.myMethod();



// *** CASE 3 ***

// IN A FUNCTION THAT'S BEING CALLED AS A CONSTRUCTOR, 'THIS' POINTS TO THE OBJECT
// THAT THE CONSTRUCTOR IS CREATING

// function Person(name) {
//     // this = {};
//     this.name = name;
// }

// new Person('Gordon');



// *** CASE 4 ***

// WHEN YOU EXPLICITLY SET THE VALUE OF 'THIS' MANUALLY USING BIND, APPLY, OR CALL.

// function logThisWithArguments(greeting, name) {
//     console.log(greeting, name);
//     console.log(this);
// }

// logThis();

// let explicitelySetLogThis = logThis.bind( {name: 'Gordon'} );

// explicitelySetLogThis();

// logThis.apply( {name: 'Gordon'} );
// logThis.call( {name: 'Gordon'} );

// function logThisWithArguments(greeting, name) {
//     console.log(greeting, name);
//     console.log(this);
// }

// logThisWithArguments('hi', 'Gordon');

// logThisWithArguments.apply({name: 'Gordon'}, ['hi', 'Gordon']);
// logThisWithArguments.call({name: 'Gordon'}, 'hi', 'Gordon');



// *** CASE 5 ***

// IN A CALLBACK FUNCTION, APPLY THE ABOVE RULES METHODICALLY

// function outerFunction(callback) {
//     callback();
// }

// function logThis() {
//     console.log(this);
// }

// outerFunction(logThis);  // window


