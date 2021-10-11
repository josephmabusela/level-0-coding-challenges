function commonLetterLetters(string1, string2) {

    var sameletters = [];
    let commonLetter = string2.split("");

    for (letter of string1) {
        let char = commonLetter.findIndex(i => i === letter);
        if(char >= 0) {
            sameletters.push(" " + letter);
            commonLetter.splice(char, 1);
        }
    }
    console.log( "CommonLetter letters: " + sameletters);
}

commonLetterLetters("abcd","aabd");