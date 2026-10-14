let salarioNovo = +prompt("Qual é seu novo salário:");

let percenstual;
let novoSalario;

if (salarioNovo < 1500 ) {
    percenstual = 1.15;
} else if (1500 <=   salarioNovo <= 3000) {
    percenstual = 1.10;
} else {
    percenstual =  1.05;
}

novoSalario = salarioNovo * percenstual;
percenstual *= 100

alert(`Salário atual: R$${salarioNovo.toFixed(2)} \n
    o percetual é de ${ percenstual.toFixed(2)}% \n
    O salário com o percentual é de: R$${novoSalario.toFixed(2)}`);