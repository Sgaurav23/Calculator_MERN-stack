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
    origin: 'https://calculator-1acwvaa0f-gaurav-thorats-projects.vercel.app',
    methods: ['GET', 'POST', 'DELETE']
  }
});

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

app.use(cors({ origin: 'https://calculator-1acwvaa0f-gaurav-thorats-projects.vercel.app' }));
app.use(express.json());

const messagesRouter = require('./routes/messages');
app.use('/history', messagesRouter);

io.on('connection', (socket) => {
  console.log(`Socket ${socket.id} connected`);
  socket.on('sendMessage', async (message) => {
    try {
      const history = new History(message);
      await history.save();
    } catch (err) {
      console.error('Error saving message:', err);
    }
  });
  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
});

module.exports = app;
