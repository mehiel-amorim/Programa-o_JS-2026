
let pesoMaior = 0;
let pesoMenor = 0;

for(i = 1; i < 6; i ++){
    let peso = +prompt("Qual foi o peso desse " + i + "° lote:");

    if(i === 1){
     pesoMaior = peso;
     pesoMenor = peso;
    } else{
        if(peso > pesoMaior){
            pesoMaior = peso;
        } 
        if(peso < pesoMenor) {
            pesoMenor = peso;
        }
    }
}

alert("maior peso :" + pesoMaior + "kg \n peso menor: " + pesoMenor + "kg")