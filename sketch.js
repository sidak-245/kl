var bg;
var character1,character2;
var database,game,player,form;
var gameState,playerCount;
var charc1,charc1punch,charc1kick;
var charc2,charc2punch,charc2kick;
var counter = 0;

function preload (){
    bg = loadImage("./images/fightbg.png")
    charc1 = loadImage("images/fight game images/character1.png")
    charc1punch = loadImage("images/fight game images/character1punch.png")
  charc1kick = loadImage("images/fight game images/character1kick.png")
  charc2 = loadImage("images/fight game images/character2.png")
    charc2punch = loadImage("images/fight game images/character2punch.png")
  charc2kick = loadImage("images/fight game images/character2kick.png")
  
}
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
     
  }
  
  
  function draw(){
    if(gameState === 0 && counter == 0){
      game.start();
    }
      
    if(playerCount === 2){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
    if(gameState === 2){
      game.end();
    }
  }