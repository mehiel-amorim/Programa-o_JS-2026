let valor = parseFloat(prompt("Preço do seu produto (R$) :"));
let valorPago = valor * 0.05;
let desconto = valor - valorPago
alert("Seu valor monetário : R$" + valorPago +" aqui "+  desconto);