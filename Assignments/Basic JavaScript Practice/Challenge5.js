// [Challenge 5] Calculate Factorial Number
// A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.
// For example, the value of 3 factorial, is 6, which can be calculated by:
// 3 * 2 * 1
// The value of 10 factorial, for example, can be calculated by:
// 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

function calculateFactorial(numToFactorial){
    let productOfFactorial=1;
    for(i=numToFactorial;i>0;i--){
        productOfFactorial = productOfFactorial * i;
    }
    return productOfFactorial;
}

console.log(calculateFactorial(4));