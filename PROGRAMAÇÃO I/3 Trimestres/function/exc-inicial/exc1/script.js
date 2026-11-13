let resultado = [2, 4, 6, 8, 10, 12, 14]

resultado.map( function(dobro){
    return dobro *2
})

function calDobro(dobro){
    return dobro * 2

}

let birubeibe = calDobro(3);
console.log(birubeibe);

let newResultado = resultado.map(calDobro)

console.log(newResultado);
