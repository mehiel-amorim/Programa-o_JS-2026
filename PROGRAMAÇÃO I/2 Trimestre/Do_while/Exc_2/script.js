let salario;
let reajuste;

do{
    salario = +prompt("Qual o seu salario:");
    if(salario <= 0 || salario >= 50000){
        alert("Coloque um valor valido abaixo de 50mil")
    }
}
while()

if(salario <= 2000){
    reajuste = salario * 1.15;
} else if (salario <= 4000){
    reajuste = salario * 1.10;
 } else {
    reajuste = salario * 1.05;
 }