let numbers = [1, 2, 3, 4];
let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         newNumbers[i] = numbers[i] * 2;
//     }
// }

const oddsNum = numbers.filter(value => value % 2 !== 0)
    .map(value => value *= 2);

console.log("The doubled numbers are", oddsNum);