let faturamento = parseFloat(prompt("Qual o faturamento total da empresa:"));
let percentualOnline = parseFloat(prompt("Qual o percentual de vendas online:"));
let percentualFisica = +prompt("Qual o percentual de vendas Físicas:");

let valorOnline = (percentualOnline/100)*faturamento;
let valorFisica = (percentualFisica/100)*faturamento;
let difrenca = Math.abs (valorFisica-valorOnline);

alert(`O valor de vendas online são R$${valorOnline.toFixed(2)} \n valor das vendas físicas R$${valorFisica.toFixed(2)} \n a diferença é R$${difrenca.toFixed(2)}`)

