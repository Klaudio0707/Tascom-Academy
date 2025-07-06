import * as readline from 'readline-sync';
class Personagem {
    nome: string;
    nivel: number|string;
    pontosdeVida: number;
    
    public constructor(name:string, level:number|string,scoreLife:number){
        this.nome = name;
        this.nivel = level;
        this.pontosdeVida = scoreLife; 
    }
    public exibirStatus():string{
        return `Personagem: ${this.nome}, possui: ${this.nivel}Pontos, e ${this.pontosdeVida} pontos de Vida`
    }
}

const dados = () => {

    let nome: string = readline.question("informe o seu nome");
    let nivel:number = readline.questionInt("informe o seu nivel")
    let score: number = readline.questionInt("informe sua vida") 
    const personagem_1 = new Personagem(nome,nivel,score)
    console.log(personagem_1.exibirStatus())
}


dados();