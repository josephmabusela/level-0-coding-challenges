function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even"
    }
    if (number % 3 === 0) {
        return "Odd"
    }
}

console.log(evenOrOdd(45));