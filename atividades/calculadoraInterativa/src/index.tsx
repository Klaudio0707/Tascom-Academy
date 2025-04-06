import readlineSync  from "readline-sync";
// let heloWord: string = "Helo word";

//     const  imprimir = ():void => {
// console.log("Primeiro", heloWord);

//     }

// imprimir();

let resultado: number = 0;
let condicao: string | boolean = readlineSync.keyInYN("Vamos Calcular? \ndigite Y para sim e N para nao ")

while (condicao) {
let valor1: number = readlineSync.questionFloat("Informe o primeiro valor: ");
let valor2: number = readlineSync.questionFloat("Informe o segundo valor: ");
let operador: string= readlineSync.question("Informe o operador: * / + -");

const calculadora = (valor1: number, valor2: number, operador: string) => {
    switch (operador) {
        case "*":
            resultado = valor1 * valor2;
            console.log("Resultado da Multiplicação: ", resultado);
            break;
                case "+":
                    resultado = valor1 + valor2;
                    console.log("Resultado da Multiplicação: ", resultado);
                    break;
                    case "/":
                        resultado = valor1 / valor2;
                        console.log("Resultado da Divisão: ", resultado);
                        break;
                        case "-":
                            resultado = valor1 - valor2;
                            console.log("Resultado da Subtração: ", resultado)
                            break;
                            default:
                                break;
                            }
                            
                            
                        }
                        calculadora(valor1,valor2,operador);
                        condicao = readlineSync.keyInYN("Deseja calcular um novo valor? ")
                    }