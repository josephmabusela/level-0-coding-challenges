function numberToTime(number) {
  let hours = Math.floor(number / 60);
  let minutes = number % 60;

  let hourStr = "hour";
  let minuteStr = "minute";

  if (hours === 0 || minutes === 0) {
    hourStr += "s";
    minuteStr += "s";
    return hours + " " + hourStr + ", " + minutes + " " + minuteStr;
  }
    if (hours === 0 || hours > 1) {
    hourStr += "s";
    return hours + " " + hourStr + ", " + minutes + " " + minuteStr;
  }  
  if (minutes === 0 || minutes > 1) {
    minuteStr += "s";
    return hours + " " + hourStr + ", " + minutes + " " + minuteStr;
  } 
  else {
    return hours + " " + hourStr + ", " + minutes + " " + minuteStr;
  }
}

console.log(numberToTime(61));
console.log(numberToTime(62));
console.log(numberToTime(133));
console.log(numberToTime(59));
console.log(numberToTime(120));
