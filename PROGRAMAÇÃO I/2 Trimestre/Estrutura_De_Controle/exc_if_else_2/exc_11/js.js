let idade = parseInt(prompt("Qual a idade do motorista:"));
let historicoAcidentes = parseInt(prompt("Possui quantos historicos de acidentes:"));
let possuiItensSeguranca = prompt("Possui itens de segurança (S ou N):").toUpperCase()

const airBag = possuiItensSeguranca ;
let taxa;
let mensagem = "";

if (idade < 25 || historicoAcidentes >= 2) {
    mensagem = "Perfil de Risco Alto";
    taxa = 450;
    if (airBag == "N") {
        taxa += 100;
    }
}
if  (
    (idade >= 25 && (historicoAcidentes === 1 || historicoAcidentes === 2)) ||
    (idade < 25 && historicoAcidentes === 0)
  ) {
    mensagem = "Perfil de risco moderado";
    taxa = 300;
    
    if (airBag == "S") {
        taxa -= 30;
    }
  }
if (idade >= 25 && historicoAcidentes === 0) {
    mensagem = "Perfil de Risco Baixo";
    taxa = 180;
}
alert (`${mensagem}\n\n Valor final da mensalidade do seguro R$${taxa.toFixed(2)}`)