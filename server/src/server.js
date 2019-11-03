const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv').config()
const socketio = require('socket.io')
const http = require('http')
// const hbs = require('hbs')


const routes = require('./routes')
const Monitor = require('./services/monitor')

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

// Not View engine
// app.set('view options', {layout: false});
// app.use(express.static(__dirname + '/views'))

app.set('view engine', 'hbs')
// app.engine('html', require('hbs').__express);
app.set('views', path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())
app.use(express.json({ limit: '50mb'}));

app.use('/files', express.static(path.resolve(__dirname, '..', '..', 'uploads')));
app.use(routes);

var porta = process.env.PORT || 3333
server.listen(porta, function () {
    Monitor.historico();
});

