// selectin elements
var run = document.querySelector('.run');
var gameBg = document.querySelector('.game-bg'); 
var sprite = document.querySelector('.sprite'); 
var enemy = document.querySelector('.enemy'); 
var bgSound = document.querySelector('.bg-sound');
// var controls = document.getElementById('controls');
var reset = document.querySelector('.reset');
var bulletSound = document.querySelector('.bullet-sound');
var shoot = document.querySelector('.shoot'); 
var shootAndMove = document.querySelector('.shoot-and-move');
var timeBtn = document.querySelector('.timer'); 
var distance = document.getElementById('distance');
var shootMoveBack = document.querySelector('.shoot-M-Back');
var enemies = document.querySelector('.enemy-div');
var enemiesSound = document.querySelector('.enemies-sound');
var victorySong = document.querySelector('.victory-song');



var distance = 400;

function moveDistance(){
    distance = distance - 0.25;
    distance.innerHTML = distance;
    console.log(distance);
    
}
 // move back distance
function moveBackDistance(){
    distance = distance + 0.25;
    console.log(distance);
    
}


run.addEventListener('keydown', function(){
    distance = distance - 0.5;
    console.log(distance);
    FastMove();
    bgSound.play();
    
    if(distance <= 0){
        youWin();
        hideButton();
       }

    
  
//    bulletSound.play();
   
});

var count = 0;
shoot.addEventListener('click', function(){ 
    count++;
    bulletSound.play();
    if(count >5){
        killEnemies(); 
        killEnemies2();
    }

    if(distance <= 0){
        youWin();
        hideButton();
    }
   
   
});

shootAndMove.addEventListener('keydown', function(){
    // moveBg();
   spriteMove();
   moveDistance();
   bgSound.play();
   bulletSound.play();

   if(distance <= 0){
    youWin();
    hideButton();
   }
   
});

// move shoot back
shootMoveBack.addEventListener('keydown', function(){
    // moveBg();
   spriteMoveBack();
   moveBackDistance();
   bgSound.play();
   bulletSound.play();

   if(distance <= 0){
    youWin();
    hideButton();
   }
   
});

//setting the stating postion
var move = 0;      
//The move background function
let moveBg = ()=>{
    move+=10;
    gameBg.style.backgroundPosition = move + "px";
    
}

//move sprite
   let runSprite = 0;
//The move background function
let spriteMove = ()=>{
    sprite.style.transform = 'rotateY(330deg)';
    runSprite-=6;
    gameBg.style.backgroundPosition = runSprite + "px";
    // console.log("sprite is runing");
}


let spriteMoveBack = ()=>{
    sprite.style.transform = 'rotateY(150deg)';
    runSprite+=6;
    gameBg.style.backgroundPosition = runSprite + "px";
    // console.log("sprite is runing");
}

//move sprite
   let runFast = 0;
//The move background function
let FastMove = ()=>{
    runFast-=16;
    gameBg.style.backgroundPosition = runFast + "px";
    // console.log("sprite is runing");
}

function youWin(){
    sprite.innerHTML = '<h1 style = "color:GOLD;">Congratulation you win!!! </h1>';
    victorySong.play();
    enemiesSound.pause();
    shoot.style.display = "none";
    run.style.display = "none";
    shootAndMove.style.display = "none";
}

// function enemies(){
//     enemy.style.display ="true";
    
// }

// set the time
var time = 120;
function timer(){ 
    if(time == 0 ){
     sprite.innerHTML = '<h1 style = "color:white;"> GAME OVER </h1>';
     setInterval(function(){
        location.replace('shootHome.html');
     }, 5000);
    
     hideButton();
     return;
     
     timeBtn.style.innerHTML = 0;
     console.log(time);
    //  location.reload();
    }else{
        time--;
        timeBtn.innerHTML = time;
    }
    
}

 setInterval(timer, 1000);

 // to restart the game
 reset.addEventListener('click', function(){
    var ans = confirm(" Are you sure you want to restart the game ?");
    if(ans == true){
    location.reload();
    }
});

// displaying the distance
distance.innerHTML = moveDistance();

// hide buttons

function hideButton(){
    shoot.style.display = "none";
    run.style.display = "none";
    shootAndMove.style.display = "none";
    shootMoveBack.style.display = "none";
}

function addEnemies(){ 
    if(distance >= 0){
        enemiesSound.play(); 
    }       
enemies.classList.add("someEnemies");
run.disabled = true;
shootAndMove.disabled = true;
shootMoveBack.disabled = true;
}

setInterval(addEnemies, 12000);

function killEnemies(){
enemies.classList.remove("someEnemies");
run.disabled = false;
shootAndMove.disabled = false;
shootMoveBack.disabled = false;
}

function addEnemies2(){  
    if(distance >= 0){
        enemiesSound.play(); 
    }
    
    enemies.classList.add("someEnemies2");
    run.disabled = true;
    shootAndMove.disabled = true;
    shootMoveBack.disabled = true;
    }
    
    setInterval(addEnemies2, 8000);
    
    function killEnemies2(){
     enemies.classList.remove("someEnemies2");
     run.disabled = false;
    shootAndMove.disabled = false;
    shootMoveBack.disabled = false;
    }


