// function helloChandu() {
//     setTimeout(() => {
//         console.log("Hello Chandu");
//     }, 5000);
// }


function helloChandu(name, delayedTime) {
    setTimeout(() => {
        console.log(`Hello ${name}`);
    }, delayedTime);
}

const output = helloChandu("Alice", 5000);
console.log(output); // This will log undefined because helloChandu does not return anything
// The function is asynchronous and will log "Hello Alice" after 5 seconds


function tellJoke() {
    console.log("Why don't scientists trust atoms? Because they make up everything!");
}

const jokeInterval = setInterval(() => {
    tellJoke();
    setTimeout(() => {
        clearInterval(jokeInterval);
    }, 10000);
}, 2000);


async function asyncAwaitExample() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const data = await response.json();
        console.log(data.joke);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

asyncAwaitExample();