// const idade: number = 28;
// const nome: string = "Claudio";
// const ativo: boolean = true;
// const numeros: number[] = [1,2,3];
// const pessoa: {nome: string, idade: number} ={
//     nome: "Claudio",
//     idade: 28
// };
// enum diaDaSemana{
//     segunda,
//     terca,
//     quarta,
//     quinta,
//     sexta
// };
var altura = 1.90;
var nomeCarro = "Gol Bola";
var estadoCarro = true;
var carro = {
    nome: "Palio",
    cor: "Branco",
    ano: 2010
};
var horario;
(function (horario) {
    horario[horario["manha"] = 0] = "manha";
    horario[horario["tarde"] = 1] = "tarde";
    horario[horario["noite"] = 2] = "noite";
})(horario || (horario = {}));
console.log(nomeCarro);
console.log(estadoCarro);
console.log(carro);
console.log(horario);
