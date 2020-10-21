// chiedere all'utente come si chiama
var nome = document.getElementById('nomeinserito');

console.log(nome);

// chiedere all'utente quanti km deve percorrere
var km = document.getElementById('distanzainserita').value;

console.log(km);

// chiedere all'utente in che range di età si trova
var eta = document.getElementById('etainserita').value;

console.log(eta);

// calcolo costo biglietto seza sconti
var costoBiglietto = km * 0.21;

console.log("costo " + costoBiglietto);

// generare numero di carrozzautente
var numeroCarrozza = Math.floor(Math.random() * 10) + 1;

console.log("carrozza " + numeroCarrozza);

// generare numero CP
var numeroCP = Math.floor(Math.random() * 100000) + 1;

console.log("cp " + numeroCP);

// variabule bottone generare
var genera = document.getElementById('generabutton');

genera.addEventListener('click',
 function() {
   nomeutente.innerHTML= nome.value;
   costobiglietto.innerHTML = costobiglietto;
   carrozzautente.innerHTML = numeroCarrozza;
   codiceutente.innerHTML = numeroCP;
   costobiglietto.innerHTML = costoBiglietto.toFixed(2) + "&#8364;";
   scontoutente.innerHTML = offerta;
} );

// creazione variabile ti di offerta
// var offertaStandard = "Nessuno Sconto";
// var offertaMinorenni = "Sconto Minorenni";
// var offertaOver = "Sconto Over 65";
var offerta = document.getElementById('scontoutente').innerHTML = "Nessuno Sconto";

console.log(offerta);

// calcolo sconto biglietto
if (eta < 18) {
  costoBiglietto = costoBiglietto / 100 * 80;
  offerta = document.getElementById('scontoutente').innerHTML = "Sconto Minorenni";

} else if (eta > 65) {
  costoBiglietto = costoBiglietto / 100 * 60;
  offerta = document.getElementById('scontoutente').innerHTML = "Sconto Over 65";

} else {


}

// stampare tipo di afferta

// stampare nome utente
