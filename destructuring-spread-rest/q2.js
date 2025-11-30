function extractName(obj) {
    const {
        firstName: name,
        address: {
            city
        } = {}
    } = obj;
    return { name, city };
}
console.log(
    extractName(
        { firstName: "John", address: { city: "Kathmandu" } }
    )
)