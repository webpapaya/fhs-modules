function resolveValueIn(timeoutInMS) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve() }, timeoutInMS)
    })
}

async function myFunction() {
    await resolveValueIn(1000)
    console.log("first")

    await resolveValueIn(2000)
    console.log("second")

    await resolveValueIn(3000)
    console.log("third")
}


async function myAsyncfunction() {
    await myFunction()
}

myAsyncfunction()