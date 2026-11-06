let numeros = [12, 7, 4, 9, 16, 3, 20, 11, 8];
let pares = [];
let impares = [];

numeros.forEach(function(numero){
    if(numero % 2 === 0){
        pares.push(numero);
    } else if (numero % 2 === 1){
        impares.push(numero);
    }
})

pares.sort(function(a,b){
    return a - b
});
console.log(pares);

impares.sort((a, b) => a-b);
console.log(impares);
