// let calculator=(numero: number, numero2:number ) => {
//     return numero * numero2;
// }
// let numero2: number = 10;
// for(let i: number = 1; i<= 10; i++){
//     let resultado: number =  calculator(i,numero2)
// console.log(`${i} x 10 ${resultado}`)


// }

const salarios = [
    1000,
    2000,
    5000,
    4500,
    6000
]
// const sum = numbers.reduce((acc, n) => acc + n, 0);
// console.log(sum)
 const sumSalario = salarios.reduce((salario, sum) => salario + sum,); 
 console.log("Salario de Todos: R$",sumSalario.toFixed(2));