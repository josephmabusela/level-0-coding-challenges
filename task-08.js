function numberToTime(number) {
    var hours = Math.floor(number / 60);  
    var minutes = number % 60;

    return hours+"hours" + ", " + minutes +"minutes";         
}

console.log(numberToTime(71));
console.log(numberToTime(133));