function printVowels(str) {
    //let vowels = ["a","e","i","o","u","A","E","I","O","U"];

    vowels = str.match(/[aeiou]/gi);

    vowels.concat(['']).forEach(letter => { console.log(letter);});

    console.log(vowels)
}
console.log(printVowels("Umuzi"));