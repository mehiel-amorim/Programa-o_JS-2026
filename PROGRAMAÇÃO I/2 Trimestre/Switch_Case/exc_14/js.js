let codigo = +prompt("Oque você quer fazer");
let saldo = 1000;

let mensagem;

switch(codigo) {
    case 1:
        mensagem = ("R$"+saldo);
        break;
    case 2:
        let saque = +prompt("Quantos reais você quer sacar:");
        if (saque <= saldo) {
            saldo = saque - saldo;
            mensagem = ("Transação valida: R$" + saldo.toFixed(2));
        } else {
            mensagem = ("Transação invalida!!")
        }
        break;
    case 3:
        let deposito = +prompt("Qual o valor a depositar?");
        saldo = 1000 + deposito;
        mensagem = ("R$"+saldo.toFixed(2))
        break;
    default:
        mensagem=("Escolha um valor valido")
}

alert(mensagem)