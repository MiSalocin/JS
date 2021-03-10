function convertCelciusFarenheint(temp) {
    let isCelcius = temp.toUpperCase().includes('C')
    let isFarenheint = temp.toUpperCase().includes('F')

    // Error checking
    if (!isCelcius && !isFarenheint) {
        throw new Error("Invalid temperature")
    }

    // convert F -> C
    let updatedDegree = Number(temp.toUpperCase().replace("F", ""))
    let formula = (fareheint) => (fareheint - 32) * 5 / 9
    let degreesSign = "C"

    // convert C -> F
    if (isCelcius) {
        updatedDegree = Number(temp.toUpperCase().replace("C", ""))
        formula = (celcius) => celcius * 9 / 5 + 32
        degreesSign = "F"
    }

    return formula(updatedDegree).toFixed(2 + degreesSign)

}

try {
    console.log(convertCelciusFarenheint("0C"))
    console.log(convertCelciusFarenheint("0F"))
} catch (err) {
    console.log(err)
}
