const getGrade = (score) =>{
    const NScore = Number(score);
    if(NScore >= 90 && NScore <=100){
        return "A";    
    }
    else if(NScore >= 80 && NScore <=89) {
        return "B"
    }
    else if(NScore >= 70 && NScore <=79) {
        return "C"
    }
    else if(NScore >= 60 && NScore <=69) {
        return "D"
    }
    else if(NScore >= 50 && NScore <=59) {
        return "E"
    }
    else if(NScore >= 0 && NScore <=49) {
        return "F"
    }
    else{
        return "invalid"
    }
}

console.log(getGrade(90));