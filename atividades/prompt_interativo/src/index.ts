
import readlineSync, { question } from "readline-sync";


// const nome: string | number = readlineSync.question("Qual é o seu nome? ");
// console.log("Olá, ", nome);

// let entradaPrimValor: number = readlineSync.questionFloat(`digite um valor `);
// let entradaSegValor: number = readlineSync.questionFloat(`digite um segundo valor `);

// console.log(entradaPrimValor*entradaSegValor);



/*Atividade Feita com Uso do While e switch case */
// let continuar: string | boolean = true;
// while (continuar) {
//     let confirmar: string | boolean = readlineSync.keyInYN("Deseja realizar um calculo ?")

//     if (!confirmar) {
//         console.log("Fim! Obrigado por usar a Calculadora ");
//         break;
//     }

//     let primeiroValor: number = readlineSync.questionFloat("Digite um valor ")
//     let segundoValor: number = readlineSync.questionFloat("Digite o segundo valor ")
//     let operador: number = readlineSync.questionFloat("Digite: \n 1 para * multiplicar\n 2 para + somar\n 3 para / dividir\n 4 para - subtrair \n ")
//     let resultado: number = 0;
//     switch (operador) {
//         case 1:
//             resultado = primeiroValor * segundoValor;
//             break;
//         case 2:
//             resultado = primeiroValor + segundoValor;
//             break;
//         case 3:
//             if (segundoValor !== 0) {
//                 resultado = primeiroValor / segundoValor;
//             } else {
//                 console.log("Erro: divisao por zero")
//                 continue;
//             }
//             break;
//         case 4:
//             resultado = primeiroValor - segundoValor;
//             break;
//         default:
//             console.log("Operador inválido!");
//             continue;

//     }
//     console.log(`Resultado da operação: ${resultado.toFixed(3)}`);
//     continuar = readlineSync.keyInYN("Deseja fazer outro calculo? ");
//     console.log(confirmar);
//     console.log(typeof confirmar);
// }

// console.log("Obrigado por usar a calculadora!");

// let confirmar: string | boolean = readlineSync.keyInYN("Deseja realizar um calculo ?")





// if (confirmar == true) {
//     function calcular(): void {
//         console.clear();
//         let resultado: number = 0;


//         let primeiroValor: number = readlineSync.questionFloat("digite o primeiro valor");
//         let segundoValor: number = readlineSync.questionFloat("digite o segundo valor");
//         let operador: string = readlineSync.question("escolha um  operador: * / + - ")
//         switch (operador) {
//             case "*":
//                 resultado = primeiroValor * segundoValor;
//                 break;
//             case "/":
//                 if (segundoValor === 0) {
//                     console.log("Erro: divisão por zero não é permitida.");
//                     resultado = 0;
//                     calcular();

//                 }
//                 resultado = primeiroValor / segundoValor;
//                 break;
//             case "+":
//                 resultado = primeiroValor + segundoValor;
//                 break;
//             case "-":
//                 resultado = primeiroValor - segundoValor;
//                 break;
//             default:
//                 console.log("Operador inválido. Tente novamente.");

//                 resultado = 0;
//                 calcular();
//         }

//         console.log(`${resultado.toFixed(3)}`);
//         console.log("operador utilizado", operador)





//     }
//     calcular()


// }



// atividade da aula

// let resultado: number = 0;;
// let numb1: number = 30;
// let numb2: number = 20;


// const  calcular = () =>{
//     let operador: string = readlineSync.question("informe o operador: \n * \n /  \n + \n - \n  ");
// switch (operador){
//     case "*":
//                  resultado = numb1 * numb2;
//                  break;
//     case "/":
//             resultado = numb1/numb2;

//     case "+":
//         resultado = numb1 + numb2;
//     case "-":
//         resultado = numb1 - numb2;    
// }
// console.log(resultado);

// }
// calcular();

// let status: string |boolean = true;
// let resultado: number = 0;
// status = readlineSync.keyInYN("Deseja iniciar a calculadora?")

// while (status == true) {
//  let func = (value1: number, value2:number )  =>{
//    switch (operador) {
//     case "*":
//         resultado = value1 * value2 

//         break;

//     default:
//         break;
//    }
//  }

//     readlineSync.question("Seja bem vindo a calculadora.");
//     let value1: number =  readlineSync.questionFloat("Digite um numero");
//     let value2: number =  readlineSync.questionFloat("Digite um segundo numero");
//     let operador : string = readlineSync.question("digite um operador \n + \n - \n * \n / \n")
//     break

// }
// console.log(status)


let status: string | boolean = readlineSync.keyInYN("Deseja converter sua temperatura para celsius ou fahrenheit? \n")


while (status == true) {
    let resultado: number = 0;
    let tipo: string = readlineSync.question("Quer a temperatura convertida para \n Celsius ou Fahrenheit ? \n digite 1 para celsius \n ou 2 para fahrenheit \n");
    let temperatura: number = readlineSync.questionFloat("me diga sua temperatura atual ");

    const fahrenheit = (): void => {
        resultado = (temperatura * 1.8) + 32;
        console.log("temperatura em Fahrenheit", (resultado.toFixed(2)) + "fº");
    }
    const celsius = (form: number): void => {
        let fo = (temperatura - 32) / 9;
        resultado = fo * form;
        console.log("temperatura em Celsius", (resultado.toFixed(2)) + "cº");
    }
    switch (tipo) {
        case "1":
            celsius(5);
            status = readlineSync.keyInYN("Deseja voltar? \n")
            break;
        case "2":
            fahrenheit();
            break;
        default:
    }

}
console.log("Muito Obrigado");

