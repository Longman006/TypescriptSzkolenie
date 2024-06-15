/// <reference path="types.d.ts" />

import { substract, divide, multiply, showPersonName, placki } from './lib'
import React from 'react' 


// window.location // No 'DOM' in tsconfig lib:[]

process.env; // @types/node

[].toReversed() // lib: 'Es2023'

// http://caniuse.com/ 
// https://github.com/zloirock/core-js
  
React.createElement(123)
React.placki // Extended declaration!


const add = (a: number, b: any) => {
    return a + b
}


multiply(1,3)
console.log(add(1, 2))
console.log(substract(3, 2))
console.log(divide(3, 2))

showPersonName({
    id: null,
    name: 'Alice',
    age: 18
})


class Testowa {
    #ukryte = 123
    static statyczna() {
        throw ' blad!'
    }
}

Testowa.statyczna()



// type Person = {
//     name: string;
//     id: string | null;
//     age: number | undefined;
// }