const myFunctionExpression = function () {
    return "hallo";
}
const myFunctionImplicitReturn = () => 'hallo'
const myFunctionUndefinedReturn = () => { 'hallo' }
const myFunctionExplicitReturn = () => { return 'hallo' }
const myFunctionExplicitObjectReturn = () => {
    return {
        prop: 'irrelevant'
    }
}

const myFunctionImplicitObjectReturn = () => ({
    prop: 'irrelevant'
})

console.log('myFunctionExpression', myFunctionExpression())
console.log('myFunctionImplicitReturn', myFunctionImplicitReturn())
console.log('myFunctionUndefinedReturn', myFunctionUndefinedReturn())
console.log('myFunctionExplicitReturn', myFunctionExplicitReturn())
console.log('myFunctionImplicitObjectReturn', myFunctionImplicitObjectReturn())
console.log('myFunctionExplicitObjectReturn', myFunctionExplicitObjectReturn())


function User() {
    this.age = 0
    setInterval(() => {
        this.age+=1
    }, 1000)
}

window.myUser = new User()


const functionWithDefault = (test = 1) => test
console.log('functionWithDefault', functionWithDefault())
console.log('functionWithDefault', functionWithDefault(2))

const myFunctionWithOptionalConfig = (configA = 1, configB = 2, configC = 3) => {
    console.log(configA, configB, configC)
}

const myFunctionWithNamedArguments = ({ configA = 1, configB = 2, configC = 3 }) => {
    console.log(configA, configB, configC)
}

myFunctionWithNamedArguments({ configC: 5 })



const myArray = [1,2,3,4,5]
console.log('map', myArray.map((value) => value * 2))
console.log('filter', myArray.filter((value) => (value % 2) === 0))
console.log('reduce', myArray.reduce((result, value) => {
    console.log('within reduce', { result, value })
    return `${result},${value}`
}, ''))


const myObjectArray = [
    { prop: 1 },
    { prop: 2 }
]

const modifiedArray = myObjectArray
    .filter((obj) => (obj.prop % 2) === 0)
    .map((obj) => ({ prop: obj.prop }))

myObjectArray[1].prop = 10

console.log(myObjectArray, modifiedArray)


const advanturer = {
    cat: { name: 'Dinah' }
}

const onRouteChange = () => {
    const url = new URL(window.location)
    const domElement = document.querySelector('#content')

    if (url.pathname === '/test1') {
        domElement.innerHTML = 'test1'
    } else if (url.pathname === '/test2') {
        domElement.innerHTML = 'test2'
    } else {
        domElement.innerHTML = 'default'
    }
}

Array.from(document.querySelectorAll('a')).forEach((link) => {
    link.addEventListener('click', (evt) => {
        evt.preventDefault()
        history.pushState({}, '', link.href)
        onRouteChange()
    })
})

onRouteChange()


console.log('dog', advanturer.dog?.name)
console.log('cat', advanturer.cat?.name)

document.querySelector('#myButton').addEventListener('click', () => {
    document.querySelector('#change-me').innerHTML = "Changed"
})


