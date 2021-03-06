// [Challenge 9] Mutating Objects
// 1.Create an array of objects with at least 2 key value pairs. 
// The objects should all have the same keys, and the array should contain at least 3 objects.
// 2.Create a function that accepts the array of objects as an argument.
// 3.Print the value of the second key in each object to the console. Use dot-notation to access the values.
// 4.After printing the values in step 3, change the values of the second key in every object to something new.
// 5.Prove the change worked by printing the second key in each object to the console, which should show the new value. 
// Use bracket-notation to access the values this time.

let arrayOfObejects =[
    {
        "drink":"soda",
        "food":"sushi"
    },
    {
        "drink":"juice",
        "food":"chips"
    },
    {
        "drink":"smoothie",
        "food":"pasta"
    }
]

function manipulateArrayObj(objArray){
    let secondKey=Object.keys(objArray[0])[1];
    for(i=0;i<objArray.length;i++){
        console.log(objArray[i][secondKey]);
        //if I wanted to use dot notation, I would hardcode it such as objArray[i].food. 
        //Since dot notation doesn't allow variables because it sees all property keys as string.
        //So it would look like im searching for the string 'secondkey' instead of inputing the
        //value of the variable secondkey.
        objArray[i][secondKey] = "something new";
        console.log(objArray[i][secondKey]);
    }
}

manipulateArrayObj(arrayOfObejects);