let prova = +prompt("Qual foi sua nota da prova:");
let entrevista = +prompt("Qual foi sua nota na entrevista:")
let experiencia = parseInt(prompt("Quanto tempo você atua nessa area:"))

let media = (prova + entrevista)/2;
let mensagem = "";

if (prova >= 8 && entrevista >= 8 && experiencia >= 2 ) {
    mensagem = "Contratado!!";
} else if (media >= 7 && experiencia >= 1) {
    mensagem = "Espera";
} else {
    mensagem = "Reprovado!!!!!!!!";
}
alert(mensagem+"\n Sua média foi de: "+media)