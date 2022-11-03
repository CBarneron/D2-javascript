console.log("Xxdark_joel_69xX");


document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();   
    let prenom = document.getElementById('prenom');
    let nom = document.getElementById('nom');
    let error =document.getElementById('erreur');
    let email = document.getElementById('mail');
    let regemail =new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    let regpwd =new RegExp('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    let  pwd =document.getElementById('pwd');
    let num = document.getElementById('tel');
    error.innerHTML= "";
    error.style="display:none";   
        if (prenom.value == ""){
          
            error.style="display:block;";
            error.innerHTML +="prenom requis";
        
        }
       
        if (nom.value == ""){
            error.style="display:block;";
            error.innerHTML +="Nom requis";
            
        }
       
        if(!regemail.test(email.value)){
            error.style="display:block;";
            error.innerHTML +="mail requis";
        }
        
        console.log(num.value.length <=10);
        if(num.value.length >10){
            error.style="display:block;";
            error.innerHTML +="Numerique de 10  requis";
        }
        
        console.log(pwd.value);
        console.log(regpwd.test(pwd.value));
        if(!regpwd.test(pwd.value)){
            error.style="display:block;";
            error.innerHTML +="9 character maj + min + spe requis";
        }
        

    })
    console.log("Xxdark_joel_69xX");
    

