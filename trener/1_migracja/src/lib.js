
/**
 * @typedef Person
 * @extends Object
 * @property {string} name
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

export function divide(a, b) {
    return a / b
}


function showPersonName(person) {
    return person.namee
}