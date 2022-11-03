// //Navigation
// // 1) Créez une navbar avec une liste à puce (ul, li, a) contenant 
// // 5 liens
// // 2) Changer le style (background-color, color, etc.) du seul 
// // élément cliqué
// // 3) Si un autre lien à été cliqué avant, réinitialiser son style 
// // d’origine

// // Get the container element


// // Get all buttons with class="btn" inside the container
// var links = document.getElementsByClassName("a");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
// // //liste de course
// // //additem
// // //function insertText() {

// //  //recuperation de la valuers course
// // //var  addArticle= document.getElementById("add");
// // // addArticle.addEventListener("click",(event)=>{

// //    // crée un li
// //  //  let node = document.createElement("li");
// //     // crée un texte node avec le contenu du input course
// // //    var article =document.getElementById("course").value;

// //     // ajoute au li le texte node
// //  //   var newarticle = document.createTextNode(article);
// //     node.appendChild(newarticle);
// //     // ajoute le li au ul
// //     document.getElementById("liste_course").appendChild(article);

// // })

// }

//add
document.querySelector('#sendInput').addEventListener('click', function() {
    console.log("salut");
    let input = document.querySelector('#inputText')
    let list = document.querySelector('#list')
    let item = document.createElement('li');
    let itemText = document.createTextNode(input.value);

    item.appendChild(itemText);
    list.appendChild(item); 

    input.value = "";
 }) 
//del
console.log("saliute");
document.getElementById("deleteInput").addEventListener("click", (e) => {
    // récupère la liste de tous les contenu dans ul
    let ListeLi = list.querySelectorAll("li");

    // test si la taille de la liste est >= 1
    if (ListeLi.length >= 1) {
        // supprime le dernier élément de la liste
        ListeLi[ListeLi.length - 1].remove();
    }
});


