let cocacola = 1.10;
let submarinas = 2.20;
let nuolaida = 15;
let euro = 3;
let krepselis = cocacola + submarinas;

if(euro > krepselis - (krepselis * nuolaida / 100)){
    krepselis = krepselis - (krepselis * nuolaida / 100);
    console.log(`Pirkejui uzteks pinigu. Jis sumokes ${krepselis.toFixed(2)} euru`);
}
else{
    console.log(`Pirkejui ne uzteks pinigu`);
}
