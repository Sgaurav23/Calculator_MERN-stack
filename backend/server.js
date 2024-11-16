<<<<<<< HEAD
=======
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const socketio = require('socket.io');
// const History = require('./schema.js');
// const http = require('http');

// dotenv.config();
// const app = express();
// const server = http.createServer(app);

// const io = socketio(server, {
//   cors: {
//     origin: ['https://luminous-resonant-feels.glitch.me', 'http://localhost:5173', 'https://sgaurav23.github.io'],
//     methods: ['GET', 'POST', 'DELETE']
//   },
//   path: '/socket.io'  // Ensure the default path is correctly set
// });


// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(process.env.PORT, () => {
//       console.log(`Server running on port ${process.env.PORT}`);
//     });
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err.message);
//     process.exit(1);  // Exit the process if there's a connection error
//   });

// app.use(cors({ origin: ['http://localhost:5173', 'https://sgaurav23.github.io'] }));
// app.use(express.json());

// const messagesRouter = require('./routes/messages.js');
// app.use('/history', messagesRouter);

// io.on('connection', (socket) => {
//   console.log(`Socket ${socket.id} connected`);
//   socket.on('sendMessage', async (message) => {
//       try {
//           const history = new History(message);
//           await history.save();
//       } catch (err) {
//           console.error('Error saving message:', err);
//       }
//   });
//   socket.on('disconnect', () => {
//       console.log(`Socket ${socket.id} disconnected`);
//   });
// });
 
// module.exports = app;







>>>>>>> origin/master
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

<<<<<<< HEAD
=======

>>>>>>> origin/master
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);  // Exit the process if there's a connection error
  });

<<<<<<< HEAD
app.use(cors({ origin: ['http://localhost:5173', 'https://sgaurav23.github.io', 'https://mern-calculator.netlify.app'] }));
=======
app.use(cors({ origin: ['http://localhost:5173', 'https://sgaurav23.github.io'] }));
>>>>>>> origin/master
app.use(express.json());

const messagesRouter = require('./routes/messages.js');
app.use('/history', messagesRouter);

<<<<<<< HEAD
module.exports = app;
=======
module.exports = app
>>>>>>> origin/master
