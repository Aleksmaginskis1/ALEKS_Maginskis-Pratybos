let a = 8;
let b = 3;
let c = 9;

if(a <= b && a <= c){
    console.log(b + c);
}else if(b <= a && b <= c){
    console.log(a + c);
}else{
    console.log(a + b);
}