function encontrarMaior(numeros) {
// Parte do primeiro valor do array
let maior = numeros[0];
// Começa em 1, pois o índice 0 já foi considerado
for (let i = 1; i < numeros.length; i++) {
if (numeros[i] > maior) {
maior = numeros[i];
}
}
return maior;
}
console.log(encontrarMaior([18, 7, 25, 12, 31, 9]));
console.log(encontrarMaior([4, 40, 14, 22, 8]));
console.log(encontrarMaior([-5, -2, -11, -1]));