let codigo = +prompt("QUal você quer 1 ou 2 (1 km - m, 2 m - km):");
let distancia;
let calculo;

switch(codigo){
    case 1:
         distancia = +prompt("Qual a distânica:");
         calculo = distancia * 1000;
        alert( "Km"+distancia + "// " + calculo+" m");
    break;
    case 2:
        distancia = +prompt("Qual sua distancia em metros:")
        calculo = distancia / 1000;
        alert(distancia+ " M "+ calculo + " Km");
    break;
    default:
        alert("Opção de coversão inválida")
        
}