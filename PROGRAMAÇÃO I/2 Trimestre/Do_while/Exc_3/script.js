let nome = prompt("Qual o seu nome:");
let horas;
let salario;
let calculo;

do{
    horas = +prompt("Quantas horas trabalhadas");
    if(horas <= 0 || horas >= 400) {
        alert("Você exediu o numero de horas")
    }
} while(horas <= 0 || horas >= 400) ;

if(horas <= 160)
    salario = horas  * 10;
else{
    let horasExtras = horas - 160;

    calculo = horasExtras * 15;
    salario = (160 * 10) + horasExtras;
}

alert(`${nome} \n R$${salario.toFixed(2)}`)