let nota1 = +prompt("Qual sua primeira nota:");
let nota2 = +prompt("Qual usa segunda nota:");

let soma = (nota1 + nota2)/2;
let situção = ""

if (soma > 5 && soma <= 6.9) {
    situção = "Recuperação!!"
} else if (soma >= 7) {
    situção = ("Aprovado!!!!!")
} else {
    situção = "Reprovado!!!!!!!!!!!"
}

let mensagem = "=======================\n\n";

mensagem += "Média final: "+soma.toFixed(2) +"\n";
mensagem += "Situação do aluno: "+situção+"\n\n";

mensagem += "===========================";

alert(mensagem)