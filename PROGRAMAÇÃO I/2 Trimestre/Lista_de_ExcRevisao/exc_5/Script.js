let numeroHoras = +prompt("Total de horas prevista");
let valorHora = +prompt("Qual o valor da hora:");
let percentual = parseInt(prompt("percentual de complexidade(10, 20 e 30%):"));

let custoBase = numeroHoras * valorHora;
let acrecimo = custoBase * (percentual /100);
let valorFinal = custoBase + acrecimo;
let mensagem = ""

if (valorFinal <= 8000) {
    mensagem = "projeto pequeno";
} else if (valorFinal <= 20000) {
    mensagem = "projeto médio";
} else {
    mensagem = "projeto grande";
}

alert(mensagem)