/**
 * Gère le changement de direction du serpent en fonction de l'entrée de l'utilisateur.
 *
 * Cette fonction est appelée chaque fois qu'une touche directionnelle est pressée.
 * Elle vérifie que la nouvelle direction n'est pas opposée à la direction actuelle
 * (pour éviter que le serpent se retourne sur lui-même) et retourne la nouvelle direction
 * si elle est valide.
 *
 * @param {KeyboardEvent} event - L'événement clavier qui contient les informations sur la touche pressée.
 * @param {string} currentDirection - La direction actuelle du serpent (peut être "UP", "DOWN", "LEFT", ou "RIGHT").
 * @returns {string} - La nouvelle direction du serpent après traitement, ou la direction actuelle si le changement n'est pas valide.
 */
export function handleDirectionChange(event) {
  
  console.log(event);
  if(event === 'ArrowUp')
  {
    
    return "ArrowUp";
  }
  else if(event === 'ArrowDown'){
    
    return "ArrowDown";
  }
  else if(event === 'ArrowLeft'){
    
    return "ArrowLeft";
  }
  else if(event === 'ArrowRight'){
    
    return "ArrowRight";
  }
  else{
    return "ArrowRight";
  }
  
 
}
export function checkdirection(key, sens){
  return sens == "ArrowRight" && key == "ArrowLeft" || sens == "ArrowLeft" && key == "ArrowRight" || sens == "ArrowUp" && key == "ArrowDown" || sens == "ArrowDown" && key == "ArrowUp";
}
