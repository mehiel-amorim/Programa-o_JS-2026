let codigo = +prompt("Qual sua região (1, a 5):");
let mensagem;

switch (codigo){
    case 1:
        mensagem = "Norte";
    break;
    case 2:
        mensagem = "Nordeste";
        break;
    case 3:
        mensagem = "Centro-oeste";
        break;
    case 4:
        mensagem = "Sudeste";
        break;
    case 5:
        mensagem = "Sul";
        break;
    default:
        mensagem = "Insira um código valido";
}

alert(mensagem)