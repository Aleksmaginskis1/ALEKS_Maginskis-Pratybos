let begikuLaikas = [22, 20, 25,25];
let atsakymas = 0;
let pirmas = begikuLaikas[0];

for(let i = 1; i < begikuLaikas.length; i++){

    if(begikuLaikas[i] < pirmas){
        pirmas = begikuLaikas[i];
    }
}

for (let i=0; i<begikuLaikas.length; i++){

    atsakymas+= begikuLaikas[i];
}

let vidurkis= atsakymas / begikuLaikas.length;
let skirtumas= vidurkis - pirmas;

console.log(`Greičiausio bėgiko laikas: ${pirmas}sek.. Jis buvo: ${skirtumas} sek geresnis už vidurkį.`);