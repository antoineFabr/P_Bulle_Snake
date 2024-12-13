import { initSnake, moveSnake, drawSnake, addNumberSnake } from "./snake.js";
/*import * as THREE from 'three';*/
import { generateFood, drawFood } from "./food.js";

import { handleDirectionChange } from "./controls.js";
//import { checkCollision, checkWallCollision, checkFoodCollision } from "./collision.js";
import {checkFoodCollision } from "./collision.js";
//import { drawScore } from "./score.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


const box = 20;
const gameSpeed = 150;
let snake;
let food;
var sens = "ArrowRight";

let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle
let x = 0

/*const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRender({
  canvas: document.querySelector('#gameCanvas'),
});*/


function startGame() {
  snake = initSnake();
  food = generateFood(box, canvas);
  
  gameInterval = setInterval(draw, gameSpeed); // Stockage de l'identifiant de l'intervalle
  
  addNumberSnake(snake);
  addNumberSnake(snake);addNumberSnake(snake);
}


function draw() {
  document.addEventListener("keydown", function(event)  {
    let key = event.key;
    if (sens == key){

    }
    else{
      sens = handleDirectionChange(key);
    }
    
    
  });
  ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
  
  
  snake = moveSnake(snake, sens,ctx);
  if (checkFoodCollision(snake, food)){
    addNumberSnake(snake);
    food = generateFood(box, canvas);
    score += 1;
  }
  drawSnake(snake,ctx,box);
  drawFood(food,box,ctx);
  
  
}




startGame();
