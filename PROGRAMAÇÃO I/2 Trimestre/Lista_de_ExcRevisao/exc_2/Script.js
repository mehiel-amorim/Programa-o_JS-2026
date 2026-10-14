let hora = +prompt("Quantos horas de hospedagem:");
let valorHora = +prompt("Qunato reais é a hora:");

let valorBruto = hora * valorHora;
let mensagem = ""
let valorDesconto;
if (hora <= 100){
    mensagem ="sem desconto";
    valorDesconto = valorBruto 
} else if (hora <= 250 ) {
    mensagem = "Você recebeu um desconto de 8%";
    valorDesconto = valorBruto * 0.92;
} else {
    mensagem = "Você recebeu um desconto de 15%";
    valorDesconto = valorBruto * 0.85;
}
alert(`o valor bruto ficou em R$${valorBruto.toFixed(2)}\n 
${mensagem}\n
o valor com desconto ficou R$${valorDesconto.toFixed(2)}`)