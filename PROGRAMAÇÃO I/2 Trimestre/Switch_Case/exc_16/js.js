let plano = prompt("Qual seu plano:").toUpperCase();
let meses = parseInt(prompt("Quantos meses:"));

let mensagem;
let calculo;

switch(plano){
    case "B":
    calculo = 39.90 * meses;
    mensagem = ("Plano Básico \nmensalidade de R$39.90 \n"+meses+"valor de contratação R$"+calculo.toFixed(2));
    break;
        case "P":
    calculo = 69.90 * meses;
    mensagem = ("Plano Profissional \nmensalidade de R$69.90 \n"+meses+"valor de contratação R$"+calculo.toFixed(2));
    break;
        case "E":
    calculo = 119.90 * meses;
    mensagem = ("Plano empresarial \nmensalidade de R$119.90 \n"+meses+"valor de contratação R$"+calculo.toFixed(2));
    break;
    default:
        mensagem = "Diga um valor valido";
}

alert(mensagem)