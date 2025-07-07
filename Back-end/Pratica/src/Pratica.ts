import readLine from 'readline-sync';

// MELHORIA 1: A classe agora se chama 'Cachorro' para representar melhor o que ela faz.
class Cachorro {
    // As propriedades podem ser declaradas diretamente no construtor.
    // Usar 'private readonly' significa que 'nome' e 'idade' só podem ser definidos
    // uma vez (no construtor) e não podem ser acessados diretamente de fora da classe.
    // Isso é um encapsulamento mais forte. Se precisar deles fora, criamos métodos "getters".
    constructor(private readonly nome: string, private readonly idade: number) {}
    // MELHORIA 2: O método agora usa 'this.nome'. Ele não precisa de parâmetros
    // porque o objeto já sabe seu próprio nome.
    // MELHORIA 3: O método retorna uma string, em vez de imprimir no console.
    public latir(): string {
        return `🐶 Au au! ${this.nome} está latindo!`;
    }

    public abanarRabo(): string {
        return `🐶 ${this.nome} está abanando o rabo de felicidade!`;
    }
    
    public getNome(): string {
        return this.nome;
    }
}



console.log("--- Cadastro do seu Pet ---");
const nome: string = readLine.question("Digite o nome do seu cachorro: ");


if (!nome) {
    console.log("Nome inválido. O programa será encerrado.");
    process.exit(0);
}

const idade: number = readLine.questionInt(`Digite a idade do(a) ${nome}: `);

if (idade <= 0) {
    console.log("Idade inválida. O programa será encerrado.");
    process.exit(0);
}

// Instanciamos o objeto Cachorro
const meuCachorro = new Cachorro(nome, idade);

console.log(`\nCachorro ${meuCachorro.getNome()} cadastrado com sucesso!`);


while (true) {
    console.log("\n--- Menu de Ações ---");
    const comando = readLine.questionInt(
        "Digite:\n 1 para Latir\n 2 para Abanar o Rabo\n 0 para Sair\n> "
    );

    switch (comando) {
        case 1:
            // Chamamos o método e imprimimos o resultado que ele retorna.
            console.log(meuCachorro.latir());
            break;

        case 2:
            console.log(meuCachorro.abanarRabo());
            break;

        case 0:
            console.log("Até a próxima!");
            process.exit(0); // Sai do programa de forma limpa.

        default:
            console.log("Comando inválido, por favor tente novamente.");
            break;
    }
}