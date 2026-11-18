
let notas = [];
for(let i = 0; i < 2; i++){
    let numbers = +prompt("digite sua nota");
    notas.push(numbers)
};

function calcularNotas(notass){
    let soma = 0;

    notass.forEach(function(nota){
        soma += nota;
    });

    return soma / notass.length
}

let media = calcularNotas(notas);

console.log(media.toFixed(2));

