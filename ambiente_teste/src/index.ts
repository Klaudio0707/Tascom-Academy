// const message: string = "Hello, World!"
// console.log(message);

// let idade: number = 19;

// if( idade >= 20) {
// console.log("pessoa maior de idade")
// }else{
//     console.log("pessoa menor de idade ")
// }
// operador ternário
let nota1: number= 6;
let nota2: number= 9;
let nota3: number= 7;
let nota4: number= 5;

let media: number = (nota1 + nota2 + nota3 + nota4) /4;

let resultado: string = media >= 6 ? `Aprovado! nota: ${media}`: `Reprovado! nota: ${media}` 

console.log(resultado);