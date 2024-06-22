
// Structural (TS) vs Nominal (JAVA) typing

type Vector = { x: number, y: number, length: number }
type Point = { x: number, y: number }

let v: Vector = { x: 123, y: 234, length: 234 }
let p: Point = { x: 123, y: 234 }

// Covariance
// v = p; // Error: Property 'length' is missing in type 'Point' but required in type 'Vector'.ts(2741)
p = v;

// p.length // Error: Property 'length' does not exist on type 'Point'.ts(2339)  - Infomation hiding
(p as Vector).length // JS -> OK!


// Covariance
function drawV(v: Vector) { }
function drawP(p: Point) { }

drawV(v)
// drawV(p) // missing length
drawP(v)
drawP(p)


// ContraVariance
let callbackP: (p: Point) => void
let callbackV: (v: Vector, color: string) => void


// callbackP = (v:Vector) => {} // Error: missing length
callbackV = (p: Point) => { }
callbackV = (p: Vector) => { }
callbackV = (event) => { }

callbackV = () => { }
callbackP = () => { }


interface User {
    name: string
}
interface Moderator extends User {
    isModerator: true
}
interface Admin extends Moderator {
    isAdmin: true
}

type AsyncUser = Promise<User>
type AsyncModerator = Promise<Moderator>
type AsyncAdmin = Promise<Admin>

function showUser(user: AsyncModerator) { }

// showUser({} as AsyncUser)
showUser({} as AsyncModerator)
showUser({} as AsyncAdmin)