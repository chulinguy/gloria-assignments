var curryImageElement = document.getElementById("curryPic");
var menuButton = document.getElementById("dropDownBtn");
var menuList = document.getElementById("dropDownList");
var curryImagesURL;
var curryImageIndexNum = 0;
var displayMenuOnOff = false;

//getting the html's page curry name and setting up curry's image array name
function getCurryImageNameArray(){
    //grabbing current page's curry name, cutting out all whitespaces and converting it to lower case
    var curryName = document.getElementById("curryName").innerHTML.replace(/\s+/g, '').toLowerCase();
    //concatenating curry name and putting it into array
    curryImagesURL = [curryName+"Med.png", curryName+"Small.png", curryName+"Large.png"];
}

//changing curring image using array
function changingCurry(){
    //changing curry image by changing "src" attribute value
    curryImageElement.setAttribute("src", "../Images/"+curryImagesURL[curryImageIndexNum]);
    //adding +1 to index to use the next image name in array when function is called again
    curryImageIndexNum = curryImageIndexNum + 1;
   //resetting index num to 0 if it reaches to the # of objs in the array to keep infinite 
   //loop and prevent erroring out
    if(curryImageIndexNum === curryImagesURL.length){
    curryImageIndexNum = 0;
    }
}

//display and close menu. Purpose of this function is to be called when clicking menu button
function displayingMenu(){
    //if display is on (true)
    if(displayMenuOnOff === true){
        //turn off display by changing css value for the element's property
        menuList.style.display = "none";
        //displayMenuOnOff value is set to off (false) 
        displayMenuOnOff = false;
    }else{
        //if display is off (false), turn the display on 
        menuList.style.display = "block";
        displayMenuOnOff = true;
    }
}

//closing menu. Purpose of this function is to be called when clicking outside of the menu
function clickingOutMenu(){
    if(displayMenuOnOff == true){
        menuList.style.display = "none";
        displayMenuOnOff = false;
    }
}

//using event listener to find where the click event occured to find where
function clickingMenuEventListener(){
    //finding if the clicking occurs on the menu button
    if(event.target.id === "dropDownBtn"){
        displayingMenu();
    //finding if the menu has been clicked
    }else if(event.target.id === "dropDownList"){
        //do nothing
    //finding if click occured outside of the menu button
    }else{
        clickingOutMenu();
    }
}

//adding event listener for click and calling clickingMenuEventLister
document.addEventListener("click", clickingMenuEventListener);
//adding names to curryImageURL array
getCurryImageNameArray();
//setting interval to recall changingCurry() every 2 seconds
setInterval(function(){changingCurry();}, 2000);