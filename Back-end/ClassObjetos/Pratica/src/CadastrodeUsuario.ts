import * as readline from 'readline-sync';
class Personagem {
    nome: string;
    nivel: number;
    pontosDeVida: number;
    
    public constructor(name:string, level:number,scoreLife:number){
        this.nome = name;
        this.nivel = level;
        this.pontosDeVida = scoreLife; 
    }
    public exibirStatus():string{
        return `Personagem: ${this.nome}, possui: ${this.nivel}Pontos, e ${this.pontosDeVida} pontos de Vida`
    }
}

const criarPersonagem = () => {

    let nome: string = readline.question("informe o seu nome");
    let nivel:number = readline.questionInt("informe o seu nivel")
    let score: number = readline.questionInt("informe sua vida") 
    const personagem_1 = new Personagem(nome,nivel,score)
    console.log(personagem_1.exibirStatus())
}


criarPersonagem();