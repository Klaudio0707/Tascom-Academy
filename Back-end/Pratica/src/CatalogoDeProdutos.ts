import readline from "readline-sync";

class Produto {


    constructor(
         private readonly id: number, 
         private readonly nome: string,
         private readonly preco: number,
         private readonly quantidade: number) {
            // readonly significa que não pode ser alterada 

    }
    public getId():number{
        return this.id;
    }
    public getNome(): string {
        return this.nome;
    }
     public getPreco():number{
        return this.preco;
    }
    public getQuantidade():number{
        return this.quantidade
    }
    public getPrecoComDesconto(percentual: number){
        console.log("preço atual: ",this.getPreco())
        return (
            (this.preco * percentual)/100
        )
    }
}
const produtoNovo = new Produto(1222,"caixa",10.5,10);
console.log("ID produto: ",produtoNovo.getId())
console.log("Nome produto: ",produtoNovo.getNome())
console.log("preço produto: ",produtoNovo.getPreco())
console.log("preço com desconto produto: ",produtoNovo.getPrecoComDesconto(10))