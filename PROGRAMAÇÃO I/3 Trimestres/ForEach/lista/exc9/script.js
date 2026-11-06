let notas = [5.5, 8.0, 6.5, 9.0, 4.5, 10.0, 7.0, 3.5, 8.5];
let soma = 0;
let contadorMaior= 0;

notas.forEach(function(nota){
    soma += nota;

    if(nota >= 7){
        contadorMaior++
    }
});

let media = soma / notas.length;

console.log("Soma das notas: "+soma.toFixed(2) + "\n media das notas: "+media.toFixed(2) + "\n maiores que 7 : "+ contadorMaior + "\n maior nota :" + Math.max(...notas));