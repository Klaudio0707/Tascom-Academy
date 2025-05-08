// desafio 1 
import * as readline from 'readline-sync';

//coloquei importancia e status como opcional.
interface Tarefas{
    titulo: string,
    importancia?: string,
    mensagem: string,
    dataCriacao: string|null,
    Status?: String,
}
interface Usuario {
    nome: string,
    apto: boolean,
    dataCadastro: Date | null,
}

enum Importancia{
    Normal = 1,
    Atençao = 2,
    Emergicial = 3,
}
enum Status{
   Pendente = 1,
   Em_Progresso = 2,
   Concluido = 3,
}

let Tarefas: Tarefas[] = [
    {titulo: "", importancia: "", mensagem: "",dataCriacao: null, Status: ""}
]
let Usuario: Usuario[] = [
    {nome: "teste", apto: true, dataCadastro: null }
]

let start: boolean = readline.keyInYN("Deseja iniciar o sistema de tarefas? ")as boolean

do {

    const cadastrarTarefa = (titulo: string, importancia: string, mensagem: string, dataCriacao: string|null, Status: string ) =>  {
        
        return Tarefas.push({titulo, importancia, mensagem, dataCriacao, Status})

    }

    

        let inputTitulo: string =  readline.question("Informe o titulo da tarefa ");
        let importancia: number = readline.questionInt("digite 1 para normall\ndigite 2 para atençao\ndigite 3 para emergencial ");
        let inputImportancia = Importancia[importancia]
        let inputMensagem: string = readline.question("informe a descrição da tarefa ");
        let status: number = readline.questionInt("Informe o 1 para tarefa pendente\n2 para em tarefa em progresso\n3 tarefa concluída\n");
        let inputStatus = Status[status]
        let inputData: Date = new Date();
        
        let  dataFormatada = inputData.toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });
    
cadastrarTarefa(inputTitulo,inputImportancia,inputMensagem,dataFormatada,inputStatus);
console.info(Tarefas);
console.table(Tarefas);
start = false
}while(start)