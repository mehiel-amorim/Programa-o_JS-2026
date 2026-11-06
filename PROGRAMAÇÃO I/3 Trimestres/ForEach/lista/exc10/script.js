let vendas = [120, 75, 240, 55, 180, 90, 310, 65];
let soma = 0;
let contador = 0;

/*for(i = 0; i = vendas.length; i++){
    soma += vendas[i];
    if(vendas[i] >= 150 ){
        contador++
    }
};

*/

vendas.forEach(function(sla){
    soma += sla;
    if(sla >= 150){
        contador++
    }
});

let media = soma/ vendas.length;

console.log("faturamento total: "+ soma.toFixed(2)+ "\nmedia: "+media +"\nvendas superiores a 150: "+ contador + "\n")
