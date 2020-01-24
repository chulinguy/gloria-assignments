// [Challenge 3] - Number sum
// Define a method called calculateSum to calculate the sum all the digits from 0 to an input number.

// input	value
// calculateSum(0)	0
// calculateSum(1)	1
// calculateSum(3)	6
// calculateSum(10) 55

function calculateSum(numToAddUpTo){
    let sumOfNums=0;
    for(i=0;i<=numToAddUpTo;i++){
        sumOfNums = sumOfNums+i;
    }
    return sumOfNums;
}

console.log(calculateSum(0));
console.log(calculateSum(3));
console.log(calculateSum(10));