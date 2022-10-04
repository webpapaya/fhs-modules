function resolveValueIn(value, timeoutInMS) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(value) }, timeoutInMS)
    })
}

const myFunction = function () {
    return resolveValueIn("first", 1000)
        .then(function (arg) {
            console.log(arg)
            return resolveValueIn("second", 2000)
        })
        .then(function (arg) {
            console.log(arg);
            return resolveValueIn("third", 3000)
        })
        .then(function (arg) {
            console.log(arg)
        });
}


async function myAsyncfunction() {
    await myFunction()
}

myAsyncfunction()