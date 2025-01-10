/**
 * Génère de manière aléatoire la position de la nourriture sur la grille du jeu.
 *
 * La nourriture est placée à une position aléatoire sur la grille, en s'assurant
 * que les coordonnées sont alignées sur la grille en fonction de la taille des cases (box).
 * La position générée est dans les limites du canvas, définies par sa largeur et sa hauteur.
 *
 * @param {number} box - La taille d'une case de la grille en pixels.
 * @param {HTMLCanvasElement} canvas - L'élément canvas représentant la surface de jeu.
 * @returns {{x: number, y: number}} - Un objet contenant les coordonnées `x` et `y` de la nourriture générée.
 */
export function generateFood(box,canvas) {
  // A compléter
  let y = Math.floor(Math.random() * (canvas.height - 20));
 
  y = y/20;
 
  y = Math.round(y);

  y = y * 20;
 
  let x = Math.floor(Math.random() * (canvas.width - 20));
  
  x = x/20 ;
  
  x = Math.round(x);
 
  x = x * 20;
 
  return { x, y };
}

/**
 * Dessine la nourriture sur le canvas à la position spécifiée.
 *
 * Cette fonction utilise le contexte de rendu 2D pour dessiner un rectangle représentant
 * la nourriture à l'emplacement indiqué par les coordonnées `x` et `y`. La taille du rectangle
 * est déterminée par la taille d'une case (box) sur la grille.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {{x: number, y: number}} food - Un objet contenant les coordonnées `x` et `y` où la nourriture doit être dessinée.
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille de la nourriture.
 */
export function drawFood(food,box,ctx) {
  // A compléter
  ctx.beginPath();

  ctx.fillStyle = "red";
  
  ctx.rect(food.x ,food.y , box, box);
  ctx.fillRect(food.x, food.y, box, box);
 
}
