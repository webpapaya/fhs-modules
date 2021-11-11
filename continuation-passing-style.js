function multiplyBy2(numberToMultiply, whenDone) {
    setTimeout(() => { 
        whenDone(numberToMultiply * 2) 
    }, 2000)
}

function log1(statement) {
    console.log(statement)
}

function log2(statement) {
    console.log('log2', statement)
}

multiplyBy2(3, (result1) => {
    log1(result1)

    multiplyBy2(5, (result2) => {
        log2(result2)

        multiplyBy2(6, (result3) => {
            log1(result3)
        })
    })
})


const createTimeout = (timeout) => {
    new Promise((resolve, reject) => {
        if (timeout === 0) {
            reject()
        } else {
            setTimeout(() => resolve(), timeout)
        }
    })
}

createTimeout(1000)
    .then(() => { console.log('1') })
    .then(() => createTimeout(0))
    .then(() => { console.log('2') })
    .then(() => createTimeout(1000))
    .then(() => { console.log('3') })



const createTimeout = (timeout) => {
    // TODO: implement me
}
    
createTimeout(2000)
    .then(() => { console.log('1') })
    .then(() => createTimeout(4000))
    .then(() => { console.log('2') })
    .then(() => createTimeout(4000))
    .then(() => { console.log('3') })
