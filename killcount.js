var myGamePiece;
var myBackground;

//images

//backgrounds

var bg1 = new Image();
bg1.src = "./assets/images/backgrounds/bg1.jpg"

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

hkIdle1.src = "./assets/images/hero/Idle/hkIdle1.png"
hkIdle2.src = "./assets/images/hero/Idle/hkIdle2.png"
hkIdle3.src = "./assets/images/hero/Idle/hkIdle3.png"
hkIdle4.src = "./assets/images/hero/Idle/hkIdle4.png"
hkIdle5.src = "./assets/images/hero/Idle/hkIdle5.png"
hkIdle6.src = "./assets/images/hero/Idle/hkIdle6.png"
hkIdle7.src = "./assets/images/hero/Idle/hkIdle7.png"
hkIdle8.src = "./assets/images/hero/Idle/hkIdle8.png"


var hkAtk11 = new Image();
var hkAtk12 = new Image();
var hkAtk13 = new Image();
var hkAtk14 = new Image();
var hkAtk15 = new Image();
var hkAtk16 = new Image();

hkAtk11.src = "./assets/images/hero/Attack1/hkAtk11.png"
hkAtk12.src = "./assets/images/hero/Attack1/hkAtk12.png"
hkAtk13.src = "./assets/images/hero/Attack1/hkAtk13.png"
hkAtk14.src = "./assets/images/hero/Attack1/hkAtk14.png"
hkAtk15.src = "./assets/images/hero/Attack1/hkAtk15.png"
hkAtk16.src = "./assets/images/hero/Attack1/hkAtk16.png"

var hkAtk21 = new Image();
var hkAtk22 = new Image();
var hkAtk23 = new Image();
var hkAtk24 = new Image();
var hkAtk25 = new Image();
var hkAtk26 = new Image();

hkAtk21.src = "./assets/images/hero/Attack2/hkAtk21.png"
hkAtk22.src = "./assets/images/hero/Attack2/hkAtk22.png"
hkAtk23.src = "./assets/images/hero/Attack2/hkAtk23.png"
hkAtk24.src = "./assets/images/hero/Attack2/hkAtk24.png"
hkAtk25.src = "./assets/images/hero/Attack2/hkAtk25.png"
hkAtk26.src = "./assets/images/hero/Attack2/hkAtk26.png"

var hkAtk31 = new Image();
var hkAtk32 = new Image();
var hkAtk33 = new Image();
var hkAtk34 = new Image();
var hkAtk35 = new Image();
var hkAtk36 = new Image();
var hkAtk37 = new Image();
var hkAtk38 = new Image();

hkAtk31.src = "./assets/images/hero/Attack3/hkAtk31.png"
hkAtk32.src = "./assets/images/hero/Attack3/hkAtk32.png"
hkAtk33.src = "./assets/images/hero/Attack3/hkAtk33.png"
hkAtk34.src = "./assets/images/hero/Attack3/hkAtk34.png"
hkAtk35.src = "./assets/images/hero/Attack3/hkAtk35.png"
hkAtk36.src = "./assets/images/hero/Attack3/hkAtk36.png"
hkAtk37.src = "./assets/images/hero/Attack3/hkAtk37.png"
hkAtk38.src = "./assets/images/hero/Attack3/hkAtk38.png"






function startGame() {
    heroChar = new hero(hkIdle1, 3, 27);
    myBackground = new background(bg1, -180, -115);
    swing = new sound("./assets/sfx/swing.wav");
    hit = new sound("./assets/sfx/hit.wav");
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
        //this.div.insertBefore(this.canvas, this.div.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function background(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.attackSeq = 1;  
    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.image, this.x, this.y) 
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

function updateGameArea() {
    myGameArea.clear();  
    myBackground.update();
    heroChar.newPos();    
    heroChar.update();
}

function move(dir) {
    //heroChar.image.src = "angry.gif";
    if (dir == "up") {heroChar.speedY = -1; }
    if (dir == "down") {heroChar.speedY = 1; }
    if (dir == "left") {heroChar.speedX = -1; }
    if (dir == "right") {heroChar.speedX = 1; }
}

function attack() {
    //heroChar.image.src = "angry.gif";
    heroChar.frameCount = 0;
    swing.play();
    if(heroChar.attackSeq==1) {heroChar.animation = "attack1"; heroChar.attackSeq=2}
    else if(heroChar.attackSeq==2) {heroChar.animation = "attack2"; heroChar.attackSeq=3}
    else if(heroChar.attackSeq==3) {heroChar.animation = "attack3"; heroChar.attackSeq=1}
}

function zoomOut() {
    //heroChar.image.src = "angry.gif";
    myGameArea.canvas.width+=2
    myGameArea.canvas.height+=2
}

function zoomIn() {
    //heroChar.image.src = "angry.gif";
    myGameArea.canvas.width-=2
    myGameArea.canvas.height-=2
}



function clearmove() {
    //heroChar.image.src = "smiley.gif";
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