let dias = parseFloat(prompt("numeros de dias de uso do mês:"));
let horas = parseFloat(prompt("Horas por dia:"));
let consumo = parseFloat(prompt("Consumo equipamento (KWh por hora):"));
let custoKWh = parseFloat(prompt("Custo KWh:"));
let taxa = parseFloat(prompt("Taxa fixa mensal :"));

let totalHoras = dias * horas;
let consumoTotal = consumo * dias;
let custoEnergia = consumoTotal * custoKWh;
let custoT = custoEnergia + taxa;

alert(`total de horas é ${totalHoras} \n  o consumo total foi de ${custoTotal} \n  o custo de energia foi ${custoEnergia} \n o custo total foi de com a taxa ${custoT}`);
