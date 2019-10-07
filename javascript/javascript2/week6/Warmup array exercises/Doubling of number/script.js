let numbers = [1, 2, 3, 4];
let newNumbers = [];

let oddNumbers = numbers.filter(number => number % 2 !== 0);

newNumbers = oddNumbers.map(number => number * 2);

console.log("The doubled numbers are", newNumbers);