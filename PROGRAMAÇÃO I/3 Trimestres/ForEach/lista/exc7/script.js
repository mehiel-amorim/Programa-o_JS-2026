let movimentacoes = [250, -80, -35, 120, -60, 90];
let contadorPositivo= 0;
let contadorNegativo = 0;
let soma = 0;

movimentacoes.forEach(function(movi) {
    soma += movi;

    if(movi >0){
        contadorPositivo++
    } else if(movi<0){
        contadorNegativo++
    }
});

console.log("No total ficou: "+ soma + "\n total de movimentação positiva: "+ contadorPositivo  + "\ntotal contador negativo: "+ contadorNegativo);
