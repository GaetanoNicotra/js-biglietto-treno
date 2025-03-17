// Chiediamo all'utente il numero di chilometri da percorrere e la sua età:

// definiamo una variabile che contiene il numero dei Km da percorrere
// definiamo una variabile che contine l'età del passeggero

let distance = prompt("Inserisci il numero dei Km da percorrere");
let age = prompt("Inserisci la tua età")

// calcoliamo il prezzo dei chilometri in base alla tariffa (0.21€ al Km )
// definiamo un a variabile per il calcolo
// mostriamo il risultato in console

let distancePrice = (distance * 0.21).toFixed(2);
console.log(distancePrice + " " + "Euro (Prezzo intero)");


// calcoliamo il prezzo dei chilometri in base all'età

// se il passeggero è minorenne applichiamo uno sconto del 20% sul prezzo del biglietto
// mostriamo il risultato in console

if(age < 18){
    let priceUnderage = (distancePrice * 20 / 100).toFixed(2);
    console.log(priceUnderage  + " " + "Euro (prezzo scontato per minorenni)");
}

else if(age > 65){
    let priceOver65 = (distancePrice * 40 / 100).toFixed(2);
    console.log(priceOver65  + " " + "Euro (Prezzo scontato per magiorenni)");
}

else{
    console.log(distancePrice + " " + "Euro (Prezzo intero, non rientri in una fascia di età in sconto)")
}