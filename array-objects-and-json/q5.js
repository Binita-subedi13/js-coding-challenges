const arrInfo ={
    name : "Erica",
    info:{
        age: 18,
        hobbies: "playing"
    }
};

const shallowCopy = {...arrInfo}
const deepCopy = JSON.parse(JSON.stringify(arrInfo));

shallowCopy.name = "Not Erica";
shallowCopy.info.hobbies = "not playing";

deepCopy.name = "james";
deepCopy.info.hobbies ="Reading";

console.log("original:", arrInfo)

console.log("shallow copy:", shallowCopy)

console.log("deep copy:", deepCopy)