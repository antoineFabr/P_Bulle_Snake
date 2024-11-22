import { initSnake, moveSnake, drawSnake } from "./snake.js";

//import { generateFood, drawFood } from "./food.js";
import { generateFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
//import { checkCollision, checkWallCollision } from "./collision.js";
//import { drawScore } from "./score.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const tab2D = [
  [1,2,3,4,5,6],
  [7,8,9,10,11,12],
  [13,14,15,16,17,18],
  [19,20,21,22,23,24],
  [25,26,27,28,29,30],
  [31,32,33,34,35,36]];
const box = 20;
const gameSpeed = 300;
let snake;
let food;
var sens = "RIGHT";

let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle
let x = 0

let random1 = Math.floor(Math.random() * gameCanvas.height);
console.log(random1);
let random2 = Math.floor(Math.random()* gameCanvas.width);
console.log(random2);
console.log(tab2D[2][5])

function startGame() {
  snake = initSnake();
  food = generateFood(box, canvas);

  gameInterval = setInterval(draw, gameSpeed); // Stockage de l'identifiant de l'intervalle
}

document.addEventListener("keydown", function(event)  {
  let key = event.key;
  sens = handleDirectionChange(key);
  
});
function draw() {
  ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
  console.log(sens);
  snake = moveSnake(snake, sens);
  for(let nbr; nbr <10;nbr++){
    drawSnake(snake);
  }
  drawSnake(snake);
  apple();
  /*// A compléter
  ctx.beginPath();
  ctx.clearRect(x , x , 55, 55);

  x += 1;
  
  ctx.stroke();
  ctx.fillRect(x, x, 45, 45);
  ctx.fillStyle = "black";*/
  
  
  
}


function apple(){

  ctx.beginPath();
  ctx.clearRect(155, 55 - 5, 55, 55);
  x += 1;
  ctx.rect(random1 -55, random2-55, 44, 44);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fillRect(random1-55, random2-55, 44, 44);
}


startGame();
