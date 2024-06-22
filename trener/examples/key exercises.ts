
export { }


// function getProperty(obj: object, key: keyof {} ) {
// function getProperty(obj: object, key: keyof typeof obj) {
// function getProperty<T extends object>(obj: T, key: keyof typeof obj) {
// function getProperty<T extends object>(obj: T, key: keyof T) {

function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

// OK
getProperty({ a: 1, b: 2 }, 'a')

// @ts-expect-error
getProperty({ x: 'y', z: 'q' }, 'a')




function pick(obj: object, keys: type) {
    return keys.reduce((acc, key) => {
        acc[key] = obj[key]
        return acc
    }, {})
}