function reverseArray(arr) {
    const reversed = [];
    for (const item of arr) {
        reversed.unshift(item);
    }
    return reversed;
}


console.log(reverseArray([,12,3,4,5,]))