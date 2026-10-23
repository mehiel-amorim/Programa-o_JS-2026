let notas = [8, 7, 9, 6, 10];
let nota1 = +prompt("nota 1");
let nota2 = +prompt("nota 2");

let nota = [nota1, nota2];

for (let i = 0; i < notas.length; i ++){
    console.log(notas[i]);
}

let numeros = [10, 20, 30, 40];
let soma = 0;

for (let i = 0; i < numeros.length; i++){
    soma = soma + numeros[i]
}
console.log("soma: " + soma);