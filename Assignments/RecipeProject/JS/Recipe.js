var x=0;
var curryImageElement = document.getElementById("curryPic");
var curryImagesURL;
function getCurryName(){
    var curryName = document.getElementById("curryName").innerHTML.replace(/\s+/g, '');
    curryName = curryName.toLowerCase();
    curryImagesURL = [curryName+"Med.png", curryName+"Small.png", curryName+"Large.png"];
}

function changingCurry(){
    curryImageElement.setAttribute("src", "../Images/"+curryImagesURL[x]);
    x=x+1;
    if(x==3){
    x=0;
    }
}

getCurryName();
setInterval(function(){changingCurry();}, 2500);