let precoProduto = [];
let descontoEmPercentual =[];
for(let i =0; i < 1; i++){
    let produto = +prompt("Qual o valor do produto");
    let percentualDes = +prompt("Qual e o valor do desconto %");

    precoProduto.push(produto);
    descontoEmPercentual.push(percentualDes);
}

function calcularPrecoComDesconto(preco, percentual) {
    let desconto = preco * (percentual / 100);
    let valor = preco - desconto;

    return valor
}

alert(calcularPrecoComDesconto(precoProduto, descontoEmPercentual));