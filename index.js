const express = require('express')
const connectionDB = require('./DB/connection')
const app = express()
require('dotenv').config()
const Userrouter = require('./modules/User/User.Router')
const port = process.env.PORT
app.use(express.json())
app.use(Userrouter)
connectionDB()

app.get('/', (req, res) => res.send('Welcome to our site!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
