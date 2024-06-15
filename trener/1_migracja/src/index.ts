import { substract, divide } from './lib.js'

const add = (a: number, b: any) => {
    return a + b
}

console.log(add(1, 2))
console.log(substract(3, 2))
console.log(divide(3, 2))


class Testowa {
    #ukryte = 123
    static statyczna() {
        throw ' blad!'
    }
}

Testowa.statyczna() 