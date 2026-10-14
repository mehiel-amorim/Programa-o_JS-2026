let agua = +prompt("Qual o consumo mensal de água em m³:");
let valor;
if (agua <= 10) {
    valor = 'R$30.00'
} else if (agua > 10 && agua <= 25) {
    valor = "R$50.00"
} else {
    valor = "R$80.00"
}

alert(`Seu consumo de água em m³ é de: ${valor}`)