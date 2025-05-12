// desafio 1 

/*
[] Adicionar Tarefa
[] Titulo, Descrição, Status, Data de criação em cada taarefa
Enum para status da tarefa

*/

import * as readline from 'readline-sync';

//coloquei importancia e status como opcional.
interface Tarefa {
    titulo: string,
    importancia?: string,
    mensagem: string,
    dataCriacao: string | null,
    Status?: String,
}
interface Usuario {
    nome: string,
    apto: boolean,
    dataCadastro: string | null,
}

enum Importancia {
    Normal = 1,
    Atençao = 2,
    Emergicial = 3,
}
enum Status {
    Pendente = 1,
    Em_Progresso = 2,
    Concluido = 3,
}

let Tarefas: Tarefa[] = [
    { titulo: "", importancia: "", mensagem: "", dataCriacao: null, Status: "" }
]
let Usuarios: Usuario[] = [
    { nome: "teste", apto: true, dataCadastro: null }
]

// let start: boolean = readline.keyInYN("Deseja iniciar o sistema de tarefas? ") as boolean
let opcao: number = 0;

const usuarioExistente = (nome: string): boolean => {
    const filtro = Usuarios.filter(usuario => usuario.nome === nome)
    return filtro[0] !== undefined

}

//função com saida da data e hora atual formatada.
const formatarData = (): string => {
    let inputData: Date = new Date();
    let dataFormatada: string = inputData.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    return dataFormatada;
}
const start = (saida?: boolean): boolean => {
    let opcaoInicial: boolean = readline.keyInYN("Deseja iniciar o sistema de tarefas? ") as boolean;
    
    return opcaoInicial;
}

const cadastrarTarefa = (titulo: string, importancia: string, mensagem: string, Status: string): void => {
    const dataCriacao = formatarData();
    Tarefas.push({ titulo, importancia, mensagem, dataCriacao, Status })
    console.log("Tarefa cadastrada com sucesso!");
}
const cadastrarUsuario = (nome: string, apto: boolean): void => {
    let dataCadastro: string = formatarData();
    Usuarios.push({ nome, apto, dataCadastro })
    console.log("Usuário cadastrado com sucesso!");
}
const inputsUsuarios = (): void => {
    let inputNome: string = readline.question("Informe seu nome ");
    let inputApto: boolean = readline.keyInYN("Usuario ativo ? ") as boolean;
    cadastrarUsuario(inputNome, inputApto);
    console.table(Usuarios);
}
const inputsTarefas = (): void => {

    let inputTitulo: string = readline.question("Informe o titulo da tarefa ");
    let importancia: number = readline.questionInt("digite 1 para normal\ndigite 2 para atencao\ndigite 3 para emergencial ");
    let inputImportancia = Importancia[importancia]
    let inputMensagem: string = readline.question("informe a descricao da tarefa ");
    opcao = readline.questionInt("Informe o 1 para tarefa pendente\n2 para em tarefa em progresso\n3 tarefa concluida\n ");
    let inputStatus = Status[opcao];

    cadastrarTarefa(inputTitulo, inputImportancia, inputMensagem, inputStatus);
    console.table(Tarefas);
}

const edicaoTarefas = () => { };
const exclusaoTarefas = () => { };
const listarTarefas = () => { };

start();

do {
    opcao = readline.questionInt("Deseja Cadastrar um usuario? Digite 1\nCadastrar uma tarefa? Digite 2\nDeseja sair? Digite 3\nDigite 4 para Exibir os usuarios ou tarefas cadastraos\n ")


    switch (opcao) {
        case 1:
            inputsUsuarios();
            start()
            break;
        case 2:
            inputsTarefas();
            start()
            break;
        case 3:
            opcao = readline.questionInt("Digite 1 para editar alguma tarefa\nDigite 2 para excluir uma tarefa\nDeseja Listar alguma tarefa? Digite 3 ");
            switch (opcao) {
                case 1:
                    edicaoTarefas();
                    console.table(Tarefas)
                    break;
                case 2:
                    console.table(Tarefas)
                    exclusaoTarefas();
                    break;
                case 3:
                    listarTarefas();
                    break;
                default:
                    console.log("Informe a opção valida desejada.\n 1 = Editar 2 = Excluir 3 = Listar")
            }
            console.table(Tarefas);
            console.log("Até mais")
            break;
        case 4:
            opcao = readline.questionInt("Deseja ver as tarefas salvas ? Digite 1\n Deseja ver os usuarios? Digite 2\n")
            if (opcao == 1) { //Exibir tarefas
                console.table(Tarefas);
                start()
                break
            } else if (opcao == 2) { //Exibir Usuarios
                console.log(Usuarios);
                start()
                break
            } else {
                console.log("Informe um numero valido de 1 até o 2")
                opcao = readline.questionInt("Deseja ver as tarefas salvas ? Digite 1\n Deseja ver os usuarios? Digite 2\n")
                break
            }
            break
        case 5:
            start(false)
            console.log("Até mais!!")
            break

        default:
            console.log("Exiba uma função ")

    }

} while (start())