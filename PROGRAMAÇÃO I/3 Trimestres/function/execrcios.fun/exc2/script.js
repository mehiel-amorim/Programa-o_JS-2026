let notas = [];
for(i = 0; i < 3; i++){
    let boletim = +prompt("Digite suas notas do seu boletim");
    notas.push(boletim)
};

function verificarMedia(resultados){
    let soma = 0;
    resultados.forEach(function(somas){
        soma += somas;
    });

    return soma/ resultados.length;
};

let media = verificarMedia(notas);

function verificarAprovados(medias){
    if(medias  >= 7){
        return "aprovados";
    } else if(medias >= 5){
        return "em recuperação";
    } else{
        return "Reprovado";
    };
};

console.log(verificarAprovados(media));
