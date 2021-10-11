function countVowels(sentence) {

  var uniqueVowels = '';
  var vowels = sentence.match(/[aeiou]/g).join(","); // Extracting the vowels

  for(let i = 0; i < sentence.length; i++) {
      if(uniqueVowels.indexOf(vowels.charAt(i)) < 0) {  
        uniqueVowels += vowels.charAt(i);
      }  
  }
  console.log('Vowels: ' + uniqueVowels);
}

countVowels("UmuziU");

