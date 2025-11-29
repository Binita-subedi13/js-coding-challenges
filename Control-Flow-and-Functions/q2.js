function getDayName(num) {
    let day;

    switch (num) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;

        case 3:
        case 4: 
            day = "Wednesday";
            break;

        case 5:
            day = "Friday";
            break;

        case 6:
            day = "Saturday";
            break;
        default:
            day = "Invalid";
    }

    return day;
}

console.log(getDayName(3))
