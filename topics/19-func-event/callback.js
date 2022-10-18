function work(name, age, task) {
    console.log('hello ', name);
    console.log('Your age is ', age);
    task();
}

function washHand() {
    console.log('Wash hand with soap');
}

function takeBath() {
    console.log('Take bath and refresh yourself');
}

work('rakib', 15, washHand)
work('rupom',13,takeBath)