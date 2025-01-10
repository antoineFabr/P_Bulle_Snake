export function menuPause(ctx ){
  ctx.fillStyle = "#cccccc";
  ctx.font = "70px serif";
  ctx.fillText("PAUSE",120, 200);
  
}
//méthode pour afficher le temps de jeu 
export function temps(tick, ctx){
  
  let temps = tick/6.66;
  //si temps est un int cela affiche le temps
  if(parseInt(temps)){
    //on enleve la virgule
    temps = Math.trunc(temps);
    //et on affiche
    ctx.fillStyle = "#cccccc";
    ctx.font = "20px serif";
    ctx.fillText(temps,350, 20);
  }
  
}