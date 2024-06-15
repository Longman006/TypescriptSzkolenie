// /// <reference path="./types.d.ts" />

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

        req.session['placki'] // Fix missing types by merging

        res.send('<h1>Hello! ' + req.user.name + '</h1>')
    } else
        res.send('<h1>Hello!</h1>')
})

const PORT = process.env.PORT || '8080'
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/`);
})


