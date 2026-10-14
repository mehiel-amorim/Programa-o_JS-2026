let idade = parseInt(prompt("Qual sua idade"));

if(idade >= 19){
    console.log (`Sua idade é ${idade}`);
} else {
    console.log ("Sua idade nao é valida")
}


if (idade <= 25) {
    console.log ("A idade é maior que 25");
}

/*if (idade > 18) {
    console.log ("Pode a entrada")
} */ 

let nome = "Mehiel";

if (nome == "Mehiel" && idade > 12) {
    console.log ("Liberado")
}

let passaporte = true;

if ((nome == "Mehiel" && idade > 30) || passaporte == true) {
    console.log ("Liberdao2")
}