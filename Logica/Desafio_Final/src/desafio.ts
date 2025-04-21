//imports
import * as readline from 'readline-sync';
//interface para tipagem dos dois arrays de objetos
interface Candidato {
    nome: string,
    rg: number,
    chapa: string,
    numero: number,
    candidatura: string
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
    Vereador = 2,
}
let Candidatos: Candidato[] = [
    { nome: "moaci", rg: 103040, chapa: "", numero: 10, candidatura: "Prefeitura" }
]


let Eleitores: Eleitor[] = [
    { nome: "Pablo", rg: 103040, apto: true, dataVoto: new Date("24-10-06") }
]

//variaveis de escopo globais
let status: boolean | string = false;
let opcoes: number = 0;

let nome: string = "";
let rg: number = 0;
let chapa: string = "";
let numero: number = 0;
let tipoCandidato: number = 0;


   const inputsConsole =(): void => {
            
            nome= readline.question("Digite o nome do candidato ");
            rg = readline.questionInt("Informe o rg ");
            chapa = readline.question("Digite o nome da chapa do candidato ");
            numero  = readline.questionInt("Digite o numero ");
            tipoCandidato = readline.questionInt("Tipo 1 para Prefeito(a) e 2 para Vereador(a) ")

    }
    const cadastrarCandidato = (nomeCandidato: string, rgCandidato: number,chapaCandidato:string, numeroCandidato: number, tipoCandidato: string) => {
        const novoCandidato: Candidato = ({ nome: nomeCandidato, rg: rgCandidato, chapa: chapaCandidato, numero: numeroCandidato, candidatura: tipoCandidato })
        Candidatos.push(novoCandidato);
        return novoCandidato;
    }
    status = readline.keyInYN("Deseja iniciar utilizar o sistema de votacao? ");
do {
    console.log("Seja bem vindo a votação Municipal da cidade de Quixabinha ");


    if (status === true) {
        opcoes = readline.questionInt("Cadastrar Candidado = Digite 1 \nCadastrar Eleitor = Digite 2 \nRealizar o voto = Digite 3\n ");
        switch (opcoes) {
            case 1:
                console.log("Cadastro de Candidato")
                inputsConsole();
                cadastrarCandidato(nome, rg, chapa, numero ,Cargos[tipoCandidato]);
                console.table(Candidatos);
                status = readline.keyInYN("Deseja continuar ?")
                break;

            case 2:
                console.log("Cadastro de Eleitor")
                break;

            case 3:
                console.log("Efetuar Voto")
                break;
            case 4:
                console.log("Encerrando o sistema...");
                status = false;
                break;
            default:
                break;
        }
    }
    console.log(status);

    //     const opcao: number = readline.questionInt("Digite um numero de 1 a 2 ")

    //     const checkStatus = (status:number) =>{
    //         switch(status) {
    //     case Cargos.Prefeitura:
    //         inputsConsole();
    //             cadastrarCandidato(nome, rg, numero);
    //     break;
    //     case Cargos.CamaraVereadores:
    //         console.log("Vereador");
    //         break;
    // }
    // }
    // checkStatus(opcao);
} while (status) 
    console.log("Obrigado e volte sempre");
