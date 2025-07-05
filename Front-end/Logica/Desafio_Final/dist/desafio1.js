// desafio 1 
/*
[] Adicionar Tarefa
[] Titulo, Descrição, Status, Data de criação em cada taarefa
Enum para status da tarefa

*/
import * as readline from 'readline-sync';
var Importancia;
(function (Importancia) {
    Importancia[Importancia["Normal"] = 1] = "Normal";
    Importancia[Importancia["Aten\u00E7ao"] = 2] = "Aten\u00E7ao";
    Importancia[Importancia["Emergicial"] = 3] = "Emergicial";
})(Importancia || (Importancia = {}));
var Status;
(function (Status) {
    Status[Status["Pendente"] = 1] = "Pendente";
    Status[Status["Em_Progresso"] = 2] = "Em_Progresso";
    Status[Status["Concluido"] = 3] = "Concluido";
})(Status || (Status = {}));
let Tarefas = [
    { titulo: "", importancia: "", mensagem: "", dataCriacao: null, Status: "" }
];
let Usuarios = [
    { nome: "teste", apto: true, dataCadastro: null }
];
// let start: boolean = readline.keyInYN("Deseja iniciar o sistema de tarefas? ") as boolean
let opcao = 0;
// const usuarioExistente = (nome: string): boolean => {
//     const filtro = Usuarios.filter(usuario => usuario.nome === nome)
//     return filtro[0] !== undefined
// }
//função com saida da data e hora atual formatada.
const formatarData = () => {
    let inputData = new Date();
    let dataFormatada = inputData.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    return dataFormatada;
};
let start = readline.keyInYN("Deseja iniciar o sistema de tarefas? ");
const cadastrarTarefa = (titulo, importancia, mensagem, Status) => {
    const dataCriacao = formatarData();
    Tarefas.push({ titulo, importancia, mensagem, dataCriacao, Status });
    console.log("Tarefa cadastrada com sucesso!");
};
const cadastrarUsuario = (nome, apto) => {
    let dataCadastro = formatarData();
    Usuarios.push({ nome, apto, dataCadastro });
    console.log("Usuário cadastrado com sucesso!");
};
const inputsUsuarios = () => {
    let inputNome = readline.question("Informe seu nome ");
    let inputApto = readline.keyInYN("Usuario ativo ? ");
    cadastrarUsuario(inputNome, inputApto);
    console.table(Usuarios);
};
const inputsTarefas = () => {
    let inputTitulo = readline.question("Informe o titulo da tarefa ");
    let importancia = readline.questionInt("digite 1 para normal\ndigite 2 para atencao\ndigite 3 para emergencial ");
    let inputImportancia = Importancia[importancia];
    let inputMensagem = readline.question("informe a descricao da tarefa ");
    opcao = readline.questionInt("Informe o 1 para tarefa pendente\n2 para em tarefa em progresso\n3 tarefa concluida\n ");
    let inputStatus = Status[opcao];
    cadastrarTarefa(inputTitulo, inputImportancia, inputMensagem, inputStatus);
    console.table(Tarefas);
};
const edicaoTarefas = () => { };
const exclusaoTarefas = (titulo) => {
    const findTarefa = Tarefas.findIndex(tarefas => tarefas.titulo === titulo);
    if (findTarefa !== -1) {
        Tarefas.splice(findTarefa, 1);
        return console.log("tarefa excluida com sucesso");
    }
    else {
        console.table("Tarefa não encontrada\n" + Tarefas);
    }
};
const listarTarefas = (titulo) => {
    const findTitulo = Tarefas.filter(titulos => titulos.titulo === titulo);
    if (findTitulo.length > 0) {
        return console.table(findTitulo);
    }
    else
        console.log("Tarefa não encontrada");
};
do {
    console.clear();
    opcao = readline.questionInt("Cadastrar um usuario? Digite 1\nCadastrar uma tarefa? Digite 2\nEditar,Excluir ou Listar uma tarefa? Digite 3\nExibir os usuarios ou tarefas cadastraos? Digite 4\n ");
    switch (opcao) {
        case 1:
            inputsUsuarios();
            break;
        case 2:
            inputsTarefas();
            break;
        case 3:
            opcao = readline.questionInt("Digite 1 para editar alguma tarefa\nDigite 2 para excluir uma tarefa\n Digite 3 para Listar alguma tarefa\n ");
            switch (opcao) {
                case 1:
                    edicaoTarefas();
                    console.table(Tarefas);
                    break;
                case 2:
                    console.table(Tarefas);
                    let titulo = readline.question("Informe o titulo a qual deseja excluir ");
                    exclusaoTarefas(titulo);
                    break;
                case 3:
                    let excluirTitulo = readline.question("Informe o titulo a qual deseja pesquisar");
                    listarTarefas(excluirTitulo);
                    break;
                default:
                    console.log("Informe a opção valida desejada.\n 1 = Editar 2 = Excluir 3 = Listar");
            }
            console.table(Tarefas);
            console.log("Até mais");
            break;
        case 4:
            const opcoes = () => {
                let opcoes = readline.questionInt("Deseja ver as tarefas salvas ? Digite 1\n Deseja ver os usuarios? Digite 2\n");
                return opcoes;
            };
            if (opcoes() == 1) { //Exibir tarefas
                console.table(Tarefas);
                start = readline.keyInYN("Deseja iniciar o sistema de tarefas? ");
                break;
            }
            else if (opcoes() == 2) { //Exibir Usuarios
                console.log(Usuarios);
                start = readline.keyInYN("Deseja iniciar o sistema de tarefas? ");
                break;
            }
            else {
                console.log("Informe um numero valido de 1 até o 2");
                opcao = readline.questionInt("Deseja ver as tarefas salvas ? Digite 1\n Deseja ver os usuarios? Digite 2\n");
                break;
            }
        case 5:
            start = false;
            console.log("Até mais!!");
            break;
        default:
            console.log("Exiba uma função ");
    }
} while (start);
