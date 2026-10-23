let somaConsumo = 0
const totalDeDias   = 5;

for(let i = 1; i <= totalDeDias ; i++){

    let consumo = +prompt("Quantos kWh de cada dia");
    let soma = parseFloat(consumo);

    
    while(isNaN(consumo) || consumo <= 0){
        consumo = +prompt("Valor invalido digite um valor valido");
        soma = parseFloat(consumo)
    }
    somaConsumo+= soma
}

let media = somaConsumo / totalDeDias;

alert(
    "A soma total é " + somaConsumo.toFixed(2) + "kWh \n\n" + "A media diaria foi de: "+ media.toFixed(2) + "kWh"
)




