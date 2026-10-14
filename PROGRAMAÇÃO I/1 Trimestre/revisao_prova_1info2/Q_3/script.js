let dias = parseInt(prompt("Numeros de dia usado pro mês:"));
let horas = +prompt("Total de hora de uso por dia:");
let consumo = +prompt("Consumo do equipament(kWh por hora):");
let custos = +prompt("Custo do kWh: R$");
let taxa =  +prompt("Quanto é a taxa:");

let taxaFi = taxa + (taxa/100)
let totalHoras = dias * horas;
let consumoEnergia = totalHoras*consumo;
let CustoEnergia = consumoEnergia * custos;
let total = CustoEnergia +taxaFi;

alert(`total de horas ${totalHoras}\n
    consumo total de energia é ${consumoEnergia.toFixed(2)}\n
    custo de energia é R$ ${CustoEnergia.toFixed(2)}\n
    custo total é R$ ${total.toFixed(2)}`);