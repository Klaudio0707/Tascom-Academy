import readline from "readline-sync";

class Produto {


    constructor(
         private readonly id: number, 
         private readonly nome: string,
         private readonly preco: number,
         private readonly quantidade: number) {
            // readonly significa que não pode ser alterada 

    }
    getId():number{
        return this.id;
    }
    getNome(): string {
        return this.nome;
    }
}