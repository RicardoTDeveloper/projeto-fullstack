const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv').config()
const socketio = require('socket.io')
const http = require('http')


const routes = require('./routes')

const app = express();
const server = http.Server(app)
const io = socketio(server)

const connectedUsers = {}
// process.env.DB_HOST
mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

io.on('connection', socket => {
    
    const {user_id} = socket.handshake.query
    connectedUsers[user_id] = socket.id;
    console.log(socket.handshake.query);
    
})

app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = connectedUsers

    return next()

})

app.use(cors())
app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, '..', '..', 'uploads')));
app.use(routes);

 
server.listen(3333);

