let areaTotal = +prompt("Qual a área total a ser pintada(m²):");
let rendimentoTinta = +prompt("Qual o rendimento da tinta(m²):");
let volumeTinta = +prompt("Qual o volumetria da lata de tinta(litros):");
let precoTinta = +prompt("Qual o preço da lata de tinta:");

let horaDservico = +(prompt("Quantas hora irá levar:"));
let pintores = parseInt(prompt("Quantos pintores:"));
let valorHoraPintor = +(prompt("Quantos é o valor da hora dos pintores:"));
let orcamentoMaximo = +prompt("Qual o orçamento máximo disponível:");

//calculo, tinta
let litrosTintas = (areaTotal / rendimentoTinta);
let qtdLatas = Math.ceil(litrosTintas / volumeTinta);
let custoTotalTina = qtdLatas * precoTinta;
// calculo, mão de obra
let custoEquipe = (horaDservico * pintores)*valorHoraPintor;

let custoTotal =custoEquipe+custoTotalTina;
//analise
let saldoreatante;
let parcela;
let percentual = ((custoTotal - orcamentoMaximo)/orcamentoMaximo)*100
let mais50 = orcamentoMaximo * 0.50;
let mais30 = orcamentoMaximo * 0.30;

if (orcamentoMaximo >= custoTotal) {
    custoTotal *= 0.95
    saldoreatante = orcamentoMaximo - custoTotal;
} else if (custoTotal >= mais50) {
    parcela = ('Parcele em 4 vezes: R$'+ custoTotal/4);
} else if (custoTotal >= mais30) {
    parcela = ('Parcele em 3 vezes: R$'+ custoTotal/3);
} else {
     parcela = ('Parcele em 2ezes: R$'+ custoTotal/2);
}
   



alert (`A quantidade de latas serão de ${qtdLatas.toFixed(2)}\n
, o custo das latas foram R$${custoTotalTina.toFixed(2)}\n
, o custo da mão de obra foi de R$${custoEquipe.toFixed(2)}\n
, o custo bruto sera de R$${custoTotal.toFixed(2)}\n
, o saldo restante é de R$${saldoreatante.toFixed(2)}`);