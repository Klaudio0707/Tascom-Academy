//imports
import * as readline from 'readline-sync';
interface Candidato {
    nome: string,
    rg: number,
    chapa: string,
    numero: number,
    tipo: string
}
interface Eleitor {
    nome: string,
    rg: number,
    apto: boolean,
    dataVoto: Date | null,
}
//enums
enum Cargos {
    Prefeitura = 1,
    CamaraVereadores = 2,
}
let Candidados: Candidato[] = [
    { nome: "moaci", rg: 103040, chapa: "", numero: 13, tipo: "Prefeitura" }
]


let Eleitores: Eleitor[] = [
    { nome: "Pablo", rg: 103040, apto: true, dataVoto: new Date("24-10-06") }
]

//variaveis de escopo globais
let status: boolean | string = false;
let opcoes: number = 0;



do {
    console.log("Seja bem vindo a votação Municipal da cidade de Quixabinha ");

    status = readline.keyInYN("Deseja iniciar utilizar o sistema de votacao? ");

    if (status === true) {
        opcoes = readline.questionFloat("Cadastrar um Candidado = Digite 1 n\Cadastrar Eleitor = Digite 2 \nRealizar o voto = Digite 3 ");
        switch (opcoes) {
            case 1:
                console.log("Cadastro de Candidato")
                status = readline.keyInYN("Deseja continuar ?")
                break;

            case 2:
                console.log("Cadastro de Eleitor")
                break;

            case 3:
                console.log("Efetuar Voto")
                break;
            case 4:

            default:
                break;
        }
    }
    console.log(status);

    //     const opcao: number = readline.questionInt("Digite um numero de 1 a 2 ")

    //     const checkStatus = (status:number) =>{
    //         switch(status) {
    //     case Cargos.Prefeitura:
    //         console.log("Prefeito")
    //     break;
    //     case Cargos.CamaraVereadores:
    //         console.log("Vereador");
    //         break;
    // }
    // }
    // checkStatus(opcao);
} while (status) {
    console.log("Obrigado e volte sempre");
}