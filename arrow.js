// function add (a,b){
//     const result = (a+b);
//     return result;
// }


function add(a, b) {
    return (a + b);

}


const sum = add(90, 5);
console.log(sum);

// -------------------------------------------------// -------------------------------------------------

const add2 = (a, b) => a + b;

const total = add2(100, 200);

console.log(total);

// -------------------------------------------------// -------------------------------------------------
const getAge = (person) => person.age;

const student = {
    name: 'Ananta', age: 30
}

const age = getAge(student)
console.log(age);


// or
const getThird = numbers => numbers[2];

const third = getThird([5, 6, 9, 7, 8, 5])
console.log(third);

// or
const getPI = () => Math.PI
console.log(getPI());


// -------------------------------------------------// -------------------------------------------------

// multiple line

const doMath = (x,y,z) => {
    const sum = x+y+z;
    const mult = x*y*z
    result = sum + mult;
    return result;
}

const total2 = doMath(2,3,4);
console.log(total2);