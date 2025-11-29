function createCounter() {
    let count = 0; // private variable

    return {
        increment: function() {
            count++;
        },
        get: function() {
            return count;
        }
    };
}
const counter = createCounter();
counter.increment();
console.log(counter.get()); 