


document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();   
    let prenom = document.getElementById('prenom');
    let nom = document.getElementById('nom');
    let error =document.getElementById('erreur');
    let email = document.getElementById('mail');
    let regemail =new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    let regpwd =new RegExp('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
    let regtel =new RegExp('[0]{1}[0-9]{1}[0-9]{8}');
    let  pwd =document.getElementById('pwd');
    let num = document.getElementById('tel');

    error.innerHTML= "";
    error.style="display:none";  
    let msger =""; 
        if (prenom.value == ""){
          
            
            msger +="<br>prenom requis";
        
        }
       
        if (nom.value == ""){
            
            msger+="<br>Nom requis";
            
        }
       
        if(!regemail.test(email.value)){
            
            msger+="<br>mail requis";
        }
        

        if(!regtel.test(num.value)){
            
            msger +="<br>Numerique de 10  requis";
        }
        
        console.log(pwd.value);
        console.log(regpwd.test(pwd.value));
        if(!regpwd.test(pwd.value)){
            
            msger+="<br>9 character maj + min + spe requis";
        }
    
        if (msger != "") {
            error.innerHTML= msger;
            error.style="display:block;";
        }
        

    })

    

