let codigo = +prompt("Qual curso deseja:");

let mensagem;

switch(codigo){
    case 1:
        mensagem = "Informática";
        break;
    case 2:
        mensagem = "Administraçao";
        break;
    case 3:
        mensagem = "Redes de computadore";
        break;
    default:
        mensagem = "Código de curso inválido."
}
alert(mensagem)