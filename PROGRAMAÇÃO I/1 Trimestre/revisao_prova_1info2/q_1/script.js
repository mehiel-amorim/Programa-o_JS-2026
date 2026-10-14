let base = +prompt("Base do terreno(em metros):");
let altura = +prompt("Altura do terreno(em metros):");
let preço = +prompt("Preço do metro quadrado");

let area = (base*altura)/2;
let valorMetro = area*preço;

alert(`A área do seu terreno é ${area} metros² \n O valor do seu terreno é ${valorMetro} R$.`)