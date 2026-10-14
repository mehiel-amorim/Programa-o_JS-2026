let peso;
let excesso;
let multa;

do{
    peso = parseFloat(prompt("Informe o peso dos peixe:"));
    if(peso <= 0 || peso >= 150){
        alert("Valor invalido");
        alert("Digite apenas valores positivos e menores que 150 kg");
    }
}while (peso <= 0 || peso >= 150)

if(peso > 50) {
    excesso = peso - 50;
    multa = excesso * 8;
} else {
    excesso = 0;
    multa = 0;
}
if (multa == 0){
    alert("Não há multa a pagar");
} else {
    alert("Valor da multa: R$"+ multa.toFixed(2));
}