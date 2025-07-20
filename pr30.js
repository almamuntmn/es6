// const mult = (a, b, c) => a * b * c;

// const result = mult(2, 2, 2);
// console.log(result);


// const desicnation = 'web developer.';
// const fav = 'code.';
// const food = 'biriany';

// const result = `I am a ${desicnation} i love ${fav} i love to eat ${food}`;
// console.log(result);



// const sum = (a, b = 10) => a + b;

// const total = sum(5);
// console.log(total);

// const array = ['Motin', 'Jewel', 'Faisal', 'anis'];

// const result = [];

// for (const num of array) {
//     if (num.length % 2 === 0) {
//         result.push(num);
//     }
// }

// console.log(result);



// const nums = (a, b, c, d) => {
//     const nums = [a, b, c, d];
//     const square = nums.map(num => num * num);
//     const sum = square.reduce((p, c) => p + c, 0);
//     const avg = sum / square.length;
//     // console.log(square, sum, avg);
//     return avg;
// }

// const result = nums(2, 3, 4, 5);
// console.log(result);


const numbers = [55, 88, 722, 66, 13, 256, 4];
const numbers2 = [52, 86, 727, 65, 14, 26, 4];

const merge = [...numbers, ...numbers2];

const maxNumber = Math.max(...merge);

console.log(maxNumber);