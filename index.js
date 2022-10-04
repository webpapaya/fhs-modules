function createTimeout(timeoutInMS) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve()
        }, timeoutInMS)
    })
}

createTimeout(1000)
    .then(() => {
        console.log('after timeout 1');

        return createTimeout(1000)
            .then(() => {
                console.log('after timeout 2');

                return createTimeout(2000)
                    .then(() => console.log('after timeout 3'))
            })
    })
    .then(() => createTimeout(1000))
    .then(() => {
        console.log('after timeout 4')
    })

// delay 1000
// first
// delay 2000
// second
// delay 2000
// third