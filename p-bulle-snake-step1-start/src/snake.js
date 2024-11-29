/**
 * Initialise le serpent au début du jeu.
 *
 * Cette fonction crée le serpent en tant que tableau contenant un seul segment,
 * positionné à une position de départ définie sur la grille.
 *
 * @returns {Array<{x: number, y: number}>} - Un tableau contenant un objet représentant la position du premier segment du serpent.
 */
export function initSnake() {
  // A compléter
  
  let head = { x: 40 , y:180};
  return [head];
}

/**
 * Déplace le serpent dans la direction actuelle.
 *
 * Cette fonction calcule la nouvelle position de la tête du serpent en fonction
 * de la direction actuelle (gauche, haut, droite, bas). Le reste du corps du serpent
 * suit la tête. La fonction retourne un objet représentant la nouvelle position de la tête du serpent.
 *
 * @param {Array<{x: number, y: number}>} snake - Le tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
 * @param {string} direction - La direction actuelle du mouvement du serpent ("LEFT", "UP", "RIGHT", ou "DOWN").
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la distance de déplacement du serpent.
 * @returns {{x: number, y: number}} - Un objet représentant les nouvelles coordonnées `x` et `y` de la tête du serpent après le déplacement.
 */
export function moveSnake(snake,sens ) {
  // A compléter
  for (let i = snake.length -1; i > 0; i--)
    {
      snake[i].x = snake[i - 1].x
      snake[i].y = snake[i - 1].y
    }
  let direction;
  if (sens === "RIGHT" && direction != 1) {
    snake[0].x += 20;
    direction = 0;
  }
  if (sens === "LEFT" && direction != 0) {
    snake[0].x -= 20;
    direction = 1;
  }
  if (sens === "UP" && direction != 3) {
    snake[0].y -= 20;
    direction = 2;
  }
  if (sens === "DOWN" && direction != 2) {
    snake[0].y += 20
    direction = 3;
  }
  return snake;
}

 
/**
 * Dessine le serpent sur le canvas.
 *
 * Cette fonction parcourt chaque segment du serpent et le dessine sur le canvas en utilisant
 * un rectangle coloré. La tête du serpent est dessinée dans une couleur différente des autres segments
 * pour la distinguer visuellement. Chaque segment est dessiné à sa position actuelle sur la grille,
 * avec une taille déterminée par la valeur de `box`.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {Array<{x: number, y: number}>} snake - Un tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille de chaque segment du serpent.
 */
export function drawSnake(snake,ctx,box) {
  // A compléter

  for(let pas = 0 ; pas < snake.length; pas++){
    
    if(pas ==0){
      ctx.fillStyle = "pink";
    }
    else{
      ctx.fillStyle = "#dfabb2";
    }
    ctx.beginPath();
   
    ctx.fillRect(snake[pas].x, snake[pas].y, box, box);
    ctx.rect(snake[pas].x, snake[pas].y, box, box);
  }
}

export function addNumberSnake(snake){

  let lastrectangle = snake[snake.length - 1]
  let newrectangle = {x: lastrectangle.x , y: lastrectangle.y}
  snake.push(newrectangle);
  
}
