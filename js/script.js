/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole 
percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del 
viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km) va 
applicato uno sconto
del 20% per i minorenni va applicato uno sconto
del 40% per gli over 65.
Vi sfido: L’output del prezzo finale va messo in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo).

*/

// Gen
var distance = parseInt(prompt('Inserisci i Km da percorrere'));
var year = parseInt(prompt("inserisci l'età"));
var pricePerKm = 0.21;
var outputPrice = document.getElementById('price');

// Standard Ticket
var totalPrice = distance * pricePerKm;
var totalPrice = totalPrice.toFixed(2)

// Discount under 18 (0-17) -> 20%
var discountUnder18 = totalPrice * 20 / 100; 
var totalPriceUnder18 = totalPrice - discountUnder18;
var totalPriceUnder18 = totalPriceUnder18.toFixed(2);

// Discount Over 65 (65 included) -> 40%
var discountOver65 = totalPrice * 40 / 100;
var totalPriceOver65 = totalPrice - discountOver65;
var totalPriceOver65 = totalPriceOver65.toFixed(2);

// Output
if (year < 18){
    outputPrice.innerHTML = "Il prezzo del tuo Biglietto e: " + totalPriceUnder18 + "€";
} else if (year >= 65){
    outputPrice.innerHTML = "Il prezzo del tuo Biglietto e: " + totalPriceOver65 + "€";
} else {
    outputPrice.innerHTML = "Il prezzo del tuo Biglietto e: " + totalPrice + "€";
}

