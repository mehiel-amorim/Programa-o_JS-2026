let number1 = +prompt("Digite seu primeiro numero:");
let number2 = +prompt("Digite seu segundo numero");
let sinal;
let calculo;

do{
    sinal = prompt("Qual o seu sinal:")
    if(sinal !== "+" && sinal !== "-" && sinal !== "*" && sinal !== "/"){
        alert("Digite um sinal válido")
    }
}while (sinal !== "+" && sinal !== "-" && sinal !== "*" && sinal !== "/" );

if(sinal == "+"){
    calculo = number1 + number2;
} else if(sinal == "-"){
    calculo =number1 - number2;
} else if(sinal == "*"){
    calculo = number1 * number2;
} else if (sinal == "/"){
    if (numero1 >= numero2) {
        resultado = numero1 / numero2;
    } else {
        resultado = numero2 / numero1;
    }
}

alert(calculo.toFixed(2))