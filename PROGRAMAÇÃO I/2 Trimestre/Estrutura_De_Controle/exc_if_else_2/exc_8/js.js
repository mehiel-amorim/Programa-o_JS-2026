let media = +prompt("Qual foi sua média final:");
let renda = +prompt("Qual a renda da sua familia:");

let bolsa;

if (media >= 9.0 && renda <= 2000) {
    bolsa = ('100%');
} else if (media >= 8.0 && renda <= 3500) {
    bolsa = ("50%");
} else if (media >= 7.0 && renda <= 5000) {
    bolsa = ('25%');
} else {
    bolsa = ("Não ganhou bolsa");
} 

alert("Resultado da avaliação - "+bolsa)