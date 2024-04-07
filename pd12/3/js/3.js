let sIlgis = 400;
let sAukstis = 300;
let pKaina = 0.5;
let pIlgis = 20; 
let pAukstis = 10;
let pKiekis = 0;

for(let i=0; i < sIlgis; i+=pIlgis){
    for(let q=0; q < sAukstis; q+=pAukstis){
        pKiekis++;
    }
}

console.log(`Plytų kiekis ${pKiekis}. Plytos kainuos ${pKiekis * pKaina}Eur.`)

