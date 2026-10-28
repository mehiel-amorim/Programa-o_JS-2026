let notas = [5, 8, 6, 9, 4, 10, 7, 3];
let soma = 0;
let contador = 0;

for(let i = 0; i < notas.length; i ++){
    soma += notas[i];

    if(notas[i] >= 7){
        contador ++
    }
}
let media = soma/ notas.length;

console.log("Soma: ", soma.toFixed(1), "\n media: ", media, "\n acima de 7: ", contador)