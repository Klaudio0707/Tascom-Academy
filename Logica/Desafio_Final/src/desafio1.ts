// desafio 1 

/*
[] Adicionar Tarefa
[] Titulo, Descrição, Status, Data de criação em cada taarefa
Enum para status da tarefa

*/

import * as readline from 'readline-sync';

//coloquei importancia e status como opcional.
interface Tarefas {
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

let Tarefas: Tarefas[] = [
    { titulo: "", importancia: "", mensagem: "", dataCriacao: null, Status: "" }
]
let Usuarios: Usuario[] = [
    { nome: "teste", apto: true, dataCadastro: null }
]

let start: boolean = readline.keyInYN("Deseja iniciar o sistema de tarefas? ") as boolean
let exibicao: number =  0;

const usuarioExistente = (nome: string): boolean => {
    const filtro = Usuarios.filter(usuario => usuario.nome === nome)
    return filtro[0] !== undefined

}
const formatarData = (): string => {
    let inputData: Date = new Date();
    let dataFormatada = inputData.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    return dataFormatada;
}
const cadastrarTarefa = (titulo: string, importancia: string, mensagem: string, dataCriacao: string | null, Status: string) => {
    return Tarefas.push({ titulo, importancia, mensagem, dataCriacao, Status })
}
const cadastrarUsuario = (nome: string, apto: boolean, dataCadastro: string | null) => {
    return Usuarios.push({ nome, apto, dataCadastro })
}

do {

    let opcao: number | number = readline.questionInt("Deseja Cadastrar um usuario? Digite 1\nCadastrar uma tarefa? Digite 2\nDeseja sair? Digite 3\nDigite 4 para Exibir os usuarios ou tarefas cadastraos\n ")

    
    const inputsUsuarios = (): void => {

        let inputNome: string = readline.question("Informe seu nome ");
        let inputApto: boolean = readline.keyInYN("Usuario ativo ? ") as boolean;
        let dataUsuario: string = formatarData();
        cadastrarUsuario(inputNome, inputApto, dataUsuario);
        console.table(Usuarios);
    }
     const  inputsTarefas = (): void => {

         let inputTitulo: string = readline.question("Informe o titulo da tarefa ");
         let importancia: number = readline.questionInt("digite 1 para normal\ndigite 2 para atencao\ndigite 3 para emergencial ");
         let inputImportancia = Importancia[importancia]
         let inputMensagem: string = readline.question("informe a descricao da tarefa ");
         let status: number = readline.questionInt("Informe o 1 para tarefa pendente\n2 para em tarefa em progresso\n3 tarefa concluida\n ");
         let inputStatus = Status[status]; 
         let data: string = formatarData();
         cadastrarTarefa(inputTitulo, inputImportancia, inputMensagem, data, inputStatus);
         console.table(Tarefas);
        }
 
         switch (opcao) {
             case 1:
            inputsUsuarios();
            start = readline.keyInYN("Deseja iniciar o sistema de tarefas? ")as boolean
            break;
        case 2:
            inputsTarefas();
             start = readline.keyInYN("Deseja iniciar o sistema de tarefas? ")as boolean
            break;
        case 3:
            start = false
            console.table(Tarefas);
            console.log("Até mais")
         case 4:
            exibicao = readline.questionInt("Deseja ver as tarefas salvas ? Digite 1\n Deseja ver os usuarios? Digite 2\n")
            if(exibicao == 1){ //Exibir tarefas
                console.table(Tarefas);
                start = readline.keyInYN("Deseja iniciar o sistema de tarefas? ")as boolean
            }else if(exibicao == 2) { //Exibir Usuarios
                console.log(Usuarios);
                start = readline.keyInYN("Deseja iniciar o sistema de tarefas? ")as boolean
            }else{
                console.log("Informe um numero valido de 1 até o 2")
                exibicao = readline.questionInt("Deseja ver as tarefas salvas ? Digite 1\n Deseja ver os usuarios? Digite 2\n")
            }
            break
        default:
            console.log("Exiba uma função ")
            break;
    }

} while (start)