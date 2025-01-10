/**
 * Dessine le score sur le canvas.
 *
 * Cette fonction affiche le score actuel du jeu dans le coin supérieur gauche du canvas.
 * Le score est affiché en noir avec une police Arial de 20px.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {number} score - Le score à afficher, qui est un entier.
 */
export function drawScore(score, ctx) {
  // A compléter
  
  ctx.fillStyle = "#cccccc";
  ctx.font = "20px serif";
  ctx.fillText("score : ",10, 20,);
  ctx.fillText(score, 70, 20);
  ctx.fillStyle = "#cccccc";
}
