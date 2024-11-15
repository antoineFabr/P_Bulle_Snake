//import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { initSnake } from "./snake.js";
//import { generateFood, drawFood } from "./food.js";
import { generateFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
//import { checkCollision, checkWallCollision } from "./collision.js";
//import { drawScore } from "./score.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const carrérouge = canvas.getContext("2d");

const box = 20;
const gameSpeed = 10;
let snake;
let food;
let direction = "RIGHT";
let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle
let x = 0
document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});
let random = Math.floor(Math.random() * gameCanvas.height);
console.log(random);
function startGame() {
  snake = initSnake();
  food = generateFood(box, canvas);

  gameInterval = setInterval(draw, gameSpeed); // Stockage de l'identifiant de l'intervalle
}


function draw() {
  
  // A compléter
  ctx.beginPath();
  ctx.clearRect(x - 5, x - 5, 55, 55);
  x += 1;
  ctx.rect(x, x, 45, 45);
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.fillRect(x, x, 45, 45);
  
  
}


function apple(){

  ctx.beginPath();
  ctx.clearRect(155, 55 - 5, 55, 55);
  x += 1;
  ctx.rect(155, 55 - 5, 55, 55);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fillRect(155, 55 - 5, 55, 55);
}
apple();
document.addEventListener("keydown", function(event)  {
  let key = event.key;
  handleDirectionChange(key);
  
}) 
startGame();
