// desafio 1 
import * as readline from 'readline-sync';

interface Tarefas{
    titulo: string,
    importancia: string,
    mensagem: string,
}
interface Usuario {
    nome: string,
    apto: boolean,
    dataCriacao: Date | null,
}

enum importancia{
    Normal = 1,
    Atençao = 2,
    Emergicial = 3,
}

let Tarefas: Tarefas[] = [
    {titulo: "", importancia: "", mensagem: ""}
]
let Usuario: Usuario[] = [
    {nome: "", apto: true, dataCriacao: null}
]

let status: boolean = readline.keyInYN("Deseja iniciar o sistema de tarefas? ")as boolean

do {

    const cadastrarTarefa = (titulo: string, importancia: string, mensagem: string) =>  {


    }


}while(status)