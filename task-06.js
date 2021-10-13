function getMaxium(number1, number2, number3) {

    if (number1 > number2 && number1 > number3) {
        return number1;
    } else if (number2 > number1 && number2 > number3) {
        return number2;
    } else if (number3 > number1 && number3 > number2) {
        return number3;
    } else if (number1 == number2 || number1 == number3) {
        return number1
    } else if (number2 == number3 || number2 == number1) {
        return number2
    }
    else { 
        return "Enter 3 numbers please"
    }
}
console.log(getMaxium(0,9,0));
