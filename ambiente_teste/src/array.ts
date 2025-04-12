// array.prototype.filter()

const numbers = [1,2,3,4];
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens);

//find
// const user = [{id: 1}, {id: 2}];
// const users = user.find((u) => user.id == 2);
// console.log(user)

//reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum)

// splice

const months = ["jan","march", "april", "june" ];
months.splice(1, 0, "fab");

console.log(months)
