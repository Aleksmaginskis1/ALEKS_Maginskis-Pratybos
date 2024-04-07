let masyvas = 'AgT23*'; 
let tuscias = '';

for(let i = 0; i < masyvas.length; i++) {
    if(masyvas[i] === masyvas[i].toUpperCase()){
        tuscias += masyvas[i].toLowerCase();
    } else if (masyvas[i] === masyvas[i].toLowerCase()){
        tuscias += masyvas[i].toUpperCase();
    }
}

console.log(tuscias);