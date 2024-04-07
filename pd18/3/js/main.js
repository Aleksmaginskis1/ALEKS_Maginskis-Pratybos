const knyga1 ={
    autorius: "tadas",
    name : "azuolas",
    puslapiai : 642
}

const knyga2 ={
    autorius: "Erikas",
    name : "kaip tvarkyt bema",
    puslapiai : 63
}

const knyga3 ={
    autorius: "Tatjana",
    name : "Mylima virtuve",
    puslapiai : 404
}

function labas(obj) {
    console.log(obj.autorius);
    console.log(obj.name);
    console.log(obj.puslapiai);
};

labas(knyga1)
labas(knyga2)
labas(knyga3)