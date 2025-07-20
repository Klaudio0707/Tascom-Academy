import * as readline from 'readline-sync';

//interface para tipagem dos dois arrays de objetos
interface Candidato {
    nome: String,
    cpf: number,
    chapa: String,
    numero: Number,
    votos: number
    candidatura: String
}
interface Eleitor {
    nome: string,
    cpf: number,
    apto: boolean,
    dataVoto: Date | null,
    voto?: number,
}
//enums
enum Cargos {
    Prefeitura = 1,
    Vereador = 2,
}




//Array de objetos
let Candidatos: Candidato[] = [
    { nome: "moaci", cpf: 103040, chapa: "trabalhadores", numero: 10, votos: 0, candidatura: "Prefeitura" }
]

let Eleitores: Eleitor[] = [
    { nome: "Pablo", cpf: 103040, apto: true, dataVoto: null }
]

//variaveis de escopo globais
let status: boolean | string = false;


// verifica se o candidato ou o eleitor existe pelo cpf
const candidatoExiste = (cpf: number): boolean => {
    const filtrados = Candidatos.filter(candidato => candidato.cpf === cpf);
    return filtrados[0] !== undefined;
}

const eleitorExiste = (cpf: number): boolean => {
    const filtrados = Eleitores.filter(eleitor => eleitor.cpf === cpf);
    return filtrados[0] !== undefined;
}

// funçõa reutilizavel para cadastrar o Candidato
const inputsCandidato = (): Candidato => {
    const nome: string = readline.question("Digite o nome do candidato: ");
    const cpf: number = readline.questionInt("Informe o seu CPF: ");
    const chapa: string = readline.question("Digite o nome do partido do candidato: ");
    const numero: number = readline.questionInt("Digite o numero dele: ");
    const votos: number = 0;
    let tipoCandidato: number;
    let candidatura: string;
    // do while forçando o usuario em escolher 1 ou dois, caso seja positiva a resposta, o loop acaba e prossegue com o cadastro
    do {
        tipoCandidato = readline.questionInt("Tipo 1 para Prefeito e 2 para Vereador: ");
        if (tipoCandidato !== 1 && tipoCandidato !== 2) {
            console.log("Opcoes invalida. Digite  1 ou 2.")

        }
    } while (tipoCandidato !== 1 && tipoCandidato !== 2)

    candidatura = Cargos[tipoCandidato]
    return { nome, cpf, chapa, numero, candidatura, votos };
};

// função para cadastrar eleitor.
const inputsEleitor = (): Eleitor => {
    const nome: string = readline.question("Digite o nome do eleitor: ");
    const cpf: number = readline.questionInt("Informe o seu CPF: ");
    const apto: boolean = readline.keyInYN("Eleitor Apto a votar? ") as boolean; // forcei boolean
    const dataVoto: Date | null = null; // Inicialmente null, mas depois recebe Date
    return { nome, cpf, apto, dataVoto };
};

// função para realizar voto ao candidato
const realizarVoto = (): void => {
    const cpfEleitor: number = readline.questionFloat("Informe seu CPF para votar: ");
    const eleitor = Eleitores.find(eleitores => eleitores.cpf === cpfEleitor);

    if (!eleitor) {
        console.log("Eleitor Nao encontrado")
        return;
    }
    if (!eleitor.apto) {
        console.log("Este eleitor nao esta apto a votar");
        return;
    }
    if (eleitor.dataVoto) {
        console.log("Você ja votou.");
        return;
    }
    console.log("\nCandidatos: ")
    console.table(Candidatos);
    const numeroVoto: number = readline.questionInt("Digite o numero do candidato em quem deseja Votar:\n ")
    const candidatoVotado = Candidatos.find(candidatos => candidatos.numero === numeroVoto);
    if (!candidatoVotado) {
        console.log("Candidato nao encontrado com o numero inserido");
    } else {
        eleitor.dataVoto = new Date();
        eleitor.voto = numeroVoto;
        candidatoVotado.votos += 1;

        console.log(`Voto realizado com sucesso em ${candidatoVotado.nome} - ${candidatoVotado.numero}`)
    }
};

const tratarDados = (): void => {
    const tipoExclusao: number = readline.questionInt("Excluir Candidato (1) ou Eleitor (2)? ");
    if (tipoExclusao === 1) {
        console.table(Candidatos);
        const cpfExcluir: number = readline.questionInt("Informe o CPF do candidato a ser excluido: ");
        const index = Candidatos.findIndex(c => c.cpf === cpfExcluir);
        if (index !== -1) {
            Candidatos.splice(index, 1);
            console.log("Candidato excluido com sucesso!");
            console.table(Candidatos);
        } else {
            console.log("Candidato nao encontrado.");
        }
    } else if (tipoExclusao === 2) {
        console.table(Eleitores);
        const cpfExcluir: number = readline.questionInt("Informe o CPF do eleitor a ser excluido: ");
        const index = Eleitores.findIndex(e => e.cpf === cpfExcluir);
        if (index !== -1) {
            const eleitor = Eleitores[index];
            if (eleitor.voto) {
                const candidato = Candidatos.find(candidatos => candidatos.numero === eleitor.voto);
                if (candidato) {
                    candidato.votos -= 1; // Subtrai o voto do candidato
                }
            }
            Eleitores.splice(index, 1);
            console.log("Eleitor excluido com sucesso!");
            console.table(Eleitores);
            console.table(Candidatos);
        } else {
            console.log("Eleitor nao encontrado.");
        }
    } else {
        console.log("Opcao invalida.");
    }
};
const atualizarDados = (): void => {
    const tipoAtualizacao: number = readline.questionInt("Atualizar Candidato (1) ou Eleitor (2)? ");
    if (tipoAtualizacao === 1) {
        console.table(Candidatos);
        const cpfCandidato: number = readline.questionInt("Informe o CPF do candidato a ser atualizado: ");
        const candidato = Candidatos.find(candidatos => candidatos.cpf === cpfCandidato);
        if (candidato) {
            let validacaoCPF: number = readline.questionInt(`CPF atual: ${candidato.cpf} - Informe o novo CPF:`) || candidato.cpf;
            if (candidatoExiste(validacaoCPF)) {
                console.log("CPF ja Existente no banco de dados");
                return;
            }
            candidato.cpf = validacaoCPF;
            candidato.nome = readline.question(`Nome atual: ${candidato.nome}. Novo nome: `) || candidato.nome;
            candidato.chapa = readline.question(`Chapa atual: ${candidato.chapa}. Nova chapa: `) || candidato.chapa;
            candidato.numero = readline.questionInt(`Numero atual: ${candidato.numero}. Novo numero: `) || candidato.numero;
            console.log("Candidato atualizado com sucesso!");
            console.table(Candidatos);
        } else {
            console.log("Candidato nao encontrado.");
        }
    } else if (tipoAtualizacao === 2) {
        console.table(Eleitores);
        const cpfEleitor: number = readline.questionInt("Informe o CPF do eleitor a ser atualizado: ");
        const eleitor = Eleitores.find(eleitores => eleitores.cpf === cpfEleitor);
        if (eleitor) {
            let validacaoCPF: number = readline.questionInt("CPF atual:" + eleitor.cpf + "- Informe o novo CPF: ") || eleitor.cpf;
            if (eleitorExiste(validacaoCPF)) {
                console.log("CPF ja Existente no banco de dados");
                return;
            }
            eleitor.cpf = validacaoCPF;
            eleitor.nome = readline.question("Nome atual " + eleitor.nome + "Novo nome: ") || eleitor.nome;
            eleitor.apto = readline.keyInYN(`Eleitor apto a votar? (Atual: ${eleitor.apto ? "Sim" : "Nao"})`) as boolean || eleitor.apto;
            console.log("Eleitor atualizado com sucesso!");
            console.table(Eleitores);
        } else {
            console.log("Eleitor não encontrado.");
        }
    } else {
        console.log("Opcao invalida.");
    }
};
status = readline.keyInYN("Deseja iniciar utilizar o sistema de votacao? ");
do {
    console.log("\nSeja bem vindo a votacao Municipal da cidade de Quixabinha ");

    if (status === true) {
        let opcoes: number;
        do {
            opcoes = readline.questionInt("1 - Cadastrar Candidado \n2 - Cadastrar Eleitor \n3 - Realizar o voto \n4 - Exclusao ou Atualizacao dos  Dados \n5 - Deseja Sair? \n6 - Resultado da Votacao \nDigite a opcao desejada: ");
            if (opcoes < 1 || opcoes > 6) {
                console.log("Opcao invalida. Escolha uma opcao de 1 a 6.");
            }
        } while (opcoes < 1 || opcoes > 6);

        console.clear();
        switch (opcoes) {
            case 1:
                console.log("Cadastro de Candidato");
                const novoCandidato = inputsCandidato();
                if (candidatoExiste(novoCandidato.cpf)) {
                    console.log("Candidato ja cadastrado. Tente novamente com outro candidato.");
                } else {
                    Candidatos.push(novoCandidato);
                    console.log("Candidato cadastrado com sucesso!");
                    console.table(Candidatos);
                }
                status = readline.keyInYN("Deseja continuar?");
                break;

            case 2:
                console.log("Cadastro de Eleitor");
                const novoEleitor = inputsEleitor();
                if (eleitorExiste(novoEleitor.cpf)) {
                    console.log("Eleitor ja cadastrado. Tente novamente com outro eleitor.");
                } else {
                    Eleitores.push(novoEleitor);
                    console.log("Eleitor Cadastrado com sucesso!");
                    console.table(Eleitores);
                }
                status = readline.keyInYN("Deseja continuar?");
                break;

            case 3:
                console.log("Efetuar Voto");
                realizarVoto();
                status = readline.keyInYN("Deseja continuar?");
                break;

            case 4:
                console.log("Exclusao ou Atualizacao de Dados");
                let opcoes: number;
                do {
                    opcoes = readline.questionInt("1 - Excluir Dados\n2 - Atualizar Dados\nEscolha uma opcao: ");
                } while (opcoes < 1 || opcoes > 2);

                if (opcoes === 1) {
                    tratarDados();
                } else {
                    atualizarDados();
                }
                status = readline.keyInYN("Deseja continuar?");
                break;
            case 5:
                console.clear();
                status = false;
                break;
            case 6:
                console.log("Resultado da Votacao");
                console.table(Candidatos.map(candidato => ({ Nome: candidato.nome, Votos: candidato.votos })));
                status = readline.keyInYN("Deseja Continuar? ")
            default:
                console.log("Opcao invalida. Tente novamente.");
                break;
        }
    }
} while (status);

console.log("Obrigado e volte sempre");

