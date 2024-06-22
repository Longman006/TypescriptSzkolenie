
export { }

type Message = { message: string } | string // | number


function getMessage(msg: Message): string {
    if (typeof msg === 'string')
        return msg

    if ('message' in msg)
        return msg.message

    msg satisfies never
    throw new Error('Invalid message')
    return ''
}

// @ts-expect-error
getMessage(123)

type MessageOf<T> = T extends { message: string } ? T['message'] : never

type result1 = MessageOf<Message>
type result2 = MessageOf<string> | number
type result3 = MessageOf<{ message: 'test' }>

// type Flatten<T> = T extends Array<unknown>? T[0] : T
type Flatten<T> = T extends Array<unknown> ? T[number] : T

type res1 = Flatten<string[][]>
type res2 = Flatten<string>


type keysunion = 'id' | 'name' | never //  "id" | "name"


type OnlyStrings<T> = T extends string ? T : never

// type result4 = OnlyStrings<'id' | 'name' | never | never>
type result4 = OnlyStrings<'id' | 'name' | 123 | { v: 'placki' }>


type Playlist = {
    id: string
    name: string
    public: boolean
}

// type Pick<T, K extends keyof T> = {
//     // [key in K]: T[K];
//     [key in K]: T[key];
// };

type KeysOfPlaylist = keyof Playlist

type StringsWithoutId<T> = T extends 'id' ? never : T

type PlaylistKeysWithoutID = StringsWithoutId<keyof Playlist>

type PlaylistWithoutId1 = Pick<Playlist, keyof Playlist>
type PlaylistWithoutId2 = Pick<Playlist, 'name' | 'id'>
type PlaylistWithoutId3 = Pick<Playlist, PlaylistKeysWithoutID>

type Exclude<T, U> = T extends U ? never : T
type OmitPlaylistId = Pick<Playlist, Exclude<keyof Playlist, 'id'>>

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type withoutID = Omit<Playlist, 'id'>