let number1 = +prompt("Primeiro número");
let number2 = +prompt("Segundo número");
let simbolo = prompt("diga um simbolo matématico");
let soma;

switch(simbolo){
    case "+":
        soma = number1 + number2;
        alert(soma);
        break;
    case "-":
        soma = number1 - number2;
        alert(soma);
        break;
    case "*":
        soma = number1 * number2;
        alert(soma);
        break;
    case "/":
        soma = number1 / number2;
        alert(soma);
        break;
    default:
        soma = 0
        alert("Coloque um sinal válido!!!!");
}