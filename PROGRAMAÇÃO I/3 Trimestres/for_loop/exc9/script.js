let contador5k = 0;
let total = 0;

for(i = 1; i <= 5; i ++){
    let faturamento = +prompt("Qual o faturamento dos ultimos 5 dias:");
    let soma = parseFloat(faturamento)

    if(faturamento > 5000){
        contador5k ++ ;
    }
    total += soma;

}
let media = total / 5;

alert("o Faturamento total foi de: R$" + total + "\n a media diaria foi de: R$"+ media + "\n a quantidade que utrapassou 5k foi de:" + contador5k);