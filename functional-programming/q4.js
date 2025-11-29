function findAdults(users) {
    return users.find(user => user.age == 18);
}

const user = [
    {
        name: "Erica",
        age: 16
    },
    {
        name : "james",
        age : 18
    }

]

console.log(findAdults(user));