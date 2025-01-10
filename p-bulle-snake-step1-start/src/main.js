import { initSnake, moveSnake, drawSnake, addNumberSnake } from "./snake.js";

import { generateFood, drawFood } from "./food.js";

import { handleDirectionChange,checkdirection } from "./controls.js";
import {checkWallCollision, checkFoodCollision, checkCollision } from "./collision.js";

import { drawScore } from "./score.js";
import { menuPause, temps } from "./affichage.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


const box = 20; 
const gameSpeed = 150;  //constante pour choisir la rapidité du jeu 
let snake;  //tableau pour stocker les coordonées de la tete du serpent et du corps du serpent
let food; //variable pour stocker les coordonées de la nouriture
var sens = "ArrowRight";  //variable du sens de base du snake
var GameOver; 
let score = 0;  //variable pour stocker le score
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle
let pause = false;
let tick = 0; // Compteur de tick
let lastTickSpacePressed; // Le dernier tick où la touche espace était pressée


//fonction pour commencer le jeu 
function startGame() {
  //on met que la variable game over est fausse comme cela le jeu peut etre joué
  GameOver = false;

  //on initialise le snake
  snake = initSnake();

  //on genere la nouriture
  food = generateFood(box, canvas);
  
  //on fait que la méthode draw est appelé tout les 150 milisecondes
  gameInterval = setInterval(function() {
    if(!pause){
      tick++
      draw();
    }
    }, gameSpeed); // Stockage de l'identifiant de l'intervalle

  //on remet que le sens de base est a droite
  sens = "ArrowRight";
  //on remet le score a zero si le joueur recommence
  score = 0;

  tick = 0;
  //et on ajoute un carré au serpent 
  addNumberSnake(snake);
}


function draw() {
  let changeDirectionAllowed = true;
  //si la variable game over n'est pas vrai le jeu continue
  if (GameOver != true)
  {
    //detecte une touche pressée
    document.addEventListener("keydown", function(event)  {
    
      
      if (event.key == " "){
        
        console.log(event.key)
        menuPause(ctx);
        if(!pause){
          pause = true;
          lastTickSpacePressed = tick;
        }
        else if (pause) {
          pause = false;
          lastTickSpacePressed = tick;
        }
        
      }
      if (!changeDirectionAllowed) return

      let key = event.key;
      
      
      //si le changement de direction est autorisé le serpent tourne
      if (!checkdirection(key, sens)){
        
        sens = handleDirectionChange(key);
        changeDirectionAllowed = false;
      }
    });
    //on efface tous ce qui se trouve dans le canva
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    
    snake = moveSnake(snake, sens,ctx);
    /*si le serpent rentre en collision avec la nouriture 
    on ajoute un carré de plus au serpent,
    ca genere une nouvelle position de la nouriture
    et on ajoute un au score
    */
    if (checkFoodCollision(snake, food)){
      addNumberSnake(snake);
      food = generateFood(box, canvas);
      score += 1;
    }
    //si le serpent rentre en collision avec le mur c'est game over
    if (checkWallCollision(snake)){
      GameOver = true;
      
    }
    //si le serpent rentre en collision avec lui meme c'est game over
    if(checkCollision(snake)){
      GameOver = true;
    }
    temps(tick,ctx);
    //affichage du score
    drawScore(score,ctx);
    //dessiner le serpent 
    drawSnake(snake,ctx,box);
    //dessiner la nouriture
    drawFood(food,box,ctx);
  }
  //si la variable de game over est vrai le jeu recommence
  else if(GameOver == true)
  {
    alert("GameOver!!");
    startGame();
    clearInterval(gameInterval);

  }

}
startGame();