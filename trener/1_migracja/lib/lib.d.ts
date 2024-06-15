
// tsc --declaration --emitDeclarationOnly --allowJs  ./src/lib.js

/**
 * Multiply numbers
 * @param a 
 * @param b 
 */
export function multiply(a: number, b: number): number


export const placki = 123


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
export function substract(a: number, b: number): number;

/**
 * Function Dividing numbers
 * @param {number} a Divider
 * @param {number} b Dividee
 * @returns {number}
 */
export function divide(a: number, b: number): number;

/**
 * Shows personal information
 * @param {Person} person
 * @returns
 */
export function showPersonName(person: Person): string;


export type Person = {
    name: string;
    id: string | null;
    age: number | undefined;
};
