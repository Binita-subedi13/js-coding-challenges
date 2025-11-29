function logNumbers() {
    let num = 1;

    const intervalId = setInterval(() => {
        console.log(num);

        if (num === 5) {
            clearInterval(intervalId);
        }

        num++;
    }, 1000);
}

logNumbers();
