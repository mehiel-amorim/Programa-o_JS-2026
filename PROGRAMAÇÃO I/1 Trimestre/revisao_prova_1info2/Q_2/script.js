let paginas = parseInt(prompt("Números de páginas:"));
let copias = parseInt(prompt("Quantas cópias:"));
let custo = parseFloat(prompt("Custo por pagina"));
let taxa = parseFloat(prompt("Quantos é o percentual de taxa:"));

let totalP = paginas*copias;
let base =custo*totalP;
let valorTaxa = base*(taxa/100)
let custoFinal = valorTaxa+base;

alert(`Total de páginas é ${totalP.toFixed(2)}\n custo base é R$ ${base.toFixed(2)} \n valor da taxa é R$${valorTaxa.toFixed(2)}  \n custo final é R$${custoFinal.toFixed(2)} `)