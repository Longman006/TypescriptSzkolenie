
export { }


function getProperty(obj: type, key: typ) {
    return obj[key]
}


function pick(obj: type, keys: type) {
    return keys.reduce((acc, key) => {
        acc[key] = obj[key]
        return acc
    }, {})
}