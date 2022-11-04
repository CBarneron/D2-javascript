//api
let api_key="LBOBMRaoEHYXsNZSdaxIn3vV8afrmqKI"
// variables

let search =document.getElementById('search');
let limit =document.getElementById('limit');
let send = document.getElementById('send');
let result =document.getElementById('result');
let endPoint = "https://api.giphy.com/v1/gifs/search";


send.addEventListener("click",()=>{
let url = endPoint+ `?api_key=${api_key}&q=${search.value}&limit=${limit.value}`;
console.log(url);


fetch(url)
.then(result=>{
    return result.json()
}).then(data=>{
    console.log(data.data);
    result.innerHTML="";
    for(gif of data.data){
        console.log(gif.images.original.url);
        let liens = gif.images.original.url;
        let alt =gif.title
        var img= document.createElement('img');
       

     result.innerHTML +=  `
     <div><img src="${liens}" alt="${alt}">`       
 
    }
})
});