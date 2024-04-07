let cup = 7;
let box = 0;

for(let i = 0; i < 7; i++){
    if(cup >= 3){
        cup -=3;
        box++;
    }
}

console.log(`Pilnu dėžučių skaičius: ${box}. Nesupakuotų puodelių skaičius: ${cup}.`);