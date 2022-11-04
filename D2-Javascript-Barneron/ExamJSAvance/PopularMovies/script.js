let api_key ="3f951fde1f94ff23e3aebbd24b292474";


let  popular="https://api.themoviedb.org/3/movie/popular";
let url = popular + `?api_key=${api_key}&language=fr-FR&page=1`;

let result= document.getElementById('result');
console.log(url);

fetch(url)
.then(result=>{
    
    return result.json();
}).then(datas=>{
    console.log(datas.results);
    result.innerHTML=""
    for(img of datas.results){
        console.log(img.title);
        console.log(img.poster_path);
        let liens =`https://www.themoviedb.org/t/p/w1280/`+img.poster_path;
        let title =img.title;
        var img =document.createElement('img');
        result.innerHTML += `<div class="card"><img class="img" src="${liens}"alt="${title}"><p class="title">${title}</p></div>`;
    }
})

// https://api.themoviedb.org/3/movie/popular/nrK8lyHFjahtCkS5ncnnu0bD5cC.jpg

//https://api.themoviedb.org/3/movie/popular?api_key=3f951fde1f94ff23e3aebbd24b292474&langua
//ge=fr-FR&page=1 