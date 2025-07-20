const data =[{ id: 1, name: 'abul', address: 'khochukhet'}]
console.log(data[0].name);

const data2 = {
    count: 5000,
    data: [
        {id: 1, name: 'lenevo', price: 65000},
        {id: 1, name: 'mac', price: 165000},
    ]
}

console.log(data2.data[1].price);


const user = {
    id: 5001,
    name: 'raj',
    address: {
        street: {
            first: '54/1 uttara',
            second: 'poribag',
            thirst: 'no data'
        },
        city: 'Dhaka'
    }
}

console.log(user.address.street.second);