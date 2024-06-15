

const add = (a: number, b: any) => {
    return a + b
}

add(1, 2)

// add(1, '2')
// add({}, '2')


class Testowa3{
    #ukryte = 123
    static statyczna(){
        throw ' blad!'
    }
}