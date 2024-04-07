const js = "JavaScript for all";
let lifo = "";

for (let i = js.length - 1; i >= 0; i--) {
  lifo += js[i];
}

console.log(lifo);