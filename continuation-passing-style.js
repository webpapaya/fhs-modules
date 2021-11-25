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
    return new Promise((resolve, reject) => {
        if (timeout === 0) {
            reject()
        } else {
            setTimeout(() => resolve(), timeout)
        }
    })
}

const main = async () => {
    await createTimeout(2000)
    console.log('1')

    await createTimeout(4000)
    console.log('2')

    await createTimeout(4000)
    console.log('3')
}
    


createTimeout(1000)
    .then(() => { console.log('1') })
    .then(() => createTimeout(0))
    .then(() => { console.log('2') })
    .then(() => createTimeout(1000))
    .then(() => { console.log('3') })


function University(name) {
    this.name = name
}

University.prototype.isBestUniversity = function () {
    return this.name === "FHS"
}

const fhs = new University("FHS")
console.log(fhs.isBestUniversity())

class University {
    constructor(name) {
        this.name = name
    }

    isBestUniversity() {
        return this.name === 'FHS'
    }
}

const fhs = new University("FHS")
console.log(fhs.isBestUniversity())


const createPromiseListener = () => {
    let returnResolve;
    const promise = new Promise((resolve) => { returnResolve = resolve })
    return {promise, resolve: returnResolve};
}
it("", async () => {
    const { promise, returnResolve } = createPromiseListener()
    runInterceptor(returnResolve)
    await promise
})



