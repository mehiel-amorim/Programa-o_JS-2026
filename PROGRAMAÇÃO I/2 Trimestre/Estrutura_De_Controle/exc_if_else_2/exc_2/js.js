let salario = +prompt("Qual o seu salário(R$):");
let valorImposto;

if (salario <= 2500) {
    alert("Você é insento")
} else if ( salario <= 5000) {
    valorImposto = salario * 0.15;
} else {
    valorImposto = salario * 0.27
} 
alert("O valor coprado será de: R$: " + valorImposto.toFixed(2));