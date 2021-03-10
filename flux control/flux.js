let temp = 37.4
let word = "pneumoultramicroscópicossilicovulcanoconiótico"
let names = ["Nicolas", "Gabriela", "Júlia", "Gabriel", "Alana", "Leandra"]
const people = {
    name: "Nicolas",
    age: 17,
    weight: 63.5,
    class: "warlock",
}

/* if... else */
if (temp >= 37.5)
    console.log("TÁ PEGANDO FOGO BIXO")
else if (temp >= 37 && temp < 39.5)
    console.log("É só uma gripezinha")
else
    console.log("Tudo bem")

/* switcher */
switch (temp) {
    case 30:
        console.log(30)
        break
    case 31:
        console.log(31)
        break
    case 32:
        console.log(32)
        break
    default:
        console.log("default")
        break
}

/* Trow and Try/catch */
function doYouKnowWhoIAm(awnsner = null) {
    if (awnsner == null) {
        throw "I AM THE MAN WHO GONNA BURN YOUR HOUSE DOWN"
    }
    console.log("tá bom -_-")
}

try {
    doYouKnowWhoIAm()
} catch (error) {
    console.log(error)
}

console.log("Continua!")

//for... of
for (let char of word) {
    console.log(char)
}

//for... in
for (let thing in people) {
    console.log(thing)
    console.log(people[thing])
}