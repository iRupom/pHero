function fibonacci(n) {
    if (n == 0) {
        return [0]
    }
    else if (n == 1) {
        return [0,1]
    }
    else {
        let fibo = fibonacci(n - 1)
        let newElement = fibo[n - 1] + fibo[n - 2]
        fibo.push(newElement)
        return fibo
    }
}

let array = fibonacci(15)
console.log(array)