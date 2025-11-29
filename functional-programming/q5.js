const numbers = [1, 2, 3, 4];

const sumOfSquaresOfEven = numbers
    .map(num => num * num)       
    .filter(square => square % 2 === 0) 
    .reduce((sum, num) => sum + num, 0); 

console.log(sumOfSquaresOfEven); 