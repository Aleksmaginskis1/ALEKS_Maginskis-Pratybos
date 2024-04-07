let kiekDeziu = 40;
const bemas = 4;
let kiekKartu = 0;

if(kiekDeziu > 0 ){
    kiekKartu = Math.ceil(kiekDeziu / bemas);
    console.log(`vazios ${kiekKartu} kartu`)
}
else{
    console.log(`tu viska sugadinai`)
}