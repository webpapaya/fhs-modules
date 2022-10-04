function addNumbers (a, b, whenDone) {
    whenDone(a + b)
}

function whenDone(result) {
    console.log(result)
}

addNumbers(1, 2, whenDone)