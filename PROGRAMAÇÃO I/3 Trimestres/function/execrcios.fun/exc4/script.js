let celcius = [];

for(i = 0; i <1 ; i++){
    let cel = +prompt("Quantos graus celcius °");
    celcius.push(cel)
};

function celsiusParaFahrenheit(graus){
    let formula = (graus * 9 / 5) + 32;

    return formula;
}

alert(celsiusParaFahrenheit(celcius))