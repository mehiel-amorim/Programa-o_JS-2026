let cofre = parseFloat(prompt("Quantos Dólares você tem:"));
let cotação = parseFloat(prompt("Cotação de hoje:"));
let total = cofre*cotação;
alert("Total: R$"+total.toFixed(2))