import { Playlist } from "../../src/app/core/types/Playlist"

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

// -----------------------------------

const roles/* : AnyRole */ = {
    'admin': 'ADMIN_ROLE',
    'user': 'USER_ROLE',
    'moderator': 'MODERATOR_ROLE',
}

type Roles = keyof typeof roles // 'admin' | 'user' | 'moderator'


// function setUserRole(user: any, role: 'admin' | 'user' | 'moderator') {
function setUserRole(role: Roles, user: UserTypes) {
    if (user.role === role) {
        return user
    }
}

type UserTypes = User | Admin | Moderator
interface User { id: string, role: Roles }
interface Admin extends User { role: 'admin' }
interface Moderator extends User { role: 'moderator' }


// function checkUserRole(user: UserTypes, role: ??) { }
function checkUserRole<T extends UserTypes>(user: T, role: T['role']) { }

checkUserRole({ id: '123', role: 'admin' }, 'admin')





function pick<T, K extends keyof T>(obj: T, keys: K[]) {
    return keys.reduce((result, key) => {
        result[key] = obj[key]
        return result
    }, {} as Pick<T, K>)
}

const result = pick({ x: 1, y: 2, z: 3 }, ['x', 'y'])
// @ts-expect-error
result.z

// as {
//     [key in K]: T[key]
// }
// type x = Pick<Playlist, 'id'>