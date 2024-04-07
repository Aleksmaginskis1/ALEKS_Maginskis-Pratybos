const zmogus ={
    age: 48,
    height:193,
    akys: 'rudos'
}

function print(obj) {
    for(const info in obj){
        console.log(info, obj[info]);
    }
}

print(zmogus)