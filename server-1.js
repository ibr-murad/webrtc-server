const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!!!'));

app.listen(PORT, () => console.log('Example app listening'))

io.on('connection', socket => {
    console.log('connected to the server');
});
