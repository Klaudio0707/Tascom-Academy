import readlineSync from "readline-sync";
interface Produto {
    name: string,
    price: number,
    categoria: string,
    estoque: number
}
   //variaveis para os inputs
   let name: string = "";
   let price: number = 0;
   let categoria: string = "";
   let estoque: number = 0;


//array de objetos
let produtos: Produto[] = [
    {name: 'Exemplo', price: 25.99, categoria: 'exemplo', estoque: 10}
]

let status = readlineSync.keyInYN("Deseja Utilizar o Programa da Loja ?\n Digite Y para sim e N para não ");

while (status) {
    console.log(produtos);
    let opcao: number = readlineSync.questionInt
        ("Digite 1 para adicionar produto. \nDigite 2 para atualizar produto \nDigite 3 para filtrar o produto pelo preco\n ")
    const inputsConsole =(): void => {
            
            name= readlineSync.question("Digite o nome do produto: ");
            price = readlineSync.questionFloat("Informe o preço: ");
            categoria  = readlineSync.question("Digite a categoria: ");
            estoque = readlineSync.questionInt("Digite a quantidade p/ adicionar ao estoque: ")

    } 
    const adicionarProduto = (nome: string, preco: number, categoria: string, estoque: number) => {
        const novosProdutos: Produto = ({ name: nome, price: preco, categoria: categoria, estoque: estoque })
        produtos.push(novosProdutos);
        return novosProdutos;
    }
    const substituirProduto = (nome: string, preco: number, categoria: string, estoque: number, indice: number) => {
        let novoArray: Produto = ({ name: nome, price: preco, categoria: categoria, estoque: estoque })
        produtos.splice(indice, 1, novoArray)
    }
    const filtrarProduto = (precoFiltro: number) => {
        const filtroProdutos = produtos.filter(produto => {
            const precoIgual: number | boolean = produto.price >= precoFiltro

            return precoIgual;
        });
        console.log(filtrarProduto);
        return filtroProdutos;
    }

    if (opcao <= 4) {
     
        switch (opcao) {
            case 1:
                inputsConsole();
                adicionarProduto(name, price, categoria, estoque);
                break;
            case 2:
                console.table(produtos)
                const indice: number = readlineSync.questionInt("Qual produto deseja atualizar? \nDigite o numero da sua posicao no (index) ")as number;
                inputsConsole();
                substituirProduto(name, price, categoria, estoque, indice)
                break;
            case 3:
                console.table(produtos)
                const filtro: number = readlineSync.questionFloat("Informe um preco que deseja usar como filtrar. ")
                filtrarProduto(filtro)
                console.table(filtrarProduto);
            case 4:
                const  = salarios.reduce((salario, sum) => salario + sum,); 
            default:
                break;
        }

    } else {
        console.log("Informe um numero valido de 1 até 4");
        continue;
    }

    //execução das funções

    //imprimir resultado
    console.table(produtos);



    status = readlineSync.keyInYN("Deseja ainda continuar a usar o sistema ? ");
}