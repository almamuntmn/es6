function add(num1 = 88, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

const sum = add();

// or

function fullName(firsName, lastName = '') {
    const full = firsName + lastName;
}

console.log('Noboni');


// -------------------------------------------------// -------------------------------------------------

// default array = []
// default object = []
// default string = ''
