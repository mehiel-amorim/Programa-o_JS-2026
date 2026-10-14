let tijoloAltura = parseFloat(prompt("Qual a altura do seu tijolo:"));
let tijoloLArgura = parseFloat(prompt("Qual a largura do seu tijolo:"));
let paredeAltura = parseFloat(prompt("Qual a altura da sua parede:"));
let paredeLargura = parseFloat(prompt("Qual a largura da sua parede:"));

let tijolo = tijoloAltura * tijoloLArgura;
let parede = paredeAltura * paredeLargura;
let quantidade = (tijolo * parede) * 0.70;

alert(quantidade.toFixed(0))