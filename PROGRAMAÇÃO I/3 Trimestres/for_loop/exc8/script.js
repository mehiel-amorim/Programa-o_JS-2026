
// let pesoMaior = 0;
// let pesoMenor = 0;
let lista = [];
for(i = 1; i < 6; i ++){
    let peso = +prompt("Qual foi o peso desse " + i + "° lote:");

//     if(i === 1){
//      pesoMaior = peso;
//      pesoMenor = peso;
//     } else{
//         if(peso > pesoMaior){
//             pesoMaior = peso;
//         } 
//         if(peso < pesoMenor) {
//             pesoMenor = peso;
//         }
//     }
lista.push(peso);
    }

// alert("maior peso :" + pesoMaior + "kg \n peso menor: " + pesoMenor + "kg")
alert("maior peso :" + Math.max(...lista) + "kg \n peso menor: " + Math.min(...lista) + "kg")