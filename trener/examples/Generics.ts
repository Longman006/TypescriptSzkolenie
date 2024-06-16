import { Playlist } from "../../src/app/core/types/Playlist"



// Not very usefull Generics ;-)
declare function parse<T>(data: string): T
declare function serialize<T>(object: T): string


// const res1 = parse<Playlist>('')
// const res1 = parse('') as Playlist
// const res1: Playlist = parse('')
// const res2 = serialize({})

const identity = <T>(x: T): T => x

const x = identity('test') // "test"
const y = identity({ v: [{ name: 'placki' }] })
const name = y.v[0].name // string


// :
type Snapshot<T> = {
    timestamp?: Date,
    value: T
    // value: any // Any looses type
}
// txtSnap.value.???? // Any looses type

const txtSnap: Snapshot<string> = { value: 'placki' }
const numberSnap: Snapshot<number> = { value: 123 }

const Incepcja: Snapshot<Snapshot<Snapshot<'placki'>>> = {
    value: {
        value: {
            value: 'placki'
        }
    }
}

// Extract from Generic and retain type:

function readFromSnapshot(snap){
    return snap.value
}
const result = readFromSnapshot(txtSnap)