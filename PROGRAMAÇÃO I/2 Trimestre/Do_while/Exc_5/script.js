let salarioBruto;
let inss;
let salarioLiquido;
let continuar;
let somaSalarioLiquido = 0;
let contaEmpregados = 0;
let contAbaixo1500 = 0;
let contEntre = 0;
let contAcima = 0;

do{
    do{
        salarioBruto = +prompt("Qual o seu salário bruto: R$");
        if(salarioBruto <= 0 || salarioBruto >= 10000){
            alert("Valor inválido")
            alert("Informe apenas valores positivos e menores que R$ 10mil")
        }
    }while(salarioBruto <= 0 || salarioBruto >= 10000);
    
    if(salarioBruto <= 1500){
        inss = salarioBruto * 0.08;
        contAbaixo1500++;
    } else if(salarioBruto <= 3500){
        inss =salarioBruto * 0.10;
        contEntre++;
    }else {
        inss = salarioBruto * 0.12
        contAcima++;
    }
    salarioLiquido = salarioBruto - inss;
    somaSalarioLiquido = somaSalarioLiquido + salarioLiquido;
    contaEmpregados = contaEmpregados + 1;

    alert("Salário líquido: R$" + salarioLiquido.toFixed(2));
    
    do{
        continuar = prompt("Deseja continuar? Digite sim ou não").toLowerCase()
        if(continuar != "s" && continuar != "n"){
            alert("Apenas S ou N")
        }
    } while(continuar != "s" && continuar != "n")
} while(continuar == "s" || continuar == "sim" )


let mediaSalario = somaSalarioLiquido / contaEmpregados;
alert("Média dos salários líquidos: R$"+ mediaSalario.toFixed(2));
let percAbaixo = (contAbaixo1500/contaEmpregados) * 100;
alert ("Percentual de saláros abaixo de 1500 reais: "+percAbaixo.toFixed(2));