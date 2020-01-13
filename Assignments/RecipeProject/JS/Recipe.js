var curryImageElement = document.getElementById("curryPic");
console.log(curryImageElement);
var curryImagesURL = ["decorativecurryMed.png","decorativecurrySmall.png","decorativecurryLarge.png"];
var x=0;
function changingCurry(){
    curryImageElement.setAttribute("src", "../Images/"+curryImagesURL[x]);
    x=x+1;
    if(x==3){
    x=0;
    }
}

setInterval(function(){changingCurry();}, 2500);