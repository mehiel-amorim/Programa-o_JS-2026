let altura = +prompt("qual a sua altura(em metros):");
let sexo = prompt("Qual o seu sexo (m ou f)");

let pesoIdeal = 0;

if (sexo === "M" || sexo === "m") {
    pesoIdeal = (72.7 * altura) - 58;
} else if (sexo === "F" || sexo === "f") {
    pesoIdeal = (62.1 * altura) - 44.7;
} else {
    alert("Sexo inválido! digite M ou F");
}

alert("O seu peso ideal é: " + pesoIdeal.toFixed(2)+"Kg");