//imports
import * as readline from 'readline-sync';


enum Candidatos {
    Prefeitura = 1,
    CamaraVereadores = 2,
}
const opcao: number = readline.questionInt("Digite um numero de 1 a 2 ")

const checkStatus = (status:number) =>{
switch(status) {
    case Candidatos.Prefeitura:
        console.log("Prefeito")
    break;
    case Candidatos.CamaraVereadores:
        console.log("Vereador");
        break;
}
}
checkStatus(opcao);