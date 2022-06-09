const express = require('express')
const connectiondb = require('./configration/db')
const app = express()
require("dotenv").config()
const port = process.env.PORT
const UserRouter = require("./modules/Users/UserRoutes")
const PostRouter = require("./modules/Posts/PostsRoutes")
const cors = require('cors')
app.use(express.json())

app.use(
    cors({
      credentials: true,
      origin: "*",
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'origin',
        'Access-Control-Allow-Headers',
      ],
      optionsSuccessStatus: 204,
      preflightContinue: false,
    }),
)
app.use(UserRouter)
app.use(PostRouter)
 
connectiondb()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))