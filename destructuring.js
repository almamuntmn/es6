const actor = {
    name: 'Ananta',
    age: 30,
    phone: '019000000',
    money: 123233548,
}

// if right side is an Object, left side  of destructuring will be object as well

const {phone, age, money} = actor;

console.log(phone);
console.log(age);
console.log(money);

// -------------------------------------------------// -------------------------------------------------

// array destructuring.....

const numbers = [45, 99]
const [first, second] = numbers;
const [x, y] = [12, 5];

// 

function doubleThem(a,b){
    return[a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6,9);
console.log(prothom, ditiyo);
