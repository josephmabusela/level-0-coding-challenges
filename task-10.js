function commonLetterLetters(string1, string2) {

    let sameLetters = [];
    let commonLetter = string2.split("");

    for (letter of string1) {
        let char = commonLetter.findIndex(i => i === letter);
        if(char >= 0) {
            sameLetters.push(" " + letter);
            commonLetter.splice(char, 1);
        }
    }
    let unique =  [...new Set([...sameLetters])].join(',');
    console.log( "CommonLetter letters: " + unique);
}

commonLetterLetters("Hello","Hello");