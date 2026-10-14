let sigla = prompt("Qual sua região:").toUpperCase()

let mensagem;

switch(sigla){
    case "S":
        mensagem = "Sul \n frete de R$20.00";
        break;
    case "N":
        mensagem = "Norte \n frete de R$45.00";
        break;
    case "SE":
        mensagem = "Sudeste \n frete de R$25.00";
        break;
    case "CO":
        mensagem = "Centro-Oeste \n frete de R$35.00";
        break;
    case "NE":
        mensagem = "Nordeste \n frete de R$40.00";
        break;
    default:
        mensagem = "Insira um valor valido"
}

alert(mensagem)