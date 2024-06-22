

export { }

interface Collection<T> {
    add(item: T): void
    remove(): T | undefined
}

// LIFO
class Stack<T> implements Collection<T> {

    constructor(private _items: T[] = []) { }

    add(item: T) {
        this._items.push(item)
    }

    remove() {
        return this._items.pop()
    }
}

// FIFO
class Queue<T> implements Collection<T> {

    constructor(private _items: T[] = []) { }

    add(item: T) {
        this._items.unshift(item)
    }

    remove() {
        return this._items.pop()
    }
}


const stack = new Stack([1, 2, 3])
stack.add(1)
const num = stack.remove()

const queue = new Queue(['123', '233'])
queue.add('2')
const str = queue.remove()


function takeCollection<T extends Collection<unknown>>(coll: T) {
    return coll
}

takeCollection(stack).add(123)
takeCollection(queue).add('234')





/* 
2 Generics - not One!

interface Collection<T> {
    add<T>(item: T): void
    remove(): T
}
 
const x = {} as Collection<string>

x.add(1123)
x.remove() //string



*/