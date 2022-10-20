const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;


server.listen(PORT, () => {
    console.log('Server Started!')
})

//app.listen(PORT, () => console.log('Example app listening'))

io.on('connection', socket => {
    console.log('connected to the server');
});


app.get('/', (req, res) => res.send('Hello World!!!'));
