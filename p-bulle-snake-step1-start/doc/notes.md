# Antoine Fabre 
## 08.11.2024
### Introduction du projet
On peut utiliser un fichier de notes pour toute la classe
Nommage du commit exemple : feat(snake):Répondre à une touche, écoute(kickoff): Ajouter notes
Exemple description : [45] [Done]
Question à se poser pour nommer un commit : "Qu'est ce que j'ai fait pour arriver au résultat?" donc, quoi(sur quoi): qu'est ce qui est fait
Description des commits (Journal de travail) : [temps] [WIP ou bien DONE]

### explication de romain (15minutes)

### lecture cdc (15 minutes)
    - j'ai lu le cahier des charges

### lecture du cours sur javascript (80 minutes)
    - j'ai lu la documentation sur js

### semaine prochaine
    - je vais finir la doc sur js et commencer le projet snake

## 15.11.2024
### premiere 10 minutes
    explication du prof

### coder pendant le reste du temps

## 22.11.2024
### coder
    avancement dans la création du snake,
    du deplacement du snake
    et aboutissement de la detection des touches
### prochaine fois
    augmenter la taille du serpent

## 29.11.24 

### discution avec monsieur Carrel
    comment faire un journal de travail avec GIT
    il est important de reussir ces periodes de pratique

### debug de l'apparition de la nouriture
    le probleme etait la formulation du return de la fonction 
    generateFood() . maintenant un carré representant la nouriture apparait.

### apparition de nouriture
    avant l'apparion de la nouriture etait aléatoire,
    le probleme etait que quand le snake passait sur la nouriture c'etait 
    pas parfaitement aligné.
    Maintenant l'apparition est toujours aléatoire mais avant de retourner les valeurs X et Y 
    de la nouriture on arrondit ces valeurs a des multiples de 20 comme cela le snake et la nouriture apparaisse sur la meme grille.

### corp du serpent
    ajout de la methode addNumberSnake() qui va ajouter un carré de plus au snake 
    en plus de cette methode j'ai modifié la methode drawSnake() qui va dessiner tous les carrés du snake. 

### collision food
    ajout de la methode checkFoodCollision() qui va voir si la tete du serpent est sur la nouriture 
    si c'est le cas ca doit regenerer une position pour la nouriture et ajouter un au score

## 06.12.24
    préparation des portes ouvertes
    je n'ai pas pu travailer
## 13.12.24

### collision food 
    la derniere fois la methode checkFoodCollision ne fonctionnait pas du coup 
    je l'ai sorti et l'ai mis dans le main et ca a fonctionné.

### collision food 
    monsieur carrel m'a expliqué comment simplifier mon code 
    et aussi au passage m'a aidé a bien fix mon problème.

### controle snake
    j'ai corrigé un bug qui était que quand le snake 
    allait a droite on pouvais directement aller a gauche donc passer sur son propre corps.
    ce qui n'est pas voulu. Du coup maintenant on ne peux pas directement aller a la direction opposée.

### collision Walls
    j'ai remplis la methode checkWallCollision() donc quand le snake 
    touche un mur, un message apparait qui dit GameOver. quand on clique sur ok. 

### collision du serpent et sa queue
    au début j'ai fait tous le code nécessaire pour faire
    cet ajout mais cela ne fonctionnait pas.
    Monsieur Carrel m'a dépanné de ce problème c'était une histoire de return 
    et de boucle for.

## 10.01.2024 

### explication de monsieur Carrel
    Monsieur Carrel nous a expliqué des détails sur le projet et la fin du projet.
    cela a duré 15 minutes. 

### documentation du code 
    pendant 30 minutes j'ai documenté la majeur partie du code.

### fonction d'affichage de score
    je me suis en premier documenter comment afficher du text dans un canvas grace a ce site : "https://developer.mozilla.org/fr/docs/Web/API/Canvas_API/Tutorial/Drawing_text"
    ensuite j'ai appliqué ce que j'ai appris dans mon code pour afficher le score.
    Cela a duré 30 minutes.

### fonction pour mettre pause au jeu
    j'ai fait rajouter un fichier pause.js pour afficher un menu pause.
    j'ai aussi rajouté que le code détecte quand la barre espace est utilisé, 
    cela va appeler la méthode qui affiche le menu pause.
    ensuite le probleme etait de mettre pause le jeu. 
    je ne savais pas comment faire donc j'ai cherché sur des forums et j'ai trouvé comment faire sur ce site : "https://stackoverflow.com/questions/21277900/how-can-i-pause-setinterval-functions".
    sauf que maintenant le bug c'est que ca fait aléatoirement pas pause, je dois encore regler ce problème.

### question de Monsieur Carrel
    Monsieur Carrel est venu vers moi afin de défier mes connaissances de mon code
    avec 2 questions concernant la ligne 36 de la page snake.js et la deuxieme question était sur 
    la ligne 14 de la page collision.js.

### correction de code obselete
    suite a l'intervention de monsieur Carrel et a ces conseils j'ai nétoiller la page snake.js
    car il y avait du code obselète.