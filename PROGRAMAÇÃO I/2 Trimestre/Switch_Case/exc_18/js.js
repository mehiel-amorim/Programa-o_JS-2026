let setor  = prompt("Qual o seu setor (A, B, C, D,):").toUpperCase();
let ingressos = parseInt(prompt("Quantos ingressos:"));

let calculo;

switch(setor){
    case "A":
        calculo = ingressos * 90;
        alert("Plateia \n valor de R$90.00 \nO valor total fico de R$"+calculo.toFixed(2));
        break;
    case "B":
        calculo = ingressos * 150;
        alert("Camarote \n valor de R$150.00 \nO valor total fico de R$"+calculo.toFixed(2));
        break;
    case "C":
        calculo = ingressos * 250;
        alert("VIP \n valor de R$250.00 \nO valor total fico de R$"+calculo.toFixed(2));
        break;
    case "D":
        calculo = ingressos * 400;
        alert("Premium \n valor de R$400.00 \nO valor total fico de R$"+calculo.toFixed(2));
        break;
    default:
        alert("valor errado")
}