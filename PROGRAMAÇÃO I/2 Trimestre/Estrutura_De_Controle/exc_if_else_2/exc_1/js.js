let saldo = +prompt("Qual seu saldo(R$):");
let final;
let mensagem;

if (saldo <= 500) {
    alert("Nenhum crédito!!");
} else if (500 <= saldo && saldo <= 1000) {
    final = saldo * 0.30;
    alert("Seu valor de credito é: " + final.toFixed(2));
} else {
    final= saldo * 0.50;
    alert("Seu valor de crédito é:" + final.toFixed(2))
}