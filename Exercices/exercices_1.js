let family = {
    income: [2500, 3200, 250.43, 360.455],
    outcome: [320.34, 128.45, 176.87, 1450]
}

function balance() {
    const totalIncome = sum(family.income)
    const totalOutcome = sum(family.outcome)

    const total = totalIncome - totalOutcome
    let itsOk = total >= 0

    let text = "negative"

    if (itsOk) {
        text = "positive"
    }
    console.log(`The balance is ${text}: R$${total.toFixed(2)}`)
}

function sum(array) {
    let total = 0

    for (let value of array) {
        total += value
    }

    return total
}

balance()