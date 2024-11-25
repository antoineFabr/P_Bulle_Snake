import { initSnake, moveSnake, drawSnake } from "./snake.js";

import { generateFood, drawFood } from "./food.js";

import { handleDirectionChange } from "./controls.js";
//import { checkCollision, checkWallCollision } from "./collision.js";
//import { drawScore } from "./score.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


const box = 20;
const gameSpeed = 200;
let snake;
let food;
var sens = "RIGHT";

let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle
let x = 0



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

  drawSnake(snake);
  food = generateFood(box, canvas);
  drawFood(food,box);
  
  
  
  
}




startGame();
