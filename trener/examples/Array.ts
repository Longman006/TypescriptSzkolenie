export { }

// Infered types
//             kola, kwadraty, figury   -> ( null | {} )[]
// const array = [123, '234', true, [], {}, null]

//  (string | number | boolean | never[] | null)[]
let array = [123, '234', true, [], null]
/*  */array = ['234', true, 123, null]
/*  */array = array.reverse()


// typeof array == 'object' // true // JS
type ArryT = typeof array // TS;


// Infered from control flow
array[0] = 'test'
const elem = array[0] // string


// Typing Arrays
const numbers1: number[] = [1, 2, 23]

// Generic type 'Array<T>' requires 1 type argument(s).ts(2314)
const numbers: Array<number> = [123]
const strings: Array<string> = ['123']
const booleans: Array<boolean> = [true]
const modes: Array<'on' | 'off'> = ['off', 'on']






// Type Nested Array 
// const ticktactoe: ('X' | 'O' | ' ')[][] = [
// const ticktactoe: Array<Array<'X' | 'O' | ' '>> = [


type ValidMoves = 'X' | 'O'
type GameCell = ValidMoves | ' '
type GameRow = Array<GameCell>
type TickTackToe = Array<GameRow>

const ticktactoe: TickTackToe = [
    ["X", "O", "X"],
    ["O", " ", " "],
    ["X", "O", "X"],
];

let nextMove: ValidMoves = 'O'