let lado1 = +prompt("Qual o tamnho do primeiro lado:");
let lado2 = +prompt("Qual o tamanho do segundo lado:");
let lado3 = +prompt("Qual o tamanho do terceiro lado:");

let soma = lado1 +lado2;
let sla;

if (soma > lado3) {
    sla = "Forma um triângulo!"
} else {
    sla = "Não forma um triângulo!!"
}

alert(sla);