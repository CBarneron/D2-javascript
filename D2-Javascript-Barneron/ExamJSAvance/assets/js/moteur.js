/**
 * fonction éxécutée au chargement de la page dans le navigateur et qui initialise le système de clics
 */
 window.onload = function () {
    var elements = document.getElementsByClassName("case");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', play, false);
    }
};

var currentPlayer = 1;
var scorePlayer1 = 0;
var scorePlayer2 = 0;

const arrayPlayer1Pieces=['pion-blanc','tour-blanc','cavalier-blanc','fou-blanc','reine-blanc','roi-blanc'];
const arrayPlayer2Pieces=['pion-noir','tour-noir','cavalier-noir','fou-noir','reine-noir','roi-noir'];
/**
 * Variables liées à la sélection
 */
var currentSelection = false;
var selectedHTML;
var selectedHTMLClasses;

/**
 * Récupère la deuxième classe déclaré dans votre liste.
 * Découpe votre ensemble de classe selon les espaces pour les mettre dans un tableau (split).
 * @param {*} selectedClasses 
 * @returns la classe liée à une pièce si elle exise sinon renvoie vide.
 */
function getCaseClass(selectedClasses) {
    /**
     * On récupère l'ensemble des classes sous forme de tableau, et on récupère la deuxième.
     * Note : Toujours déclarer votre class liée à une pièce en deuxième.
     */
    if (selectedClasses !== "") {
        var arraySplitedClasses = selectedClasses.split(" ");
        if (arraySplitedClasses.length > 1) {
            
            return arraySplitedClasses[1];
            
        } else {
            
            return "";
        }
    }
}

/**
 * Passe au joueur suivant.
 */
function changePlayer() {
 
    if (currentPlayer == 1) {
        currentPlayer = 2;
        document.getElementById("currentJ").innerHTML= currentPlayer;
        
    } else if (currentPlayer == 2) {
        currentPlayer = 1;
        document.getElementById("currentJ").innerHTML= currentPlayer
    }
}

/**
 * Ajoute une classe selon le joueur courant à une liste de classe liée à un élément HTML.
 * @param {*} classList liste des classes d'un élément HTML.
 */
function addSelectedClassByPlayer(classList) {
    if (currentPlayer == 1) {
        classList.add("selectedRed");
    } else if (currentPlayer == 2) {
        classList.add("selectedBlue");
    }
}

/**
 * Retire une classe selon le joueur courant d'une liste de classe liée à un élément HTML.
 * @param {*} classList liste des classes d'un élément HTML.
 */
function removeSelectedClassByPlayer(classList) {
    if (currentPlayer == 1) {
        classList.remove("selectedRed");
    } else if (currentPlayer == 2) {
        classList.remove("selectedBlue");
    }
}

/**
 * Fonction liée à l'évènement 'click'.
 * A MODIFIER
 */
var play = function() {
    if (!currentSelection) {
        selectedHTML = this;
        selectedHTMLClasses = this.className;
        var piece = getCaseClass(selectedHTMLClasses)
        
        var classPiece = getCaseClass(selectedHTMLClasses);
        
        isCaseAllowed(selectedHTMLClasses);
        if (isCaseAllowed(selectedHTMLClasses)==true) {
            console.log("test");
            addSelectedClassByPlayer(this.classList);
            currentSelection = true;
        }
        
    } else {
        if (selectedHTML == this) {
            removeSelectedClassByPlayer(this.classList);
            currentSelection= false;
        }
       
        
        currentSelection =false;
        changePlayer();
         

    }
};

function getElementsChildren() {
let node = document.getElementById('board').children
console.log(node);
for (let index = 0; index < node.length; index++) {
    switch (index) {
        case 0:
            node[index].classList.add('tour-noir')
            break;
        case 1:
            node[index].classList.add('cavalier-noir')
        break;
        case 2:
            node[index].classList.add('fou-noir')
        break
        case 3:
            node[index].classList.add('roi-noir')
        break;
        case 4:
            node[index].classList.add('reine-noir')
        break;
        case 5:
            node[index].classList.add('fou-noir')
        break;
        case 6:
            node[index].classList.add('cavalier-noir')
        break;
        case 7:
            node[index].classList.add('tour-noir')
        break;
        case 8:
            node[index].classList.add('pion-noir')
        break;
        case 9:
            node[index].classList.add('pion-noir')
        break;
        case 10:
            node[index].classList.add('pion-noir')
        break;
        case 11:
            node[index].classList.add('pion-noir')
        break;
        case 12:
            node[index].classList.add('pion-noir')
        break;
        case 13:
            node[index].classList.add('pion-noir')
        break;
        case 14:
            node[index].classList.add('pion-noir')
        break;
        case 15:
            node[index].classList.add('pion-noir')
        break;
        case 48:
            node[index].classList.add('pion-blanc')
            break;
        case 49:
            node[index].classList.add('pion-blanc')
        break;
        case 50:
            node[index].classList.add('pion-blanc')
        break
        case 51:
            node[index].classList.add('pion-blanc')
        break;
        case 52:
            node[index].classList.add('pion-blanc')
        break;
        case 53:
            node[index].classList.add('pion-blanc')
        break;
        case 54:
            node[index].classList.add('pion-blanc')
        break;
        case 55:
            node[index].classList.add('pion-blanc')
        break;
        case 56:
            node[index].classList.add('tour-blanc')
        break;
        case 57:
            node[index].classList.add('cavalier-blanc')
        break;
        case 58:
            node[index].classList.add('fou-blanc')
        break;
        case 59:
            node[index].classList.add('reine-blanc')
        break;
        case 60:
            node[index].classList.add('roi-blanc')
        break;
        case 61:
            node[index].classList.add('fou-blanc')
        break;
        case 62:
            node[index].classList.add('cavalier-blanc')
        break;
        case 63:
            node[index].classList.add('tour-blanc')
        break;
        
    }
}

    
}

document.getElementById('reset').addEventListener("click", ()=>{
    reset();
})


function reset(){
    getElementsChildren();
    alert("Le plateau a été réinitialiser ")
}
function isCaseEmpty(selectedHTMLClasses){
    
    let test = getCaseClass(selectedHTMLClasses);
    let result ;
    if (test =="" ) {
        result = false;
        
    }else{
        result= true;
    }
    
}
function isCaseAllowed(selectedHTMLClasses){
    
    let Test = getCaseClass(selectedHTMLClasses);
    console.log(Test);
    if (currentPlayer ==1) {
        return (arrayPlayer1Pieces.includes(Test));
 
    }else{
        return (arrayPlayer2Pieces.includes(Test));
    }
   


}