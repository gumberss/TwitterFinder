const express = require('express')
var cors = require('cors')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

//var process = process || require('./configuration/configuration')


app.use((req, res, next) => {
    req.io = io
    return next()
})
app.use(cors())
app.use(express.json())
app.use(require('./routes'))

server.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000')
})