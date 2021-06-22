function printVowels(str) {
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];

    let newVowels = []

    vowels = str.match(/[aeiou]/gi);
    
    if (vowels !== newVowels) {
        newVowels.push(vowels)
    }
    else {
        delete vowels
    }

    newVowels.join(' ');

    return "Vowels: " + newVowels
}
console.log(printVowels("Umuzi"));

