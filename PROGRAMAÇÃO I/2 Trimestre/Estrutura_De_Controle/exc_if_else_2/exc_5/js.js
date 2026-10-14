let peso = +prompt("Qual o peso do seu produto(Kg):");
let valor;
if (peso <= 5) {
    valor = 'R$20'
} else if (peso > 5 && peso <= 20) {
    valor = "R$50"
} else {
    valor = "R$100"
}

alert(`Seu frete no valor de: ${valor}`)