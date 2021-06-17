function commonLetters(str1, str2) {

    var sametletters = [];
    let common = str2.split("");

    for (letter of str1) {
        let char = common.findIndex(i => i === letter);
        if(char >= 0) {
            sametletters.push(letter)
            common.splice(char, 1)
        }
    }
    return sametletters
}
console.log(commonLetters("abcd", "aad"));