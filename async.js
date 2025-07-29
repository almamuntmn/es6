const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success <= 0.5) {
            resolve(success)
        }
        else {
            reject(success)
        }
    })
}

myLoader()
    .then(data => console.log('resolved data', data))
    .catch(error => console.error('rejected with value', error))





async function loadData() {
    const res = await fetch('')
    const data = await res.json()
    return data
}


const takLoader = async () => {
    const res = await fetch()
}

loadData()