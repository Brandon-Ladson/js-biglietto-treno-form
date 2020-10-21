// chiedere all'utente come si chiama
var nome = document.getElementById('nomeinserito');

// chiedere all'utente quanti km deve percorrere
var km = document.getElementById('distanzainserita').value;

// chiedere all'utente in che range di età si trova
var eta = document.getElementById('etainserita').value;

// calcolo costo biglietto seza sconti
var costoBiglietto = km * 0.21;

// generare numero di carrozzautente
var numeroCarrozza = Math.floor(Math.random() * 10) + 1;

// generare numero CP
var numeroCP = Math.floor(Math.random() * 100000) + 1;

// variabile bottone genera
var genera = document.getElementById('generabutton');

genera.addEventListener('click',
 function() {
   nomeutente.innerHTML= nome.value;
   costobiglietto.innerHTML = costobiglietto;
   carrozzautente.innerHTML = numeroCarrozza;
   codiceutente.innerHTML = numeroCP;
   costobiglietto.innerHTML = costoBiglietto.toFixed(2) + "&#8364;";
   scontoutente.innerHTML = offerta;
   sezioneInvisivile.style.display = 'block';
} );

// variabile bottone annulla
var annulla = document.getElementById('annullabutton');

annulla.addEventListener('click',
 function() {
   sezioneInvisivile.style.display = 'none';
   document.getElementById('form').reset();
} );


// creazione variabile offerta
var offerta = document.getElementById('scontoutente').innerHTML = "Nessuno Sconto";

// variabile sezione invisibile
sezioneInvisivile = document.getElementById('price-section');

// calcolo sconto biglietto
if (eta < 18) {
  costoBiglietto = costoBiglietto / 100 * 80;
  offerta = document.getElementById('scontoutente').innerHTML = "Sconto Minorenni";

} else if (eta > 65) {
  costoBiglietto = costoBiglietto / 100 * 60;
  offerta = document.getElementById('scontoutente').innerHTML = "Sconto Over 65";

} else {


}
