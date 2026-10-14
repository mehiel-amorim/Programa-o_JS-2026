let nota1 = parseFloat(prompt("qual foi sua primeira nota:"));
let nota2 = parseFloat(prompt("qual foi sua segunda nota:"));
let nota3 = parseFloat(prompt("qual sua terceira nota"));
let peso1 = nota1*2;
let peso2 = nota2*3;
let peso3 = nota3*5;
let soma = 2+3+5;
let somaProva = (peso1+peso2+peso3 )/soma;
alert("Media:"+somaProva.toFixed(2))