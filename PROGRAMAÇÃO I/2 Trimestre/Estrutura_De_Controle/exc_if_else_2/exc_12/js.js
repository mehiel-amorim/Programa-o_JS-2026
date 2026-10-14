let valorBruto = +prompt("Quanto deu sua compra: ");
let nivelFidelidade = prompt("Qual o seu nivel de fidelidade (OURO,PRATA,BRONZE):").toUpperCase();
let cupomValido = prompt("tem cupom (S ou N): ").toUpperCase();

let desconto = 0;
let frete = 0;

// Nivel ouro
if (nivelFidelidade === "OURO") {
    desconto= valorBruto * 0.15;
    let valorLidquido = valorBruto - desconto;

    if (valorLidquido >= 150) {
        frete = 0;
    }else{
        frete = 10; 
    }
}

// Nivel prata
else if (nivelFidelidade === "PRATA") {
    

    if (cupomValido === "S") {
        desconto = valorBruto * 0.10
    } else {
        desconto = valorBruto * 0.05
    }

    if (valorBruto >= 250) {
        frete = 0;
    } else {
        frete = 20;
    }
}

//nivel Bronze 
else {
    if (nivelFidelidade === "BRONZE" && cupomValido === "S") {
        desconto = valorBruto * 0.05;
        
    } else  {
        desconto = 0
        
    }
    frete = 30;
}
let valorTotal = valorBruto - desconto + frete

let mensagem = "=================================\n\n";


mensagem += "Valor do desconto aplicado: R$"+desconto.toFixed(2)+"\n";
mensagem += "Valor do frete; R$"+frete.toFixed(2)+"\n";
mensagem += "Valor total final a ser pago pelo cliente: R$"+ valorTotal.toFixed(2) +"\n\n"
mensagem += "================================";

alert(mensagem)