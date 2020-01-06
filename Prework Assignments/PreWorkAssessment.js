// In these exercises, you will be working on conditional statements,
// namely the if / else if / else and switch/case conditionals.

// For these exercises, you will place your code in a function block.
// If you don't know what a function is yet, that's ok, your code will be the
// same. The variables will be defined for you, you just have to plug in the
// logic.

// For example, if asked for exercise 0 to assign the value of myAnswer to the sum
// of num1 and num2, and were given this construct:

// function exercise0(num1, num2) {
//   var myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 1 below here:
//   // ------------------------------------------
//   
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// You would put your code between the "below here"
// and "above here" blocks as shown:

// function exercise0(num1, num2) {
//   var myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 1 below here:
//   // ------------------------------------------
//   myAnswer = num1 + num2;
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code. 
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.


// EXERCISE 1.
// First reassign the value of `answer1` so that it has the value of:
// "num1 is small"
// Write an if statement that checks if a variable `num1` is greater than 10.
// If it is, then within your if statement code change the value of answer1 so
// that its new value would be a string that says:
// "The value of num1 is <value here> and is greater than 10".

function exercise1(num1) {
    var answer1 = "";
    // ------------------------------------------
    // Write your code for exercise 1 below here:
    // ------------------------------------------
    answer1 = "num1 is small";
    if(num1>10){
        answer1 = "The value of num1 is "+num1+" and is greater than 10";
    }
    // ------------------------------------------ 
    // And above here
    // ------------------------------------------
    return answer1;
  }
console.log("week1 #1: "+exercise1(10));
console.log("week1 #1: "+exercise1(11));
  
  // EXERCISE 2.
  // Write an if/else conditional statement that if given a number will assign
  // a string value of:
  // "<num2 value> is even" to `answer2`,
  // if `num2` is even
  // and a value of "<num2 value> is odd" to `answer2`,
  // if `num2` is odd.
  // ie. if num2 has a value of 4 then the message should read:
  // "4 is even"
  
function exercise2(num2) {
    var answer2;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    if(num2%2 == 0){
        answer2 = num2+" is even.";
      }else{
        answer2 = num2+" is odd.";
    }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer2;
}
console.log("week1 #2: "+exercise2(5));
console.log("week1 #2: "+exercise2(4));

  // EXERCISE 3.
  // Write an if/else statement such that if `varA` and `varB` are strings or
  // numbers and they have equal values, then change the value of answer4 to
  // "varA and varB are equal"
  // otherwise assign a value of "varA and varB differ"
  
function exercise4(varA, varB) {
    var answer4;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    if(varA == varB){
        answer4 = "varA and varB are eaqual.";
      }else{
        answer4 = "varA and varB differ.";
      }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer4;
}
console.log("week1 #3: "+exercise4(4,"4"));
console.log("week1 #3: "+exercise4(4,"5"));

  // EXERCISE 4.
  // In exercise 4, what are some of the unexpected cases where `varA` and `varB`
  // seemed like they are equal, but would not pass the tests? In your analysis
  // consider other data types beside strings and variables.
  
  //If varA was a string, varB is an integer and you tried to compare with triple =, then even though
  //it would fail because triple = looks for data types and varA and var B are different datatypes.
  
  // EXERCISE 5.
  // Use a switch conditional statement with case clauses such that if `num7` is
  // a number and it has a value of 1 that `answer7` is assigned the string:
  // "You won!"
  // if num7 is 7, then answer7 should be:
  // "You are lucky!"
  // if num7 is 101, then answer7 should be:
  // "Welcome to coding 101!"
  // if num7 is 1000000, then answer7 should be:
  // "You are one in a million!"
  // Othewise, assign answer7 a value of:
  // "Thanks for that!"
  
function exercise7(num7) {
    var answer7;
    // --------------------------------------------
    // Write your code for the exercise below here:
    // --------------------------------------------
    switch(num7){
        case 1:
          answer7 = "You won!";
          break;
        case 7:
          answer7 = "You are lucky!";
          break;
        case 101:
          answer7 = "Welcome to coding 101!";
          break;
        case 1000000:
          answer7 = "You are one in a million!"
          break;
        default:
          answer7 = "Thanks for that!";
      }
    // --------------------------------------------
    // And above here
    // --------------------------------------------
    return answer7;
}
console.log("week1 #3: "+exercise7(1));
console.log("week1 #3: "+exercise7(7));
console.log("week1 #3: "+exercise7(101));
console.log("week1 #3: "+exercise7(1000000));
console.log("week1 #3: "+exercise7(12));
  
// Week 2 - Loops
// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.
// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
  
  
  
  
// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
  
function whileLoop(){
    console.log("week2 #1:");
    var i=1;
    while(i<=5){
    console.log(i);
    i++;
    }
}
whileLoop();

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
  
function doWhileLoop(){
    console.log("week2 #2:");
    var i = 1;
    do{
        console.log(i);
        i++;
    }while(i<=5);
}
doWhileLoop(); 
  
  // Exercise 3. Write a 'for' loop that prints the integers (whole numbers
  // between 1 and 5 (inclusive).

function forLoop(){
    console.log("week2 #3:");
    for(i=1;i<=5;i++){
        console.log(i);
    }
}
forLoop();
  
  
  // Exercise 4. Now we want a loop that prints the integers
  // counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
  // writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
  
function countDown(){
    console.log("week2 #4: while loop:");
    var i=10;
    while(i>=1){
        console.log(i);
        i--;
    }
    console.log("week2 #4: do while loop:");
    i=10;
    do{
        console.log(i);
        i--;
    }while(i>=1);
    console.log("week2 #4: for loop:");
    for(i=10;i>=1;i--){
        console.log(i);
    }
}
countDown();

  // Week 3 - Arrays and Objects
  
  // In the following exercises, you will need to place your code or answer underneath each
  // exercise prompt.
  
  // First try answering these without using references or looking up any information.
  // Then, check your answer by using references and/or running your code. 
  // You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
  
  
  // Exercise 1. Make an empty array named animals
var animals = [];
console.log("Week3 #1:");
console.log(animals);

  // Exercise 2. Add the string "frog" to the array
animals.push("frog");
console.log("Week3 #2:");
console.log(animals);
  
  // Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.
animals.push("dog","cat","turtle","snake");
console.log("Week3 #3:");
console.log(animals);
  
  // Exercise 4. Update the first item in the array to be "gorilla"
animals[0]="gorilla";
console.log("Week3 #4:");
console.log(animals);
  
  // Exercise 5. Print the number of items in the array (use the array property that will give you this information)
console.log("Week3 #5: "+animals.length);
  
  // Exercise 6. Print the first item in the array
console.log("Week3 #6: "+animals[0]);
  
  // Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)
console.log("Week3 #7: "+animals[animals.length-1]);
  
  // Exercise 8. Remove the last item from the array
console.log("Week3 #8:");
animals.pop();
console.log(animals);
  
  // Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.
console.log("Week3 #9:");
var assortedThings = [1,"door",2,"apple",3,"rain"];
console.log(assortedThings);
  
  // Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
  // Item #0 is potato
  // Item #1 is 4
  // Item #2 is Hello World
  // ...
console.log("Week3 #10:");
for(i=0;i<assortedThings.length;i++){
    console.log("Item #"+i+" is "+assortedThings[i]);
}

  // Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
  // The values of those keys can be whatever you choose.
console.log("Week3 #12:");
var me = {
    name: "Gloria",
    favoriteAnimal: "turtle",
    favoriteNumber: 6
}
console.log(me);
  
  // Exercise 13. Add another 2 keys and values to the object (you choose what they are)
console.log("Week3 #13:");
me.age = 24;
me.favoriteFood = "sushi";
console.log(me);  

  // Exercise 14. Update the favoriteAnimal value to something different
console.log("Week3 #14:");
me.favoriteAnimal = "cat";
console.log(me);
  
  // Exercise 15. Print the value of favoriteAnimal. 
console.log("Week3 #15: 1st way: "+ me.favoriteAnimal+". 2nd way: "+me["favoriteAnimal"]);
  // Note: there are at least 2 ways to get the value of a key, try to write both.