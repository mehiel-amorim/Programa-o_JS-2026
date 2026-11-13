function maiorValor (valores){
    let maior = valores[0];
    valores.forEach(function(valor){
        if(valor > maior){
            maior = valor;
        };
    });
    return maior;
}

let valores = [10, 20, 30, 40, 50, 60, 70, 80, 99];

console.log(maiorValor(valores));
