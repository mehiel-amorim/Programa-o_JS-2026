let Tempo = parseFloat(prompt("Quanto tempo deu a sua viagem (horas):"));
let velocidaM = parseFloat(prompt("Quantos Km/h vc viajou:"));
let consumoM = parseFloat(prompt("Qual é o consumo medio do seu carro"));
let valorCombustivel = parseFloat(prompt("Quanto estva o preço medio do combustivel que você pagou:"));

let distancia = Tempo * velocidaM;
let combustivelGasto = distancia / consumoM
let valorTotal = combustivelGasto * valorCombustivel

alert("sua distancia é " + distancia.toFixed(2)+"km");
alert("o valor gasto do combustivel l" + combustivelGasto.toFixed(2));
alert("valor total da viagem R$" + valorTotal.toFixed(2));