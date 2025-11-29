const filterTruthy = (arr)=>{
    const returnArr = [];
    for(const a of arr){
        if(a){
            returnArr.push(a);
        }
    }
    return returnArr;
}

console.log(filterTruthy([0, 1, false, "hello", "", 42, null]))