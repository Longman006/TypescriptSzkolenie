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

// function readFromSnapshot<T>(snap: Snapshot<T>): T {
function readFromSnapshot<T>(snap: Snapshot<T>) {
    return snap.value
}
const result1 = readFromSnapshot(txtSnap) // string
const result2 = readFromSnapshot(numberSnap) // number


// Pagination
type Album = { type: 'album' }
type Podcast = { type: 'podcast' }

type PagingObject<Item> = {
    // items: Album[]
    // items: Podcast[],
    items: Item[],
    total?: number, // 200
    count?: number, // 20
    page?: number // 5
}
type Albums = PagingObject<Album>
type Podcasts = PagingObject<Podcast>

const results: PagingObject<Album> = { items: [{} as Album] }
// const results: PagingObject<Podcast> = { items: [{} as Album] } // Error


// Generic inference - args, return value, etc.

function getFirst<T>(arr: T[]): T {
    return arr[0]
}


const num = getFirst<number>([123, 123])
// const str = getFirst([]) // never
// const str = getFirst(['text', 'ala']) // string - inferef from arguments
const str = getFirst(['text', 'ala', 123, true]) // string | number | boolean

const res: 'placki' = getFirst(['placki']) // Infered from return


// Constraints <T extends ???>

// function printName(person: { name: string }) {
function printName<T extends { name: string }>(person: T) {
    return person.name
}

printName({ name: '123', surname: 'placki' })