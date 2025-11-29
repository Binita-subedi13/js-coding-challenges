const divide = (a,b)=>{
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB) || numB === 0) {
        return "Invalid";
    }

    return numA / numB;
}

console.log(divide(4,2));