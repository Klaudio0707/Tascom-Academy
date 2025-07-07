import * as readline from 'readline-sync';


class ContaBancaria {
    private saldo: number;
    public readonly numeroDaConta: number;
    public titular: string;

    public constructor(numeroDaConta: number, titular: string) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = 0;
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            console.log("\nO valor do depósito deve ser positivo.");
            return;
        }
        this.saldo += valor;
        console.log(`\nDepósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    public sacar(valor: number): boolean {
        // Pequeno refinamento: verificar se o valor do saque é válido
        if (valor <= 0) {
            console.log("\nO valor do saque deve ser positivo.");
            return false;
        }

        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`\nSaque de R$${valor.toFixed(2)} realizado com sucesso.`);
            return true;
        } else {
            console.log("\nSaldo insuficiente para este saque.");
            return false;
        }
        // A linha "return false" que estava aqui era inalcançável e pode ser removida.
    }

    public verificarSaldo(): void {
        console.log(`\n--- Saldo Atual: R$${this.saldo.toFixed(2)} ---`);
    }
}


// --- LÓGICA PRINCIPAL CORRIGIDA ---

console.log("--- Bem-vindo ao Banco Digital ---");


// 1. CRIAR A CONTA ANTES DO LOOP
let status: boolean | string = readline.keyInYN("deseja criar sua conta ? ")
const numeroDaConta: number = readline.questionInt("Digite o número da nova conta: ");
const titular: string = readline.question("Digite o nome do titular: ");
const conta = new ContaBancaria(numeroDaConta, titular);
console.log(`\nConta para ${conta.titular} criada com sucesso!`);


// 2. INICIAR O LOOP DE OPERAÇÕES NA MESMA CONTA
while (status) { // Loop infinito que controlamos com a opção "Sair"
    conta.verificarSaldo(); // Mostra o saldo no início de cada operação

    const operacao: number = readline.questionInt(
        "\nEscolha uma operacao:\n  1 - Efetuar Deposito\n  2 - Efetuar Saque\n  0 - Sair\n> "
    );

    switch (operacao) {
        case 1:
            const deposito: number = readline.questionFloat("Digite o valor para depositar: R$");
            conta.depositar(deposito);
            break;

        case 2:
            const saque: number = readline.questionFloat("Digite o valor para sacar: R$");
            conta.sacar(saque);
            break;

        case 0:
            console.log("\nObrigado por usar nosso banco. Até mais!");
           status = false;
            break;
        default:
            console.log("\nOpção inválida. Tente novamente.");
            status = false;
            break;
    }

}