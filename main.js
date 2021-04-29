var myBackground;

//images

//backgrounds

var background1 = new Image();
background1.src = "./assets/images/backgrounds/bg1.jpg"

var seats = new Image();
seats.src = "./assets/images/backgrounds/seats.png"

//hero

var hkIdle1 = new Image();
var hkIdle2 = new Image();
var hkIdle3 = new Image();
var hkIdle4 = new Image();
var hkIdle5 = new Image();
var hkIdle6 = new Image();
var hkIdle7 = new Image();
var hkIdle8 = new Image();

hkIdle1.src = "./assets/images/fantasy/hero/Idle/hkIdle1.png"
hkIdle2.src = "./assets/images/fantasy/hero/Idle/hkIdle2.png"
hkIdle3.src = "./assets/images/fantasy/hero/Idle/hkIdle3.png"
hkIdle4.src = "./assets/images/fantasy/hero/Idle/hkIdle4.png"
hkIdle5.src = "./assets/images/fantasy/hero/Idle/hkIdle5.png"
hkIdle6.src = "./assets/images/fantasy/hero/Idle/hkIdle6.png"
hkIdle7.src = "./assets/images/fantasy/hero/Idle/hkIdle7.png"
hkIdle8.src = "./assets/images/fantasy/hero/Idle/hkIdle8.png"


var hkAtk11 = new Image();
var hkAtk12 = new Image();
var hkAtk13 = new Image();
var hkAtk14 = new Image();
var hkAtk15 = new Image();
var hkAtk16 = new Image();

hkAtk11.src = "./assets/images/fantasy/hero/Attack1/hkAtk11.png"
hkAtk12.src = "./assets/images/fantasy/hero/Attack1/hkAtk12.png"
hkAtk13.src = "./assets/images/fantasy/hero/Attack1/hkAtk13.png"
hkAtk14.src = "./assets/images/fantasy/hero/Attack1/hkAtk14.png"
hkAtk15.src = "./assets/images/fantasy/hero/Attack1/hkAtk15.png"
hkAtk16.src = "./assets/images/fantasy/hero/Attack1/hkAtk16.png"

var hkAtk21 = new Image();
var hkAtk22 = new Image();
var hkAtk23 = new Image();
var hkAtk24 = new Image();
var hkAtk25 = new Image();
var hkAtk26 = new Image();

hkAtk21.src = "./assets/images/fantasy/hero/Attack2/hkAtk21.png"
hkAtk22.src = "./assets/images/fantasy/hero/Attack2/hkAtk22.png"
hkAtk23.src = "./assets/images/fantasy/hero/Attack2/hkAtk23.png"
hkAtk24.src = "./assets/images/fantasy/hero/Attack2/hkAtk24.png"
hkAtk25.src = "./assets/images/fantasy/hero/Attack2/hkAtk25.png"
hkAtk26.src = "./assets/images/fantasy/hero/Attack2/hkAtk26.png"

var hkAtk31 = new Image();
var hkAtk32 = new Image();
var hkAtk33 = new Image();
var hkAtk34 = new Image();
var hkAtk35 = new Image();
var hkAtk36 = new Image();
var hkAtk37 = new Image();
var hkAtk38 = new Image();

hkAtk31.src = "./assets/images/fantasy/hero/Attack3/hkAtk31.png"
hkAtk32.src = "./assets/images/fantasy/hero/Attack3/hkAtk32.png"
hkAtk33.src = "./assets/images/fantasy/hero/Attack3/hkAtk33.png"
hkAtk34.src = "./assets/images/fantasy/hero/Attack3/hkAtk34.png"
hkAtk35.src = "./assets/images/fantasy/hero/Attack3/hkAtk35.png"
hkAtk36.src = "./assets/images/fantasy/hero/Attack3/hkAtk36.png"
hkAtk37.src = "./assets/images/fantasy/hero/Attack3/hkAtk37.png"
hkAtk38.src = "./assets/images/fantasy/hero/Attack3/hkAtk38.png"

var hkEnemyRun1 = new Image();
var hkEnemyRun2 = new Image();
var hkEnemyRun3 = new Image();
var hkEnemyRun4 = new Image();
var hkEnemyRun5 = new Image();
var hkEnemyRun6 = new Image();
var hkEnemyRun7 = new Image();
var hkEnemyRun8 = new Image();
var hkEnemyRun9 = new Image();
var hkEnemyRun10 = new Image();

hkEnemyRun1.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun1.png"
hkEnemyRun2.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun2.png"
hkEnemyRun3.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun3.png"
hkEnemyRun4.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun4.png"
hkEnemyRun5.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun5.png"
hkEnemyRun6.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun6.png"
hkEnemyRun7.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun7.png"
hkEnemyRun8.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun8.png"
hkEnemyRun9.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun9.png"
hkEnemyRun10.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun10.png"

var hkEnemyDeath1 = new Image();
var hkEnemyDeath2 = new Image();
var hkEnemyDeath3 = new Image();
var hkEnemyDeath4 = new Image();
var hkEnemyDeath5 = new Image();
var hkEnemyDeath6 = new Image();
var hkEnemyDeath7 = new Image();
var hkEnemyDeath8 = new Image();
var hkEnemyDeath9 = new Image();
var hkEnemyDeath10 = new Image();
var hkEnemyDeath11 = new Image();
var hkEnemyDeath12 = new Image();

hkEnemyDeath1.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath1.png"
hkEnemyDeath2.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath2.png"
hkEnemyDeath3.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath3.png"
hkEnemyDeath4.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath4.png"
hkEnemyDeath5.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath5.png"
hkEnemyDeath6.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath6.png"
hkEnemyDeath7.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath7.png"
hkEnemyDeath8.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath8.png"
hkEnemyDeath9.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath9.png"
hkEnemyDeath10.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath10.png"
hkEnemyDeath11.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath11.png"
hkEnemyDeath12.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath12.png"






function startGame() {
    heroChar = new hero(hkIdle1, 3, 27);
    enemyDefY = 18
    myBackground = new background(background1, -180, -115);
    enemyChar = new enemy(hkEnemyRun1, 170, enemyDefY)
    deadEnemies = new deadEnemyList(hkEnemyDeath12)
    swing = new sound("./assets/sfx/swing.wav");
    hit = new sound("./assets/sfx/hit.wav");
    die1 = new sound("./assets/sfx/die1.wav");
    die2 = new sound("./assets/sfx/die2.wav");
    bg1 = new sound("./assets/music/bg1.ogg");
    bg1.sound.volume = 0.14;
    bg1.sound.setAttribute("loop", "true");
    myGameArea.start();



}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        div = document.getElementById("screen");
        this.canvas.width = 160;
        this.canvas.height = 90;
        this.context = this.canvas.getContext("2d");
        div.appendChild(this.canvas);
        this.enemyPresent = false;
        this.killCount = 0;
        this.muted = false;
        this.genre = "fantasy"
        this.interval = setInterval(updateGameArea, 20);
        let character = movieData[myGameArea.killCount][Math.floor(Math.random() * movieData[myGameArea.killCount].length)];
        document.querySelector(".char-name").innerHTML = character.name;
        document.querySelector(".movie-title").innerHTML = character.movie;
        document.querySelector(".char-image").src = character.imageUrl;
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    },
    startEnemy: function(){
        if(this.enemyPresent===false){
            enemyChar.x = 170;
            enemyChar.y = enemyDefY;
            enemyChar.speedX = (Math.random()*-2)-2;
            enemyChar.speedY = 0;
            this.enemyPresent=true;
        }
        if(enemyChar.x<=heroChar.x+12){
            enemyChar.speedX = 0;
        }
    }
}

function background(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.image, this.x, this.y) 
    }
}

function deadEnemyList(image) {
    this.image = image;
    this.locations = []
    this.update = function() {
        ctx = myGameArea.context;
        this.locations.forEach(location =>{
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(this.image, location[0], location[1]) 
        })
        
    }
}

function hero(image, x, y) {
    this.animSpeed = 5;
    this.frameCount = 0;
    this.animation = "idle"
    this.image = image;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.attackSeq = 1;  
    this.update = function() {
        this.frameCount +=1;
        //animations
        if(this.animation==="idle"){
            //console.log(this.frameCount)
            if(this.frameCount>=this.animSpeed*8){
                this.image=hkIdle1
                this.frameCount = 0;
            }
            else if(this.frameCount>=this.animSpeed*7){
                this.image=hkIdle8
            }
            else if(this.frameCount>=this.animSpeed*6){
                this.image=hkIdle7
            }
            else if(this.frameCount>=this.animSpeed*5){
                this.image=hkIdle6
            }
            else if(this.frameCount>=this.animSpeed*4){
                this.image=hkIdle5
            }
            else if(this.frameCount>=this.animSpeed*3){
                this.image=hkIdle4
            }
            else if(this.frameCount>=this.animSpeed*2){
                this.image=hkIdle3
            }
            else if(this.frameCount>=this.animSpeed*1){
                this.image=hkIdle2
            }
        }
        if(this.animation==="attack1"){
            //console.log(this.frameCount)
            if(this.frameCount>=this.animSpeed*6){
                this.frameCount = 0;
                this.animation="idle"
                this.image=hkIdle1
            }
            else if(this.frameCount>=this.animSpeed*5){
                this.image=hkAtk16
            }
            else if(this.frameCount>=this.animSpeed*4){
                this.image=hkAtk15
            }
            else if(this.frameCount>=this.animSpeed*3){
                this.image=hkAtk14
            }
            else if(this.frameCount>=this.animSpeed*2){
                this.image=hkAtk13
                //hitbox
            }
            else if(this.frameCount>=this.animSpeed*1){
                this.image=hkAtk12
            }
            else{
                this.image=hkAtk11
            }
        }
        if(this.animation==="attack2"){
            //console.log(this.frameCount)
            if(this.frameCount>=this.animSpeed*6){
                this.frameCount = 0;
                this.animation="idle"
                this.image=hkIdle1
            }
            else if(this.frameCount>=this.animSpeed*5){
                this.image=hkAtk26
            }
            else if(this.frameCount>=this.animSpeed*4){
                this.image=hkAtk25
            }
            else if(this.frameCount>=this.animSpeed*3){
                this.image=hkAtk24
            }
            else if(this.frameCount>=this.animSpeed*2){
                this.image=hkAtk23
            }
            else if(this.frameCount>=this.animSpeed*1){
                this.image=hkAtk22
                //hitbox
            }
            else{
                this.image=hkAtk21
            }
        }
        if(this.animation==="attack3"){
            //console.log(this.frameCount)
            if(this.frameCount>=this.animSpeed*8){
                this.frameCount = 0;
                this.animation="idle"
                this.image=hkIdle1
            }
            else if(this.frameCount>=this.animSpeed*7){
                this.image=hkAtk38
            }
            else if(this.frameCount>=this.animSpeed*6){
                this.image=hkAtk37
            }
            else if(this.frameCount>=this.animSpeed*5){
                this.image=hkAtk36
            }
            else if(this.frameCount>=this.animSpeed*4){
                this.image=hkAtk35
            }
            else if(this.frameCount>=this.animSpeed*3){
                this.image=hkAtk34
            }
            else if(this.frameCount>=this.animSpeed*2){
                this.image=hkAtk33
                //hitbox
            }
            else if(this.frameCount>=this.animSpeed*1){
                this.image=hkAtk32
            }
            else{
                this.image=hkAtk31
            }
        }
        ctx = myGameArea.context;
        ctx.drawImage(this.image, this.x, this.y);
        
        


    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
}

function enemy(image, x, y) {
    this.attackDistance = 50;
    this.animSpeed = 5;
    this.frameCount = 0;
    this.animation = "run"
    this.image = image;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.attackSeq = 1;  
    this.update = function() {
        this.frameCount +=1;
        //animations
        if(this.animation==="run"){
            //console.log(this.frameCount)
            if(this.frameCount>=this.animSpeed*10){
                this.image=hkEnemyRun1
                this.frameCount = 0;
            }
            else if(this.frameCount>=this.animSpeed*9){
                this.image=hkEnemyRun10
            }
            else if(this.frameCount>=this.animSpeed*8){
                this.image=hkEnemyRun9
            }
            else if(this.frameCount>=this.animSpeed*7){
                this.image=hkEnemyRun8
            }
            else if(this.frameCount>=this.animSpeed*6){
                this.image=hkEnemyRun7
            }
            else if(this.frameCount>=this.animSpeed*5){
                this.image=hkEnemyRun6
            }
            else if(this.frameCount>=this.animSpeed*4){
                this.image=hkEnemyRun5
            }
            else if(this.frameCount>=this.animSpeed*3){
                this.image=hkEnemyRun4
            }
            else if(this.frameCount>=this.animSpeed*2){
                this.image=hkEnemyRun3
            }
            else if(this.frameCount>=this.animSpeed*1){
                this.image=hkEnemyRun2
            }
        }
        if(this.animation==="death"){
            if(this.frameCount>=this.animSpeed*12){
                deadEnemies.locations.push([this.x,this.y]);
                deadEnemies.update();
                this.x=170;
                myGameArea.enemyPresent=false;
                this.frameCount = 0;
                this.animation = "run"
            }
            else if(this.frameCount>=this.animSpeed*11){
                this.image=hkEnemyDeath12
            }
            else if(this.frameCount>=this.animSpeed*10){
                this.image=hkEnemyDeath11
                document.querySelector(".title").classList.remove("red")
                
            }
            else if(this.frameCount>=this.animSpeed*9){
                this.image=hkEnemyDeath10
            }
            else if(this.frameCount>=this.animSpeed*8){
                this.image=hkEnemyDeath9
            }
            else if(this.frameCount>=this.animSpeed*7){
                this.image=hkEnemyDeath8
            }
            else if(this.frameCount>=this.animSpeed*6){
                this.image=hkEnemyDeath7
            }
            else if(this.frameCount>=this.animSpeed*5){
                this.image=hkEnemyDeath6
            }
            else if(this.frameCount>=this.animSpeed*4){
                this.image=hkEnemyDeath5
            }
            else if(this.frameCount>=this.animSpeed*3){
                this.image=hkEnemyDeath4     
                
            }
            else if(this.frameCount>=this.animSpeed*2){
                this.image=hkEnemyDeath3
            }
            else if(this.frameCount>=this.animSpeed*1){
                this.image=hkEnemyDeath2
            }
            else{
                this.image=hkEnemyDeath1
            }
        }
        ctx = myGameArea.context;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.image, this.x, this.y);
        
        


    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
}

function updateGameArea() {
    myGameArea.clear();  
    myBackground.update();
    deadEnemies.update();
    myGameArea.startEnemy();  
    heroChar.newPos();    
    heroChar.update();
    enemyChar.newPos();    
    enemyChar.update();
    if(bg1.sound.currentTime>bg1.sound.duration-0.2){
        bg1.play();
    }
}

function move(dir) {
    if (dir == "up") {heroChar.speedY = -1; }
    if (dir == "down") {heroChar.speedY = 1; }
    if (dir == "left") {heroChar.speedX = -1; }
    if (dir == "right") {heroChar.speedX = 1; }
}



function addKill(){

    //add dead body, reset enemy
    enemyChar.speedX = 0;
    if(enemyChar.animation!="death"){
        enemyChar.frameCount = 0;
        myGameArea.killCount+=1
        document.querySelector(".title").classList.add("red")
        document.querySelector(".count-num").innerHTML = myGameArea.killCount;
        document.querySelector(".char-image").classList.add("invisible")
        fadeOut();
        setTimeout(function(){

        //get char
        if(movieData[myGameArea.killCount]){
            let character = movieData[myGameArea.killCount][Math.floor(Math.random() * movieData[myGameArea.killCount].length)];
            document.querySelector(".char-name").innerHTML = character.name;
            document.querySelector(".movie-title").innerHTML = character.movie;
            document.querySelector(".char-image").classList.remove("invisible")
            document.querySelector(".char-image").src = character.imageUrl;
            
            fadeIn();
        }
        else{
            document.querySelector(".char-name").innerHTML = "NOBODY";
            document.querySelector(".movie-title").innerHTML = "on record with this kill count";
            fadeIn();
        }


         }, 300);

    }
    enemyChar.animation = "death";

    //play sounds
    if(myGameArea.muted===false){
        swing.play();
        hit.play();
        if(Math.random()>0.9){
            die2.play();
        }
        else{
            die1.play();
        }
    }



    

    //generate new enemy with random speed
    enemyChar.speedX = Math.random()*0.2;
    enemyChar.speedY = Math.random()*0.1;
    enemyChar.speedY += Math.random()*(-0.1);
}


function attack() {
    if(bg1.sound.paused){
    bg1.play()
    }
    heroChar.frameCount = 0;
    if (enemyChar.x<=heroChar.x+enemyChar.attackDistance){
        addKill();
    }
    else{
        if(myGameArea.muted===false){
            swing.play();
        }
    }
    if(heroChar.attackSeq==1) {heroChar.animation = "attack1"; heroChar.attackSeq=2}
    else if(heroChar.attackSeq==2) {heroChar.animation = "attack2"; heroChar.attackSeq=3}
    else if(heroChar.attackSeq==3) {heroChar.animation = "attack3"; heroChar.attackSeq=1}
}

function handleMute(){
    
    if(myGameArea.muted===false){
        bg1.sound.muted = true;
        myGameArea.muted = true;
    }
    else{
        bg1.sound.muted = false;
        myGameArea.muted = false;
    }
    console.log(myGameArea.muted)
}

function fadeOut(){
    document.querySelector(".char-name-container").classList.remove("fadeInLeft")
    document.querySelector(".char-name-container").classList.add("fadeOutLeft")
    document.querySelector(".movie-title-container").classList.remove("fadeInRight")
    document.querySelector(".movie-title-container").classList.add("fadeOutRight")
}

function fadeIn(){
    document.querySelector(".char-name-container").classList.add("fadeInLeft")
    document.querySelector(".char-name-container").classList.remove("fadeOutLeft")
    document.querySelector(".movie-title-container").classList.add("fadeInRight")
    document.querySelector(".movie-title-container").classList.remove("fadeOutRight")
}

function sciFi(){ //switch assets to scifi theme

    if(myGameArea.genre!="scifi"){


        myGameArea.genre="scifi"
        //hero

        hkIdle1.src = "./assets/images/scifi/hero/Idle/idle-1.png"
        hkIdle2.src = "./assets/images/scifi/hero/Idle/idle-2.png"
        hkIdle3.src = "./assets/images/scifi/hero/Idle/idle-3.png"
        hkIdle4.src = "./assets/images/scifi/hero/Idle/idle-4.png"
        hkIdle5.src = "./assets/images/scifi/hero/Idle/idle-5.png"
        hkIdle6.src = "./assets/images/scifi/hero/Idle/idle-6.png"
        hkIdle7.src = "./assets/images/scifi/hero/Idle/idle-7.png"
        hkIdle8.src = "./assets/images/scifi/hero/Idle/idle-8.png"

        hkAtk11.src = "./assets/images/scifi/hero/Attack1/shoot1.png"
        hkAtk12.src = "./assets/images/scifi/hero/Attack1/shoot2.png"
        hkAtk13.src = "./assets/images/scifi/hero/Attack1/shoot3.png"
        hkAtk14.src = "./assets/images/scifi/hero/Attack1/shoot4.png"
        hkAtk15.src = "./assets/images/scifi/hero/Attack1/shoot5.png"
        hkAtk16.src = "./assets/images/scifi/hero/Attack1/shoot6.png"

        hkAtk21.src = "./assets/images/scifi/hero/Attack1/shoot1.png"
        hkAtk22.src = "./assets/images/scifi/hero/Attack1/shoot2.png"
        hkAtk23.src = "./assets/images/scifi/hero/Attack1/shoot3.png"
        hkAtk24.src = "./assets/images/scifi/hero/Attack1/shoot4.png"
        hkAtk25.src = "./assets/images/scifi/hero/Attack1/shoot5.png"
        hkAtk26.src = "./assets/images/scifi/hero/Attack1/shoot6.png"

        hkAtk31.src = "./assets/images/scifi/hero/Attack3/shoot1.png"
        hkAtk32.src = "./assets/images/scifi/hero/Attack3/shoot2.png"
        hkAtk33.src = "./assets/images/scifi/hero/Attack3/shoot3.png"
        hkAtk34.src = "./assets/images/scifi/hero/Attack3/shoot4.png"
        hkAtk35.src = "./assets/images/scifi/hero/Attack3/shoot5.png"
        hkAtk36.src = "./assets/images/scifi/hero/Attack3/shoot6.png"
        hkAtk37.src = "./assets/images/scifi/hero/Attack3/shoot7.png"
        hkAtk38.src = "./assets/images/scifi/hero/Attack3/shoot8.png"

        //enemy

        hkEnemyRun1.src = "./assets/images/scifi/enemy/Run/sfrun1.png"
        hkEnemyRun2.src = "./assets/images/scifi/enemy/Run/sfrun2.png"
        hkEnemyRun3.src = "./assets/images/scifi/enemy/Run/sfrun3.png"
        hkEnemyRun4.src = "./assets/images/scifi/enemy/Run/sfrun4.png"
        hkEnemyRun5.src = "./assets/images/scifi/enemy/Run/sfrun5.png"
        hkEnemyRun6.src = "./assets/images/scifi/enemy/Run/sfrun6.png"
        hkEnemyRun7.src = "./assets/images/scifi/enemy/Run/sfrun7.png"
        hkEnemyRun8.src = "./assets/images/scifi/enemy/Run/sfrun8.png"
        hkEnemyRun9.src = "./assets/images/scifi/enemy/Run/sfrun9.png"
        hkEnemyRun10.src = "./assets/images/scifi/enemy/Run/sfrun10.png"

        hkEnemyDeath1.src = "./assets/images/scifi/enemy/Die/sfdie1.png"
        hkEnemyDeath2.src = "./assets/images/scifi/enemy/Die/sfdie2.png"
        hkEnemyDeath3.src = "./assets/images/scifi/enemy/Die/sfdie3.png"
        hkEnemyDeath4.src = "./assets/images/scifi/enemy/Die/sfdie4.png"
        hkEnemyDeath5.src = "./assets/images/scifi/enemy/Die/sfdie5.png"
        hkEnemyDeath6.src = "./assets/images/scifi/enemy/Die/sfdie6.png"
        hkEnemyDeath7.src = "./assets/images/scifi/enemy/Die/sfdie7.png"
        hkEnemyDeath8.src = "./assets/images/scifi/enemy/Die/sfdie8.png"
        hkEnemyDeath9.src = "./assets/images/scifi/enemy/Die/sfdie9.png"
        hkEnemyDeath10.src = "./assets/images/scifi/enemy/Die/sfdie10.png"
        hkEnemyDeath11.src = "./assets/images/scifi/enemy/Die/sfdie11.png"
        hkEnemyDeath12.src = "./assets/images/scifi/enemy/Die/sfdie12.png"

        enemyDefY = -5;
        enemyChar.y -= 23;
        enemyChar.attackDistance = 38;

        deadEnemies.locations.forEach(location =>{
            location[1]-= 23;
        })

        //bg

        background1.src = "./assets/images/backgrounds/bg2.jpg"
        myBackground.x = -140;
        myBackground.y = -125;

        //sounds

        swing.sound.src = "./assets/sfx/zap.ogg"
        hit.sound.src = "./assets/sfx/zaphit.wav"
        bg1.sound.src = "./assets/music/bg2.ogg"
        bg1.play();
    }


}

function fantasy(){ //switch assets to fantasy theme

    if(myGameArea.genre!="fantasy"){


        myGameArea.genre="fantasy"
        //hero

        hkIdle1.src = "./assets/images/fantasy/hero/Idle/hkIdle1.png"
        hkIdle2.src = "./assets/images/fantasy/hero/Idle/hkIdle2.png"
        hkIdle3.src = "./assets/images/fantasy/hero/Idle/hkIdle3.png"
        hkIdle4.src = "./assets/images/fantasy/hero/Idle/hkIdle4.png"
        hkIdle5.src = "./assets/images/fantasy/hero/Idle/hkIdle5.png"
        hkIdle6.src = "./assets/images/fantasy/hero/Idle/hkIdle6.png"
        hkIdle7.src = "./assets/images/fantasy/hero/Idle/hkIdle7.png"
        hkIdle8.src = "./assets/images/fantasy/hero/Idle/hkIdle8.png"

        hkAtk11.src = "./assets/images/fantasy/hero/Attack1/hkAtk11.png"
        hkAtk12.src = "./assets/images/fantasy/hero/Attack1/hkAtk12.png"
        hkAtk13.src = "./assets/images/fantasy/hero/Attack1/hkAtk13.png"
        hkAtk14.src = "./assets/images/fantasy/hero/Attack1/hkAtk14.png"
        hkAtk15.src = "./assets/images/fantasy/hero/Attack1/hkAtk15.png"
        hkAtk16.src = "./assets/images/fantasy/hero/Attack1/hkAtk16.png"

        hkAtk21.src = "./assets/images/fantasy/hero/Attack2/hkAtk21.png"
        hkAtk22.src = "./assets/images/fantasy/hero/Attack2/hkAtk22.png"
        hkAtk23.src = "./assets/images/fantasy/hero/Attack2/hkAtk23.png"
        hkAtk24.src = "./assets/images/fantasy/hero/Attack2/hkAtk24.png"
        hkAtk25.src = "./assets/images/fantasy/hero/Attack2/hkAtk25.png"
        hkAtk26.src = "./assets/images/fantasy/hero/Attack2/hkAtk26.png"

        hkAtk31.src = "./assets/images/fantasy/hero/Attack3/hkAtk31.png"
        hkAtk32.src = "./assets/images/fantasy/hero/Attack3/hkAtk32.png"
        hkAtk33.src = "./assets/images/fantasy/hero/Attack3/hkAtk33.png"
        hkAtk34.src = "./assets/images/fantasy/hero/Attack3/hkAtk34.png"
        hkAtk35.src = "./assets/images/fantasy/hero/Attack3/hkAtk35.png"
        hkAtk36.src = "./assets/images/fantasy/hero/Attack3/hkAtk36.png"
        hkAtk37.src = "./assets/images/fantasy/hero/Attack3/hkAtk37.png"
        hkAtk38.src = "./assets/images/fantasy/hero/Attack3/hkAtk38.png"

        //enemy

        hkEnemyRun1.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun1.png"
        hkEnemyRun2.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun2.png"
        hkEnemyRun3.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun3.png"
        hkEnemyRun4.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun4.png"
        hkEnemyRun5.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun5.png"
        hkEnemyRun6.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun6.png"
        hkEnemyRun7.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun7.png"
        hkEnemyRun8.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun8.png"
        hkEnemyRun9.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun9.png"
        hkEnemyRun10.src = "./assets/images/fantasy/barbarian/Run/hkEnemyRun10.png"

        hkEnemyDeath1.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath1.png"
        hkEnemyDeath2.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath2.png"
        hkEnemyDeath3.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath3.png"
        hkEnemyDeath4.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath4.png"
        hkEnemyDeath5.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath5.png"
        hkEnemyDeath6.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath6.png"
        hkEnemyDeath7.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath7.png"
        hkEnemyDeath8.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath8.png"
        hkEnemyDeath9.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath9.png"
        hkEnemyDeath10.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath10.png"
        hkEnemyDeath11.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath11.png"
        hkEnemyDeath12.src = "./assets/images/fantasy/barbarian/Death/hkEnemyDeath12.png"


        //offset enemy

        enemyDefY = 18;
        enemyChar.y += 23;
        enemyChar.attackDistance = 50;

        deadEnemies.locations.forEach(location =>{
            location[1]+= 23;
        })

        //bg

        background1.src = "./assets/images/backgrounds/bg1.jpg"
        myBackground.x = -180;
        myBackground.y = -115;

        //sounds

        swing.sound.src = "./assets/sfx/swing.wav"
        hit.sound.src = "./assets/sfx/hit.wav"
        bg1.sound.src = "./assets/music/bg1.ogg"
        bg1.play();
    }


}



function clearmove() {
    heroChar.speedX = 0; 
    heroChar.speedY = 0; 
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.currentTime = 0
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}