// global variables
var userInput = "question"

// For words beginning with a vowel, add "way" to the end.
// const beginsWithVowel = (str) => {
//     let pigLatin = ""
//     if (str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u") {
//         pigLatin = `${str}-way`
//     }
//     return pigLatin
// }
// console.log(beginsWithVowel(userInput));

// For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
// For words beginning with "y", treat "y" as a consonant.





// If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
//use substring to push to end

const quWords = (str) => {
    if (str[0,1]=== "q","u"){
        let qu = str.slice(0,2)
        return str.substring(2) + qu + "ay"
    }
}
console.log(quWords(userInput));
