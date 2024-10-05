
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const socketio = require('socket.io');
const History = require('./schema.js');
const http = require('http');

dotenv.config();
 
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'DELETE']
    }
});

const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://cluster1:cluster@cluster0.ogz3jqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('MongoDB connected');
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})
.catch(err => {
    console.error('MongoDB connection error:', err); 
});

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const messagesRouter = require('./routes/messages');
app.use('/history', messagesRouter);
 
io.on('connection', (socket) => { 
    console.log(`Socket ${socket.id} connected`);
    
    socket.on('sendMessage', async (message) => {
        try {
            const history = new History(message);
            await history.save();
            // io.emit('message', message);
        } catch (err) {
            console.error('Error saving message:', err);
        }
    });

    socket.on('disconnect', () => {
        console.log(`Socket ${socket.id} disconnected`);
    });
});











