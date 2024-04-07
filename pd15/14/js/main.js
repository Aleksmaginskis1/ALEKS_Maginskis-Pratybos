let pirmas = [6,3,7,9,1,6,9];
let antras = [8,23,7,5,9,1,5];

let kartu = pirmas.concat(antras);

let aaa = new Set(kartu);
let naujas = Array.from(aaa);

console.log(naujas);