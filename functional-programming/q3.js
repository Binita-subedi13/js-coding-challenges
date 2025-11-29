function countWords (arr){
    return arr.reduce((acc, word)=>{
        acc[word] = (acc[word]|| 0)+1;;
        return acc
    }, {});
}

const cities = ["pokhara","syangja", "palpa", "palpa"]

console.log(countWords(cities));