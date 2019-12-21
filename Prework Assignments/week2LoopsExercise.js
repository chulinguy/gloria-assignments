// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code. 
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
function whileLoop(){
    console.log("#1");
    var i=1;
    while(i<6){
        console.log(i);
    i++;
    }
}
whileLoop();

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
function doWhileLoop(){
    console.log("#2");
    var i = 1;
    do{
        console.log(i);
        i++;
    }while(i<5){
        console.log(i);
        i++;
    }
}
doWhileLoop();

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
function forLoop(){
    console.log("#3");
    for(i=1;i<6;i++){
        console.log(i);
    }
}
forLoop();

// Exercise 4. Now we want a loop that prints the integers 
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
function doingLoops(){
    var i=10;
    var x=10;
    console.log("#4 while loop");
    while(i>0){
        console.log(i);
        i--;
    }
    console.log("#4 do while loop");
    do{
        console.log(x);
        x--;
    }while(x>1){
        console.log(x);
        x--;
    }
    console.log("#4 for loop");
    for(y=10;y>0;y--){
        console.log(y);
    }
}
doingLoops();

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this 
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
function doingLoops2(){
    var i=7;
    var x=7;
    console.log("#5 while loop");
    while(i<28){
        console.log(i);
        i++;
    }
    console.log("#5 do while loop");
    do{
        console.log(x);
        x++;
    }while(x<27){
        console.log(x);
        x++;
    }
    console.log("#5 for loop");
    for(y=7;y<28;y++){
        console.log(y);
    }
}
doingLoops2();

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc. 
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
function doingLoops3(){
    var i=0;
    var x=0;
    console.log("#6 while loop");
    while(i<101){
        console.log(i);
        i=i+10;
    }
    console.log("#6 do while loop");
    do{
        console.log(x);
        x=x+10;
    }while(x<100){
        console.log(x);
        x=x+10;
    }
    console.log("#6 for loop");
    for(y=0;y<101;y=y+10){
        console.log(y);
    }
}
doingLoops3();

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will 
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

//This loop will go on forever because the counter is less than 2 and will always be 
//less than 2 since you are subtracting everytime you do the loop
function fixedInfiniteLoop(){
    let counterFour = 1;
    while (counterFour > -100) {
        console.log('HELP ME!'+counterFour)
        counterFour--;
    }
}
fixedInfiniteLoop();

// Exercise 8. Make a variable that contains your favorite integer. Write a loop 
// (your choice which type) that prints the integers from 0 to that number.
function countToMyFavNum(num){
    console.log("#8");
    for(y=0;y<(num+1);y++){
        console.log(y);
    }
}
countToMyFavNum(6);

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's 
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
function findMyFavNum(num){
    console.log("#9");
    for(y=0;y<101;y++){
        if(y == num){
            console.log(y + " is my favorite number!"); 
        }else{
            console.log(y + " is NOT my favorite number :(");
        }
        
    }
}

findMyFavNum(99);

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or 
// doing some research and write down your thoughts in a comment below:

//You would want to use a do while loop if you wanted your code excute atleast once.
//While loop is when you don't know how many times to loop. For loop you know exactly how many times to loop.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/
function nestedLoop(){
    console.log("#11");
    for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
        console.log("counting down from", outsideCounter);
        for (let insideCounter = outsideCounter; insideCounter>0; insideCounter--) {
            console.log("inside ", insideCounter);
        }
        console.log("***********************************")
    }
}
nestedLoop();

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.
//

// Email your file to us or commit your file to GitHub and email us a link.