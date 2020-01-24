// [Challenge 6] Switch Statements
// Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: 
// The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. 
// We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

// Results
// sleep_in(False, False) → True
// sleep_in(True, False) → False
// sleep_in(False, True) → True

function sleep_in(weekday, vocation){
    switch(true){
        case weekday === false: return true;
        case vocation === true: return true;
        default: return false;
    }
}

console.log(sleep_in(true,false));
console.log(sleep_in(false,false));