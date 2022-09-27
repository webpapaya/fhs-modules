let value = 0

export function increment() {
    value++
}

export function getValue() {
    return value
}

function printValue() {
    console.log(getValue())
}

export default printValue;
