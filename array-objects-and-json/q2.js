function getCity(user) {
    if (
        user &&
        user.address &&
        user.address.current &&
        user.address.current.city
    ) {
        return user.address.current.city;
    }
    return "Unknown";
}

console.log(getCity({address:{current:{city:"Kathmandu"}}}))