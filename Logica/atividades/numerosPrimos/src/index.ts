
// console.log("Hello word");
import readlineSync  from "readline-sync";



let status: string | boolean = readlineSync.question("Deseja saber se um numero é primo? \nDigite Y para sim e N para encerrar ")
let incremento: number = 0;

while (status) {
    let numero: number = readlineSync.questionFloat("Informe um numero para consulta ");
    
    for (let i:number =1; i  <= numero; i++) {
        

if (incremento % i ===0) {
    console.log("é primo", i)
    incremento++;
}
console.log(incremento);
if (incremento == 2) {
    console.log("O numero: ",numero, "é primo")
    
}
}

}

