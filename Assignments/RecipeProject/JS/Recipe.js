var curryImageElement = document.getElementById("curryPic");
var menuButton = document.getElementById("dropDownBtn");
var menuList = document.getElementById("dropDownList");
var curryImagesURL;
var curryImageIndexNum = 0;
var displayMenuOnOff = false;

function getCurryImageNameArray(){
    var curryName = document.getElementById("curryName").innerHTML.replace(/\s+/g, '').toLowerCase();
    curryImagesURL = [curryName+"Med.png", curryName+"Small.png", curryName+"Large.png"];
}

function changingCurry(){
    curryImageElement.setAttribute("src", "../Images/"+curryImagesURL[curryImageIndexNum]);
    curryImageIndexNum = curryImageIndexNum+1;
    if(curryImageIndexNum === 3){
    curryImageIndexNum = 0;
    }
}

function displayingMenu(){
    if(displayMenuOnOff === true){
        menuList.style.display = "none";
        displayMenuOnOff = false;
    }else{
        menuList.style.display = "block";
        displayMenuOnOff = true;
    }
}

menuButton.onclick = function(){displayingMenu()};
getCurryImageNameArray();
setInterval(function(){changingCurry();}, 2000);