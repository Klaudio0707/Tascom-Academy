//imports
import * as readline from 'readline-sync';
//interface para tipagem dos dois arrays de objetos
interface Candidato {
    nome: string,
    cpf: number,
    chapa: string,
    numero: number,
    candidatura: string
}
interface Eleitor {
    nome: string,
    cpf: number,
    apto: boolean,
    dataVoto: Date | null,
}
//enums
enum Cargos {
    Prefeitura = 1,
    Vereador = 2,
}
let Candidatos: Candidato[] = [
    { nome: "moaci", cpf: 103040, chapa: "trabalhadores", numero: 10, candidatura: "Prefeitura" }
]


let Eleitores: Eleitor[] = [
    { nome: "Pablo", cpf: 103040, apto: true, dataVoto: new Date("24-10-06") }
]

//variaveis de escopo globais
let status: boolean | string = false;
let opcoes: number = 0;

let nome: string = "";
let cpf: number = 0;
let chapa: string = "";
let numero: number = 0;
let tipoCandidato: number = 0;
let apto: boolean = false;

const inputsCandidato = (): Candidato => {
    const nome = readline.question("Digite o nome do candidato: ");
    const cpf = readline.questionInt("Informe o CPF: ");

    const jaExiste = Candidatos.some(c => c.cpf === cpf);
    if (jaExiste) {
        console.log("❌ Candidato já cadastrado!");
        return null as any; // você pode tratar isso melhor depois
    }

    const chapa = readline.question("Digite o nome da chapa do candidato: ");
    const numero = readline.questionInt("Digite o número: ");
    const tipoCandidato = readline.questionInt("Tipo 1 para Prefeito(a) e 2 para Vereador(a): ");

    const candidatura = Cargos[tipoCandidato];

    return { nome, cpf, chapa, numero, candidatura };
};

const candidatoExiste = (cpf: number): boolean => {
    return Candidatos.filter(candidato => candidato.cpf === cpf)[0] !== undefined;
};


// const filterCandidatos = (inputCpf: number,) => {
//     const filtro = Candidatos.filter(candidato => {
//         const aptoCandidato: boolean = candidato.cpf === inputCpf
//         return aptoCandidato;

//     });
//     console.log(filtro, "Candidato já cadastrado");
//     return filtro;
// }

const inputsEleitor = (): void => {
    nome = readline.question("Digite o nome do eleitor ");
    cpf = readline.questionInt("Informe o seu RG ");

    console.table(Candidatos);
    numero = readline.questionInt("Digite o numero do candidato para realizar seu voto");
}



// const cadastrarCandidato = (nomeCandidato: string, rgCandidato: number, chapaCandidato: string, numeroCandidato: number, tipoCandidato: string) => {
//     const novoCandidato: Candidato = ({ nome: nomeCandidato, cpf: rgCandidato, chapa: chapaCandidato, numero: numeroCandidato, candidatura: tipoCandidato })
//     Candidatos.push(novoCandidato);
//     return novoCandidato;
// }
status = readline.keyInYN("Deseja iniciar utilizar o sistema de votacao? ");
do {
    console.log("Seja bem vindo a votação Municipal da cidade de Quixabinha ");


    if (status === true) {
        opcoes = readline.questionInt("Cadastrar Candidado = Digite 1 \nCadastrar Eleitor = Digite 2 \nRealizar o voto = Digite 3\n ");
        switch (opcoes) {
            case 1:
                console.clear();
    console.log("Cadastro de Candidato");
    
    const novoCandidato = inputsCandidato();
    
    if (novoCandidato) {
        Candidatos.push(novoCandidato);
        console.table(Candidatos);
    }

    status = readline.keyInYN("Deseja continuar?");
    break;

            case 2:
                console.clear();
                inputsEleitor();
                // cadastrarCandidato(nome, cpf, chapa, numero, Cargos[tipoCandidato]);
                // console.log("Cadastro de Eleitor")
                break;

            case 3:
                console.clear();
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

} while (status)
console.log("Obrigado e volte sempre");
