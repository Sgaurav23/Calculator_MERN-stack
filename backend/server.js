const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

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

app.use(cors({ origin: ['http://localhost:5173', 'https://sgaurav23.github.io', 'https://mern-calculator.netlify.app'] }));
app.use(express.json());

const messagesRouter = require('./routes/messages.js');
app.use('/history', messagesRouter);

module.exports = app;
