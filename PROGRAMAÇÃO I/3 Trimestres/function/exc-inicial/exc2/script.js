
function  somar(valores){
    let total = 0;
    
    valores.forEach(function(valor){
        total = total + valor 
    });
    
    return total;
}

function calMedia(valores){
    return somar(valores) / valores.length;
}

let notas = [10, 4, 6, 7];

console.log(calMedia(notas));