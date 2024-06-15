
import express from 'express'
import session from 'express-session'

const app = express()

app.use(session({ secret: 'keyboard cat', }))

app.use(req => {
    if (req.headers['authorization']) {
        (req as any).user = { name: 'Admin' }
    }
})


app.get('/', (req, res) => {

    (req as any).user.name 

    res.send('<h1>Hello!</h1>')
})

const PORT = process.env.PORT || '8080'
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/`);
})

