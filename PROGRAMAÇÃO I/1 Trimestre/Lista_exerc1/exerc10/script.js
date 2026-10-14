let peso = parseFloat(prompt("Qual seu peço: (kg)"));
let engorde = peso * 0.15;
let engordeSoma = peso + engorde;

let emagreça = peso * 0.20;
let emagreçaSoma = peso - emagreça;

alert(`Seu peso caso você engorde 15% = ${engordeSoma.toFixed(2)}Kg \n seu peso caso você emagreça 20% = ${emagreçaSoma.toFixed(2)}Kg`)