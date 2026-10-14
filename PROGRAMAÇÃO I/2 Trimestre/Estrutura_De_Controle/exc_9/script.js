let caixa = +prompt("Quantos reais tem no caixa: R$");
let produtos = parseInt(prompt("Quantos produtos você comprou:"));
let precoUnidade = +prompt("Qual o preço da unidade:");

//processamento e let não definidas
let preco = produtos * precoUnidade;
 let formaPagamento; 
 let taxa;

 //processamento do if e else
if (  0.8*caixa < preco ) {
    taxa = (preco/3) * 1.1;
   formaPagamento= "Prazo de 3 meses";
} else { 
    taxa = preco * 0.95;
    formaPagamento = "a vista";
}


alert(`A forma de pagamento foi de ${formaPagamento} \n 
    e o valor a ser pago é de R$${taxa.toFixed(2)}`);