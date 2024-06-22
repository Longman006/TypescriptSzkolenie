
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


type OnlyStrings<T> = ???