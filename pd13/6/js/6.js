let x = 34;
let y = [...x.toString()];

if(y[0]< y[1]){
    console.log(`${y[1]} mazesnis skaicius`);
}
else if(y[1] < y[0]){
    console.log(`${y[0]} didesnis skaicius.`);
}
else{
    console.log(`skaiciai vienodi.`);
}