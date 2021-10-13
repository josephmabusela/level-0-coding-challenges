function countVowels(sentence) {

  let uniqueVowels = [];
  let vowels = ['a','e','i','o','u', 'A','E','I', 'O','U']; 

  for(let i = 0; i < sentence.length; i++) {
    for(let j = 0; j < vowels.length; j++) {
      if(sentence[i].toLowerCase() == vowels[j]) {
        uniqueVowels.push(vowels[j]);
      }
    }
 
  }
  let unique =  [...new Set([...uniqueVowels])].join(', ');
  console.log('Vowels: ' + unique);
}

countVowels("Umuzi is home");
