let numeros = [4, 7, 10, 3, 8, 11, 6];
let pares = [];
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        pares.push(numeros[i])
    }
}

//pares.sort((a, b) => a - b); metod 1
//console.log(pares)


//metodo 2
pares.sort(function(a , b){
    return a- b
});
console.log(pares);
