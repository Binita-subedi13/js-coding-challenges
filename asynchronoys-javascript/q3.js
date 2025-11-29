function addAsync(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}


addAsync(10, 20).then(result => console.log(result)); 

