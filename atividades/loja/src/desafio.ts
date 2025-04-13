import readlineSync from "readline-sync";


interface produtos {
    name: string,
    price: number,
    categoria: string,
    estoque: number
}
//array de objetos
let produtos = [
    {    name:"celular",price:10.5, categoria:"Eletronico", estoque: 10
    },
]
let status = readlineSync.keyInYN("Deseja Utilizar o Programa da Loja ?\n Digite Y para sim e N para não ");

while(status){

   
    const adicionarProduto = (nome: string, preco: number, categoria: string, estoque: number) => {
    
    const novosProdutos: produtos = ({ name:nome, price:preco, categoria:categoria, estoque:estoque})
    produtos.push(novosProdutos);
    return novosProdutos; 
        
    }
    const name = readlineSync.question("Digite o nome do produto: ");
    const price = readlineSync.questionFloat("Informe o preço: ");
    const categoria = readlineSync.question("Digite a categoria: ");
    const estoque= readlineSync.questionInt("Digite a quantidade p/ adicionar ao estoque: ")
    
    
    //execução das funções
    let resultado: object = adicionarProduto(name, price, categoria, estoque );
    
    //imprimir resultado
    console.log(produtos);
    console.table(produtos);
    console.log(resultado);
  

    status = readlineSync.keyInYN("Deseja ainda continuar a usar o sistema ? ");
}