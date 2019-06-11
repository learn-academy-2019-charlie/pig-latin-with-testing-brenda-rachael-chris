// // Global variables
var outputArray = []
var vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y']


// Function to split userInput sentence into an array
const convertsToWords = (userInput) => {
    userInput = document.getElementById('j-input').value
    return checksEachWord(userInput.split(' '))
}

// Function to iterate through each word in userInputArray
const checksEachWord = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (startsWithY(arr[i])) {
            pushesYWord(arr[i])
        } else if (beginsWithVowel(arr[i])) {
            pushesVowelWord(arr[i])
        } else if (includesQu(arr[i])) {
            pushesQuWord(arr[i])
        } else {
            beginsWithCons(arr[i])
        }
    }
    return joinsArray(outputArray)
}

// Function to join outputArray into a string
const joinsArray = (arr) => {
    document.getElementById("j-output").innerHTML = arr.join(' ')
}

// Function to check if word starts with "y"
const startsWithY = (str) => {
    if(str.charAt(0) === "y") {
        return true
    }
}
// Create function to move "y" to end of word
const pushesYWord = (str) => {
    let firstLetter = str.slice(0,1)
    outputArray.push(str.substring(1) + '-' + firstLetter + "ay")
}

// Function to check for vowels and return boolean
// For words beginning with a vowel, add "way" to the end.
const beginsWithVowel = (arr) => {
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === arr[0].charAt(0)) {
      return true
    }
  }
}

// Function to push word beginning with vowel to outputArray
const pushesVowelWord = (str) => {
  outputArray.push(`${str}-way`)
}


// Check if string contains 'qu'
const includesQu = (str) => {
    if(str.includes("qu")) {
        return true
    }
}
// If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
const pushesQuWord = (str) => {
    // Find where 'u' exists in string
    let uIndex = str.indexOf("q") + 1
    // Create a string of letters before and including 'u'
    let preU = str.slice(0,uIndex + 1)
    outputArray.push(str.substring(uIndex + 1) + '-' + preU + "ay")
}

// Create function to find position of first vowel after consonants
const beginsWithCons = (str) => {
    var userInputArrayLetters = str.split('')
    let findCons = userInputArrayLetters.filter(value => vowels.includes(value))
    let indexOfCons = userInputArrayLetters.indexOf(findCons[0])
    let preCons = str.slice(0,indexOfCons)
// Create function to move letters before first vowel to end of word plus "ay"
    outputArray.push(str.substring(indexOfCons) + '-' + preCons + "ay")
}


console.log(convertsToWords(userInput));
