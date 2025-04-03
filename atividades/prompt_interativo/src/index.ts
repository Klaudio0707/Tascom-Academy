
import readlineSync from "readline-sync";

// const nome: string | number = readlineSync.question("Qual é o seu nome? ");
// console.log("Olá, ", nome);

// let entradaPrimValor: number = readlineSync.questionFloat(`digite um valor `);
// let entradaSegValor: number = readlineSync.questionFloat(`digite um segundo valor `);

// console.log(entradaPrimValor*entradaSegValor);




let continuar: string | boolean = true;
while (continuar) {
    let confirmar: string | boolean = readlineSync.keyInYN("Deseja realizar um calculo ?")

    if (!confirmar) {
        console.log("Fim! Obrigado por usar a Calculadora ");
        break;
    }

    let primeiroValor: number = readlineSync.questionFloat("Digite um valor ")
    let segundoValor: number = readlineSync.questionFloat("Digite o segundo valor ")
    let operador: number = readlineSync.questionFloat("Digite: \n 1 para * multiplicar\n 2 para + somar\n 3 para / dividir\n 4 para - subtrair \n ")
    let resultado: number = 0;
    switch (operador) {
        case 1:
            resultado = primeiroValor * segundoValor;
            break;
        case 2:
            resultado = primeiroValor + segundoValor;
            break;
        case 3:
            if (segundoValor !== 0) {
                resultado = primeiroValor / segundoValor;
            } else {
                console.log("Erro: divisao por zero")
                continue;
            }
            break;
        case 4:
            resultado = primeiroValor - segundoValor;
            break;
        default:
            console.log("Operador inválido!");
            continue;

    }
    console.log(`Resultado da operação: ${resultado.toFixed(3)}`);
    continuar = readlineSync.keyInYN("Deseja fazer outro calculo? ");
    console.log(confirmar);
    console.log(typeof confirmar);
}


console.log("Obrigado por usar a calculadora!");
