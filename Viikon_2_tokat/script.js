function posNeg(){
var luku = parseInt(document.getElementById('eka').value);
if (luku >= 0){
  document.write('Luku on positiivinen');
}else{
  document.write('Luku on negatiivinen');
}
}

function viikonPaiva(){
  var nro = document.getElementById('toka').value;
  if (nro == 1){
    document.write('Maanantai');
  }else if (nro == 2){
    document.write('Tiistai');
  }else if (nro == 3){
    document.write('Keskiviikko');
  }else if (nro == 4){
    document.write('Torstai');
  }else if (nro == 5){
    document.write('Perjantai');
  }else if (nro == 6){
    document.write('Lauantai');
  }else if (nro == 7){
    document.write('Sunnuntai');
  }else{
    document.write('Antamallesi numerolle ei löydy viikonpäivää!');
  }
  }

function vuosiLuku(){
  var vuosi = document.getElementById('kolmas').value;
  if (vuosi % 400 == 0){
    document.write('Vuosi on karkausvuosi');
  }else if ( vuosi % 4 == 0 && vuosi % 100 != 0){
    document.write('Vuosi on karkausvuosi');
  }else{
    document.write('Vuosi ei ole karkausvuosi');
  }
}

function lasku(){
  var luku1, luku2, luku3, luku4, luku5;
  luku1 = parseInt(document.getElementById('1').value);
  luku2 = parseInt(document.getElementById('2').value);
  luku3 = parseInt(document.getElementById('3').value);
  luku4 = parseInt(document.getElementById('4').value);
  luku5 = parseInt(document.getElementById('5').value);
  var summa = luku1 + luku2 + luku3 + luku4 + luku5;
  var ka = luku1 + luku2 + luku3 + luku4 + luku5 / 5;
  document.write('lukujen summa on: ' + summa + ' ja keskiarvo on: ' + ka);
}

function kertoTaulu(){
  var luku = parseInt(document.getElementById('viides').value);
  var lausemuuttuja = "";
  for (var k=1;k<=10;k++){
    lausemuuttuja = lausemuuttuja + luku + "x" + k + "=" + luku * k + "</br>";
  }
  document.write(lausemuuttuja);
}
