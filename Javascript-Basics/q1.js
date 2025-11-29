
const TypeOf = function checkTypes(values){
     return values.map(x=> typeof x)
}

console.log(TypeOf([1, "a", true, null, undefined]))