
var Km = parseInt(prompt('Benvenuto nel servizio per il calcolo d\'importo del biglietto del treno più bello del Mondo! Per favore indichi la distanza che vuole percorrere!'));
var Multiplier = 100; //per arrotondare alla seconda cifra decimale, in alcuni casi andava alla terza e non mi piaceva
if (isNaN(Km) ){
  alert('Per favore, inserire ESCLUSIVAMENTE cifre, non testo!'); //se non è un numero si blocca
} else {
  console.log('Kilometri: ' + Km);
  document.getElementById('Km').innerHTML = 'Il Tuo Kilometraggio: ' + Km + ' Km';
  var Age = parseInt(prompt('Per favore, indichi la sua eta!'));
  if (isNaN(Age) ){
    alert('Per favore, inserire ESCLUSIVAMENTE cifre, non testo!');//se non è un numero si blocca
  } else {
    console.log('Età: ' + Age);
    document.getElementById('Age').innerHTML = 'La tua Età: ' + Age;
    var Base = Km * 0.21; //calcolo del prezzo base del biglietto
    console.log('Prezzo Base: ' + Base + '€');
    document.getElementById('Base').innerHTML = 'Il prezzo base: ' + Base + ' €';
    if (Age < 18){
      var DiscountMin = Base * 0.2;
      Base = Math.floor((Base - DiscountMin) * Multiplier) / Multiplier; //calcolo del prezzo con lo sconto minorenni applicato
      console.log('Prezzo Scontato: ' + Base + '€');
      document.getElementById('Discount').innerHTML = 'Sconto minorenni applicato: ' + Base + ' €';
    } else if (Age >=65){
      var DiscountMax = Base * 0.4;
      Base = Math.floor((Base - DiscountMax) * Multiplier) / Multiplier; //calcolo del prezzo con lo sconto anziani applicato
      console.log('Prezzo Scontato: ' + Base + '€');
      document.getElementById('Discount').innerHTML = 'Sconto anziani (Over 65) applicato: ' + Base + ' €';
    } else {
      console.log('Prezzo definitivo: ' + Base + '€');
    }
  }
}
