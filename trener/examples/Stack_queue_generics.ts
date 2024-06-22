

export {} 

interface Collection{
    add()
    remove()
}


class Stack{
    add(){}
    remove(){}
}

class Queue{
    add(){}
    remove(){}
}


const stack = new Stack([1,2,3])
stack.add(1)
const num = stack.remove()

const queue = new Queue(['123','233'])
queue.add('2')
const str = queue.remove()