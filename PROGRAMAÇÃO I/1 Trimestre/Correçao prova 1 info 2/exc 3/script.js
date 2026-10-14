let entregas = parseFloat(prompt("Quantas entregas foram realizadas :"));
let tempo = parseFloat(prompt("tempo medio por entrega (minutos) :"));
let consumo = parseFloat(prompt("Consumo medio (litros) :"));
let preço = parseFloat(prompt("Preço do combustivel :"));

let tempoTotal = (entregas*tempo)/60;
let consumoTotal = entregas*consumo;
let custoTotal = consumoTotal*preço;
let mediaCusto = custoTotal/entregas;

alert("tempo total é :" + tempoTotal.toFixed(2));
alert("O consumo total é :" + consumoTotal.toFixed(2));
alert("O custo total é R$:" + custoTotal.toFixed(2));
alert("A media por entrega é :" + mediaCusto.toFixed(2));
