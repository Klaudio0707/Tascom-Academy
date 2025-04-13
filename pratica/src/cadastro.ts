import readlineSync  from "readline-sync";
interface cadastro{
    name: string,
    age: number,
}
const cadastro = [
  { name: "Cláudio", age: 28},
  { name: "Francisco", age: 24}  
]

const cadastrar=( nome:string, idade:number) => {
return  cadastro.push({name:nome, age:idade})


}
let inputNome: string =  readlineSync.question("Informe seu nome ")
let inputIdade: number = readlineSync.questionInt("Informe sua idade ")

let resultado = cadastrar(inputNome, inputIdade);

console.log(cadastro)