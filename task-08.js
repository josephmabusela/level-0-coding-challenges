function numberToTime(time) {
    
let hour = Math.floor(time);
let decimal = time - hour;

let minute = 1/60

decimal = minute * Math.round(decimal / min);

var min = Math.floor(decimal * 60) + "";

if (min.length < 2) {
    min = 0 + min;
}

number = hour + ":" + minute

return number

}

console.log(numberToTime(2))