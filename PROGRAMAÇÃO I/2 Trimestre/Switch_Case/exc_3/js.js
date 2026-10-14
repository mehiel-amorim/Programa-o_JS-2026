let codigo = prompt("Qual o periodo(M,T,N)").toUpperCase();

switch(codigo) {
    case "M":
        alert("Bom dia");
        break;
    case "N":
        alert("Boa tarde");
        break;
    case "T":
        alert("Boa noite");
        break;
    default:
        alert("Não existe")
}