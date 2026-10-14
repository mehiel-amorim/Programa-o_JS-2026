let nome;
let consumoAgua;
let valor;
let valorExdente;
let continuar;
let contador = 0;
let faixa3 = 0;
let somaValor = 0;

do {

    nome = prompt("Qual o seu nome:")
    do{
        // Q:1 valor excedido
        consumoAgua = +prompt("Qual o seu consumo de água:")
        if (consumoAgua < 0 || consumoAgua > 200) {
            alert("Consumo inválido!")
        }
    }while (consumoAgua < 0 || consumoAgua > 200) ;
        
        // Q:2 if/else if/ else
        if(consumoAgua <= 20){
            valor  = consumoAgua * 5;
        } else if(consumoAgua <= 50){
            valorExdente = consumoAgua - 20;
            valor = (valorExdente * 9) + (20 * 5);
        } else {
            valorExdente = consumoAgua - 50;
            valor = 370 + (valorExdente * 15);
            faixa3++
        }
        alert(`Servidor: ${nome} \n o valor final ficou num total R$${valor.toFixed(2)} `);
        // Q:3 contador e somador 
        contador++
        somaValor += valor

        do{
            // Q:4 repetição de continuar
            continuar = prompt("Quer adicionar novo valor? digite s ou n").toLowerCase()
            if(continuar != "s" && continuar != "n"){
                alert("Apenas s ou n")
            }
        }while(continuar != "s" && continuar != "n");
    } while(continuar == "s");

// Q:5 media e percentual
let media = somaValor / contador;
let percentual = (faixa3 / contador) * 100;

alert(`A média é de R$${media.toFixed(2)} \n O percentual da faixa 3 é de ${percentual.toFixed(2)}%`);