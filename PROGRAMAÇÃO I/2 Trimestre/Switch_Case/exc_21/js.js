let codigo = +prompt("Qual o seu cargo (1, 2, 3, 4, 5):");
let horas = +prompt("Quantas horas trabalhadas:");

let calculo;

switch(codigo){
    case 1:
        calculo = hora * 35;
        alert("Programador júnior \nR$"+calculo.toFixed(2));
        break;
    case 2:
        calculo = hora * 55;
        alert("Programador pleno \nR$"+calculo.toFixed(2));
        break;
    case 3:
        calculo = hora * 80;
        alert("Programador senior \nR$"+calculo.toFixed(2));
        break;
    case 4:
        calculo = hora * 95;
        alert("Analista de Sistema \nR$"+calculo.toFixed(2));
        break;
    case 5:
        calculo = hora * 130;
        alert("Arquiteto de software \nR$"+calculo.toFixed(2));
        break;
        default:
            alert("ERRO 404")
}