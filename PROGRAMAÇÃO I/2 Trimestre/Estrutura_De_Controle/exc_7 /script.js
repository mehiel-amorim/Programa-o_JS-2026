let leituraInicial = parseInt(prompt(""));
let leituraFinal = parseInt(prompt(""));
let valorKwh = parseFloat(prompt("kwh"));

let consumo = leituraFinal - leituraInicial;
let totaLConta;

if (consumo <= 150) {
    totaLConta = consumo *valorKwh
} else {
    let consumoNormal = 150;
    let consumoExcedente = consumo -150;
    let valorExdente = valorKwh * 1.20;
    
    totaLConta = (consumoNormal * valorKwh) + (consumoExcedente * valorExdente);
}

alert("consumo: "+ consumo);
alert("valor da conta é: R$ "+ totaLConta)