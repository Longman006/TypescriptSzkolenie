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


