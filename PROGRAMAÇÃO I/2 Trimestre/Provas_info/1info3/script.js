let nome;
let desperdicio;
let fixo = 1200;
let desconto;
let continuar;
let contador = 0;
let desperdicio10KG = 0;
let somaDesperdicio = 0;

do {

    nome = prompt("Qual o seu nome:")
    do{
        // Q:1 valor excedido
        desperdicio = +prompt("Qual foi seu desperdicio:")
        if (desperdicio <0 || desperdicio > 60) {
            alert("Quantidade inválido!")
        }
    }while (desperdicio <0 || desperdicio > 60) ;
        
        // Q:2 if/else if/ else
        if(desperdicio <= 10){
            desconto  = fixo - (desperdicio * 15);
            desperdicio10KG++
        } else if(desperdicio <= 25) {
            desconto = fixo - (desperdicio * 25)
        } else {
            desconto = fixo - (desperdicio * 40) - 200;
        }
        alert(`Operador: ${nome} \n o valor final ficou num total R$${desconto.toFixed(2)} `);
        // Q:3 contador e somador 
        contador++
        somaDesperdicio += desconto

        do{
            // Q:4 repetição de continuar
            continuar = prompt("Quer adicionar novo valor? digite s ou n").toLowerCase()
            if(continuar != "s" && continuar != "n"){
                alert("Apenas s ou n")
            }
        }while(continuar != "s" && continuar != "n");
    } while(continuar == "s");

// Q:5 media e percentual
let media = somaDesperdicio / contador;
let percentual = (desperdicio10KG / contador) * 100;

alert(`A média é de R$${media.toFixed(2)} \n O percentual dos 10 kg é de ${percentual.toFixed(2)}%`);