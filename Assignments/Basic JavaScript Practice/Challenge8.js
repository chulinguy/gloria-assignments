// [Challenge 8] Object Keys and Values
// 1.Create an object with two key-value pairs.
// 2.Log that object to the console.
// 3.Delete the first key-value pair in the object.
// 4.Log that object to the console again. The first key-value pair should be gone.

let objectHolder = {
    "candy" : "white rabbit",
    "ice cream" : "chocolate",
    }

console.log(objectHolder);
delete objectHolder.candy;
console.log(objectHolder);