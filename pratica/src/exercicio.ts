let calculator=(numero: number, numero2:number ) => {
    return numero * numero2;
}
let numero2: number = 10;
for(let i: number = 1; i<= 10; i++){
    let resultado: number =  calculator(i,numero2)
console.log(`${i} x 10 ${resultado}`)


}