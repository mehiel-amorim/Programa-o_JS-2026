let kits = parseInt(prompt("Quantos kits serão feitos:"));
let canetaKits = parseInt(prompt("Quantas canetas por kit:"));
let cadernoKits = parseInt(prompt("Quantos caderno por kit:"));
let adesivoKits = parseInt(prompt("Quantos adesivos por kit:"));

let pCaneta = parseFloat(prompt("Qual o peço da caneta:"));
let pCaderno = parseFloat(prompt("Qual o preço do caderno:"));
let pAdesivo = parseFloat(prompt("Qual preço dos adesivo:"));

let tCaneta = cadernoKits*kits;
let tCaderno = cadernoKits*kits;
let tAdesivo = adesivoKits*kits;
let custoCaneta = tCaneta*pCaneta;
let custoCaderno = tCaderno*pCaderno;
let custoAdesivo = tAdesivo*pAdesivo;
let total = custoCaneta + custoCaderno + custoAdesivo;

alert(`A quantidade total de caneta é ${tCaneta.toFixed(2)} \n 
    A quantidade total de caderno é ${tCaderno.toFixed(2)} \n 
    A quantidade total de adesivo é ${tAdesivo.toFixed(2)} \n
    custo da caneta é R$${custoCaneta.toFixed(2)}\n
    custo da caderno é R$${custoCaderno.toFixed(2)}\n
    custo da adesivo é R$${custoAdesivo.toFixed(2)}\n
    custo total é R$${total.toFixed(2)}`)
