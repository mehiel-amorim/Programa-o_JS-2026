let categoria = prompt("Qual a sua categoria (R, C, I):").toUpperCase();
let consumo = +prompt("Qual foi seu consumo de kWh:");

let mensagem;
let calculo;

switch(categoria){
    case "R":
        calculo = consumo * 0.82;
        mensagem = ("Residencial \nValor do kWh R$0.82 \no valor da conta ficou de R$"+calculo.toFixed(2));
        break;
    case "C":
        calculo = consumo * 0.95;
        mensagem = ("Comercial \nValor do kWh R$0.95 \no valor da conta ficou de R$"+calculo.toFixed(2));
        break;
    case "I":
        calculo = consumo * 0.73;
        mensagem = ("industrial \nValor do kWh R$0.73 \no valor da conta ficou de R$"+calculo.toFixed(2));
        break;
    default:
        mensagem = "Coloque um valor valido";
}

alert(mensagem)