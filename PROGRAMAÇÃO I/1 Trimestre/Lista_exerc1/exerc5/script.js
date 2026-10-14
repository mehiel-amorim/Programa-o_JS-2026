let Predeiro = 20.00;
let pintor = 16.00;
let horasP = parseFloat(prompt("Total de horas do pedreiro:"));
let horasPintor = parseFloat(prompt("Total de horas Pintor:"));
let totalPeDreiro = horasP*Predeiro;
let totalPintor = horasPintor*pintor
let totalTodos = totalPeDreiro+totalPintor;

alert(`custo do pedreiro ${totalPeDreiro}
     custo do pinto ${totalPintor}
      custo dos dois ${totalTodos}`)