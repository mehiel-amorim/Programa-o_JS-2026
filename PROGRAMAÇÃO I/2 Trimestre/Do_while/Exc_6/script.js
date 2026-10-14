let salario;
let financiamento;
let salario5vezes;

do{
    salario = +prompt("Informe se salário:");
    if(salario <= 0 || salario >= 20000){
        alert("Informe um salário válido")
    } 
}while(salario <= 0 || salario >= 20000);
do{
    financiamento = +prompt("Informe seu financiamento:");
    if(financiamento <= 0 || financiamento >= 1000000){
        alert("Digite um valor válido")
    }
    

}while(financiamento<= 0 || financiamento >= 1000000);
salario5vezes = salario * 5;
if(salario5vezes >= financiamento){
    alert("Financiamento Concedito");
    alert("Obrigador por nos consultar");
}else{
    alert("Financiamento negado Concedito");
    alert("Obrigador por nos consultar");
}
