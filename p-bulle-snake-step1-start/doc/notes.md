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
    