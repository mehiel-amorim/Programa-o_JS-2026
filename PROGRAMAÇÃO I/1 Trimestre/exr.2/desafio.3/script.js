let salarioMinimo = parseFloat (prompt("Seu salário:"));
let Bonus = 50.00;
let finals = salarioMinimo *0.10;

let salarioFinal = salarioMinimo -finals + Bonus;

alert("salário a recber: R$" + salarioFinal.toFixed(2))

