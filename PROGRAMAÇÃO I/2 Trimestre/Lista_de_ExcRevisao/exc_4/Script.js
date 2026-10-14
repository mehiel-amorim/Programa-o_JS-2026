let numeroComputadore = parseInt(prompt("Quantos computadore tem sua empresa:"));
let consumoMedio = +prompt("Consumo medio por computador (Mbps):");

let consumoTotal = numeroComputadore * consumoMedio;
let mensagem = ""
if (consumoTotal <= 100) {
    mensagem = "Plano basico";
} else if (consumoTotal <= 300){
    mensagem = "Plano empresarial";
} else {
    mensagem = "plano corporativo";
}

alert(mensagem)