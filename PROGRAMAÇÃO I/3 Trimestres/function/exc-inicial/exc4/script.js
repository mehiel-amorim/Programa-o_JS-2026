let notas = [1, 5, 8, 9, 11, 7, 2];
let aprovados = [];
function contasAprovadas(valores){
    let maior7 = 0;
    valores.forEach(function(valor){
        if(valor >= 7){
            maior7++
            aprovados.push(valor)
        };
    });

    return maior7;
};
console.log(contasAprovadas(notas));

console.log(aprovados);




