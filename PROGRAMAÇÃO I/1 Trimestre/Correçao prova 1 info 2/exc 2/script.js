let diciplinas = parseFloat(prompt("Quantas diciplinas você tem :"));
let estudos = parseFloat(prompt("Quantas horas você por diciplina :"));
let dias = parseFloat(prompt("Quantos dias você estuda ;"));

let totalHoras = disciplinas * estudos;
let periodo = totalHoras * dias;

alert(`o seu total de horas e ${totalHoras} \n
        o total do periodo é ${periodo}`)