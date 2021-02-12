var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var yo,green,track,yo_img,green_img;
var pizza,red,red_img,pizza_img


function preload(){
  track=loadImage("race.png")
 green=loadImage("green.png")
  yo=loadImage("yo.png")
  red=loadImage("red.png")
  pizza=loadImage("pizza.png")
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2 ){
    game.end()
  }
}