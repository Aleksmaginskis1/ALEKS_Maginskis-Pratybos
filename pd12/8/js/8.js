let diena = 0;

for(let kuras = 112; kuras > 0; kuras -=22){
    
    if (diena % 2 !==0){
        kuras -=11;
        diena++;
    }
    diena++;
}

console.log(`Keliauti bus galima ${diena} dienas`);