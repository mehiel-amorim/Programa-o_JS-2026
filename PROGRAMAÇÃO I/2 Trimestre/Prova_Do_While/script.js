let somadorMilhas = 0;
let contador = 0;
let contadorBronze = 0;
let adicionarMilha;
let nome;
let valorGasto;
let milhas;


do{
    nome = prompt("Qual o seu nome:");
    do{
        valorGasto =  +prompt("Quantos reais você gastou:");
        if(valorGasto < 0 || valorGasto > 40000){
            alert("Valor de gastos incorreto!")
        }
    }while (valorGasto < 0 || valorGasto > 40000);
        
        if(valorGasto <= 3000){
            milhas = valorGasto * 1.5;
            contadorBronze++
        } else if(valorGasto <= 8000){
            milhas = (valorGasto * 2.2) + 500;
        } else {
            milhas = (valorGasto * 3.5) + 2000;
        }
        alert(`${nome}\n As milhas ficaram de: ${milhas}Milhas  `)
        
        contador++;
        somadorMilhas += milhas;

        do{
            adicionarMilha = prompt("Deseja continuar? Digite s ou n").toLowerCase()
            if (adicionarMilha != "s" && adicionarMilha != "n"){
                alert("Somente s ou n ");
            }
        }while(adicionarMilha != "s" && adicionarMilha != "n");
    }while(adicionarMilha == "s");

let media = (somadorMilhas / contador);
let percentual = (contadorBronze/contador) * 100;

alert(`O total de milhas foi de ${somadorMilhas.toFixed(2)}\n a média foi de ${media.toFixed(2)}\n o percentual do bronze foi de ${percentual.toFixed(2)}%`);