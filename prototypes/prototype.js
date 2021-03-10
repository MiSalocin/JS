// Transformando número quebrado em
// número com vírgula e 2 casas decimais
let number = 1234.56789
console.log(number.toFixed(3).replace(".", ","))

// Changing text cases
let word = "Hello World, i'm so happy today!!"
console.log(word.toUpperCase())
console.log(word.toLowerCase())
console.log("")

// Locating text elements
console.log(word.includes("Amor"))
console.log(word.includes("Hello"))
console.log("")

// Spliting Phares
let myArray0 = word.split(" ")
console.log(myArray0)
console.log("")

// Joining arrays
let mix = myArray0.join(" ")
console.log(mix)
console.log("")

// Creating arrays
let myArray1 = ["Hello", "World", "I'm so happy"]
let myArray2 = new Array(10)
console.log(myArray1)
console.log(myArray2)
console.log("")

// Creating arrays from strings letters
console.log(Array.from(word))
console.log("")

// Managing arrays
let languages = ["Java", "JS", "PHP"]
languages.push("HTML")      // adds to the end of the array
languages.unshift("C++")    // adds to the start of the array
languages.pop()             // remove the last item from the array
languages.shift()           // remove the first item from the array
console.log(languages.slice(0, 2)) // show an interval of the array
languages.splice(1, 1)      // remove an especifc interval from the array
let index = languages.indexOf("Java") // find the position of an element
console.log(languages)