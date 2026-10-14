/*
23) Elabore um programa em Javascript que receba o nome e número de horas trabalhadas de um operário. Feito isso, calcule seu salário sabendo que ele ganha R$ 10,00 por hora. Quando o número de horas exceder a 160, calcule o excesso de pagamento numa variável, caso contrário zerar tal variável. A hora excedente de trabalho vale R$ 15,00. No final do processamento
apresentar o salário final.
● Controle de entrada com mensagem de erro: o número de horas deverá ser positivo e inferior a 400 horas.

Exemplo de prova:
Faça um laço principal para ler N empregados

Calcular e apresentar a média dos salários finais

Calcular e apresentar o percentual de salários finais acima de R$ 5 mil

Controle de entrada do laço principal: o usuário deverá responder apenas sim ou não para a pergunta "Deseja informar outro empregado?"
*/

let horaTrabalhada;
let salario;
let calculo;
let registrarOutraConta;
let somaSalario = 0;
let contador = 0;
let contasConectadas = 0;
let salario5K = 0;
let percentual5k;

do{

    do{
        horaTrabalhada = +prompt("Quantas horas trabalhadas")
        if(horaTrabalhada < 0 || horaTrabalhada > 400){
            alert("O número da horas deverá ser positivo e inferior a 400 horas")
        }  
    } while (horaTrabalhada < 0 || horaTrabalhada > 400) 
        
        
        if (horaTrabalhada < 160) {
            salario = horaTrabalhada * 10;
        } else {
            let excessoHora = horaTrabalhada - 160
            
            calculo = excessoHora * 15;
            salario = (160 * 10) + calculo;
        }
        alert("Seu salário é de: R$"+salario.toFixed(2));
        //contador ++
        somaSalario += salario;
        contasConectadas = contasConectadas + 1;
        if(salario > 3000){
            salario5K++
        }

        registrarOutraConta = prompt("Você quer registrar outra contra SIM ou NÃO:").toLowerCase()
    } while(registrarOutraConta == "sim")

    percentual5k = (salario5K/contasConectadas)*100;
    let mediaSalario = somaSalario / contasConectadas;

  alert(`A soma dos salários sao de: R$${somaSalario.toFixed(2)}\n a média dos salários são de: ${mediaSalario.toFixed(2)}\n percentual dos salários acima de 5k: ${percentual5k.toFixed(2)}%`);
       