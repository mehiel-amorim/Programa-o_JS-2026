let tipoCliente = prompt("Qual o tipo de cliente:").toUpperCase();
let valorBruto = +prompt("Qual o valor a pagar:");

let calculo;

switch(tipoCliente){
    case "A":
        calculo = valorBruto * 0.95;
        alert(`Cleinte premium\n Valor liquido ficou de R$${calculo.toFixed(2)}`);
        break;
    case "B":
        calculo = valorBruto * 0.90;
        alert(`Cliente ouro\n Valor com desconto R$${calculo.toFixed(2)}`);
        break;
    case "C":
        calculo = valorBruto * 0.95;
        alert(`cliente Diamante \n valor com desconto foi de R$${calculo.toFixed(2)}`);
        break;
        default:
            alert("Informe um valor valído")
}