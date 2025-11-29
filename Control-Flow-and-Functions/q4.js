const sumAll = (...nums)=>{
    let sum = 0;
    for(const num of nums){
        sum += num;

    }
    return sum;
}

console.log(sumAll(2,3,4))