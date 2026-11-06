let notas = [6, 8, 5, 9, 7, 4, 10, 6];
let contador = 0;

notas.forEach(function(maior){
    if(maior >= 7){
        console.log(maior)
        contador++
    }
})
console.log("Notas maior que 7: "+ contador);