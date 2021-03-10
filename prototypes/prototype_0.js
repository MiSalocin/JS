// conversion vs coersion
// 5 being coersed into string
console.log("9" + 5)
// 9 being coverted to number
console.log(Number("9") + 5)

// dot lenght to discover number lenght
let word = "paralelepípedo"
console.log(word.length)

let pow = 1
for (let i = 1; i < 65; i++) {
    let number = Math.pow(2, pow)
    console.log(String(number).length)
    pow++
}