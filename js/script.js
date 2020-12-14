var Km = parseInt(prompt('Benvenuto nel servizio per il calcolo d\'importo del biglietto del treno più bello del Mondo! Per favore indichi la distanza che vuole percorrere!'));
var Multiplier = 100; //per arrotondare alla seconda cifra decimale, in alcuni casi andava alla terza e non mi piaceva
if (isNaN(Km) ){
  alert('Per favore, inserire ESCLUSIVAMENTE cifre, non testo!'); //se non è un numero si blocca
} else {
  console.log('Kilometri: ' + Km);
  var Age = parseInt(prompt('Per favore, indichi la sua eta!'));
  if (isNaN(Age) ){
    alert('Per favore, inserire ESCLUSIVAMENTE cifre, non testo!');//se non è un numero si blocca
  } else {
    console.log('Età: ' + Age);
    var Base = Km * 0.21; //calcolo del prezzo base del biglietto
    console.log('Prezzo Base: ' + Base + '€');
    if (Age < 18){
      var DiscountMin = Base * 0.2;
      Discount = Math.floor((Base - DiscountMin) * Multiplier) / Multiplier; //calcolo del prezzo con lo sconto minorenni applicato
      console.log('Prezzo Scontato: ' + Base + '€');
      document.getElementById('Price').innerHTML = 'Il Tuo Kilometraggio: ' + Km + ' Km;' + '<br>' + 'La tua Età: ' + Age + ' Anni;' + '<br>' + 'Prezzo Base: ' + Base + ' €;' + '<br>' + 'Sconto Minorenni Calcolato: ' + Discount + ' €;' + '<br>' + 'Grazie per averci scelti!' + '<br>' + 'Buonagiornata!';
    } else if (Age >=65){
      var DiscountMax = Base * 0.4;
      Discount = Math.floor((Base - DiscountMax) * Multiplier) / Multiplier; //calcolo del prezzo con lo sconto anziani applicato
      console.log('Prezzo Scontato: ' + Base + '€');
      document.getElementById('Price').innerHTML = 'Il Tuo Kilometraggio: ' + Km + ' Km;' + '<br>' + 'La tua Età: ' + Age + ' Anni;' + '<br>' + 'Prezzo Base: ' + Base + ' €;' + '<br>' + 'Sconto Anziani (over 65) Calcolato: ' + Discount + ' €;' + '<br>' + 'Grazie per averci scelti!' + '<br>' + 'Buonagiornata!';
    } else {
      console.log('Prezzo definitivo: ' + Base + '€');
      document.getElementById('Price').innerHTML = 'Il Tuo Kilometraggio: ' + Km + ' Km;' + '<br>' + 'La tua Età: ' + Age + ' Anni;' + '<br>' + 'Prezzo Base: ' + Base + ' €;' + '<br>' + 'Nessuno Sconto Avviabile: ' + Base + ' €;' + '<br>' + 'Grazie per averci scelti!' + '<br>' + 'Buonagiornata!';
    }
  }
}
