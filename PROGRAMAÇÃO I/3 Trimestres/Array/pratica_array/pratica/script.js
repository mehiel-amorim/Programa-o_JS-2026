//let nomes = ["joao", "maria", "jose", "pedro"];
//for(i = 0; i < 4; i ++){
//    console.log(nomes[i])
//}

//let numero = [1, 2, 3, 4, 5];
//for(i = 0; i < numero.length; i++){
//    console.log(numero)
//}

//let number = [3, 5 ,7 , 9];
//let soma = 0;
//
//for(i = 0; i < number.length; i++){
//    soma += number[i]
//}
//console.log("soma: "+ soma)

let lista = [6, 8, 10, 4]
let soma = 0;

for(i = 0; i < lista.length; i++){
    soma += lista[i]
}

let media = soma/lista.length;
console.log("Media: "+ media.toFixed(1))
