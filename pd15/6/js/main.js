let masyvas = [1, 1, 5, 5, 5, 6, 4];
let kiekKartu = 5;
let tuscias = 0;

for (let i = 0; i < masyvas.length; i++){
    if (masyvas[i] === kiekKartu){
        tuscias++;
    }
}

console.log(tuscias);
