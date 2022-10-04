const resolvedPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 10000)
})

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(1), 10000)
})g


setInterval(() => console.log({ resolvedPromise, rejectedPromise }), 1000)