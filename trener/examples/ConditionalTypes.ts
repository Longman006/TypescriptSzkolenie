
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