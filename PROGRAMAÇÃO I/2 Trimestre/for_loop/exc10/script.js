let lotes = 0;
let lotes1000 = 0;
let maiorLote = 0;
for(let i = 1; i <= 10; i ++){
    do{
        lotes = parseInt(prompt("informe a quantidade do" + i +"° lote"));

        if(lotes <= 0 ){
            alert("Digite um valor valido:")
        }
    }while(lotes <= 0)

    let quantidadeTotal =+ lotes;

    if(i === 1){
        maiorLote = lotes;
    } else{
        if(lotes > maiorLote){
            maiorLote = lotes;
        }
    }


    if(lotes >= 1000){
        lotes1000 ++;
    }
}
alert(maiorLote)