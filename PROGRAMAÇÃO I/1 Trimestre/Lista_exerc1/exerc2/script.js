let valorPago = parseFloat(prompt ("valor pago"));
let preçoDo_produto = parseFloat(prompt ("valor do produto"));
let troco =valorPago - preçoDo_produto;
alert(`Seu troco é: R$`+ troco.toFixed (2))