let numeros = [3, 12, 7, 20, 5, 18, 9, 6];
let maior10 = 0;

for(let i = 0; i < numeros.length; i ++){
    if(numeros[i] > 10){
        maior10 += 1;
    }
}
console.log(maior10);