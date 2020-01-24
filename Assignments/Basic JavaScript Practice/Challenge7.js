// [Challenge 7] Accessing Arrays
// Write a function called common(a, b) with these criteria: 
// Given 2 arrays of ints, a and b, return True if they have the same first element 
// or they have the same last element. Both arrays will be length 1 or more.

// Results
// common([1, 2, 3], [7, 3]) → True
// common([1, 2, 3], [7, 3, 2]) → False
// common([1, 2, 3], [1, 3]) → True

function common(a,b){
    if(a[a.length-1]===b[b.length-1] || a[0]==b[0]){
        return true;
    }
    return false;
}

console.log(common([1, 2, 3], [7, 3]));
console.log(common([1, 2, 3], [7, 3, 2]));
console.log(common([1, 2, 3], [1, 3]));