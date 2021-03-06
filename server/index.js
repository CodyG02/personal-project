const express = require('express')
const massive = require('massive')
require('dotenv').config()
const session = require('express-session')
const authCtrl = require('./authController')
const userRunCtrl = require('./userRunController')
const runCtrl = require('./runController')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const path = require('path')

const app = express()

app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))


app.post("/api/auth/register", authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
app.delete('/api/auth/logout', authCtrl.logout)
app.get('/api/auth/user', authCtrl.userSession)

app.get('/api/user/runs', userRunCtrl.savedRuns)
app.post('/api/user/runs/:run_id', userRunCtrl.addRun)
app.put('/api/user/runs/:user_run_join_id',  userRunCtrl.editRun)
app.delete('/api/user/runs/:user_run_join_id', userRunCtrl.deleteRun)

app.get('/api/runs', runCtrl.getRuns)

app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('DB Connected')
    app.listen(SERVER_PORT, () => console.log(`listening to port ${SERVER_PORT}`))
})