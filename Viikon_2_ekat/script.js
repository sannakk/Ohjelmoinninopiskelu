function jarjesta(){
  var luku1, luku2, luku3;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  luku3 = parseInt(document.getElementById('kolmas').value);
  document.write("Annoit luvut: " + luku1 + ' ' + luku2 + ' ' + luku3 + "<br>");
  if(luku1 < luku2 && luku1 < luku3){
    if(luku2 < luku3){
      document.write("Lukujen järjestys: " + luku1 + ' ' + luku2 + ' ' + luku3);
    }else{
      document.write("Lukujen järjestys: " + luku1 + ' ' + luku3 + ' ' + luku2);
    }
  }else if(luku2 < luku1 && luku2 < luku3){
    if(luku1<luku3){
      document.write("Lukujen järjestys: " + luku2 + ' ' + luku1 + ' ' + luku3);
    }else{
      document.write("Lukujen järjestys: " + luku2 + ' ' + luku3 + ' ' + luku1);
    }
  }else if(luku3 < luku1 && luku3 < luku2){
      if(luku1 < luku2){
        document.write("Lukujen järjestys: " + luku3 + ' ' + luku1 + ' ' + luku2);
      }else{
        document.write("Lukujen järjestys: " + luku3 + ' ' + luku2 + ' ' + luku1);
      }
    }
  }

function etsiSuurin(){
  var yksi, kaksi, kolme, nelja, viisi, suurin;
  yksi = parseInt(document.getElementById('yksi').value);
  kaksi = parseInt(document.getElementById('kaksi').value);
  kolme = parseInt(document.getElementById('kolme').value);
  nelja = parseInt(document.getElementById('nelja').value);
  viisi = parseInt(document.getElementById('viisi').value);
 document.write("Annoit luvut: " + yksi + ' ' + kaksi + ' ' + kolme + ' ' + nelja + ' ' + viisi + "<br>");
 if(yksi < kaksi && kolme < kaksi && nelja < kaksi && viisi < kaksi){
   suurin = kaksi;
 }else if (yksi < kolme && nelja < kolme && viisi < kolme){
   suurin = kolme;
 }else if (yksi < nelja && viisi < nelja){
   suurin = nelja;
 }else if (yksi < viisi){
   suurin = viisi;
 }else{
   suurin = yksi;
 }
document.write("Suurin niistä on: " + suurin);
  }

function tarkista(){
  var luku = parseInt(document.getElementById('luku').value);
  document.write("Annoit luvun: " + luku + "<br>");
  if(luku % 2 == 0){
    document.write(luku + " on parillinen");
  }else{
    document.write(luku + " on pariton");
  }
}

function annaIka(){
  var ika = parseInt(document.getElementById('ika').value);
  document.write("Annoit iän: " + ika + "<br>");
  if(ika < 15){
    document.write(ika + " vuotta, saaat ajaa polkupyörää");
  }else if(ika < 18){
    document.write(ika + " vuotta, saat ajaa mopoa");
  }else{
    document.write(ika + " vuotta, saat ajaa autoa");
  }
  }

function kaanna(){
  var lang = parseInt(document.getElementById('kieli').value);
  if (lang == 'eng'){
    document.write("Hello world!");
  }else if (lang == 'swe'){
    document.write("Hej värld!")
  }else{
    document.write("Hola Mundo!");
  }
}
