var outputArray = []
var vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y']


describe("startsWithY", () => {
    test ("checks if a string begins with the letter y", () => {
        expect(startsWithY('yellow')).toBe(true)
    })
})

const startsWithY = (str) => {
    if(str.charAt(0) === "y") {
        return true
    }
}
describe("pushesYWord", () => {
    test ("changes word that starts with y to piglatain", () => {
        expect(pushesYWord('yellow')).toEqual(["ellow-yay"])
    })
})

const pushesYWord = (str) => {
    var outputArray = []
    let firstLetter = str.slice(0,1)
    outputArray.push(str.substring(1) + '-' + firstLetter + "ay")
    return outputArray
}

describe("beginsWithVowel", () => {
    test ("checks if string index 0 is equal to a vowel", () => {
        expect(beginsWithVowel('apple')).toBe(true)
    })
})

const beginsWithVowel = (arr) => {
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === arr[0].charAt(0)) {
      return true
    }
  }
}
describe("pushesVowelWord", () => {
    test ("changes word beginning with vowel to pig latin", () => {
        expect(pushesVowelWord('apple')).toEqual(["apple-way"])
    })
})
const pushesVowelWord = (str) => {
  outputArray.push(`${str}-way`)
  return outputArray
}
describe("includesQu", () => {
    test ("checks if word contains a qu and returns it to be true ", () => {
        expect(includesQu('question')).toEqual(true)
    })
})
const includesQu = (str) => {
    if(str.includes("qu")) {
        return true
    }
}

describe("pushesQuWord", () => {
    test ("removes letters from string before the letter u, adds a hyphem, adds the removed string, adds ay ", () => {
        expect(pushesQuWord('question')).toEqual(["apple-way", "estion-quay"])
    })
})

const pushesQuWord = (str) => {
    // Find where 'u' exists in string
    let uIndex = str.indexOf("q") + 1
    // Create a string of letters before and including 'u'
    let preU = str.slice(0,uIndex + 1)
    outputArray.push(str.substring(uIndex + 1) + '-' + preU + "ay")
    return outputArray
}

describe("beginsWithCons", () => {
    test ("rearrange words beginning with consonants by finding first vowel in string", () => {
        expect(beginsWithCons('drama')).toEqual(["apple-way", "estion-quay", "ama-dray"])
    })
})
const beginsWithCons = (str) => {
    var userInputArrayLetters = str.split('')
    let findCons = userInputArrayLetters.filter(value => vowels.includes(value))
    let indexOfCons = userInputArrayLetters.indexOf(findCons[0])
    let preCons = str.slice(0,indexOfCons)
// Create function to move letters before first vowel to end of word plus "ay"
    outputArray.push(str.substring(indexOfCons) + '-' + preCons + "ay")
    return outputArray
}
