let note = 12

function scoreCalc(note) {
    let scoreA = note >= 90 && note <= 100
    let scoreB = note >= 80 && note < 90
    let scoreC = note >= 70 && note < 80
    let scoreD = note >= 60 && note < 70
    let scoreF = note >= 0 && note < 60

    let finalScore

    if (scoreA) {
        finalScore = 'A'
    } else if (scoreB) {
        finalScore = 'B'
    } else if (scoreC) {
        finalScore = 'C'
    } else if (scoreD) {
        finalScore = 'D'
    } else if (scoreF) {
        finalScore = 'F'
    } else {
        finalScore = 'Out of bounds'
    }
    return finalScore
}

console.log(scoreCalc(110))
console.log(scoreCalc(-1))
console.log(scoreCalc(95))
console.log(scoreCalc(85))
console.log(scoreCalc(75))
console.log(scoreCalc(65))
console.log(scoreCalc(5))
