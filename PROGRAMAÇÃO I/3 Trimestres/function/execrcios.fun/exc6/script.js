function contarPares(numeros){
    let contador = 0;
    for(i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            contador ++
        }
    }
    return contador;
}

console.log(contarPares([2, 5, 8, 11, 14, 17, 20]));