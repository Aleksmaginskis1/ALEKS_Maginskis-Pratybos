let minimumPinigu = 1000;
let kiekMoketi = 150;
let seimosNariai = 3;
let tetis = 1600;
let mama = 3200;
let bendrasUzdarbis = (tetis + mama) /seimosNariai;

if(bendrasUzdarbis >= minimumPinigu && (bendrasUzdarbis - kiekMoketi) >= 0){
    console.log(`Bankas duos paskola`);
}else{
    console.log(`Bankas ne duos paskolos`);
}
