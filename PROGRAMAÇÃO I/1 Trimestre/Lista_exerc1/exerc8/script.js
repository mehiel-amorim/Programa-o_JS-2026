let preço = parseFloat(prompt("Qua foi o valor da sua conta :"));
let desconto = parseFloat(prompt("qual foi o valor com desconto :"));
let valorDesconto = (preço-desconto) / preço * 100;
alert(`Seu desconto foi de : ${valorDesconto .toFixed(2)}%`)
