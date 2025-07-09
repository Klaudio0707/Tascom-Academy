class Tarefa {
    // Propriedades públicas para fácil acesso (poderiam ser private com getters)
    id: number;
    nome: string;
    descricao: string;
    concluida: boolean;

    // O construtor agora é público e define 'concluida' como false por padrão
    public constructor(id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.concluida = false; // Toda nova tarefa começa como não concluída
    }

    // Método de ação: simples, sem parâmetros, faz uma coisa só.
    public concluir(): void { // 'void' significa que o método não retorna valor
        this.concluida = true;
    }


}

class GerenciadorDeTarefas {
    private tarefas: Tarefa[] = [];
    private ultimoId: number = 0; // Um contador simples para gerar IDs únicos

    public constructor() {}

    /**
     * Cria uma nova tarefa e a adiciona à lista.
     */
    public adicionarTarefa(nome: string, descricao: string): void {
        this.ultimoId++; // Incrementa o ID para garantir que seja único
        
        // Agora podemos chamar 'new Tarefa' porque o construtor é público!
        const novaTarefa = new Tarefa(this.ultimoId, nome, descricao);

        this.tarefas.push(novaTarefa);
        console.log(`Tarefa "${nome}" adicionada com sucesso!`);
    }

    /**
     * Encontra uma tarefa pelo ID e a marca como concluída.
     */
    public marcarTarefaComoConcluida(id: number): void {
        // .find() é um método de array que busca o primeiro item que satisfaz a condição
        const tarefaEncontrada = this.tarefas.find(tarefa => tarefa.id === id);

        if (tarefaEncontrada) {
            tarefaEncontrada.concluir(); // Chama o método da própria tarefa
            console.log(`Tarefa "${tarefaEncontrada.nome}" marcada como concluída.`);
        } else {
            console.log(`Erro: Tarefa com ID ${id} não encontrada.`);
        }
    }

    /**
     * Exibe todas as tarefas da lista no console.
     */
    public listarTarefas(): void {
        console.log("\n--- LISTA DE TAREFAS ---");
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa na lista.");
            return;
        }

        this.tarefas.forEach(tarefa => {
            const status = tarefa.concluida ? "[x]" : "[ ]"; // Operador ternário para formatar o status
            console.log(`${status} ID: ${tarefa.id} - ${tarefa.nome} (${tarefa.descricao})`);
        });
        console.log("------------------------\n");
    }
}

// --- Como Usar ---
const meuGerenciador = new GerenciadorDeTarefas();

meuGerenciador.listarTarefas(); // Mostra que a lista está vazia

meuGerenciador.adicionarTarefa("Estudar TypeScript", "Revisar classes e métodos.");
meuGerenciador.adicionarTarefa("Fazer compras", "Comprar pão e leite.");
meuGerenciador.adicionarTarefa("Limpar a casa", "Varrer o chão da sala.");

meuGerenciador.listarTarefas(); // Mostra as tarefas adicionadas

meuGerenciador.marcarTarefaComoConcluida(2); // Conclui a tarefa de compras
meuGerenciador.marcarTarefaComoConcluida(99); // Tenta concluir uma tarefa que não existe

meuGerenciador.listarTarefas(); // Mostra a lista com o novo status