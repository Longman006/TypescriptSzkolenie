// @ts-check
 
// JSDoc
// https://jsdoc.app/

// @ts-ignore
export function multiply(a, b) {
    return a * b
}


/**
 * @typedef Person  
 * 
 * @property {string} name
 * @property {string?} id
 * @property {number | undefined} age
 */

/**
 * Odejmuje liczby 
 * 
 * @param {number} a Odjemnik
 * @param {number} b Odjemna
 * @returns {number} Wynik
 */
export function substract(a, b) {
    return a - b
}    

/**
 * Function Dividing numbers 
 * @param {number} a Divider
 * @param {number} b Dividee
 * @returns {number}
 */
export function divide(a, b) {
    return a / b
}    

/**
 * Shows personal information
 * @param {Person} person 
 * @returns 
 */
export function showPersonName(person) {
    // return person.namerr // Error witth @ts-check
    return person.name
}



// @ts-ignore
showPersonName({
    name: 'Placki',
    age: 18,
})

// @ts-expect-error
showPersonName({
    name: 'Placki',
    age: 18,
})
