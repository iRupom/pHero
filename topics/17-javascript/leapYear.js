function learYearCheck(reman) {
    if (reman % 400 == 0)
        return true
    else if (reman % 100 == 0)
        return false
    else if (reman % 4 == 0) 
        return true
    else return false
}

console.log(learYearCheck(1600));