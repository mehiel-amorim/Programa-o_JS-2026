let gado = prompt("Quantas cabeça de gado vc :");
let herdeiro = prompt("Quantos herdeiros:");

let gadorestantes = gado - (gado * 0.15);

let porherdeiro = Math.floor(gadorestantes / herdeiro);

let sobra = gadorestantes % herdeiro;
alert(`gado apos doaçao ${gadorestantes} cada herdeiro recebe ${porherdeiro} cabeça de gada sobraram ${sobra}`)
