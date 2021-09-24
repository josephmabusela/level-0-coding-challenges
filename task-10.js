function commonLetters(str1, str2) {

    var sameletters = [];
    let common = str2.split("");

    for (letter of str1) {
        let char = common.findIndex(i => i === letter);
        if(char >= 0) {
            sameletters.push(letter);
            common.splice(char, 1);
        }
    }
    console.log( "Common letters: " + sameletters);
}

commonLetters("abcd"," aad");