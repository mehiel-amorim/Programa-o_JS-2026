let volume = parseFloat(prompt("Qual o volume inical do tanque :"));
let litros = parseFloat(prompt("Litros por hora:"));
let tempo = parseFloat(prompt("Quanto tempo até encher tudo:"));

let volumeFinal = (litros * tempo) + volume;

alert("O volume final é: " + volumeFinal.toFixed(2) + " ,Litros");