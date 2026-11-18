//function calcularDobro(numero){
//    return numero * 2;
//}
//
//let resultado =calcularDobro(5);
//
//console.log(resultado);

function somar(valores) {
  let total = 0;
  valores.forEach(function (valor) {
    total = total + valor;
  });
  return total;
}
function calcularMedia(valores) {
  return somar(valores) / valores.length;
}
let notas = [7, 8, 6, 9, 10];
console.log(calcularMedia(notas));
