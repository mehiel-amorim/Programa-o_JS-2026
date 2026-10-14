let valor = +prompt("Qual o valor em reais:");
let moeda = prompt("Qual a sua moeda (D, E, L, P,):").toUpperCase();

let calculo;

switch(moeda){
    case "D":
        calculo = valor / 5.60;
        alert("Dólar \n R$"+calculo.toFixed(2));
        break;
    case "E":
        calculo = valor / 6.45;
        alert("Euro \n R$"+calculo.toFixed(2));
        break;
    case "L":
        calculo = valor / 7.55;
        alert("Libra \n R$"+calculo.toFixed(2));
        break;
    case "P":
        calculo = valor / 0.0005;
        alert("Peso argentino \n R$"+calculo.toFixed(2));
        break;
    default:
        alert("Coloca um valor valido")
}