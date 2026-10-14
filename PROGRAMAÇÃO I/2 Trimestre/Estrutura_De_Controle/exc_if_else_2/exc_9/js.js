let salario = +prompt("Qual seu salario:");
let prestacao = +prompt("Qual o valor da prestação:");
let tempoEmprego = parseInt(prompt("Quantos anos de emprego:"))

let calculo = salario * 0.3;
let percentual =((prestacao / salario) * 100)
let sla;

if (calculo > prestacao && tempoEmprego >= 2) {
       sla = ("Aprovado")
} else {
    sla = ("Não aprovado!!")
}

let mensagem = "=========================\n\n"

mensagem += "seu percentual é de: "+ percentual +"%\n"
mensagem += sla + "\n\n"

mensagem += "==========================="

alert(mensagem)