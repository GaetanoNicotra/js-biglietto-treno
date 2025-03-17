// Chiediamo all'utente il numero di chilometri da percorrere e la sua età:

// definiamo una variabile che contiene il numero dei Km da percorrere
// definiamo una variabile che contine l'età del passeggero

let distance = prompt("Inserisci il numero dei KM da percorrere");
let age = prompt("Inserisci la tua età")

// calcoliamo il prezzo dei chilometri in basse alla tariffa (0.21€ al Km )
// definiamo un a variabile per il calcolo
// mostriamo il risultato in console

let distancePrice = distance * 0.21;
console.log(distancePrice);