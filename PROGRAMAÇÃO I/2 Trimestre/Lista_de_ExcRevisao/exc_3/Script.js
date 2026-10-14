let quantidadeTarefe = parseInt(prompt("quantidade de tarefas concluídas:"));
let quantidadeBugs = parseInt(prompt("quantidade de bugs encontrados:"));
let nota = +prompt("Qual foi sua nota (0 a 10):");

let indice = (quantidadeTarefe * 2) + (nota * 10) - (quantidadeBugs * 5);
let mensagem = "";

if (indice <= 50) {
    mensagem = "Desempenho Insatisfatório!!!";
} else if (indice <= 99) {
    mensagem = "Desempenho bom";
} else {
    mensagem = "Desepenho exelente";
}

alert(mensagem)