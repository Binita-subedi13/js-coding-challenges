function filterAdults(users) {
    return users.filter(user => user.age >= 18);
}

const user = [
    {
        name: "Erica",
        age: 16
    },
    {
        name : "james",
        age : 20
    }

]

console.log(filterAdults(user));