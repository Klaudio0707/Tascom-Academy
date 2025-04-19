import readlineSync  from "readline-sync";

let status: boolean |string = readlineSync.keyInYN("Deseja descobrir o numero fatorial ?")

while(status){
  let numero: number | string = readlineSync.questionFloat("Informe um numero: ")
  let calculo: number= 1;

  for(let i: number =  numero; i > 1; i--){
    calculo   *= i;
    console.log(i, "x", calculo);
    
  }
console.log(calculo)  
  status = readlineSync.keyInYN("Deseja continuar? ");  
  
   
}