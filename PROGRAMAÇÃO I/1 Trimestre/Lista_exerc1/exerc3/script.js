let valoKg = parseFloat(prompt("Qual o valor do KG?"));
let preçoKg = parseFloat(prompt("Quantos Kg você comprou?"));
let total = valoKg * preçoKg;
alert(`Valor a ser pago= R$`+ total.toFixed(2));