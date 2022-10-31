const myFunction = function () {
    return "hallo";
}

console.log(myFunction())


const callAndLogResult = (fn) => console.log(fn())

callAndLogResult(myFunction)