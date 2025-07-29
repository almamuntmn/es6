const orderFood =new Promise((resolve, reject) => {
    const foodReady = true; // Simulating food readiness
    
    if (foodReady) {
        resolve("Food is ready!");
    } else {
        reject("Food is not ready yet.");
    }
});

orderFood
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Order process completed.");
    });
 