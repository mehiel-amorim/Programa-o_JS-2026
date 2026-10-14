let rendaMensal = +prompt("Renda mensal do cliente (em R$):");
let scoreCredito = parseInt(prompt("Pontuação de Crédito / Score (de 0 a 1000):"));
let percentualDivida = parseFloat(prompt("Percentual da renda já comprometido com outras dívidas (de 0 a 100):"));

let limite = 0;
let mensagem = "";

if (rendaMensal >= 10000 && scoreCredito >= 800 && percentualDivida < 40) {
    limite = rendaMensal * 0.50;
    mensagem = "Cartão black";
}

else if ((rendaMensal >= 4000 && rendaMensal <= 9999) && scoreCredito >= 600 && percentualDivida <= 50 ){
    limite = rendaMensal * 0.30;
    mensagem = "Cartão Platinum";
} 

else if (scoreCredito >= 500 && percentualDivida <= 30) {
    limite = 1000;
    mensagem = "Cartão Basic";
}

else {
    mensagem = "Você esta em dividado!! PARABENSSSSS";
    limite = 0;
}

alert(`Tipo de cartão aprovado ${mensagem}\n O seu limite é de R$${limite.toFixed(2)}`)