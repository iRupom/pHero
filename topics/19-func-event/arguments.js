function addNumbers(number1, number2) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
}

var result = addNumbers(1, 2, 3,4,5,13,29);
console.log(result);