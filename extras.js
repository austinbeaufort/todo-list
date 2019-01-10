// VERSION 3 ----------------------------------------------------------------------

let students = ['jonathan', 'jenny', 'elliot'];

function logName(name) {
    console.log(name);
}


// LOGGING EACH STUDENT USING 'forEach' LOOP

students.forEach(logName);    // takes the logName function as parameter.. () not needed.




// CREATING OUR OWN 'forEach' FROM SCRATCH

function forEach(myArray, myFunction) {
    for (let i = 0; i < myArray.length; i++) {
        myFunction(myArray[i]);
    }
}