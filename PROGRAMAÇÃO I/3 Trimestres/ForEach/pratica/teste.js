// 1
let nomes = ["ana", "maria" , "Braga"];

nomes.forEach((b) => {
    console.log(b);
    
});

// 2
let numero = [3,6,9,12];
let multiplicacao = 0;

numero.forEach((mul) => {
    multiplicacao = mul * 2;
    console.log(multiplicacao);
});

// 3
let cidade = ["Piçarras", "Itajai", "Araquari", "Floripa", "Penha"]

cidade.forEach((procura) => {
    console.log("Quero conhecer a cidade: "+ procura);
});

// 4
let number = [4, 7, 2, 9];
let soma = 0;

number.forEach((la) =>{
    soma += la;
    
});

console.log(soma);

// 5 

let valores = [3, 10, 6, 12, 5]

valores.forEach((maior) => {
    if(maior > 6){
        console.log(maior)
    }
});

// 6 

let notas = [7, 6, 10, 9, 8]
let somar =0;

notas.forEach((para) => {
    somar += para
});
let media = somar / notas.length;
console.log(media);
