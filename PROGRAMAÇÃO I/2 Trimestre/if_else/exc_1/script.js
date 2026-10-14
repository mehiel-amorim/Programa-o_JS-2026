let idade = parseInt(prompt("Qual sua idade:"));
let cnh = prompt("Você tem CNH:") ;
let carteira = ""

if (idade >= 18 && cnh == "sim") {
    alert("Você pode dirigir")
    carteira = "Tem"
} else if (idade >= 18 && cnh == "nao" ) {
    alert ("Ja pode retirar sua carteira")
    carteira = "Não tem"
} else  {
    alert ("Vai estudar menino!!")
}
