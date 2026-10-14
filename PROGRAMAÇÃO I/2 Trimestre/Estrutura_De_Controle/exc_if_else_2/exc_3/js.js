let idade = parseInt(prompt("Qual sua idade:"));

if (idade <= 12) {
    alert("Infantil");
} else if (idade >= 13 && idade <= 17) {
    alert("Juvenil");
} else {
    alert("Adulto");
}