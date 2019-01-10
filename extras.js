// VERSION 1 ----------------------------------------------------------------------


// CREATED A DEBUGGER FUNCTION TO USE IN CODE

function logTenNumbers() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

function runWithDebugger(ourFunction) {
    debugger;
    ourFunction();
}