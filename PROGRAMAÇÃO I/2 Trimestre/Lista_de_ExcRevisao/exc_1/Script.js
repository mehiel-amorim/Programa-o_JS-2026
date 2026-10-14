let espacoTotal = +prompt("Quantos GB vc tem:");
let armazenamentoUsado = +prompt("Quanos GB você está usando:");

let gb50 = espacoTotal * 0.5;
let gb80 = espacoTotal * 0.80;
let mensagem =""

if (armazenamentoUsado <= gb50) {
    mensagem = "Uso normal";
} else if (armazenamentoUsado <= gb80) {
    mensagem = "Atenção: armazenamento se aproximando do limite";
} else {
    mensagem = "Espaço crítico. Considere ampliar o plano."
}

alert (mensagem)