const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/auth');
const categoryRoutes = require('./src/routes/category');
const authMiddleware = require('./src/middleware/authMiddleware');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

// Update MongoDB connection options
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(express.json());

// Use the authRoutes middleware
app.use('/auth', authRoutes);

// Protect routes below this middleware with authentication
app.use(authMiddleware);

app.use('/categories', categoryRoutes);

mongoose.connect(DB_CONNECTION_STRING, mongooseOptions)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`MongoDB connection error: ${error}`);
  });
