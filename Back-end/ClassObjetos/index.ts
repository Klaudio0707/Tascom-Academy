// const meuObjetos = {
//     nome: "julio",
//     idade: 40,
//     conhecimento: "typescript"

// }
// console.log(meuObjetos);
// console.log(meuObjetos.nome);
// console.log(typeof meuObjetos.idade)

// export class Pessoa {
//     nome: string
//     idade?: number
//     constructor(nome:string, idade:number) {
//         this.nome = nome;
//         this.idade = idade;
//     }
//     public getName(): string {
//         return this.nome;
//     }
// } 
// const pessoa = new Pessoa("flavio",29);
// console.log(pessoa.getName());

// const pessoa = new Pessoa("Edilson", 20)

// const pessoa2 = new Pessoa("Cláudio", 29)


// console.log(pessoa)
// console.log(pessoa2)

// export class Funcionario {
//     nome: string
//     idade:number
//     cargo: string
//     salario: number

//     constructor(nome:string, idade:number, cargo:string, salario:number){
//         this.nome = nome;
//         this.idade = idade;
//         this.cargo = cargo;
//         this.salario = salario;
//     }
//     public getFuncionario(): string {
//         return(this.nome, this.idade, this.cargo,  this.salario) 

//     }
// }

// const funcionario1 = new Funcionario("Cláudio",
//     29, "Desenvolvedor", 10000
// )

// exercicio: elaboração de uma class funcionario e exibição do resumo 

// class Funcionario {
//     nome: string
//     cargo: string
//     salario: number

//     constructor( nomeEntrada:string, cargoEntrada:string, salarioEntrada:number){
//         this.nome = nomeEntrada
//         this.cargo = cargoEntrada
//         this.salario = salarioEntrada ? salarioEntrada: 0;
//     }
//         public resumo(): string {
//             return `O funcionario ${this.nome} tem o cargo de ${this.cargo} e salario: R$${this.salario}`
//         }
// }
// const novoFuncionario = new Funcionario("Cláudio","Desenvolvedor", 20000);
// console.log(novoFuncionario.resumo())




interface Shape{
    getArea: () => number;
}

class Triangulo implements Shape{
    public constructor(protected readonly width: number, protected readonly height:number)
    {}
    public getArea(): number {
        return (this.width * this.height)/2
    }
}
const novoTriangulo = new Triangulo(10,20)
console.log(novoTriangulo.getArea())