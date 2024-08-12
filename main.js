const wordArray = ["Glue   ", "wOOd", "   naIL   "]

for (let i = 0; i < wordArray.length; i++) {
    console.log(wordArray[i])
}

for (let word of wordArray) {
    console.log(word)
}


function cleanUpArray() {
    let upperCaseArray = [];
    for (let word of wordArray) {
        upperCaseArray.push(word.toLowerCase().trim())
    }
    return upperCaseArray
}

console.log(cleanUpArray())


const fruits = [
    "Lemon",
    "Mangos",
    "Apple",
    "Pear",
    "Grapes",
    "Kiwi",
    "Fig",
    "Peach",
    "Grapefruit",
    "Watermelon",
    "Orange",
    "Banana",
]

const stringArrayReverser = (arr) => {
    let reversedStringArray = [];
    for (let i = 0; i < arr.length; i++) {
        reversedStringArray.push(arr[i].split("").reverse().join(""))
    }
    return reversedStringArray
}

console.log(stringArrayReverser(fruits))

// Prøv selv: fortsett på funksjonen over for å gjøre uppercase på første bokstav (eks: "Nomel")


const makeNumberArray = (size, maxNum) => {
    let numArray = [];
    for (let i = 0; i < size; i++) {
        numArray.push(Math.round(Math.random() * maxNum))
    }
    console.log(numArray)
    return numArray
}




const maxFinder = (arr) => {
    let biggest = 0;
    for (let val of arr) {
        if (val > biggest) {
            biggest = val
        }
    }
    return console.log(`Biggest number is ${biggest}`)
}

maxFinder(makeNumberArray(10, 1000))

const shortendMaxAndMinFinder = (arr) => {
    const biggest = Math.max(...arr)
    const smallest = Math.min(...arr)
    return console.log(`Biggest number is: ${biggest}, smallest number is: ${smallest}`)
}

shortendMaxAndMinFinder(makeNumberArray(10, 50))


function generatePassword(len) {
    let password = "";
    while (password.length < len) {
        password += String.fromCharCode(Math.floor(Math.random() * 87) + 35)
    }
    return password
}

console.log(generatePassword(5))

const PLU = [4823, 7591, 1043, 8362, 6457, 2938, 5784, 9246, 3801, 1679, 4210, 8524, 7392, 6148, 2894, 9357, 7830, 5192, 4067, 6721];

console.log(PLU)


let verdi = "noe"
console.log(verdi)
verdi = "noe annet"
console.log(verdi)

console.log(PLU[0] !== "4823")




