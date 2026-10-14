let opcao = parseInt(prompt("opção:"))

let figuta;
let base;
let sla;

switch (opcao){
    case 1:
        figuta = +prompt("Qual o valor do lado do seu quadrado:")
        sla = figuta * figuta;
        alert(`Quadrado a Area é de ${sla.toFixed(0)}`)
        break;
    case 2:
        figuta = +prompt("altura do seu retangulo");
        base = +prompt("Qual a base do seu retangulo");
        sla = base * figuta
        alert("A area do seu retangulo é de " + sla);
        break;
    case 3:
        figuta = +prompt("Qual o raio do seu circulo:")
        sla = (figuta*figuta)*Math.PI;
        alert("a area do seu circulo é de "+sla)
    break;
    default:
        alert("Codigo inválido")
}   
