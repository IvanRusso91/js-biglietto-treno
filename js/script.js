
/*
1. Km da percorrere.
2. chiedere all'utente età.
3. porre l'eventuale sconto 40% per gli  over 65 anni o il 20% per gli under 18.
4.calcolare il biglietto.
5.stampare a schermo.
*/

let avvertimento = false;
const prezzoFisso = 0.21;
// 1. Km da percorrere.

let km =parseInt(prompt('Qaunti Km devi percorrere?'));

// controllo se inserisco un numero
if(isNaN(km)){
  alert('Non fare il furbo e inserisci un numero!');
  avvertimento =true 
  km =parseInt(prompt('Qaunti Km devi percorrere?'));
}

// 2. chiedere all'utente età. 

let age =parseInt(prompt('Qaunti anni hai?'));

// controllo se inserisco un numero
if(isNaN(age) && avvertimento === false){
  alert('Non fare il furbo e inserisci un numero!');
}else if( isNaN(age) && avvertimento === true){
  alert('Ti ho già avvertito prima, inserisci un numero!')
  age =parseInt(prompt('Qaunti anni hai?'));
}

//3. porre l'eventuale sconto 40% per gli  over 65 anni o il 20% per gli under 18.

const prezzoPieno = km * prezzoFisso;

let sconto = 0;

if(age > 65){
  sconto = prezzoPieno * 0.40
}else if(age < 18){
  sconto = prezzoPieno * 0.20
}

const prezzoFinale =(prezzoPieno - sconto).toFixed(2);

document.getElementById('stampa').innerHTML +=prezzoFinale;

console.log(prezzoPieno);
console.log(prezzoFinale);
