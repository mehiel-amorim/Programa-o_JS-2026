let preçoPor_quilo = 28.00;
let total = parseFloat( prompt("Quantos kg deu sua refeição?"));

let preçoTotal = total*preçoPor_quilo; //processamento de dados

alert(`Aqui seu resultado= R$`+ preçoTotal.toFixed(2));