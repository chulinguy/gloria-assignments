let kirbyBody=document.getElementById("kirby");
let kirbyRArm=document.getElementById("arm-right");
let kirbyLArm=document.getElementById("arm-left");
let kirbyRLeg=document.getElementById("leg-right");
let kirbyLLeg=document.getElementById("leg-left");
let kirbyShadow=document.getElementById("shadow");
let kirbyREye = document.getElementById("kirby-eye-right");
let kirbyLEye = document.getElementById("kirby-eye-left");
let closedREye = document.getElementById("close-eye-right");
let closedLEye = document.getElementById("close-eye-left");
let coinBox = document.getElementById("coinBox");
let innerCoinHT = document.getElementById("innerCoin");

function flipCoin(){
    //turning off game select modal
    //entering mode's array into the generator
    if(event.target.id === "inputBtn"){
        let coinArray = [];
        let coinFlipVal = document.getElementById("coinsToFlip").value;
        let clickDown;
        if(checkingflipNum(coinFlipVal)){
            document.addEventListener("keyup",function(){hitCoinBox(coinArray, coinFlipVal)});
            document.addEventListener("mouseup",function(){
                clearInterval(clickDown);
                hitCoinBox(coinArray, coinFlipVal);
            });
            document.addEventListener("keydown",kirbyStartJumpPosition);
            document.addEventListener("mousedown",function(){
                clickDown = setInterval(function(){
                    kirbyStartJumpPosition();
                }, 0);
            });
            document.addEventListener("touchstart",function(){
                clickDown = setInterval(function(){
                    kirbyStartJumpPosition();
                }, 0);
                document.addEventListener("touchend",function(){
                    clearInterval(clickDown);
                });
            });
        }
    }
    
}

function checkingflipNum(coinFlipInput){
    //making sure user inputed value is a number greater than 0
    let errorMsging = document.getElementById("errorMsg");
    if(!isNaN(Number(coinFlipInput))){
        //if coinflipInput is not a NaN
        if(coinFlipInput>0&& coinFlipInput<=40){
            let modal = document.getElementsByClassName("gameModal");
            modal[0].style.display = "none";
            return true;
        }else if(coinFlipInput>40){
            errorMsging.innerHTML = "Too many coins! Max is 40 please.";
            return false;
        }else{
            errorMsging.innerHTML = "Please enter a positive number!";
            return false;
        }
    }else{
        errorMsging.innerHTML = "Please enter a number!"
        return false;
    }
}

function moveKirbyBody(duration){
    //stationary movement of the body
    kirbyBody.animate(
        [
            {transform:'translateY(0vh)', offset: 0},
            {transform:'translateY(-1.5vh)', offset: .4},
            {transform:'translateY(-1.5vh)', offset: .5},
            {transform:'translateY(0vh)', offset: .95},
            {transform:'translateY(0vh)', offset: 1}
        ],
        {
            duration: duration,
            iterations: Infinity,
            easing: 'linear'
        }
    );
}

function moveKirbyLegs(duration){
    //stationary movement of the legs
    kirbyRLeg.animate(
        [
            {transform:'rotate(0deg)', offset: 0},
            {transform:'rotate(65deg)', offset: .4},
            {transform:'rotate(65deg)', offset: .5},
            {transform:'rotate(0deg)', offset: .95},
            {transform:'rotate(0deg)', offset: 1}
        ],
        {
            duration: duration,
            iterations: Infinity,
            easing: 'linear'
        }
    );
    kirbyLLeg.animate(
        [
            {transform:'rotate(0deg)', offset: 0},
            {transform:'rotate(-75deg)', offset: .4},
            {transform:'rotate(-75deg)', offset: .5},
            {transform:'rotate(0deg)', offset: .95},
            {transform:'rotate(0deg)', offset: 1}
        ],
        {
            duration: duration,
            iterations: Infinity,
            easing: 'linear'
        }
    );
}

function moveKirbyArms(duration){
    //stationary movement of the arms
    kirbyRArm.animate(
        [
            {transform:'rotate(0deg)', offset: 0},
            {transform:'rotate(20deg) translate(-.5vw,-1vh)', offset: .4},
            {transform:'rotate(20deg) translate(-.5vw,-1vh)', offset: .5},
            {transform:'rotate(0deg)', offset: .95},
            {transform:'rotate(0deg)', offset: 1}
        ],
        {
            duration: duration,
            iterations: Infinity,
            easing: 'linear'
        }
    );
    kirbyLArm.animate(
        [
            {transform:'rotate(0deg)', offset: 0},
            {transform:'rotate(-20deg) translate(.5vw, -1vh)', offset: .4},
            {transform:'rotate(-20deg) translate(.5vw, -1vh)', offset: .5},
            {transform:'rotate(0deg)', offset: .95},
            {transform:'rotate(0deg)', offset: 1}
        ],
        {
            duration: duration,
            iterations: Infinity,
            easing: 'linear'
        }
    );
}

function moveStationaryShadow(duration){
    kirbyShadow.animate(
        [
            {transform:'scale(1)', offset: 0},
            {transform:'scale(.9)', offset: .4},
            {transform:'scale(.9)', offset: .5},
            {transform:'scale(1)', offset: .95},
            {transform:'scale(1)', offset: 1}
        ],
        {
            duration: duration,
            iterations: Infinity,
            easing: 'linear'
        }
    );
}

function kirbyBlink(){
    //blinking movements
    closeEyes(kirbyREye,kirbyLEye,closedLEye,closedREye);
    setTimeout(function(){openEyes(kirbyREye,kirbyLEye,closedLEye,closedREye);}, 100);
    
}

function closeEyes(REye,LEye,closeLEye,closeREye){
    //closing the eyes
    REye.style.display = "none";
    LEye.style.display = "none";
    closeLEye.style.display = "block";
    closeREye.style.display = "block";
}

function openEyes(REye,LEye,closeLEye,closeREye){
    //opening the eyes
    REye.style.display = "block";
    LEye.style.display = "block";
    closeLEye.style.display = "none";
    closeREye.style.display = "none";
}

function kirbyMotion(){
    //all stationary movements for the entire character
    moveKirbyArms(2000);
    moveKirbyBody(2000);
    moveKirbyLegs(2000);
    moveStationaryShadow(2000);
    setInterval(function(){kirbyBlink();}, 2000);
}

function kirbyStartJumpPosition(){
    //starting position of the jump
    let duration = 1000;
    closeEyes(kirbyREye,kirbyLEye,closedLEye,closedREye);
    kirbyBody.animate(
        [
            {transform:'scaleY(.55) translateY(6vh)', offset: 0},
            {transform:'scaleY(.55) translateY(6vh)', offset: 1}
        ],
        {
            duration: duration,
            easing: 'linear'
        }
    );
    kirbyRArm.animate(
        [
            {transform:'scaleY(.8) translateY(3.5vh)', offset: 0},
            {transform:'scaleY(.8) translateY(3.5vh)', offset: 1}
        ],
        {
            duration: duration,
            easing: 'linear'
        }
    );
    kirbyLArm.animate(
        [
            {transform:'scaleY(.8) translateY(3.5vh)', offset: 0},
            {transform:'scaleY(.8) translateY(3.5vh)', offset: 1}
        ],
        {
            duration: duration,
            easing: 'linear'
        }
    );
    kirbyRLeg.animate(
        [
            {transform:'rotate(0deg)', offset: 0},
            {transform:'rotate(0deg)', offset: 1}
        ],
        {
            duration: duration,
            easing: 'linear'
        }
    );
    kirbyLLeg.animate(
        [
            {transform:'rotate(0deg)', offset: 0},
            {transform:'rotate(0deg)', offset: 1}
        ],
        {
            duration: duration,
            easing: 'linear'
        }
    );
    kirbyShadow.animate(
        [
            {transform:'scale(1.2) translateX(-2px)', offset: 0},
            {transform:'scale(1.2) translateX(-2px)', offset: 1}
        ],
        {
            duration: duration,
            easing: 'linear'
        }
    );
}

function kirbyJumping(duration){
    //full body jumping and hitting th block
    kirbyBody.animate(
        [
            {transform:'scaleY(1) translateY(0vh)', offset: 0},
            {transform:'scaleY(.8) translateY(-35vh)', offset: .3},
            {transform:'scaleY(.8) translateY(-42vh)', offset: .5},
            {transform:'scaleY(1) translateY(-28vh)', offset: .7},
            {transform:'scaleY(1) translateY(0vh)', offset: 1}
        ],
        {
            duration: duration,
            easing: 'linear'
        }
    );
    kirbyRArm.animate(
        [
            {transform:'scaleY(.8) translateY(2vh)', offset: 0},
            {transform:'scaleY(.8) translateY(-35vh)', offset: .3},
            {transform:'scaleY(1) translateY(-33vh)', offset: .5},
            {transform:'scaleY(1) translateY(-30vh)', offset: .7},
            {transform:'scaleY(.8) translateY(2vh)', offset: 1}
        ],
        {
            duration: duration,
            easing: 'linear'
        }
    );
    kirbyLArm.animate(
        [
            {transform:'scaleY(.8) translateY(2vh)', offset: 0},
            {transform:'scaleY(.8) translateY(-35vh)', offset: .3},
            {transform:'scaleY(1) translateY(-33vh)', offset: .5},
            {transform:'scaleY(1) translateY(-30vh)', offset: .7},
            {transform:'scaleY(.8) translateY(2vh)', offset: 1}
        ],
        {
            duration: duration,
            easing: 'linear'
        }
    );
    kirbyRLeg.animate(
        [
            {transform:'rotate(90deg) translateX(0vh)', offset: 0},
            {transform:'rotate(90deg) translateX(-30vh)', offset: .3},
            {transform:'rotate(90deg) translateX(-35vh)', offset: .5},
            {transform:'rotate(90deg) translateX(-30vh)', offset: .7},
            {transform:'rotate(90deg) translateX(0vh)', offset: 1}
        ],
        {
            duration: duration,
            easing: 'linear'
        }
    );
    kirbyLLeg.animate(
        [
            {transform:'rotate(-90deg) translateX(0vh)', offset: 0},
            {transform:'rotate(-90deg) translateX(30vh)', offset: .3},
            {transform:'rotate(-90deg) translateX(35vh)', offset: .5},
            {transform:'rotate(-90deg) translateX(30vh)', offset: .7},
            {transform:'rotate(-90deg) translateX(0vh)', offset: 1}
        ],
        {
            duration: duration,
            easing: 'linear'
        }
    );
    kirbyShadow.animate(
        [
            {transform:'scale(1)', offset: 0},
            {transform:'scale(.5)', offset: .3},
            {transform:'scale(.4)', offset: .5},
            {transform:'scale(.7)', offset: .7},
            {transform:'scale(1)', offset: 1}
        ],
        {
            duration: duration,
            easing: 'linear'
        }
    );
}

function moveCoinBox(duration){
    //movement of coinbox when it is hit
    coinBox.animate([
        {transform:'translateY(0vh)', offset: 0},
        {transform:'translateY(0vh)', offset: .25},
        {transform:'translateY(-6vh)', offset: .4},
        {transform:'translateY(-9vh)', offset: .7},
        {transform:'translateY(0vh)', offset: 1}
    ],
    {
        duration: duration,
        easing: 'linear'
    });
}

function moveCoin(duration){
    //coin animation when coin block is hit
    coinHT.animate([
        {opacity: 0, transform:'translateY(0vh) rotateY(0deg)', offset: 0},
        {opacity: 0, transform:'translateY(0vh) rotateY(0deg)', offset: .075},
        {opacity: 1, transform:'translateY(-12vh) rotateY(360deg)', offset: .099},
        {opacity: 1, transform:'translateY(-20vh) rotateY(360deg)', offset: .1},
        {opacity: 1, transform:'translateY(-35vh) rotateY(0deg)', offset: .15},
        {opacity: 1, transform:'translateY(-35vh) rotateY(360deg)', offset: .175},
        {opacity: 1, transform:'translateY(0vh) rotateY(0deg)', offset: .25},
        {opacity: 1, transform:'translateY(0vh) rotateY(360deg)', offset: 1}
    ],
    {
        duration: duration,
        easing: 'linear'
    });
}


function reminderCoinsSpin(coin){
    //spinning transition when score coins show up
    coin.animate([
        {transform:'rotateY(0deg)', offset: 0},
        {transform:'rotateY(360deg)', offset: .075},
        {transform:'rotateY(0deg)', offset: .3},
        {transform:'rotateY(180deg)', offset: .6},
        {transform:'rotateY(0deg)', offset: 1}
    ],
    {
        duration: 1500,
        iterations: 1,
        easing: 'linear'
    });
}

function headsOrTails(){
    //generating head or tails
    let chances = Math.random();
    if (chances < .5){
        return "heads";
    }else{
        return "tails";
    }
}

function hitCoinBox(array, arrayMaxLength){
    //hit coin box animation, storing try values and displaying them, and checking for end game
    if(array.length<arrayMaxLength){
        let coinToSpin = headsOrTails();
        if(coinToSpin==="heads"){
            innerCoinHT.innerHTML = "H";
            array.push("H");
        }else{
            innerCoinHT.innerHTML = "T";
            array.push("T");
        }
        kirbyJumping(800);
        moveCoinBox(800);
        moveCoin(4000);
        setTimeout(function(){createCoinTryReminder(array);}, 1100);
    }else{
        endGameModal();
    }
}

function createCoinTryReminder(array){
    //generating the coin tries
    let reminderSpace = document.getElementsByClassName("reminders");
    let reminderCoins = document.createElement("div");
    let reminderInnerCoins = document.createElement("div");
    reminderSpace[0].appendChild(reminderCoins);
    reminderCoins.setAttribute("class","reminderCoins");
    reminderCoins.appendChild(reminderInnerCoins);
    reminderInnerCoins.setAttribute("id","reminderInnerCoins");
    reminderInnerCoins.innerHTML = array[array.length-1];
    reminderCoinsSpin(reminderCoins);
}

function endGameModal(){
    //turning the end game prompt
    let modal = document.getElementsByClassName("endGameModal");
    modal[0].style.display = "block";
}

function playAgain(){
    //reloading the page if the game ended and player choses to play again
    let endModal = document.getElementsByClassName("endGameModal");
    if (endModal[0].style.display === "block" && event.target.id === "YesBtn"){
        location.reload();
    }
}

kirbyMotion();
document.addEventListener("click", function(){
    flipCoin();
    playAgain();
});