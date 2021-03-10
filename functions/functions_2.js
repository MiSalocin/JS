sayMyName()

// Run with Hoisting
function sayMyName() {
    console.log("Nico")
}

doYouKnowWhoIAm()

// Run without hoisting
var doYouKnowWhoIAm = function () {
    console.log("I AM THE MAN WHO'S GONNA BURN YOUR HOUSE DOWN")
    console.log("WITH THE LEMONS")
}