function safeParse(Jsonstr){
    try{

        return JSON.parse(Jsonstr)
    }
    catch(error){
return "invalid Json"
    }
}


console.log(safeParse('{"name":"Erica"}'))

console.log(safeParse("jsononnn"))