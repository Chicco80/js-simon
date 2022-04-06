/*Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e 
quali dei numeri da indovinare sono stati individuati.*/

//1 creo variabile per array dei numeri casuali con l utility..
//2 ciclo per finche la funzione non mi crea 5 numeri casuali
//3 stampo array dei casuali per far vedere ad utente i numeri
//4 faccio partire timer per 30 sec 
//5 alla fine dei secondi i numeri devono sparire
//6 chiedo di inserire all utente i numeri che ricorda
//7 metto i numeri in array per confrontarli con queeli generati







//utility
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    
  }


  let totNum = 5;
  let numCas = [];


function generaNumeri(){
  while(numCas.length < totNum){
      let numerRand = getRandomInt(1, 100);
      if(!numCas.includes(numerRand)) {
          numCas.push(numerRand);
           
      }
  }
//  console.log(numCas)
}
 generaNumeri();
 document.getElementById("numeriC").innerHTML = `<h1>Memorizza i numeri</h1> ${numCas}`;

let countdown = setInterval(startCountdown, 1000);

let menoTrenta= 30;

function startCountdown(){
     console.log(menoTrenta);
    if(menoTrenta === 1){
        clearInterval(countdown);
        document.getElementById("numeriC").innerHTML = "";
       
        
       
    }
    menoTrenta--;

} 

 
 

