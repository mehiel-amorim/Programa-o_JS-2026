let categoria = prompt("Qual sua categoria:").toUpperCase();
let energia = +prompt("Quantos foi gastado");
let calculo;

switch(categoria){
    case "R":
        calculo = energia * 0.75;
        alert(`Residencial, \n R$0.75,\n e o valor ficou R$${calculo.toFixed(2)}`)
        break;
    case "C":
        calculo = energia * 0.92;
        alert(`comercial,\n tarifa de R$0.92, \n e o valor ficou num total de R$${calculo.toFixed(2)}`);
        break;
    case "I":
        calculo = energia * 0.68;
        alert(`Industrial, \n tarifa de R$0.68, \n O valor total ficou num total de R$${calculo.toFixed(2)}`)
        break;
    default:
        alert("Categoria de consumidor inválida.")
}