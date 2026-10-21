let contadorTemLevada = 0;
const oito = 8;

for(i = 1; i <= oito ; i++){
    let temperatura = +prompt("qual a temperatura");

    if(temperatura > 5 ){
        contadorTemLevada ++
    }

}
if(contadorTemLevada <= 0){
    alert("Nenhuma temperatura utrapasou 5 Graus");
}else{
    alert("foram registradas esse total de temperaturas elevadas: " + contadorTemLevada);
}
