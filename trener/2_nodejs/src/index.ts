
import express from 'express'
import session from 'express-session'

const app = express()

app.use(session({ secret: 'keyboard cat', }))


app.use(req => {
    if (req.headers['authorization']) {
        req.user = { name: 'Admin' }
    }
})

app.get('/', (req, res) => {


    if (req.user) {

        req.user.name

        res.send('<h1>Hello! ' + req.user.name + '</h1>')
    } else
        res.send('<h1>Hello!</h1>')
})

const PORT = process.env.PORT || '8080'
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/`);
})


// @types\express-serve-static-core\index.d.ts
declare global {
    namespace Express {
        // These open interfaces may be extended in an application-specific manner via declaration merging.
        // See for example method-override.d.ts (https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/method-override/index.d.ts)
        interface Request {
            user?: { name: string }
        }
        interface Request {
            placki?: { name: string }
        }
        // interface Response {}
        // interface Locals {}
        // interface Application {}
    }
}
