function numberToTime(number) {
    var hours = Math.floor(number / 60);  
    var minutes = number % 60;

    if (hours <= 1 && minutes <= 1 ) {
        return hours+"hour" + ", " + minutes +"minute"; 
    }
    else if (hours <= 1) {
        return hours+"hour" + ", " + minutes+"minutes";
    }
    else if (minutes <= 1) {
        return hours+"hours" + minutes+"minute";
    }
    else {
        return hours+"hours" + ", " + minutes +"minutes"; 
    }        
}

console.log(numberToTime(61));
console.log(numberToTime(133));