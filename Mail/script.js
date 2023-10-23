
const person = ["mario@italia.com" , "luisa@italia.com" , "marco@italia.com"];

const userEmail = prompt ("Ciao Utente! Inserisci la tua email!");
console.log(userEmail);


let trovato = false;//found è una variabile d'appoggio

for(let i=0; i< person.length; i++) {
   const curPerson = person [i];
   if(curPerson === userEmail) {
    trovato = true;
   }
//    console.log(curPerson, userEmail, trovato);
}


if(trovato){
    console.log("Accesso Permesso")
}else{
    console.log("Acessso Negato, non sei nella lista")
}