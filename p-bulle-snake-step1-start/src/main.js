import { initSnake, moveSnake, drawSnake, addNumberSnake } from "./snake.js";
/*import * as THREE from 'three';*/
import { generateFood, drawFood } from "./food.js";

import { handleDirectionChange,checkdirection } from "./controls.js";
import {checkWallCollision, checkFoodCollision, checkCollision } from "./collision.js";

//import { drawScore } from "./score.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


const box = 20;
const gameSpeed = 150;
let snake;
let food;
var sens = "ArrowRight";
var GameOver;
let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle
let x = 0
let toucher = false;

/*const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRender({
  canvas: document.querySelector('#gameCanvas'),
});*/


function startGame() {
  GameOver = false;
  snake = initSnake();
  food = generateFood(box, canvas);
  
  gameInterval = setInterval(draw, gameSpeed); // Stockage de l'identifiant de l'intervalle
  sens = "ArrowRight";
  addNumberSnake(snake);

}


function draw() {
  let changeDirectionAllowed = true;
  if (GameOver != true)
  {
    
    document.addEventListener("keydown", function(event)  {
      if (!changeDirectionAllowed) return
      let key = event.key;
      if (!checkdirection(key, sens)){ 
        sens = handleDirectionChange(key);
        changeDirectionAllowed = false;
      }
      
      
      
    });
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    
    snake = moveSnake(snake, sens,ctx);
    if (checkFoodCollision(snake, food)){
      addNumberSnake(snake);
      food = generateFood(box, canvas);
      score += 1;
    }
    if (checkWallCollision(snake)){
      GameOver = true;
      
    }
    if(checkCollision(snake)){
      GameOver = true;

    }
    
      
    
    drawSnake(snake,ctx,box);
    drawFood(food,box,ctx);
  }
  else if(GameOver == true)
  {
    alert("GameOver!!");
    startGame();
    clearInterval(gameInterval);

  }

}




startGame();
