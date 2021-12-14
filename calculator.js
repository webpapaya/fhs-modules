import {getValue, setValue} from './value.js';

export default function increment() {
    setValue(getValue() + 1)
}

export { getValue } from './value.js'