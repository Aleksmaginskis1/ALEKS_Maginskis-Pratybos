let metai = 1997;
let naujimetai = 2018;
let list = [];
for (let i = metai; i <= naujimetai; i++){
    list.push(i);
}
for(let b = 0; b < list.length; b++){
    let year = list[b];

    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
        console.log(year);
    }
}