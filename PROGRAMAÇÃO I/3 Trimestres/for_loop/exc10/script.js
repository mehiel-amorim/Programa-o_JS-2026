let lotes = 0;
let lotes1000 = 0;
let maiorLote = 0;
let quantidadeTotal= 0

let lista = [];
;
for (let i = 1; i <= 10; i++) {
do {
    lotes = Number(prompt("informe a quantidade do" + i + "° lote"));
    
    if (lotes <= 0 || !Number.isInteger(lotes)) {
        alert("Digite um valor valido:");
    }
} while (lotes <= 0 || !Number.isInteger(lotes));
quantidadeTotal +=lotes;


  // if(i === 1){
  //     maiorLote = lotes;
  // } else{
  //     if(lotes > maiorLote){
  //         maiorLote = lotes;
  //     }
  // }
    lista.push(lotes);

    if (lotes >= 1000) {
    lotes1000++;
    }
}
let posicao = lista.indexOf(Math.max(...lista));

alert("A produção total foi de:" + quantidadeTotal +"\n lotes que utrapassaram 1000 unidades:" + lotes1000 + "\n posição: " + (posicao + 1) + "\n maior produçao de unidades: "+ Math.max(...lista));
