function parilliset(){
  var nro = parseInt(document.getElementById('paril').value);
  if (nro % 2 == 0){
  var nrot = "";
  for (var i = 2; i <= nro; i+=2 ){
    document.write(nrot + i + '<br>');
  }
}
}

function salaSana(){
  var word = document.getElementById('sana').value;
  var uusiSana = word.match(/./g).join('Ö');
    document.write(uusiSana);
}

function etsiKirjain(){
  var sana = document.getElementById('etsi').value;
  if (sana.includes('ö')){
    document.write('on');
  }else{
    document.write('ei ole');
  }
  }

function laskeKertoma(){
  var numero = document.getElementById('kertoma').value;
  var laskettu = 1;
  for (var l = 1; l <= numero; l=l+1){
    laskettu*=l;
document.write('<p>Luvun '+ numero + ' kertoma on ' + laskettu + '</p>');
  }
}

function tulostaLuvut(){
  var n = "";
  for (var u = 1; u <= 100; u=u+1){
    if (u % 3 == 0 && u % 5 == 0){
      n +='Hipheijaa ';
    }else if (u % 5 == 0){
      n +='Heijaa ';
    }else if (u % 3 == 0){
      n +='Hip ';
    }else{
      n += u + ' ';
    }
    document.write(n);
    }
  }

function kymmenenEkaa(){
  var e = "";
  for(var k = 1; k <= 10; k++){
    tuloste = e + " " + k;
    document.write(tuloste);
  }
}

function laskeYhteen(){
  yhteen = 0;
  for(var y = 1; y <=10; y++)
  {
    yhteen += y;
  }
  document.write(yhteen);
}

function potenssi(){
  var luku = parseInt(document.getElementById('kluku').value);
  var p = parseInt(document.getElementById('pot').value);
document.write(luku ** p);
}

function suurinArvo(){
  var eka, toka, kolmas, neljas, viides;
  eka = parseInt(document.getElementById('l1').value);
  toka = parseInt(document.getElementById('l2').value);
  kolmas = parseInt(document.getElementById('l3').value);
  neljas = parseInt(document.getElementById('l4').value);
  viides = parseInt(document.getElementById('l5').value);
  var suurin = Math.max(eka, toka, kolmas, neljas, viides);
  var pienin = Math.min(eka, toka, kolmas, neljas, viides);
  document.write("Pienin luku on: " + pienin + " ja suurin on: " + suurin);
}

function randomKirjain(){
  var pw = '';
  var eka, toka;
  pw = document.getElementById('ssana').value;
  var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'å', 'ä', 'ö', 'w'];
  var temp = [];
  var lop='';
  for(var s = 0; s < pw.length; s++){
    eka = pw[s];
    temp.push(eka);
    var lisa = Math.floor(Math.random()*taulu.length);
    toka = taulu[lisa];
    temp.push(toka);
  }
  lop = temp.join('');
  document.write(lop);
}

function numerot(){
  var pnro = parseInt(document.getElementById('pieninro').value);
  var inro = parseInt(document.getElementById('isompinro').value);
  var palku;
  var ralku;
  var psumma=0;
  var rsumma=0;
  var pluvut='';
  var rluvut='';
  if(pnro%2 == 0){
      palku = pnro;
    }else {
      palku = pnro+1;
    }for(var b = palku; b<=inro; b+=2){
      pluvut += b + ' ';
      psumma += b;
    }if(pnro%2 == 0)
    {
      ralku = pnro+1;
    }else {
      ralku = pnro;
    }for(var r = ralku; r<=inro; r+=2)
    {
      rluvut += r + ' ';
      rsumma += r;
    }
    document.write('<p>Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>');
}
