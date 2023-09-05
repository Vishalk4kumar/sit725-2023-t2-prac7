let express = require('express');
let app = express();
require('./DBConnection');
let router = require('./Routers/router');
let port = process.env.port || 3000;
const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router)

io.on('connection',(socket)=>{
    console.log('something');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000)
});


http.listen(port, ()=>{
    console.log('express server started');
});