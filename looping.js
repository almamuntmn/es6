// const numbers = [2, 5, 69, 85, 4, 5]

// for (const num of numbers){
//     console.log(num);
// }


// const name = 'Md Al Mamun'

// for (const cr of name){
//     console.log(cr);
// }


const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isClean: true
};

for (const key in glass) {
    const value = glass[key];
    console.log(key, value);
}
