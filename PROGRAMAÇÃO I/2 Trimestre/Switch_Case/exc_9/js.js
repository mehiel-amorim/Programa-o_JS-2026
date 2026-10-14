let codigo = prompt("Qual o seu meio de transporte").toUpperCase();

switch(codigo){
    case "C":
        alert("Carro");
        break;
    case "M":
        alert("Moto");
        break;
    case "B":
        alert("Bicicleta");
        break;
    default:
        alert("Codigo inválido")
}