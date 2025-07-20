let count = 0;
count = count + 10;
console.log(count);

// ---------------------------------// ---------------------------------
const numbers = [23, 24, 50, 64, 82];

numbers[2] = 55;
numbers.push(5, 9, 78);
console.log(numbers);

// ---------------------------------// ---------------------------------
// object
const student = {
    name: 'noboni',
    class: 2
}

// student = {name: 'noboni akther'} // if we use let
student.name = 'noboni akther'

console.log(student);

// ---------------------------------// ---------------------------------

// loop
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i
}

console.log(sum);