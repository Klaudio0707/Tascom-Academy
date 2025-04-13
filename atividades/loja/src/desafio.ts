import readlineSync from "readline-sync";


interface produtos {
    id: number,
    name: string,
    price: number,
    categoria: string,
    estoque: number
}
//array de objetos
let produtos = [
    {   id:0, name:"celular",price:10.5, categoria:"Eletronico", estoque: 10
    },
]
let status = readlineSync.keyInYN("Deseja Utilizar o Programa da Loja ?\n Digite Y para sim e N para não ");

let inc: number = 1;
while(status){

   
    const adicionarProduto = (nome: string, preco: number, categoria: string, estoque: number) => {
    
    const novosProdutos: produtos = ({id:inc++, name:nome, price:preco, categoria:categoria, estoque:estoque})
    produtos.push(novosProdutos);
    return novosProdutos; 
        
    }
    const name = readlineSync.question("Digite o nome do produto: ");
    const price = readlineSync.questionFloat("Informe o preço: ");
    const categoria = readlineSync.question("Digite a categoria: ");
    const estoque= readlineSync.questionInt("Digite a quantidade p/ adicionar ao estoque: ")
    
    
    let resultado: object = adicionarProduto(name, price, categoria, estoque );
   
    console.log(produtos);
    console.log(resultado);
    console.log(inc);

    status = readlineSync.keyInYN("Deseja ainda continuar a usar o sistema ? ");
}