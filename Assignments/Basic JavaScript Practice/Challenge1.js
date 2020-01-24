//[Challenge 1] - Convert Inches to Meters
//Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.

// Hint: 1 meter equals 39.3701 inches.

// Results
// input	value
// metersToInches(0)	0
// metersToInches(1)	39.3701
// metersToInches(1.5)	59.05515
// metersToInches(15.6)	614.17356

function metersToInches(meters){
    return meters*39.3701;
}

console.log(metersToInches(1));
console.log(metersToInches(1.5));