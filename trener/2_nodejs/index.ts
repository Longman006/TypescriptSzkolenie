
import express from 'express'
import session from 'express-session'

const app = express()

app(session({ secret: 'keyboard cat', }))


app.get('/', (req, req) => {
    res.send('Hello!')
})


app.listen(process.env.PORT, () => {
    console.log(`listenint on ${process.env.PORT}`);
})

