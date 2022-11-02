//UC First: 1ère lettre en MAJ ○ hello world => Hello world 
//● Capitalize : 1ère lettre de chaque mot en MAJ ○ hello world => Hello World 
//● camelCase : Capitalize + coller les mots ○ hello world => HelloWorld 
//● snake_case: Joindre les mots par des Underscores 
//● l33t speek : Cryptage (uniquement les voyelles) ○ anaconda => 4n4c0nd4 ○ A=>4, E=>3, I=>1, O=>0 ,U=> (_), Y=>7 
//● findLongestWord : retourne le mot le plus long d’une pharse. ○ Le chemin le plus cours n'est pas toujours le meilleur => toujours 
//Pour chaque exercice, renvoyer « Merci de mettre une string valable » si le type n’est 


// var a =["hello world"];
// var b =["anaconda"];
// var c =["Le chemin le plus cours n'est pas toujours le meilleur"];

//UCFirst
function Ucfirst(text){
    if ( typeof text == "string" && text.length>0){
        let newText="";
        
    
        // appel split pour récupérer un tableau contennat chaque mot
        let words = text.split(" ");
        //fait une boucle pour qui reconstruit une chaine de caractère
        // avec la lettre du premier mot en majuscule
        for (let i = 0;i<words.length;i++ ){
            if(i == 0){
                newText += words[i][0].toUpperCase() + words[i].slice(1,words[i].length);
            }
            else {
                newText+= " " + words[i];
            }
        }
        return newText;
    }
    return "Merci de mettre une string valable";
}
console.log("TestUCfirst")
console.log(Ucfirst("hello test"));

    
//Capitalize
function Capitalize(text){
    if (typeof text =="string" && text.length>0){
        let newText="";
    // appel split pour récupérer un tableau contennat chaque mot
    let words = text.split(" ");

    //fait une boucle pour qui reconstruit une chaine de caractère
    // avec la lettre du premier mot en majuscule
       
    for (let i = 0;i<words.length;i++ ){
                if(i == 0){
                    newText += words[i][0].toUpperCase() + words[i].slice(1,words[i].length);
                }
                else {
                    newText+= " " + words[i][0].toUpperCase() + words[i].slice(1,words[i].length);
                }
            }
            return newText;
    }
    return "Merci de mettre une string valable";
}
console.log("Test Capitalize");
console.log(Capitalize("hello test mac"));
// correction 
// fonction capitalize
function capitalize(text) {
    if (typeof text == "string" && text.length > 0) {
        return text
            .split(" ") // separe  avec la valeurs renseigner
            .map((mot) => { return ucFirst(mot) })
            .join(" ");// relie tout les  valeurs du tableau  pour  en faire une seule 

    }

    return "Merci de mettre une string valide";
}
console.log("correction Capitalize()");
console.log(capitalize("hello world")); // affiche : Hello World







//camelCase
function CamelCase(text){
    if (typeof text =="string" && text.length>0){
        let newText="";
    // appel split pour récupérer un tableau contennat chaque mot
    let words = text.split(" ");

    //fait une boucle pour qui reconstruit une chaine de caractère
    // avec la lettre du premier mot en majuscule
       
    for (let i = 0;i<words.length;i++ ){
                if(i == 0){
                    newText += words[i][0].toUpperCase() + words[i].slice(1,words[i].length);
                }
                else {
                    newText+= "" + words[i][0].toUpperCase() + words[i].slice(1,words[i].length);
                }
            }
            return newText;
    }
    return "Merci de mettre une string valable";
}
console.log("Test CamelCase");
console.log(CamelCase("hello test mac"));
//snake_case

function snake_case(text){
    if(typeof text =="string" && text.length>0){
        let newText="";
        const space=" ";
        let words =text.split(" ");
        for (let i =0 ;i<words.length;i++){
            newText += words.toString().replace(space,"_");
            return newText;
        }
       

    }
    return "Merci de mettre une string valable";
}
console.log("Test Snake_case");
console.log(snake_case("hello test mac"));
