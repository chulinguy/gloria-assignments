var snowLayerElement;
var snowDotArrayLayer1=[];

//creating child divs inside a div to make snow particles
function createSnowChildDivs(element,snowDotArray){
    let snowDot;
    for(i=0;i<100;i++){
        snowDot = document.createElement("div");
        element.appendChild(snowDot);
        snowDot.setAttribute("class","snowDot");
        randomSnowSizes(snowDot);
        snowDot.style.opacity=0;
        fuzzySnow(snowDot);
        startingPosition(snowDot);
        snowDotArray.push(snowDot);
    }
}

function randomSnowSizes(snowDot){
    let randomSizes;
    randomSizes=Math.random()+.3;
    snowDot.style.width=randomSizes+"em";
    snowDot.style.height=randomSizes+"em";
}

function fuzzySnow(snowDot){
    snowDot.style.filter="drop-shadow(0 0 8px white)";
}

function startingPosition(snowDot){
    snowDot.style.left=Math.random()*99+"vw";
    snowDot.style.top="0em";
}

function snowPositions(snowDot){
    let snowYPosition=[];
    snowYPosition=generateYPositionNums(snowYPosition);
    snowDotOpacity= (Math.random()*.5)+.1;
    snowDot.animate(
        [
            {opacity: 0,transform:'translate(0vw,0em)', offset: 0},
            {opacity: snowDotOpacity,transform:'translate(0vw,0em)', offset: .001},
            {opacity: snowDotOpacity,transform:'translate('+generateXPositionNums(snowDot)+'vw,'+snowYPosition[0]+'em)', offset: .25},
            {opacity: snowDotOpacity,transform:'translate('+generateXPositionNums(snowDot)+'vw,'+snowYPosition[1]+'em)', offset: .5},
            {opacity: snowDotOpacity,transform:'translate('+generateXPositionNums(snowDot)+'vw,'+snowYPosition[2]+'em)', offset: .75},
            {opacity: snowDotOpacity,transform:'translate('+generateXPositionNums(snowDot)+'vw,'+snowYPosition[3]+'em)', offset: .9},
            {opacity: snowDotOpacity,transform:'translate(0vw, 99em)', offset: .999},
            {opacity: 0,transform:'translate(0vw, 99em)', offset: 1}
        ],
        {
            duration: 100000,
            iterations: Infinity,
            easing: 'linear',
            delay: Math.random()*100000
        }
    );

}

function considerInitialPosition(snowDot){
    let snowMovementPosition=[];
    let snowDotXPosition="";
    snowDotXPosition=snowDot.style.left.toString();
    snowDotXPosition=snowDotXPosition.substr(0,snowDotXPosition.length-2);
    snowDotXPosition=Number(snowDotXPosition);
    snowMovementPosition.push(snowDotXPosition);
    snowMovementPosition.push(99-snowDotXPosition);
    return snowMovementPosition;
}

function generateXPositionNums(snowDot){
    let positionX = 0;
    let lRPosition=considerInitialPosition(snowDot);
    positionX = (Math.random()*(lRPosition[0]+lRPosition[1])) - lRPosition[0];
    return positionX;
}

function generateYPositionNums(array){
    let positionY = 0;
    let adding= 25;
    positionY=Math.random()*(24.75);
    array.push(positionY);
    for(i=0;i<3;i++){
        positionY=Math.random()*(24.75)+adding;
        adding+=24.75;
        array.push(positionY);
    }
    return array;
}

function runSnow(){
    snowLayerElement = document.getElementById("layer 1");
    createSnowChildDivs(snowLayerElement, snowDotArrayLayer1);
    for(x=0;x<snowDotArrayLayer1.length;x++){
        snowPositions(snowDotArrayLayer1[x], 0);
    }
}

runSnow();