function printVowels(str) {
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];

    let newVowels = []

    vowels = str.match(/[aeiou]/gi);
    
    if (!vowels.includes(newVowels)) {
        newVowels.push(vowels)
    }
    else {
        delete vowels
    }

    newVowels.join(' ');

    console.log("Vowels: " + newVowels)
    
}

printVowels("Umuzi");

