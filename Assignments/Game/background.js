let cloudArray = document.getElementsByClassName("cloud");
let bushesArray = document.getElementsByClassName("bushes")

function makeCloudsFloat(){
    //make clouds move in the background
    for(i=0;i<cloudArray.length;i++){
        if(i%2===0){
            cloudArray[i].animate(
                [
                    {transform:'translate(0px, 0px)', offset: 0},
                    {transform:'translate(40px, 15px)', offset: 0.25},
                    {transform:'translate(60px, 0px)', offset: 0.5},
                    {transform:'translate(40px, 15px)', offset: 0.75},
                    {transform:'translate(0px, 0px)', offset: 1}
                ],
                {
                    duration: 6000,
                    iterations: Infinity,
                    easing: 'linear'
                }
            );
        }else{
            cloudArray[i].animate(
                [
                    {transform:'translate(0px, 0px)', offset: 0},
                    {transform:'translate(40px, -15px)', offset: 0.25},
                    {transform:'translate(60px, 0px)', offset: 0.5},
                    {transform:'translate(40px, -15px)', offset: 0.75},
                    {transform:'translate(0px, 0px)', offset: 1}
                ],
                {
                    duration: 6000,
                    iterations: Infinity,
                    easing: 'linear'
                }
            );
        }
    }
}

function makeBushShake(){
    //make a random bush shake
    let randoBushShake = Math.floor(Math.random() * bushesArray.length);
    bushesArray[randoBushShake].animate(
        [
            {transform:'translateX(0px) rotate(0deg)', offset: 0},
            {transform:'translateX(4px) rotate(2deg)', offset: 0.25},
            {transform:'translateX(10px) rotate(-2deg)', offset: 0.5},
            {transform:'translateX(4px) rotate(2deg)', offset: 0.75},
            {transform:'translateX(0px) rotate(0deg)', offset: 1}
        ],
         {
            duration: 250,
            iterations: 4,
            easing: 'linear'
        }
    );
    

}

function createSpecksOnFloor(){
    //make dirt on the ground
    let ground = document.getElementsByClassName("ground");
    for(i=0;i<30;i++){
    let groundSpecks = document.createElement("div");
    ground[0].appendChild(groundSpecks);
    groundSpecks.setAttribute("class","groundSpecks");
    let randomSizes = Math.ceil(Math.random() * 8);
    groundSpecks.style.width = (randomSizes*2) + "px";
    groundSpecks.style.height = randomSizes +"px";
    let randomXPosition = Math.ceil(Math.random()*1300);
    let randomYPosition = Math.ceil(Math.random()*85);
    groundSpecks.style.top = randomYPosition +"px";
    groundSpecks.style.left = randomXPosition +"px";
    }
}

setInterval(function(){makeBushShake();}, 2000);
makeCloudsFloat();
createSpecksOnFloor();