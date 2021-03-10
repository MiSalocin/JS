// Arrou function and
// Callback function
const doYouKnowWhoIAm = (name) => {
    console.log("before the calback")
    name()
    console.log("after callback")
}

doYouKnowWhoIAm(
    () => {
        console.log("This is an callback")
    })