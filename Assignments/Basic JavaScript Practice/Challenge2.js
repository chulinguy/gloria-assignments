// [Challenge 2] - Loop n Times
// Write a function named loopThrough that takes an argument that is a number and loops through and displays a message “Hello World” that number of times.

// Results
// input	value
// loopThrough(0)	Nothing displayed
// loopThrough(1)	Message displayed 1 time
// loopThrough(3)	Message displayed 3 times

function loopThrough(numToLoop){
    for (i=0; i<numToLoop; i++){
        console.log("hello!");
    }
}

loopThrough(0);
loopThrough(3);