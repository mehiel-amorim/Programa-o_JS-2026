let opcoes = prompt("Qual o tipo de combustível(G para gasolina e E para etanol):").toUpperCase();
let tanque = parseInt(prompt("Qual a capacidade do tanque (em litros):"));

let preco;

if (opcoes === "G" ) {
    preco = tanque * 5.65;
} else if (opcoes === "E") {
    preco = tanque * 4.38;
} else {
    alert("Você digitou errado tente novamente!!");
}

alert("O total a pagar é: R$" + preco.toFixed(2))