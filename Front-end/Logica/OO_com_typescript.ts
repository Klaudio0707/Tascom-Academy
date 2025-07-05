// No TypeScript, a afirmação de que "tudo é objeto" não é completamente precisa,
// mas reflete uma verdade interessante sobre como a linguagem trata valores e tipos.
// Vamos explorar o que isso significa:

// 1. Objetos como base de construção
// TypeScript, assim como JavaScript, é uma linguagem baseada em objetos, o que
// significa que muitos aspectos da linguagem são tratados como objetos ou podem
// ser manipulados como objetos.
// Objetos em TS são coleções dinâmicas de propriedades que podem ser adicionadas,
// removidas ou alteradas em tempo de execução.

// 2. Tipos primitivos x Objetos
// TypeScript possui tipos primitivos: string, number, boolean, null, undefined, bigint, e symbol.
// Esses não são objetos, mas eles têm comportamentos que podem ser confundidos com os de objetos
// por causa do autoboxing.

// Autoboxing: Quando você tenta acessar uma propriedade ou método em um tipo primitivo,
// o JavaScript cria automaticamente um objeto wrapper para aquele valor.

// Por exemplo:
const str: string = "hello";
console.log(str.toUpperCase()); // "HELLO"
// Aqui, o TypeScript temporariamente trata a string como uma instância de String para acessar o método toUpperCase.

// 3. Funções como objetos
// Em TypeScript, funções são objetos de primeira classe. Isso significa que elas podem ter
// propriedades e métodos, podem ser passadas como argumentos, atribuídas a variáveis e retornadas de outras funções.
function greet(): string {
    return "Hello!";
}
greet.message = "This is a function property";
console.log(greet.message); // "This is a function property"

// 4. Prototipagem
// TypeScript usa um sistema de protótipos em vez de herança baseada em classes
// (embora a sintaxe moderna com class abstraia isso).
// Todo objeto em TypeScript tem uma ligação ao seu protótipo, que é outro objeto. 
// Isso cria uma cadeia de protótipos (prototype chain), que é fundamental para como 
// métodos e propriedades são resolvidos.

// 5. Por que dizer que "tudo é objeto" pode ser enganoso
// Tipos primitivos como null e undefined não possuem as propriedades de objetos.
console.log(typeof null); // "object" (uma peculiaridade histórica)
console.log(typeof undefined); // "undefined"
// Apesar disso, os primitivos têm wrappers (String, Number, etc.), e é por isso que podem 
// parecer "objetos" em alguns contextos.

// Resumo
// Dizer que "tudo é objeto" no TypeScript reflete a importância dos objetos na linguagem,
// mas não é literalmente verdadeiro. O que é verdade é que TypeScript trata muitos tipos 
// como se fossem objetos para facilitar a manipulação, mas ainda mantém uma distinção 
// clara entre tipos primitivos e objetos.

// 1. Criando Objetos
// A maneira mais básica de criar objetos é com a sintaxe literal.
const pessoa: {
    nome: string;
    idade: number;
    saudacao: () => string;
} = {
    nome: "João",
    idade: 30,
    saudacao: function (): string {
        return `Olá, meu nome é ${this.nome}!`;
    },
};

console.log(pessoa.saudacao()); // "Olá, meu nome é João!"

// 2. Classes e Instâncias
// Classes em TypeScript são "sugar syntax" para trabalhar com protótipos, introduzidas no ES6.
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao(): string {
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const maria = new Pessoa("Maria", 25);
console.log(maria.saudacao()); // "Olá, eu sou Maria e tenho 25 anos."

// 3. Herança
// A herança permite criar novas classes baseadas em classes existentes.
class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    emitirSom(): string {
        return "Som genérico";
    }
}

class Cachorro extends Animal {
    emitirSom(): string {
        return "Au au!";
    }
}

const rex = new Cachorro("Rex");
console.log(rex.nome); // "Rex"
console.log(rex.emitirSom()); // "Au au!"

// 4. Encapsulamento
// Encapsulamento significa esconder detalhes internos da implementação. No TypeScript moderno, 
// você pode usar # para propriedades privadas.
class ContaBancaria {
    #saldo: number;

    constructor(saldoInicial: number) {
        this.#saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.#saldo += valor;
    }

    sacar(valor: number): void {
        if (valor > this.#saldo) {
            throw new Error("Saldo insuficiente!");
        }
        this.#saldo -= valor;
    }

    getSaldo(): number {
        return this.#saldo;
    }
}

const conta = new ContaBancaria(100);
conta.depositar(50);
conta.sacar(20);
console.log(conta.getSaldo()); // 130

// 5. Polimorfismo
// Polimorfismo ocorre quando métodos de uma classe derivada substituem os métodos da classe base.
abstract class Forma {
    abstract calcularArea(): number;
}

class Retangulo extends Forma {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }
}

class Circulo extends Forma {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }
}

const formas: Forma[] = [new Retangulo(10, 5), new Circulo(7)];

formas.forEach((forma) => {
    console.log(forma.calcularArea());
});
// Saída:
// 50
// 153.93804002589985

// 6. Trabalhando com Propriedades Dinâmicas
// TypeScript permite adicionar propriedades ou métodos a objetos em tempo de execução usando index signatures ou casting.
const carro: { [key: string]: any } = {};
carro.marca = "Toyota";
carro.acelerar = function (): string {
    return "Vruum!";
};

console.log(carro.marca); // "Toyota"
console.log(carro.acelerar()); // "Vruum!"

// 7. Métodos Estáticos
// Métodos estáticos pertencem à classe e não às suas instâncias.
class Matematica {
    static somar(a: number, b: number): number {
        return a + b;
    }
}

console.log(Matematica.somar(5, 3)); // 8

// 8. Trabalhando com Object.create
// Object.create permite criar um objeto diretamente com um protótipo específico.
const animal: { som: string; fazerSom: () => void } = {
    som: "Genérico",
    fazerSom() {
        console.log(this.som);
    },
};

const gato = Object.create(animal);
gato.som = "Miau";
gato.fazerSom(); // "Miau"

// 9. Combinação com Programação Funcional
// TypeScript permite combinar OO com conceitos de programação funcional.
class Carrinho {
    private itens: { item: string; preco: number }[] = [];

    adicionarItem(item: string, preco: number): void {
        this.itens.push({ item, preco });
    }

    calcularTotal(): number {
        return this.itens.reduce((total, item) => total + item.preco, 0);
    }
}

const carrinho = new Carrinho();
carrinho.adicionarItem("Maçã", 2);
carrinho.adicionarItem("Banana", 3);
console.log(carrinho.calcularTotal()); // 5
