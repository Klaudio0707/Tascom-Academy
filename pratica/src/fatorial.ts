import readlineSync  from "readline-sync";

let status: boolean |string = readlineSync.keyInYN("Deseja descobrir o numero fatorial ?")

while(status){
  status = readlineSync.keyInYN("Deseja continuar? ");  
let numero: number | string = readlineSync.questionFloat("Informe um numero: ")
let contador: number = 1;
for(let i: number =  numero; i = 1; i--){
    contador = contador +1;
    console.log("Resposta", i, "contador", contador );

}



}