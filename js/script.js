const elencoEmail=["soniagaber90@gmail.com", "mariorossi@gmail.com", "mariobianchi@gmail.com", "carloverdi@gmail.com"];
let emailButtonEl= document.getElementById("email-button");
let accessoEl=document.getElementById("accesso");

emailButtonEl.addEventListener("click", function(){
    let mailTrovata= false;
    let email=document.getElementById("email");
    for(let i= 0; i<elencoEmail.length; i++){
        if(email.value== elencoEmail[i]){

            mailTrovata= true;
        }
    }
    if(mailTrovata){
        accessoEl.innerHTML="Accesso consentito";
    }else{
        accessoEl.innerHTML="Accesso negato";
    }
}
)

let numeroUtente;
let numeroComputer;
let giocateEl=document.getElementById("giocate");
let vincitoreEl=document.getElementById("vincitore");
let lanciaEl=document.getElementById("lancia");

lanciaEl.addEventListener("click", function(){
    numeroUtente=Math.floor(Math.random() *6 +1);
    numeroComputer=Math.floor(Math.random() *6 +1);
    giocateEl.innerHTML="Per te è uscito il numero " + numeroUtente +", mentre per il pc è uscito il numero " + numeroComputer;
    
    if(numeroUtente> numeroComputer){
        vincitoreEl.innerHTML="Hai vinto!";
    } else if (numeroUtente< numeroComputer){
        vincitoreEl.innerHTML="Ha vinto il pc"
    } else {
        vincitoreEl.innerHTML="Tu e il pc avete pareggiato"
    }
    
    
})


